"use client";

import { Card, Grid, Text, Col, Paper, Title, Group } from "@mantine/core";
import Image from "next/image";
import { ProfileButton } from "../profileButton/ProfileButton";

import Link from "next/link";

import { useStyles } from "./video-card.styles";
import { FetchedVideos } from "@/lib/videos";

type VideoCardProps = {
  size: "sm" | "md" | "lg";
  video: FetchedVideos;
};

function VideoCard({ video, size }: VideoCardProps) {
  const { classes } = useStyles();
  const { imgUrl, title, channelTitle, description } = video;

  const classMap = {
    sm: classes.smCard,
    md: classes.mdCard,
    lg: classes.lgCard,
  };

  return (
    <div>
      <Card
        className={classMap[size]}
        mb={5}
        shadow="xl"
        radius="md"
        style={{ overflow: "hidden" }}
      >
        <Card.Section component={Link} href={""}>
          <Image className={classes.img} src={imgUrl} alt={title} fill />
        </Card.Section>
      </Card>

      <Grid pl={5}>
        {size === "sm" ? (
          <Col span={"content"}>
            <Link href={""}>
              <ProfileButton />
            </Link>
          </Col>
        ) : null}
        <Col span={"auto"}>
          <Paper>
            <Title
              style={{ WebkitLineClamp: 2, width: "90%" }}
              size={"xl"}
              pb={5}
            >
              {title}
            </Title>

            {size === "sm" ? (
              <>
                <Text>{channelTitle}</Text>

                <Group spacing={"xs"}>
                  <Text size="sm" color="dimmed">
                    1.5M Views
                  </Text>
                  .
                  <Text size="sm" color="dimmed">
                    2 days ago
                  </Text>
                </Group>
              </>
            ) : (
              <Text size="sm" color="dimmed">
                1.5M Views
              </Text>
            )}
          </Paper>
        </Col>
      </Grid>
    </div>
  );
}

export default VideoCard;
