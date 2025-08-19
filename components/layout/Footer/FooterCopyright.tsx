import { FC } from "react";

const FooterCopyright: FC = () => {
  return (
    <div className="border-t border-primary-blue/30 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2">
      <p className="text-gray-300 text-xs md:text-sm">
        © 2025 Bot Anica. Все права защищены.
      </p>
      <p className="text-gray-300 text-xs md:text-sm">
        Создано с <span className="text-red-400">❤️</span> для разработчиков
      </p>
    </div>
  );
};

export default FooterCopyright;
