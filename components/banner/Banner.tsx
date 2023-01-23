"use client";
import {
  Button,
  Overlay,
  Text,
  Title,
  BackgroundImage,
  Box,
} from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";

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
    <div className={classes.container}>
      <BackgroundImage src={imgUrl} className={classes.image}>
        <Overlay
          gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%)`}
          opacity={0.55}
          zIndex={0}
        />

        <Box className={classes.content}>
          <div className={classes.leftContent}>
            <Title className={classes.title}>{title}</Title>
            <Text className={classes.subTitle}>{subTitle}</Text>
            <div className={classes.actions}>
              <Button
                leftIcon={<IconPlayerPlay fill="100%" size={17} />}
                className={classes.playButton}
                variant={"white"}
                styles={{ leftIcon: { color: "black" } }}
                onClick={handleOnPlay}
              >
                <Text className={classes.playButtonText} color="dark">
                  Play
                </Text>
              </Button>
            </div>
          </div>
        </Box>
      </BackgroundImage>
    </div>
  );
}
