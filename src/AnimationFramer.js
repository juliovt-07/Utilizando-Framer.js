import * as React from "react";
import { Frame, useCycle } from "framer";

export function MyAnimation() {
  const [animate, cycle] = useCycle(
    { scale: 1.5, rotate: 0 },
    { scale: 1.0, rotate: 90 }
  );

  return <Frame animate={animate} onTap={() => cycle()} />;
}
