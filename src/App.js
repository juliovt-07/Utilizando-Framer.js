import React from "react";
import "./styles.css";
import { MyStack } from "./StackFramer";
import { MyRotate } from "./RotateFramer";

export default function App() {
  return (
    <div className="App">
      <MyStack />
      <MyRotate />
      <MyRotate />
    </div>
  );
}
