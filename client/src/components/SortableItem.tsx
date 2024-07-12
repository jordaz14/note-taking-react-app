import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

function SortableItem(props: any) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex gap-2">
      <ReactTextareaAutosize
        key={props.id}
        minRows={1}
        maxRows={5}
        rows={5}
        className="bg-white w-full rounded-sm p-2 mb-2 resize-none overflow-hidden invalid:bg-neutral-50 invalid:placeholder-neutral-300 focus:outline-none focus:border-r-2 focus:border-r-black"
        placeholder={`Block ${props.id}`}
        required
        value={inputValue}
        onChange={handleChange}
      />
      <div
        className=" rounded-md text-black font-bold p-2 height-[20px]"
        {...attributes}
        {...listeners}
      >
        ::
      </div>
    </div>
  );
}

export default SortableItem;
