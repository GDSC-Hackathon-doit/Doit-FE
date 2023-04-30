import { Avatar, Box, Button, Divider, Flex, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Profile({
  src,
  email,
}: {
  src: string | undefined;
  email: string | undefined;
}) {
  return (
    <Box h="100%">
      <Flex align="center" justify="space-between">
        <Avatar size="sm" src={src} radius="xl" />
        <Text size="sm">{email}</Text>
      </Flex>
      <Divider my={16} />
      <Link to="/my-page" style={{ textDecoration: "none" }}>
        <Button fullWidth variant="light">
          마이페이지 가기
        </Button>
      </Link>
    </Box>
  );
}

export default Profile;
