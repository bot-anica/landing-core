import type { FC } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "../../../types/sections";

interface HeaderNavigationProps {
  links: LinkItem[];
}

const HeaderNavigation: FC<HeaderNavigationProps> = ({ links }) => {
  return (
    <nav className="hidden md:flex space-x-8 items-center h-full">
      {links.map((linkItem) => (
        <Link
          to={linkItem.link}
          className="text-sm lg:text-base text-gray-700 hover:text-primary-pink transition-colors font-medium flex items-center h-full py-2"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
