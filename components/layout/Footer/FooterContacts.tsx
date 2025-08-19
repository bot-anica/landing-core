import { FC } from "react";
import { toast } from "react-toastify";
import { Github, Send, Mail } from "lucide-react";

const FooterContacts: FC = () => {
  return (
    <div className="flex flex-row gap-5 mb-4 md:mb-0">
      <a
        href="https://github.com/bot-anica"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github size={26} />
      </a>
      <a
        href="https://t.me/callback_messanger_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Telegram"
      >
        <Send size={26} />
      </a>
      <a
        href="mailto:bot.anica.course@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Email"
        onClick={() => {
          navigator.clipboard.writeText("bot.anica.course@gmail.com");
          toast.success("Email скопирован в буфер обмена");
        }}
      >
        <Mail size={26} />
      </a>
    </div>
  );
};

export default FooterContacts;
