import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./components/SortableItem";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

function App() {
  const [blocks, setBlocks] = useState<any[]>([1]);

  const addToBlocks = () => {
    if (blocks.length < 10) {
      setBlocks([...blocks, blocks.length + 1]);
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
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <div className="flex font-nunito">
        <main
          id="canvas"
          className="flex w-screen h-screen p-4 gap-4 justify-center"
        >
          <div
            id="compose"
            className=" flex flex-col items-center gap-2 overflow-y-hidden
             w-[500px]"
          >
            <div className="bg-neutral-500 font-bold rounded-md text-white p-2 w-full">
              Input Prompt Here
            </div>
            <form className="w-full flex flex-col bg-neutral-100 rounded-md p-3">
              <div className="flex mb-4 gap-4">
                <input
                  placeholder="Enter Title"
                  className="bg-white w-full rounded-sm border-2 p-2 resize-none font-bold uppercase"
                ></input>
                <button className="bg-neutral-400 hover:bg-neutral-500 font-bold text-white rounded-lg p-2 shadow-md">
                  Submit
                </button>
              </div>
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
                    <SortableItem key={block} id={block} />
                  ))}
                </SortableContext>
              </DndContext>
            </form>

            <div className="flex gap-2">
              <button
                onClick={removeFromBlocks}
                className="bg-neutral-400 hover:bg-neutral-500 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
              >
                -
              </button>
              <button
                onClick={addToBlocks}
                className="bg-neutral-400 hover:bg-neutral-500 p-1 w-[30px] font-bold text-white rounded-md shadow-md"
              >
                +
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
