import * as React from "react";
import { Frame, Stack } from "framer";

export function MyStack() {
  return (
    <Stack size={150} gap={10} direction={"horizontal"}>
      <Frame size={40} background={"#4444ff"} radius={40} />
      <Frame size={40} background={"#4400ff"} radius={40} />
      <Frame size={40} background={"#0000ff"} radius={40} />
    </Stack>
  );
}
