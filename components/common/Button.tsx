import { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { ButtonSize, ButtonVariant } from '../../types/common';
import { HashLink } from 'react-router-hash-link';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  withoutBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className,
  disabled = false,
  type = 'button',
  withoutBorder = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none box-border';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-pink to-primary-blue text-white hover:scale-105 focus:ring-primary-pink',
    secondary: `bg-white text-slate-800 ${withoutBorder ? '' : 'border-2 border-primary-blue/30'} hover:bg-primary-blue/5 focus:ring-primary-blue box-border`,
    outline: `bg-transparent text-primary-dark ${withoutBorder ? '' : 'border-2 border-primary-pink'} hover:bg-primary-pink hover:text-white focus:ring-primary-pink`,
    ghost: 'bg-transparent text-gray-600 hover:text-primary-pink hover:bg-gray-50 focus:ring-gray-300'
  };
  
  const sizeClasses = {
    sm: 'px-4 h-10 text-sm',
    md: 'px-6 h-12 text-base',
    lg: 'px-5 h-11 md:px-6 md:h-13 lg:px-8 lg:h-15 text-base md:text-lg'
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant as ButtonVariant],
    sizeClasses[size as ButtonSize],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <HashLink to={to} className={classes} {...props}>
        {children}
      </HashLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 