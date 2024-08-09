const VidoeCard = ({ video }) => {
  const { snippet, statistics } = video;
  return (
    <div className="p-5 m-5 shadow-lg w-48">
      <img alt="thumbnail" src={snippet.thumbnails.default.url}></img>
      <div className="font-bold text-ellipsis overflow-hidden">
        {snippet.title}
      </div>
      <div>{statistics.viewCount} </div>
    </div>
  );
};
export default VidoeCard;
