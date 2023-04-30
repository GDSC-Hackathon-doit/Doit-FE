import { Box } from "@mantine/core";
import React from "react";

function Post() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.orange[0],
        textAlign: "center",
        padding: theme.spacing.xl,
      })}
    >
      <h1>Post</h1>
    </Box>
  );
}

export default Post;
