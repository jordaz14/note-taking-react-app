import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./components/SortableItem";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { motion } from "framer-motion";

function App() {
  const [blocks, setBlocks] = useState<any[]>([{ id: 1, value: "" }]);
  const [notify, setNotify] = useState("");

  const handleInputValueChange = (value: any, id: any) => {
    const updatedBlocks = blocks.map((block) => {
      if (id === block.id) {
        return { ...block, value: value };
      }
      return block;
    });

    setBlocks(updatedBlocks);
  };

  const onKeyDown = (shiftPlus: boolean) => {
    if (shiftPlus === true) {
      setNotify("great success!");
      addToBlocks();
    } else {
      setNotify("key pressed");
    }
  };

  const addToBlocks = () => {
    const emptyBlocks = blocks.filter((block) => block.value === "");

    if (emptyBlocks.length === 0) {
      const maxId = blocks.reduce((max, block) => {
        return block.id > max ? block.id : max;
      }, 0);

      if (blocks.length < 10) {
        setBlocks([...blocks, { id: maxId + 1, value: "" }]);
      }
    } else {
      setNotify("Block missing input.");
      setTimeout(() => setNotify(""), 1000);
    }
  };

  const removeFromBlocks = () => {
    if (blocks.length > 1) {
      setBlocks([...blocks.slice(0, -1)]);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setBlocks((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form Submitted!", blocks);
  };

  return (
    <>
      <div className="flex font-Lato">
        <main
          id="canvas"
          className="flex w-screen h-screen p-2 gap-4 justify-center"
        >
          <div
            id="compose"
            className=" flex flex-col items-center gap-2 overflow-y-hidden
             w-[500px]"
          >
            <div
              id="prompt-generator"
              className="bg-neutral-500 font-bold rounded-md text-white w-full p-3 hidden"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <form
              className="w-full flex-1 flex flex-col bg-gray-200 rounded-md shadow-sm p-3"
              onSubmit={handleFormSubmit}
            >
              <div className="flex mb-4 gap-4">
                <input
                  placeholder="Enter Title"
                  className="bg-white w-full rounded-md  p-2 resize-none font-bold uppercase invalid:bg-neutral-50 invalid:placeholder-neutral-300 focus:outline-none"
                  required
                  maxLength={30}
                ></input>
                <motion.button
                  className="bg-gray-400 hover:bg-gray-500 font-bold text-white rounded-lg p-2 shadow-md"
                  whileTap={{ scale: 0.9 }}
                >
                  Submit
                </motion.button>
              </div>
              <div className="flex-[1_1_1px] overflow-y-scroll">
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis]}
                >
                  <SortableContext
                    items={blocks}
                    strategy={verticalListSortingStrategy}
                  >
                    {blocks.map((block) => (
                      <SortableItem
                        key={block.id}
                        id={block.id}
                        onInputValueChange={handleInputValueChange}
                        onKeyDownInput={onKeyDown}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
            </form>

            <div className="flex gap-2 w-full items-center">
              <p className="flex-1 font-bold">{notify}</p>
              <motion.button
                onClick={removeFromBlocks}
                className="bg-gray-400 hover:bg-gray-500 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
                whileTap={{ scale: 0.9 }}
              >
                -
              </motion.button>
              <motion.button
                onClick={addToBlocks}
                className="bg-gray-400 hover:bg-gray-500 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
