import { FC } from "react";
import { LinkItem } from "../../../types/sections";
import { HashLink } from "react-router-hash-link";

interface FooterNavigationProps {
  links: LinkItem[];
}

const FooterNavigation: FC<FooterNavigationProps> = ({ links }) => {
  return (
    <nav className="flex flex-row gap-6 mb-4 text-sm lg:text-base underline">
      {links.map((linkItem) => (
        <HashLink
          key={linkItem.link}
          to={linkItem.link}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          {linkItem.text}
        </HashLink>
      ))}
    </nav>
  );
};

export default FooterNavigation;
