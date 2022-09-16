import "./topBar.css";
import PrimaryButton from "../buttons/PrimaryButton";

const TopBar = () => {
  return (
    <div className="topBar">
      <PrimaryButton
        myClass="topBarBtn"
        width="100px"
        height="25px"
        backgroundColor="red"
        color="white"
        border="2px solid green"
        fontSize="12px"
        buttonText="First!"
      />
      <PrimaryButton
        myClass="topBarBtn"
        width="100px"
        height="25px"
        backgroundColor="darkgreen"
        color="black"
        border="2px solid red"
        fontSize="12px"
        buttonText="Second!"
      />
    </div>
  );
};

export default TopBar;
