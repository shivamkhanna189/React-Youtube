export const YOUTUBE_API_KEY = "AIzaSyAOSp34r2fWs0nkwPIdpsAxsOayDT4T0D8";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTION_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
