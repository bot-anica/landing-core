import { FC, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '../../../common';
import { ButtonSize, ButtonVariant } from '../../../../types/common';

interface CardButtonProps {
  isPopular: boolean;
}

const CardButton: FC<CardButtonProps> = ({ isPopular }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyButton = async () => {
    setIsLoading(true);
    console.log("Should open pre-payment page");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  return (
    <Button
      variant={isPopular ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
      size={ButtonSize.LG}
      className="w-full touch-spacing"
      disabled={isLoading}
      onClick={handleBuyButton}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Создание инвойса...
        </>
      ) : (
        "Начать обучение"
      )}
    </Button>
  );
};

export default CardButton;
