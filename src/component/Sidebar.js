import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  if (!isMenuOpen) return null;
  const listStyle = { listStyle: "none" };
  return (
    <div className="shadow-lg w-48 ">
      <ul style={listStyle}>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h3>Subscriptions</h3>
      <ul style={listStyle}>
        <li>Movies</li>
        <li>Video Games</li>
        <li>FUn Activity</li>
      </ul>

      <h3>Explore</h3>
      <ul style={listStyle}>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Video</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};
export default Sidebar;
