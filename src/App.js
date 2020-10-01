import React from "react";
import "./styles.css";
import { Frame } from "framer";
import { MyStack } from "./StackFramer";
import { MyRotate } from "./RotateFramer";
import { MyAnimation } from "./AnimationFramer";

export default function App() {
  return (
    <Frame size={500} className="App">
      <MyStack />
      <MyRotate />
      <MyAnimation />
    </Frame>
  );
}
