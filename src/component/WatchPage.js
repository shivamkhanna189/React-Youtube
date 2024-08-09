import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import CommentContainer from "./CommentsContainer";
import ChatPage from "./ChatPage";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const [videoURL, setVideoUrl] = useState(null);

  const getVideoUrl = async () => {
    const data = await fetch(`${YOUTUBE_VIDEO_URL}&id=${searchParam.get("v")}`);
    const json = await data.json();
    setVideoUrl(json.items[0].snippet.thumbnails.standard.url);
  };

  useEffect(() => {
    console.log(searchParam.get("v"));
    dispatch(closeMenu());
    getVideoUrl();
    return () => {
      dispatch(toggleMenu());
    };
  }, []);

  return (
    <div>
      <div className="flex" >
        <img src={videoURL} alt="vidoe"  />
          <ChatPage></ChatPage>
      </div>
      <CommentContainer></CommentContainer>
    </div>
  );
};

export default WatchPage;
