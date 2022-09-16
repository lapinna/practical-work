import PrimaryButton from "./PrimaryButton";

const DefaultButton = ({text}) => {
  return (
      <PrimaryButton
        myClass="defaultBtn"
        width="100px"
        height="40px"
        backgroundColor="transparent"
        color="#6C9A33"
        border="1px solid darkgreen"
        border-radius="20%"
        fontSize="12px"
        buttonText={text}
      />
  );
};

export default DefaultButton;
