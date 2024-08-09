import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VidoeCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideoList] = useState([]);
  const getVideosList = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideoList(json.items);
  };
  useEffect(() => {
    getVideosList();
  }, []);

  if (videos.length == 0) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map(video => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VidoeCard video={video}></VidoeCard>
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
