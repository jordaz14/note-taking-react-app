import { useState } from "react";

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import WritingBlock from "./components/WritingBlock";

import threedot from "./assets/threedot.png";

function App() {
  const [visible, isVisible] = useState(false);

  return (
    <>
      <div className="flex font-nunito">
        <LeftSidebar />
        <div id="barToggle" className="flex flex-col justify-center w-fit">
          <img src={threedot} alt="" width={20} height={20} />
        </div>
        <main className="flex-1 bg-blue-100 flex flex-col items-center pt-2 pb-2">
          <WritingBlock />
          <WritingBlock />
          <WritingBlock />
        </main>
        <div id="barToggle" className="flex flex-col justify-center w-fit">
          <img src={threedot} alt="" width={20} height={20} />
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
