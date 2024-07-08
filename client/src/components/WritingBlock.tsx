import ReactTextareaAutosize from "react-textarea-autosize";

function WritingBlock() {
  return (
    <>
      <ReactTextareaAutosize className="bg-white w-full max-w-[450px] h-[200px] rounded-md drop-shadow-md hover:drop-shadow-2xl p-2 mb-4 resize-none" />
    </>
  );
}

export default WritingBlock;
