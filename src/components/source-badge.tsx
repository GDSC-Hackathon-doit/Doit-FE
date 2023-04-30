import { Badge } from "@mantine/core";
import React from "react";

function SourceBadge({ source }: { source: string }) {
  switch (source) {
    case "Toss 금융 블로그":
      return <Badge>Toss 금융블로그</Badge>;
    case "카카오뱅크 블로그":
      return <Badge color="yellow">카카오뱅크 블로그</Badge>;
    case "한국은행 블로그":
      return <Badge color="orange">한국은행 블로그</Badge>;
    default:
      return <Badge color="gray">출처 불분명</Badge>;
  }
}

export default SourceBadge;
