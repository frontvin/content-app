import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/button/Button'
import Content from '../components/content/Content'

import './App.css'

// App interfaces
interface IState {
  content: string;
}

// App class
class App extends Component<object, IState> {

  render() {
    const { onRequestContent } = this.props;

    const buttons = [
      { label: 'posts' },
      { label: 'comments' },
      { label: 'albums' },
      { label: 'photos' },
      { label: 'todos' },
      { label: 'users' },
    ];

    return (
        <div className="app">
          <div className="buttons">
            {buttons.map((button, index) => {
              return <Button key={index} label={button.label} onRequestContent={onRequestContent} />
            })}
          </div>
          // test
          <Content content={'test'} />
        </div>
    )
  }
}

const mapStateToProps = (state: { axRequest: any; content: any; error: any; }) => {
    return {
        axRequest: state.axRequest,
        content: state.content,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => {
    return {
        onRequestContent: () => dispatch({ type: "GET_CONTENT_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
