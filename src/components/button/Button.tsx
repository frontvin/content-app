import React from 'react';
import './Button.css';

// button
interface IButton {
  label: string;
  // activeButton?: boolean;
  // getContentRequest?: (type: string) => void;
}

const Button: React.FC<IButton> = ({ label }: IButton) => {
  return (
    <button className="btn">
      {label}
    </button>
  );
};

export default Button;
