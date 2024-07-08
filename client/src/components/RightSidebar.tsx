function RightSidebar() {
  return (
    <section
      id="sidebar-right"
      className="bg-neutral-50 w-[10%] h-screen p-2 hidden"
    >
      <h2 className="font-bold">Blocks</h2>
      <form>
        <label>
          <textarea
            className="w-full drop-shadow-sm h-20 p-2"
            placeholder="Enter text here."
          />
        </label>
        <button className="bg-yellow-50 hover:bg-yellow-100 w-full font-bold">
          Create block
        </button>
      </form>
      <h3 className="font-bold">Sort By</h3>
    </section>
  );
}

export default RightSidebar;
