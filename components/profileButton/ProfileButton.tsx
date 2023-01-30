"use client";

import { Avatar, Group, Skeleton, UnstyledButton } from "@mantine/core";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ProfileButtonProps extends ComponentPropsWithoutRef<"button"> {
  image?: string;
  email?: string;
  name?: string;
  size?: number;
  skeletonSize?: number;
}

export const ProfileButton = forwardRef<HTMLButtonElement, ProfileButtonProps>(
  (
    {
      image,
      name,
      email,
      size,
      skeletonSize = 45,
      ...others
    }: ProfileButtonProps,
    ref
  ) => (
    <>
      {!image ? (
        <Skeleton circle height={skeletonSize} />
      ) : (
        <UnstyledButton
          ref={ref}
          sx={(theme) => ({
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
            <Avatar size={size} src={image} radius="xl" />
          </Group>
        </UnstyledButton>
      )}
    </>
  )
);

ProfileButton.displayName = "ProfileButton";
