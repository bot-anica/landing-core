import { FC } from "react";
import { Link } from "react-router-dom";
import { LogoWithoutBG } from "../../../assets/images";

const HeaderLogoLink: FC = () => {
  return (
    <Link to="/">
      <img src={LogoWithoutBG} alt="Logo" className="h-8 w-auto" />
    </Link>
  );
};

export default HeaderLogoLink;
