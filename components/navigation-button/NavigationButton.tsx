import { Button, ButtonProps, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  page: string;
  pageRoute: string;
  icon?: ReactNode;
}

function NavigationButton({ page, pageRoute, icon, ...otherProps }: Props) {
  return (
    <Button
      component={Link}
      href={pageRoute}
      p={0}
      variant="subtle"
      color={"gray"}
      h={"100%"}
      {...otherProps}
    >
      <Group position={"center"}>
        <Flex direction={"column"} align="center">
          {icon}
          <Text size={"sm"}>{page}</Text>
        </Flex>
      </Group>
    </Button>
  );
}

export default NavigationButton;
