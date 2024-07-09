import ReactTextareaAutosize from "react-textarea-autosize";

function WritingBlock() {
  return (
    <div className={`w-full`}>
      <ReactTextareaAutosize
        minRows={1}
        className="bg-white w-full rounded-sm border border-2 p-2 resize-none"
        placeholder="Enter Text"
      />
    </div>
  );
}

export default WritingBlock;
