import React from 'react';
import './Button.css';

// button
interface IButton {
  label: string;
  activeButton?: boolean;
  getContent: (type: string) => void;
}

const Button: React.FC<IButton> = ({ label, getContent }: IButton) => {
  return (
    <button className="btn" onClick={() => getContent(label)}>
      {label}
    </button>
  );
};

export default Button;
