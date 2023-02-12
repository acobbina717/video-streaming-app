import { FetchedVideos } from "@/lib/videos";
import { Title } from "@mantine/core";
import VideoCard from "../video-card/VideoCard";
import { useStyles } from "./section-cards.styles";

type SectionCardsProps = {
  videos: FetchedVideos[];
  title: string;
};

function SectionCards({ title, videos }: SectionCardsProps) {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      <Title className={classes.title}>{title}</Title>
      <div className={classes.cardWrapper}>
        {videos.map((video) => (
          <VideoCard size="lg" key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default SectionCards;
