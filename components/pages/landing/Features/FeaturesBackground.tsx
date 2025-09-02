import type { FC } from 'react';
import BackgroundCircle from '../../../ui/BackgroundCircle';
import BackgroundIcon from '../../../ui/BackgroundIcon';

const FeaturesBackground: FC = () => {
  return (
    <>
      <BackgroundCircle 
        position="top-left" 
        size="medium" 
        color="white" 
        opacity={0.75} 
        animation="breathe" 
        delay={0} 
      />
      <BackgroundCircle 
        position="bottom-right" 
        size="large" 
        color="blue" 
        opacity={0.06} 
        animation="float" 
        delay={4} 
      />
      <BackgroundIcon 
        icon="moon" 
        position="top-right" 
        size={40} 
        color="primary-pink" 
        opacity={0.3} 
        animation="float" 
        delay={0} 
      />
      <BackgroundIcon 
        icon="cloud" 
        position="bottom-left" 
        size={40} 
        color="primary-blue" 
        opacity={0.25} 
        animation="wave" 
        delay={3} 
      />
    </>
  );
};

export default FeaturesBackground;