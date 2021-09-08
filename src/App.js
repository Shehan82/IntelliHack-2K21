import logo from "./logo.svg";
// import "./App.css";
import Clock from "./components/Clock";
import Animation from "./components/Animation";
import MainSection from "./components/MainSection";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      {/* <MainSection /> */}
      {/* <Clock /> */}
      <Animation />

      <div>
        <Timeline />
      </div>
    </div>
  );
}

export default App;
