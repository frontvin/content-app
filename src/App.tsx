import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// App interfaces
// button
interface IButton {
  label: string;
  activeButton?: boolean;
  getContent: (type: string) => void;
}

// content
interface IContent {
  content: string;
}

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// comments
interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// albums
interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

// photos
interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// todos
interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// users
interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// functional components
const Button: React.FC<IButton> = ({ label, getContent }: IButton) => {
  return (
    <button className="btn" onClick={() => getContent(label)}>
      {label}
    </button>
  );
};

const Content: React.FC<IContent> = ({ content }) => {
  return <div className="content">{content}</div>;
};

// App class
// add generic props, state
class App extends Component {
  // state
  state = {
    content: ""
  };

  private getContent = (type: string) => {
    axios.get(`https://jsonplaceholder.typicode.com/${type}`).then(res => {
      const content: string = JSON.stringify(res.data);
      this.setState({ content });
    });
  };

  render() {
    const buttons = [
      { label: "posts", activeButton: false },
      { label: "comments", activeButton: false },
      { label: "albums", activeButton: false },
      { label: "photos", activeButton: false },
      { label: "todos", activeButton: false },
      { label: "users", activeButton: false }
    ];

    return (
      <div className="app">
        <div className="buttons">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                label={button.label}
                getContent={this.getContent}
              />
            );
          })}
        </div>

        <Content content={this.state.content} />
      </div>
    );
  }
}

export default App;
