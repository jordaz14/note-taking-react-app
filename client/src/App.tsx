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
  const [textCount, setTextCount] = useState({
    blocksText: 9,
    charactersText: 250,
  });

  const handleInputValueChange = (value: any, id: any) => {
    const updatedBlocks = blocks.map((block) => {
      if (id === block.id) {
        setTextCount({ ...textCount, charactersText: 250 - value.length });
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
    //Find all blocks with an empty input value
    const emptyBlocks = blocks.filter((block) => block.value === "");

    //Checks if all blocks are populated with a value
    if (emptyBlocks.length === 0) {
      //Find max id of all blocks in array; every new block increments off of maxId
      const maxId = blocks.reduce((max, block) => {
        return block.id > max ? block.id : max;
      }, 0);

      //Checks if there are less than 10 blocks in blocks array
      if (blocks.length < 10) {
        setBlocks([...blocks, { id: maxId + 1, value: "" }]);

        ////Update count tracker for remaining blocks available
        setTextCount({ ...textCount, blocksText: 9 - blocks.length });
      }
    }
    //Notifies user if a block remains unpopulated
    else {
      setNotify("Block missing input.");
      setTimeout(() => setNotify(""), 1000);
    }
  };

  const removeFromBlocks = () => {
    //Check if at least one block is visible
    if (blocks.length > 1) {
      //Remove last block in array
      setBlocks([...blocks.slice(0, -1)]);

      //Update count tracker for remaining blocks available
      setTextCount({ ...textCount, blocksText: 9 - blocks.length + 2 });
    }
  };

  const handleDragEnd = (e: any) => {
    const { active, over } = e;

    //Check that the selected item is hovering over a different item in the blocks array
    if (active.id !== over.id) {
      setBlocks((items) => {
        //Find the index of both the selected item and that hovered over item
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        //Switch index position of two elements
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
              className="w-full flex-1 flex flex-col bg-gray-300 rounded-md shadow-md p-3 border-[1px] border-gray-500"
              onSubmit={handleFormSubmit}
            >
              <div className="flex mb-4 gap-4">
                <input
                  placeholder="Enter Title"
                  className="bg-white w-full rounded-md  p-2 resize-none font-bold uppercase invalid:bg-gray-100 invalid:placeholder-gray-300 focus:outline-none"
                  required
                  maxLength={30}
                ></input>
                <motion.button
                  className="bg-gray-500 hover:bg-gray-600 font-bold text-white rounded-lg p-2 shadow-md"
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
              <p className="flex-1 font-bold text-xs pl-2 text-gray-500">
                {textCount.blocksText} Blocks / {textCount.charactersText}{" "}
                Characters Remaining
              </p>
              <motion.button
                onClick={removeFromBlocks}
                className="bg-gray-500 hover:bg-gray-600 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
                whileTap={{ scale: 0.9 }}
              >
                -
              </motion.button>
              <motion.button
                onClick={addToBlocks}
                className="bg-gray-500 hover:bg-gray-600 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
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
