import { useEffect, useState } from "react";

export type Sermon = {
  id: string;
  title: string;
  date: string;
  image: string;
  videoUrl: string;
  pastor: string;
};

type YouTubeSearchItem = {
  id: {
    videoId?: string;
  };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      high?: { url: string };
      medium?: { url: string };
      default: { url: string };
    };
    channelTitle: string;
  };
};

type YouTubeResponse = {
  items?: YouTubeSearchItem[];
  error?: {
    message?: string;
  };
};

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export function useSermons(limit = 3) {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchSermons() {
      setLoading(true);
      setError(null);

      if (!API_KEY || !CHANNEL_ID) {
        setError("YouTube configuration is missing.");
        setLoading(false);
        return;
      }

      try {
        const params = new URLSearchParams({
          key: API_KEY,
          channelId: CHANNEL_ID,
          part: "snippet",
          order: "date",
          maxResults: String(limit),
          type: "video",
        });

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
        );

        const data: YouTubeResponse = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error?.message || "Failed to fetch sermons.",
          );
        }

        const youtubeSermons: Sermon[] = (data.items ?? [])
          .filter((item) => item.id.videoId)
          .map((item) => ({
            id: item.id.videoId!,
            title: item.snippet.title,
            date: new Date(
              item.snippet.publishedAt,
            ).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            image:
              item.snippet.thumbnails.high?.url ||
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default.url,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            pastor: item.snippet.channelTitle,
          }));

        if (!cancelled) {
          setSermons(youtubeSermons);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to fetch sermons:", err);

          setError(
            err instanceof Error
              ? err.message
              : "Failed to load sermons.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchSermons();

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return {
    sermons,
    loading,
    error,
  };
}