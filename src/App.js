import React from "react";
import "./styles.css";
import { MyStack } from "./StackFramer";
import { MyRotate } from "./RotateFramer";
import { MyAnimation } from "./AnimationFramer";

export default function App() {
  return (
    <div className="App">
      <MyStack />
      <MyRotate />
      <MyAnimation />
    </div>
  );
}
