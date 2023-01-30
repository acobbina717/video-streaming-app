import { Container, Grid } from "@mantine/core";
import VideoCard from "../video-card/VideoCard";

type Props = {};

function VideosPage({}: Props) {
  const videos = new Array(40).fill("video");
  return (
    <Container fluid h={"100%"}>
      <Grid gutter={"xl"}>
        {videos.map((video, idx) => (
          <Grid.Col xl={3} md={4} sm={4} xs={6} pr={"lg"} key={idx}>
            <VideoCard imgUrl="" title={""} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default VideosPage;
