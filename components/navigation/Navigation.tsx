"use client";

import { Text, Navbar, Stack, UnstyledButton } from "@mantine/core";
import Link from "next/link";

import { IconHome } from "@tabler/icons";
import { useStyles } from "./navigation.styles";

export default function Navigation() {
  const { classes } = useStyles();

  return (
    <Navbar top={56} bottom={0} left={0} zIndex={2028} width={{ base: 72 }}>
      <Stack mt={4} spacing={"xs"}>
        <UnstyledButton>
          <Link className={classes.navLink} href={""}>
            <div className={classes.logoWrapper}>
              <IconHome stroke={"none"} />
            </div>
            <Text className={classes.navText} weight={400}>
              Home
            </Text>
          </Link>
        </UnstyledButton>
      </Stack>
    </Navbar>
  );
}
