import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <>
      <div className="flex font-nunito">
        <LeftSidebar />
        <div id="leftToggle" className="bg-blue-100">
          Left Toggle
        </div>
        <main className="flex-1">
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
