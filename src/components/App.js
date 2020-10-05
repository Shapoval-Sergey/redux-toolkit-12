import React from "react";
import Timer from "./Timer";
import StepSelector from "./StepSelector";

const stepOptoins = [5, 10, 15, 20, 25];

const App = () => (
  <div>
    <Timer />
    <StepSelector options={stepOptoins} />
  </div>
);

export default App;
