"use client";

import {
  AspectRatio,
  Card,
  Flex,
  Title,
  Text,
  Group,
  Avatar,
} from "@mantine/core";
import Image from "next/image";
import { ProfileButton } from "../profileButton/ProfileButton";

import Link from "next/link";

import { useStyles } from "./video-card.styles";
import type { FetchedVideos } from "@/lib/videos";

export type CardSize = "sm" | "md" | "lg";

type VideoCardProps = {
  size: CardSize;
  video: FetchedVideos;
};

function VideoCard({ video, size }: VideoCardProps) {
  const { classes } = useStyles();
  const { imgUrl, title, channelTitle } = video;

  const classMap = {
    sm: classes.smCard,
    md: classes.mdCard,
    lg: classes.lgCard,
  };

  return (
    <div style={{ padding: 3 }}>
      <Card className={classMap[size]} mb={7} shadow="xl" radius="md">
        <Card.Section component={Link} href={""}>
          {size === "sm" ? (
            <AspectRatio ratio={16 / 9}>
              <Image className={classes.img} src={imgUrl} alt={title} fill />
            </AspectRatio>
          ) : (
            <Image className={classes.img} src={imgUrl} alt={title} fill />
          )}
        </Card.Section>
      </Card>

      <Flex className={classes[`${size}Container`]}>
        {size === "sm" ? <Avatar src={""} alt={""} radius="xl" /> : null}

        <Flex direction={"column"} className={classes.body}>
          <Title size={"h6"} className={classes.title}>
            {title}
          </Title>

          <Text>{channelTitle}</Text>

          <Group spacing={"xs"}>
            {size === "sm" ? (
              <>
                <Text size="sm" color="dimmed">
                  1.5M Views
                </Text>
                .
                <Text size="sm" color="dimmed">
                  2 days ago
                </Text>
              </>
            ) : (
              <Text size="sm" color="dimmed">
                1.5M Views
              </Text>
            )}
          </Group>
        </Flex>
      </Flex>
    </div>
  );
}

export default VideoCard;
