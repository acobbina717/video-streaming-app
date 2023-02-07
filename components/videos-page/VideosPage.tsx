import { AspectRatio, Grid, createStyles } from "@mantine/core";
import VideoCard from "../video-card/VideoCard";

type Props = {};

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

interface CommentSimpleProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

function VideosPage() {
  const videos = new Array(7).fill("video");
  const { classes } = useStyles();

  return (
    <Grid gutter={"xl"}>
      {videos.map((video, idx) => (
        <Grid.Col xl={3} md={4} sm={4} xs={6} pr={"lg"} key={idx}>
          <VideoCard imgUrl="" title={""} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default VideosPage;
