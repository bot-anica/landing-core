import { FC } from "react";
import { Link } from "react-router-dom";
import { LogoWithBG } from "../../../assets/images";

const FooterLogoLink: FC = () => {
  return (
    <Link to="/" className="h-full mb-6">
      <img src={LogoWithBG} alt="Logo" className="h-8 w-auto" />
    </Link>
  );
};

export default FooterLogoLink;