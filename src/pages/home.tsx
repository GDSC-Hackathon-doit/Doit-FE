import { Box, Button, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

function Home() {
  const { height } = useViewportSize();
  return (
    <>
      <Box h={height} p={80} bg="orange.0">
        <Paper w="100%" h="100%" radius="xl" shadow="sm">
          <Stack align="center" justify="center" h="100%" spacing={60}>
            <Stack align="center" justify="center">
              <Text component="h1" size={72} my={0}>
                Invest ED
              </Text>
              <Text size={28}>
                "더 나은 미래를 위해 자산을 올바르게 관리하고 선택하세요"
              </Text>
            </Stack>
            <Button
              component={Link}
              to="/article"
              color="red.6"
              radius="md"
              size="lg"
            >
              👉 아티클 보러가기
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Home;
