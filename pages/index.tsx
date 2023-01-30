import { AppShell } from "@mantine/core";
import Header from "@/components/Header";

import Navigation from "@/components/navigation/Navigation";
import NavigationDrawer from "@/components/navigation-drawer/NavigationDrawer";

import { IconHome } from "@tabler/icons";
import { ReactNode } from "react";
import Videos from "@/components/videos-page/VideosPage";

export type ApplicationRoutes = {
  page: string;
  pageRoute: string;
  icon?: ReactNode;
};

type Props = {};

function HomePage({}: Props) {
  const appPages: ApplicationRoutes[] = [
    {
      page: "Home",
      pageRoute: "/",
      icon: IconHome({ height: "25px" }),
    },
    {
      page: "Subscriptions",
      pageRoute: "/",
      icon: IconHome({ height: "25px" }),
    },
    {
      page: "History",
      pageRoute: "/",
      icon: IconHome({ height: "25px" }),
    },
  ];

  return (
    <AppShell
      padding="md"
      navbar={
        <>
          <Navigation appPages={appPages} />
          <NavigationDrawer appPages={appPages} />
        </>
      }
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme,
        },
      })}
    >
      <Videos />
    </AppShell>
  );
}

export default HomePage;
