import React from 'react';
import './Button.css';

// button
interface IButton {
  label: string;
  onRequestContent?: () => void;
}

const Button: React.FC<IButton> = ({ label, onRequestContent }: IButton) => {
  return (
    <button className="btn" onClick={onRequestContent}>
      {label}
    </button>
  );
};

export default Button;
