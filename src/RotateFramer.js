import * as React from "react";
import { Frame } from "framer";

export function MyRotate() {
  return (
    <Frame
      size={50}
      radius={10}
      animate={{ background: ["#F05", "#85F", "#0CF"], rotate: 360 }}
      transition={{
        duration: 2,
        yoyo: Infinity,
        ease: "linear"
      }}
    />
  );
}
