import ScratchSpace from "./components/ScratchSpace";

import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./components/SortableItem";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

function App() {
  const [blocks, setBlocks] = useState<any[]>([0]);

  const addToBlocks = () => {
    if (blocks.length < 10) {
      setBlocks([...blocks, blocks.length]);
    }
    console.log(blocks);
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
        <main id="canvas" className="flex w-screen h-screen p-4 gap-4">
          <ScratchSpace />
          <div className="bg-blue-50 flex-[2] flex flex-col items-center pt-2 pb-2 gap-2 overflow-y-hidden">
            <form className="w-full flex flex-col">
              <div className="flex mb-2 gap-4">
                <input
                  placeholder="Enter Title"
                  className="bg-white w-full rounded-sm border-2 p-2 resize-none"
                ></input>
                <button className="bg-blue-100 rounded-sm p-2">Submit</button>
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
                className="bg-white p-1 font-bold"
              >
                -
              </button>
              <button onClick={addToBlocks} className="bg-white p-1 font-bold">
                +
              </button>
            </div>
          </div>
          <ScratchSpace />
        </main>
      </div>
    </>
  );
}

export default App;
