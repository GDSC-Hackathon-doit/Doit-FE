import { Badge } from "@mantine/core";
import React from "react";

function HardnessBadge({ hardness }: { hardness: number }) {
  if (hardness === 0) {
    return <Badge color="green">난이도 하</Badge>;
  }
  if (hardness === 1) {
    return <Badge color="orange">난이도 중</Badge>;
  }
  return <Badge color="red">난이도 상</Badge>;
}

export default HardnessBadge;
