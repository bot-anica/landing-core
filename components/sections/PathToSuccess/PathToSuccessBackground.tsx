import type { FC } from 'react';

const PathToSuccessBackground: FC = () => {
  return (
    <>
      {/* Top-right decorative element */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      
      {/* Bottom-left decorative element */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      {/* Additional decorative lines */}
      <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-blue-200 to-transparent opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-1 bg-gradient-to-l from-pink-200 to-transparent opacity-30"></div>
    </>
  );
};

export default PathToSuccessBackground;