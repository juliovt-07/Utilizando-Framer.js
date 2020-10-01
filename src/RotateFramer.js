import * as React from "react";
import { Frame } from "framer";

export function MyRotate() {
  return (
    <Frame
      size={50}
      radius={10}
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        loop: Infinity,
        ease: "linear"
      }}
    />
  );
}
