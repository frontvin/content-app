import React, { Component } from 'react';
import Button from '../components/button/Button';
import Content from '../components/content/Content';
// import Interfaces from "../components/content/content-types/interfaces";
import axios from 'axios';

import './App.css';

import { connect } from 'react-redux';

// App interfaces
interface IState {
  content: string;
}

// App class
class App extends Component<object, IState> {
  private getContent = (type: string) => {
    axios.get(`https://jsonplaceholder.typicode.com/${type}`).then(res => {
      const content: string = JSON.stringify(res.data);
      this.setState({ content });
    });
  };

  render() {
    const buttons = [
      { label: 'posts', activeButton: false },
      { label: 'comments', activeButton: false },
      { label: 'albums', activeButton: false },
      { label: 'photos', activeButton: false },
      { label: 'todos', activeButton: false },
      { label: 'users', activeButton: false }
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

        <Content content={this.props.content} />
      </div>
    );
  }
}

export default App;
