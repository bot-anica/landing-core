import type { FC } from 'react';

export const SuccessStoriesBackground: FC = () => {
  return (
    <>
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Градиентные круги */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        
        {/* Линии и формы */}
        <div className="absolute top-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </>
  );
};