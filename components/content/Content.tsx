import { FetchedVideos } from "@/lib/videos";
import { Grid, Flex } from "@mantine/core";
import VideoCard from "../video-card/VideoCard";

type ContentProps = {
  videos: FetchedVideos[];
};

function Content({ videos }: ContentProps) {
  return (
    <Flex pt={24}>
      <Grid align={"center"} gutter={"xl"} justify={"center"} w={"100%"}>
        {videos.map((video) => (
          <Grid.Col xl={3} lg={4} md={4} sm={6} xs={6} key={video.id}>
            <VideoCard size="sm" video={video} />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}

export default Content;
