import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ReactTextareaAutosize from "react-textarea-autosize";

function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex gap-2">
      <ReactTextareaAutosize
        key={props.id}
        minRows={1}
        maxRows={5}
        className="bg-white w-full rounded-sm border-2 p-2 mb-2 resize-none overflow-hidden"
        placeholder={`Block ${props.id}`}
      />
      <div
        className=" rounded-md text-black font-bold p-2 height-[20px]"
        {...attributes}
        {...listeners}
      >
        ::
      </div>
    </div>
  );
}

export default SortableItem;
