"use client";

import { Button, Flex, Group, Menu, Text } from "@mantine/core";
import Link from "next/link";
import { UserButton } from "../userButton/UserButton";
import { useStyles } from "./navigation.styles";

export default function Navigation() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Flex mt={5} direction={"row"} justify={"space-between"}>
        <Group>
          <Link href="/">Logo</Link>
        </Group>

        <Group mr={200} spacing={0}>
          <Button size="xs" color={"gray"} variant="subtle">
            <Text size={"lg"}>Home</Text>
          </Button>

          <Button size="xs" color={"gray"} variant="subtle">
            <Text size={"lg"}>My List</Text>
          </Button>
        </Group>

        <Group>
          <Menu>
            <Menu.Target>
              <UserButton />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Sign out</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </div>
  );
}
