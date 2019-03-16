import React from 'react';
import './Button.css';

// button
interface IButton {
  btnName: string;
  btnEvent: () => void;
}

const Button: React.FC<IButton> = ({
  btnName,
  btnEvent
}: IButton) => {
  return (
    <div className="btn__container">
      <button className="btn" onClick={btnEvent}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
