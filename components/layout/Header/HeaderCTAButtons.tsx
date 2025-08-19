import { FC } from "react";
import { Button } from "../../common";
import { CTAItem } from "../../../types/sections";

interface HeaderCTAButtonsProps {
  ctaButtons: CTAItem[];
}

const HeaderCTAButtons: FC<HeaderCTAButtonsProps> = ({ ctaButtons }) => {
  return (
    <div className="hidden md:block flex items-center gap-4">
      {ctaButtons.map((ctaButton) => (
        <Button
          key={ctaButton.text}
          variant={ctaButton.buttonVariant}
          size={ctaButton.buttonSize}
          to={ctaButton.link}
        >
          {ctaButton.text}
        </Button>
      ))}
    </div>
  );
};

export default HeaderCTAButtons;
