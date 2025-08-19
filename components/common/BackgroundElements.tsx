import BackgroundIcon from '../ui/BackgroundIcon';

export interface BackgroundElementsProps {
  showBlobs?: boolean;
  showIcons?: boolean;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
  showIcons = true
}) => {
  return (
    <>     
      {showIcons && (
        <>
          <BackgroundIcon 
            icon="star" 
            position="top-right" 
            size={30} 
            color="primary-pink" 
            opacity={0.2} 
            animation="float" 
            delay={1} 
          />
          <BackgroundIcon 
            icon="heart" 
            position="top-left" 
            size={30} 
            color="pink" 
            opacity={0.2} 
            animation="float" 
            delay={1} 
          />
        </>
      )}
    </>
  );
};

export default BackgroundElements; 