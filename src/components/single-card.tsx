import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  Stack,
  Box,
  ActionIcon,
} from "@mantine/core";
import { ThumbnailProp } from "../lib/type/thumbnail-prop";
import { useHover } from "@mantine/hooks";
import { IconCircleCheck, IconCirclePlus } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/provider/cartprovider";
import { testData } from "../lib/const/data";
import SourceBadge from "./source-badge";

export default function SingleCard({ data }: { data: ThumbnailProp }) {
  const date = new Date(data.publishedTime);
  const cartContext = useContext(CartContext);
  const { hovered, ref } = useHover();
  const [iconDisabled, setIconDisabled] = useState(false);
  const addToCart = async () => {
    if (!cartContext) {
      throw new Error("no cart context");
    }
    let index: number;
    await testData.forEach((item, idx) => {
      if (item.title === data.title) {
        index = idx;
      }
    });
    await cartContext.setCartItems((prevState) => {
      const inboxData = { ...data, like: 1 };
      return [
        ...prevState.slice(0, index),
        inboxData,
        ...prevState.slice(index + 1),
      ];
    });
    setIconDisabled(true);
  };
  console.log(cartContext);
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      h={400}
      ref={ref}
      shadow={hovered ? "xl" : undefined}
    >
      <Card.Section>
        <Image
          src={data.imgUrl}
          height={200}
          alt={data.imgAlt}
          fit="cover"
          styles={{
            image: {
              "&:hover": "scale(1.5)",
            },
          }}
        />
      </Card.Section>
      <Card.Section
        sx={{
          height: 160,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box p={20} h="100%">
          <Box
            component="a"
            href={data.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                textDecoration: "underline",
                textUnderlinePosition: "under",
              },
            }}
          >
            <Stack spacing={0} h="100%">
              <Text weight={500} size="lg">
                {data.title}
              </Text>
              <Text mt="xs" color="dimmed" size="sm">
                {data.subTitle}
              </Text>
            </Stack>
          </Box>
          <Group position="apart" sx={{ alignItems: "center" }}>
            <Group>
              <Text mt="sm" color="dimmed" size="sm" h={32}>
                {date.toLocaleDateString()}
              </Text>
              <SourceBadge source={data.source} />
            </Group>
            <ActionIcon
              variant="transparent"
              onClick={addToCart}
              disabled={!!data.like}
            >
              {!data.like ? (
                <IconCirclePlus size="1.45rem" />
              ) : (
                <IconCircleCheck size="1.45rem" color="#51CF66" />
              )}
            </ActionIcon>
          </Group>
        </Box>
      </Card.Section>
    </Card>
  );
}
