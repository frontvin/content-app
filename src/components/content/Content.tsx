import React from 'react';
import './Content.css';

// content
interface IContent {
  content: string;
}

const Content: React.FC<IContent> = ({ content }) => {
  return <div className="content">{content}</div>;
};

export default Content;
