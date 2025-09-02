import { FC } from 'react';

interface CardHeaderProps {
  name: string;
}

const CardHeader: FC<CardHeaderProps> = ({ name }) => {
  return (
    <div className="text-center mb-6 xl:mb-8">
      <h3 className="text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">
        {name}
      </h3>
    </div>
  );
};

export default CardHeader;
