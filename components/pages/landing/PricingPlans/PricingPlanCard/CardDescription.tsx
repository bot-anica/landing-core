import { FC } from 'react';

interface CardDescriptionProps {
  description: string;
}

const CardDescription: FC<CardDescriptionProps> = ({ description }) => {
  return (
    <p className="italic text-gray-600 text-sm xl:text-base text-center mb-6 xl:mb-8">
      {description}
    </p>
  );
};

export default CardDescription;
