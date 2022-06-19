import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, TextPath } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <TextPath
          x={100}
          y={50}
          fill={"#333"}
          fontSize={16}
          fontFamily={"Arial"}
          text={`All the world's a stage, and all the men and women merely players.`}
          data={"M10,10 C0,0 10,150 100,100 S300,150 5.0.300"}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
