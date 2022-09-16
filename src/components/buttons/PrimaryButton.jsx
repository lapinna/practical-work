const PrimaryButton = ({
  myClass,
  width,
  height,
  backgroundColor,
  color,
  border,
  fontSize,
  buttonText,
}) => {
  return (
    <button className={myClass}
      style={{
        width,
        height,
        backgroundColor,
        color,
        border,
        fontSize,
      }}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
