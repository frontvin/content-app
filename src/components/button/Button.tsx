import React from 'react';
import './Button.css';

// button
interface IButton {
  name: string;
  onRequestContent?: () => void;
}

const Button: React.FC<IButton> = ({ name, onRequestContent }: IButton) => {
  return (
    <div className="btn__container">
      <button className="btn" onClick={onRequestContent}>
        {name}
      </button>
    </div>
  );
};

export default Button;
