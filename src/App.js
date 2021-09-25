import MainSection from "./components/MainSection";
import Timeline from "./components/Timeline";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "./styles/backGroundAnimation.css";
import Home from "./components/Home";
import {
  ClipLoader,
  CircleLoader,
  RingLoader,
  ScaleLoader,
  HashLoader,
} from "react-spinners";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader color={"blue"} loading={loading} size={150} />
        </div>
      ) : (
        <Home />
        
      )}
    </div>
  );
}

export default App;
