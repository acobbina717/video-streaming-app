"use client";
import { ApplicationRoutes } from "@/pages";
import { Navbar, Space, Stack } from "@mantine/core";
import NavigationButton from "../navigation-button/NavigationButton";

type NavigationProps = {
  appPages: ApplicationRoutes[];
};

export default function Navigation({ appPages }: NavigationProps) {
  return (
    <Navbar width={{ base: 100 }} height={"100vh"}>
      <Stack align={"center"} spacing={"xs"}>
        <Space />
        <Space />
        {appPages.map(({ page, pageRoute, icon }, idx) => (
          <NavigationButton
            key={idx}
            page={page}
            pageRoute={pageRoute}
            icon={icon}
          />
        ))}
      </Stack>
    </Navbar>
  );
}
