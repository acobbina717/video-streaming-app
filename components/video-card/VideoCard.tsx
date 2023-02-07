"use client";

import { Container } from "@mantine/core";
import Card, { CardSize } from "../card/Card";
import DetailsCard from "../details-card/DetailsCard";
import { useStyles } from "./video-card.styles";

type VideoCardProps = {
  imgUrl: string;
  title: string;
  size?: CardSize;
};

function VideoCard({ imgUrl, title, size = "sm" }: VideoCardProps) {
  const { classes, theme } = useStyles();

  const classMap = {
    lg: classes.lgCard,
    sm: classes.smCard,
  };

  return (
    <div>
      <Card cardSize={size} imgUrl={imgUrl} title={title} />
      {/* <DetailsCard title={title} cardSize={size} imgUrl={imgUrl} /> */}
    </div>
  );
}

export default VideoCard;
