function App() {
  return (
    <>
      <div className="flex font-nunito">
        <nav id="sidebar-left" className="bg-neutral-50 w-[10%] h-screen font">
          Left Sidebar
        </nav>
        <main className="flex-1">
          <div id="prompt" className="bg-yellow-100">
            <p className="">Prompt</p>
          </div>
          <div id="content">Content</div>
        </main>
        <section id="sidebar-right" className="bg-neutral-50 w-[10%] h-screen">
          Right Sidebar
        </section>
      </div>
    </>
  );
}

export default App;
