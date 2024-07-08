import { useState } from "react";

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

import threedot from "./assets/threedot.png";

function App() {
  const [visible, isVisible] = useState(false);

  return (
    <>
      <div className="flex font-nunito">
        <LeftSidebar />
        <div id="leftToggle" className="flex flex-col justify-center w-fit">
          <img src={threedot} alt="" width={20} height={20} />
        </div>
        <main className="flex-1 bg-blue-100">
          <div id="prompt" className="bg-yellow-100">
            <p className="">Prompt</p>
          </div>
          <div id="content">Content</div>
        </main>
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
