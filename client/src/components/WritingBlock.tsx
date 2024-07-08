import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function WritingBlock() {
  const [visible, setVisible] = useState("flex");

  return (
    <div className={visible + ` w-full max-w-[450px] flex gap-2`}>
      <ReactTextareaAutosize
        minRows={5}
        className="bg-white w-full rounded-md drop-shadow-md hover:drop-shadow-2xl p-2 resize-none"
      />
      <div id="action-column" className="flex flex-col gap-2 justify-between">
        <div
          onClick={() => setVisible("hidden")}
          className="bg-red-200 hover:bg-red-300 p-1 rounded-md font-bold"
        >
          x
        </div>
        <div className="bg-green-200 hover:bg-green-300 p-1 rounded-md font-bold">
          +
        </div>
      </div>
    </div>
  );
}

export default WritingBlock;
