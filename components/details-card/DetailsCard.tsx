import {
  Card as MantineCard,
  Flex,
  Paper,
  Skeleton,
  Text,
} from "@mantine/core";
import { Fragment } from "react";
import { CardSize } from "../card/Card";

import { ProfileButton } from "../profileButton/ProfileButton";

type Props = {
  cardSize: CardSize;
  imgUrl: string;
  title: string;
};

function DetailsCard({ cardSize, imgUrl, title }: Props) {
  return (
    <></>

    // <Paper w={cardSize === "lg" ? 250 : 340}>
    //   <ProfileButton
    //     image={imgUrl}
    //     size={45}
    //     style={{ marginRight: 15, marginBottom: 20 }}
    //   />
    //   <Flex direction={"row"}>
    //     {cardSize === "lg" ? null : (

    //     )}
    //     <Flex direction={"column"}>
    //       {!title ? (
    //         <Fragment>
    //           <Skeleton height={20} width={210} mt={4} ml={10} visible />
    //           <Skeleton height={20} mt={4} ml={10} width="70%" />
    //         </Fragment>
    //       ) : (
    //         <Fragment>
    //           <Text>{title}</Text>
    //           <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
    //             1.5M Views
    //           </Text>
    //         </Fragment>
    //       )}
    //     </Flex>
    //   </Flex>
    // </Paper>
  );
}

export default DetailsCard;
