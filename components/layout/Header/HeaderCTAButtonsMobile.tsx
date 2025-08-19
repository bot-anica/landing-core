import { FC } from "react";
import { Button } from "../../common";
import { CTAItem } from "../../../types/sections";

interface HeaderCTAButtonsMobileProps {
  ctaButtons: CTAItem[];
  onClose: () => void;
}

const HeaderCTAButtonsMobile: FC<HeaderCTAButtonsMobileProps> = ({ ctaButtons, onClose }) => {
  return (
    <div className="flex justify-center mb-4 pt-4">
      {ctaButtons.map((ctaButton) => (
        <Button 
          variant={ctaButton.buttonVariant}
          size={ctaButton.buttonSize}
          to={ctaButton.link}
          onClick={onClose}
          className="w-full sm:w-auto"
        >
          {ctaButton.text}
        </Button>
      ))}
    </div>
  );
};

export default HeaderCTAButtonsMobile;
