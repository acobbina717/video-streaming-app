import { AppShell } from "@mantine/core";
import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";
import NavigationDrawer from "@/components/navigation-drawer/NavigationDrawer";
import Content from "@/components/content/Content";
import SectionCards from "@/components/section-cards/SectionCards";
import { FetchedVideos, getVideos } from "../lib/videos";

type HomePageProps = {
  videos: FetchedVideos[];
};

export async function getServerSideProps() {
  const videos = await getVideos();
  return { props: { videos } };
}

function HomePage({ videos }: HomePageProps) {
  return (
    <AppShell
      padding="md"
      navbar={
        <>
          <Navigation />
          {/* <NavigationDrawer /> */}
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
      <SectionCards size="lg" videos={videos} title="Shorts" />
      <SectionCards size="md" videos={videos} title="Shorts 2" />
    </AppShell>
  );
}

export default HomePage;
