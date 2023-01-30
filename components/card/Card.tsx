import {
  Card as MantineCard,
  Paper,
  Skeleton,
  // Image,
  Group,
  Badge,
  Text,
  Button,
  Grid,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import { useStyles } from "./card.styles";

export type CardSize = "lg" | "sm";

type Props = {
  cardSize: CardSize;
  imgUrl: string;
  title: string;
};

function Card({ cardSize, imgUrl, title }: Props) {
  const { classes } = useStyles();
  return (
    <MantineCard
      shadow="sm"
      radius="md"
      withBorder
      className={classes.lg}
      w={"100%"}
      h={"100%"}
    >
      <MantineCard.Section component={Link} href={""}>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Norway"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </MantineCard.Section>
    </MantineCard>

    // <>
    //   {!imgUrl ? (
    //     <Skeleton
    //       visible={true}
    //       className={cardSize === "lg" ? classes.lg : classes.sm}
    //     />
    //   ) : (
    //     <MantineCard
    //       className={cardSize === "lg" ? classes.lg : classes.sm}
    //       style={{ position: "relative" }}
    //       component="a"
    //       href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    //       target="_blank"
    //     >
    //       <MantineCard.Section>
    //         <Image
    //           // src={imgUrl}
    //           // fill={true}
    //           alt={title}
    //           // style={{
    //           //   display: "block",
    //           //   objectFit: "cover",
    //           //   objectPosition: "center",
    //           // }}
    //         />
    //       </MantineCard.Section>
    //     </MantineCard>
    //   )}
    // </>
  );
}

export default Card;
