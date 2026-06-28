import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', light = true, showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Britto Soluções Corporativas" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
