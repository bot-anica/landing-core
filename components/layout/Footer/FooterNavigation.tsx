import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "../../../types/sections";

interface FooterNavigationProps {
  links: LinkItem[];
}

const FooterNavigation: FC<FooterNavigationProps> = ({ links }) => {
  return (
    <nav className="flex flex-row gap-6 mb-4 text-sm lg:text-base underline">
      {links.map((linkItem) => (
        <Link
          key={linkItem.link}
          to={linkItem.link}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNavigation;
