import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Animation from "./components/Animation";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <MainSection />
      {/* <Clock /> */}
      <div style={{ height: 800, width: 10, backgroundColor: "red" }}></div>
    </div>
  );
}

export default App;
