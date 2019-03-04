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
    const buttons = [
      { label: 'posts' },
      { label: 'comments' },
      { label: 'albums' },
      { label: 'photos' },
      { label: 'todos' },
      { label: 'users' },
    ]

    return (
        <div className="app">
          <div className="buttons">
            {buttons.map((button, index) => {
              return <Button key={index} label={button.label} />
            })}
          </div>
          // test
          <Content content={'test'} />
        </div>
    )
  }
}

export default connect()(App)
