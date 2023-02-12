import { AppShell } from "@mantine/core";
import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";
import NavigationDrawer from "@/components/navigation-drawer/NavigationDrawer";

import Content from "@/components/content/Content";
import SectionCards from "@/components/section-cards/SectionCards";

import { getVideos } from "../lib/videos";

function HomePage() {
  const videos = getVideos();
  return (
    <AppShell
      padding="md"
      navbar={
        <>
          <Navigation />
          {/* <NavigationDrawer appPages={appPages} /> */}
        </>
      }
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme,
        },
      })}
    >
      <Content videos={videos} />
      <SectionCards videos={videos} title="Shorts" />
    </AppShell>
  );
}

export default HomePage;
