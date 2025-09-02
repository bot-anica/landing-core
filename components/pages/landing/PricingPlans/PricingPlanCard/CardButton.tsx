import { FC, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '../../../../common';
import { ButtonSize, ButtonVariant } from '../../../../../types/common';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { Tariff } from '../../../../../types/sections';

interface CardButtonProps {
  isPopular: boolean;
  plan: Tariff;
}

const CardButton: FC<CardButtonProps> = ({ isPopular, plan }) => {
  const navigate = useNavigate();
  const {courseUrlParam} = useParams();

  const handleBuyButton = () => {
    navigate(`/${courseUrlParam}/prepayment`, { state: { tariff: plan } });
  }

  return (
    <Button
      variant={isPopular ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
      size={ButtonSize.LG}
      className="w-full touch-spacing"
      onClick={handleBuyButton}
    >
      Начать обучение
    </Button>
  );
};

export default CardButton;
