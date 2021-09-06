import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Animation from "./components/Animation";

function App() {
  return (
    <div className="App">
      <Animation />
      {/* <Clock /> */}
      <div style={{ height: 800 }}></div>
    </div>
  );
}

export default App;
