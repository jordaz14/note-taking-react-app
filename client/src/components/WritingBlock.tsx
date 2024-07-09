import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

function WritingBlock() {
  return (
    <div className={`w-full max-w-[450px] flex gap-2`}>
      <ReactTextareaAutosize
        minRows={5}
        className="bg-white w-full rounded-md drop-shadow-md hover:drop-shadow-2xl p-2 resize-none"
      />
    </div>
  );
}

export default WritingBlock;
