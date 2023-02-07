import {
  Card as MantineCard,
  Text,
  Stack,
  Grid,
  AspectRatio,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import { useStyles } from "./card.styles";
import { ProfileButton } from "../profileButton/ProfileButton";

export type CardSize = "lg" | "sm";

type Props = {
  cardSize: CardSize;
  imgUrl: string;
  title: string;
};

function Card({ cardSize, imgUrl, title }: Props) {
  const { classes } = useStyles();
  return (
    <Stack>
      <MantineCard
        shadow="sm"
        radius="md"
        withBorder
        className={cardSize === "lg" ? classes.lg : classes.sm}
        w={"100%"}
        h={"100%"}
      >
        <MantineCard.Section component={Link} href={""}>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt={title}
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </MantineCard.Section>
      </MantineCard>

      <Grid>
        <Grid.Col span={3} style={{ paddingLeft: "5%" }}>
          <ProfileButton />
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack>
            <Text>Title of the video that may be long</Text>
            <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
              1.5M Views
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default Card;
