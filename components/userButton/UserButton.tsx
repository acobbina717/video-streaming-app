"use client";

import { Avatar, Group, Menu, UnstyledButton } from "@mantine/core";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface UserButtonProps extends ComponentPropsWithoutRef<"button"> {
  image?: string;
  email?: string;
  name?: string;
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        // display: "block",
        // padding: theme.spacing.md,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />
      </Group>
    </UnstyledButton>
  )
);
UserButton.displayName = "UserButton";
