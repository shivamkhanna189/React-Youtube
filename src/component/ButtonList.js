import Button from "./Button";

const ButtonList = () => {
  const buttonList = ["All", "Gaming", "Songs", "Live", "Cricket", "Cooking"];
  return (
    <div className="flex">
      {buttonList.map((name, index) => (
        <Button key={index} name={name}></Button>
      ))}
    </div>
  );
};
export default ButtonList;
