import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// App interfaces
// button
export interface IButton {
  label: string;
  activeButton?: boolean;
  getContent?: () => void;
}

// content
// export interface IContent {
//   display: boolean;
//   displayContent: () => string; // content displays as string
// }

// Content interfaces
// posts
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

const Button: React.FC<IButton> = ({label, getContent}: IButton) => {
  return (
      <button className="btn" onClick={getContent}>
        {label}
      </button>)
};

const Content: React.FC = () => {
  return (
      <div className="content">

      </div>
  )
}

// App class
class App extends Component {
  // state
  state = {
    buttons: [
      {label: "Posts", activeButton: false, getContent: () => {}},
      {label: "Comments", activeButton: false, getContent: () => {}},
      {label: "Albums", activeButton: false, getContent: () => {}},
      {label: "Photos", activeButton: false, getContent: () => {}},
      {label: "Todos", activeButton: false, getContent: () => {}},
      {label: "Users", activeButton: false, getContent: () => {}}
    ],
    content: [],
  };


  getContent() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
      const content: string = res.data;
      this.setState({ content });
      console.log(content[0])
    })
  }

  render() {
    return (
      <div className="app">
        <div className="buttons">
          {this.state.buttons.map((button, index) => {
            return (
                <Button
                    key={index}
                    label={button.label}
                    getContent={this.getContent}
                />
              )
            })
          }
        </div>

        <Content />
      </div>
    );
  }
}

export default App;
