import React from 'react';
import './Button.css';

// button
interface IButton {
  name: string;
  onRequestContent?: () => void;
  onCancelRequest?: () => void;
}

const Button: React.FC<IButton> = ({
  name,
  onRequestContent,
  onCancelRequest
}: IButton) => {
  return (
    <div className="btn__container">
      <button className="btn" onClick={onRequestContent || onCancelRequest}>
        {name}
      </button>
    </div>
  );
};

export default Button;
