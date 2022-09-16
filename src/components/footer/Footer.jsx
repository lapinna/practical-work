import "./footer.css";
import DefaultButton from "../buttons/DefaultButton";

const Footer = () => {
  return (
    <div className="footer">
      <DefaultButton text={"About Us"} />
      <DefaultButton text={"FAQ"} />
      <DefaultButton text={"Contact"}/>
    </div>
  );
};

export default Footer;
