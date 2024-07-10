import ScratchSpace from "./components/ScratchSpace";

import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function App() {
  const [list, setList] = useState<Number[]>([0]);

  const addToList = () => {
    if (list.length < 10) {
      setList([...list, 0]);
    }
  };

  const removeFromList = () => {
    if (list.length > 1) {
      setList([...list.slice(0, -1)]);
    }
  };

  return (
    <>
      <div className="flex font-nunito">
        <main id="canvas" className="flex w-screen h-screen p-4 gap-4">
          <ScratchSpace />
          <div className="flex-[2] flex flex-col items-center pt-2 pb-2 gap-2 overflow-scroll">
            <form className="w-full flex flex-col">
              <div className="flex mb-2 gap-4">
                <input
                  placeholder="Enter Title"
                  className="bg-white w-full rounded-sm border-2 p-2 resize-none"
                ></input>
                <button className="bg-blue-100 rounded-sm p-2">Submit</button>
              </div>
              {list.map((_, index: any) => (
                <ReactTextareaAutosize
                  key={index}
                  minRows={1}
                  maxRows={5}
                  className="bg-white w-full rounded-sm border-2 p-2 mb-2 resize-none overflow-hidden"
                  placeholder="Enter Text"
                />
              ))}
            </form>
            <div className="flex gap-2">
              <button
                onClick={removeFromList}
                className="bg-white p-1 font-bold"
              >
                -
              </button>
              <button onClick={addToList} className="bg-white p-1 font-bold">
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
