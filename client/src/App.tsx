function App() {
  return (
    <>
      <div className="flex font-nunito">
        <nav
          id="sidebar-left"
          className="bg-neutral-50 w-[10%] h-screen p-2 flex flex-col"
        >
          <h2 className="font-bold">Journals</h2>
          <ul className="space-y-2 overflow-auto flex-1">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </nav>
        <main className="flex-1">
          <div id="prompt" className="bg-yellow-100">
            <p className="">Prompt</p>
          </div>
          <div id="content">Content</div>
        </main>
        <section
          id="sidebar-right"
          className="bg-neutral-50 w-[10%] h-screen p-2"
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
      </div>
    </>
  );
}

export default App;
