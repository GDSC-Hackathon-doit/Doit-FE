import React from "react";
import SingleCard from "./single-card";
import { SimpleGrid } from "@mantine/core";
import { ThumbnailProp } from "../lib/type/thumbnail-prop";
import { useLocation } from "react-router-dom";

function Cards({ data }: { data: ThumbnailProp[] }) {
  const { search } = useLocation();
  const cards = data
    .filter((card) => {
      if (search === "") {
        return true;
      }
      return search.split("=").at(1) === card.hardness.toString();
    })
    .map((card, index) => {
      return <SingleCard key={index} data={card} />;
    });
  return (
    <SimpleGrid
      cols={3}
      p={24}
      spacing="lg"
      breakpoints={[
        { maxWidth: 1400, cols: 3, spacing: "md" },
        { maxWidth: 1200, cols: 2, spacing: "sm" },
        { maxWidth: 800, cols: 1, spacing: "sm" },
      ]}
    >
      {cards}
    </SimpleGrid>
  );
}

export default Cards;
