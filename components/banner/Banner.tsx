"use client";

import { Button, Card, Text } from "@mantine/core";
import { useStyles } from "./banner.styles";

interface BannerProps {
  title: string;
  subTitle: string;
  imgUrl: string;
}
export default function Banner({ title, subTitle, imgUrl }: BannerProps) {
  const { classes, cx, theme } = useStyles();

  function handleOnPlay() {
    console.log("Play");
  }

  return (
    <Card
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={cx(classes.card)}
    >
      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {subTitle}
        </Text>

        <Button
          className={classes.action}
          // onClick={handleOnPlay}
          variant="white"
          color="dark"
          component="a"
          size="xs"
        >
          Play
        </Button>
      </div>
    </Card>
  );
}
