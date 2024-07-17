import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ReactTextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function SortableItem(props: any) {
  const [keys, setKeys] = useState<string[]>([]);
  const [keyPressed, setKeyPressed] = useState(null);
  const [text, setText] = useState("");

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const handleInputValueChange = (e: any) => {
    const inputValue = e.target.value;
    const capitalizedInputValue = autoCapitalizeSentences(inputValue);
    limitTextArea(capitalizedInputValue);
    props.onInputValueChange(e.target.value, props.id);
  };

  const autoCapitalizeSentences = (inputText: string) => {
    return inputText.replace(
      /(^\w{1}|\.\s+\w{1}|\!\s+\w{1}|\?\s+\w{1})/g,
      (match) => match.toUpperCase()
    );
  };

  const limitTextArea = (inputText: string) => {
    const lines = inputText.split("\n");
    if (lines.length <= 5) {
      setText(inputText);
    } else {
      setText(lines.slice(0, 5).join("\n"));
    }
  };

  const handleKeyDown = (e: any) => {
    if (!keyPressed) {
      setKeyPressed(e.key);
      setKeys([...keys, e.key]);
    }
  };

  const handleKeyUp = () => {
    setKeyPressed(null);
  };

  useEffect(() => {
    console.log(keys);
    const [key1, key2] = keys;
    if (key1 === "Shift" && key2 === "+") {
      props.onKeyDownInput(true);
    }
    if (keys.length === 2) {
      setKeys([]);
    }
  }, [keys]);

  return (
    <div ref={setNodeRef} style={style} className="flex gap-2">
      <ReactTextareaAutosize
        value={text}
        key={props.id}
        minRows={1}
        maxRows={5}
        maxLength={250}
        className="bg-white w-full rounded-md p-2 mb-2 resize-none overflow-hidden invalid:bg-neutral-50 invalid:placeholder-neutral-300 focus:outline-none"
        placeholder={`Block ${props.id}`}
        required
        onChange={handleInputValueChange}
        autoCapitalize="sentences"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      <motion.div
        className=" rounded-md text-black font-bold p-2 height-[20px]"
        {...attributes}
        {...listeners}
        whileTap={{ scale: 0.7 }}
      >
        ::
      </motion.div>
    </div>
  );
}

export default SortableItem;
