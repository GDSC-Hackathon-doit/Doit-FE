import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { AuthContext } from "../lib/provider/authprovider";
import { ThumbnailProp } from "../lib/type/thumbnail-prop";
import HardnessBadge from "../components/hardness-badge";
import SourceBadge from "../components/source-badge";
import { IconInbox } from "@tabler/icons-react";
import { CartContext } from "../lib/provider/cartprovider";

function MyPage() {
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("no cart context");
  }
  const cartContents = cartContext.cartItems
    .filter((item) => item.like)
    .map((item, index) => {
      return (
        <Box
          key={index}
          component="a"
          href={item.sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            textDecoration: "none",
            color: "unset",
            "&:hover": {
              textDecoration: "underline",
              textUnderlinePosition: "under",
            },
          }}
        >
          <Group position="apart">
            <Group>
              <Text>{index + 1}.</Text>
              <Text>{item.title}</Text>
            </Group>
            <Group>
              <HardnessBadge hardness={item.hardness} />
              <SourceBadge source={item.source} />
            </Group>
          </Group>
        </Box>
      );
    });

  return (
    <Layout>
      <Box p={40} h="100%" mb={60}>
        {authContext?.authenticated && (
          <Box mb={60}>
            <Text size={24} weight={600}>
              내 정보
            </Text>
            <Group my={20} px={8}>
              <Avatar size="md" src={authContext?.data.picture} />
              <Text>{authContext?.data?.email}</Text>
            </Group>
          </Box>
        )}
        <Box>
          <Group align="center">
            <IconInbox size="1.8rem" />
            <Text size={24} weight={600}>
              내가 찜한 글들 👇
            </Text>
          </Group>
          <Stack my={20}>{cartContents}</Stack>
        </Box>
      </Box>
    </Layout>
  );
}

export default MyPage;
