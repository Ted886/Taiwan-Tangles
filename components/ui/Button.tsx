import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  
  const baseStyles = "font-bold py-3 px-6 rounded-2xl transition-all active:scale-[0.98] transform uppercase tracking-widest text-sm sm:text-base";
  
  const variants = {
    primary: "bg-green-500 text-white border-b-4 border-green-700 hover:bg-green-400 active:border-b-0 active:translate-y-1",
    secondary: "bg-blue-500 text-white border-b-4 border-blue-700 hover:bg-blue-400 active:border-b-0 active:translate-y-1",
    danger: "bg-red-500 text-white border-b-4 border-red-700 hover:bg-red-400 active:border-b-0 active:translate-y-1",
    outline: "bg-white text-slate-500 border-2 border-slate-200 border-b-4 hover:bg-slate-50 active:border-b-2 active:translate-y-0.5",
    ghost: "bg-transparent text-slate-500 hover:bg-slate-100 border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
};
