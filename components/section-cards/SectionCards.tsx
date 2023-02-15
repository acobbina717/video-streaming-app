import { FetchedVideos } from "@/lib/videos";
import { Title } from "@mantine/core";

import VideoCard, { CardSize } from "../video-card/VideoCard";
import { useStyles } from "./section-cards.styles";

type SectionCardsProps = {
  videos: FetchedVideos[];
  title: string;
  size: CardSize;
};

function SectionCards({ title, videos, size }: SectionCardsProps) {
  const { classes } = useStyles();

  return (
    <div>
      <Title className={classes.title}>{title}</Title>

      <div className={classes.cardWrapper}>
        {videos.map((video) => (
          <VideoCard size={size} key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default SectionCards;
