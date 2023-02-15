export type FetchedVideos = {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  channelTitle: string;
};

export const getVideos = async (): Promise<FetchedVideos[]> => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const YOUTUBE_SEARCH_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=new&20videos&type=videos&key=${YOUTUBE_API_KEY}`;

  const response = await fetch(YOUTUBE_SEARCH_ENDPOINT);

  const data = await response.json();

  return data?.items.map(
    (item: {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        thumbnails: { high: { url: string } };
        channelTitle: string;
      };
    }) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        imgUrl: item.snippet.thumbnails.high.url,
        channelTitle: item.snippet.channelTitle,
      };
    }
  );
};
