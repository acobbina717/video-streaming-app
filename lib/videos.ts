import videoData from "../data/videos.json";

export type FetchedVideos = {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  channelTitle?: string;
};

export const getVideos = (): FetchedVideos[] => {
  return videoData.items.map((item) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      imgUrl: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
    };
  });
};
