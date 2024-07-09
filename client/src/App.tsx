import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import WritingBlock from "./components/WritingBlock";
import ScratchSpace from "./components/ScratchSpace";

import threedot from "./assets/threedot.png";
import { useState } from "react";

function App() {
  const [list, setList] = useState<Number[]>([]);

  const addToList = () => {
    let tempArr: any[] = list;
    tempArr.push(0);
    setList(tempArr);
  };

  return (
    <>
      <div>WrtBlk</div>
      <div className="flex font-nunito">
        <div
          id="barToggle"
          className="flex flex-col justify-center w-fit hidden"
        >
          <img src={threedot} alt="" width={20} height={20} />
        </div>
        <main id="canvas" className="flex w-screen h-screen p-4 gap-4">
          <ScratchSpace />
          <div className="flex-[2] bg-blue-100 flex flex-col items-center pt-2 pb-2 gap-2">
            <WritingBlock />
            <WritingBlock />
            <div className="flex gap-2">
              <button className="bg-white p-1 font-bold">-</button>
              <button className="bg-white p-1 font-bold">+</button>
            </div>
          </div>
          <ScratchSpace />
        </main>
        <div
          id="barToggle"
          className="flex flex-col justify-center w-fit hidden"
        >
          <img src={threedot} alt="" width={20} height={20} />
        </div>
      </div>
    </>
  );
}

export default App;
