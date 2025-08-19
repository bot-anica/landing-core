import type { FC } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "../../../types/sections";

interface HeaderNavigationMobileProps {
  links: LinkItem[];
  onClose: () => void;
}

const HeaderNavigationMobile: FC<HeaderNavigationMobileProps> = ({ links, onClose }) => {
  return (
    <nav className="py-2 sm:py-4 space-y-1 sm:space-y-2 border-t border-b border-gray-200">
      {links.map((linkItem) => (
        <Link
          to={linkItem.link}
          onClick={onClose}
          className="block w-full text-left text-gray-700 hover:text-primary-pink transition-colors font-medium py-2 px-2 sm:px-4 rounded-lg hover:bg-white text-sm flex items-center"
        >
          {linkItem.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigationMobile;
