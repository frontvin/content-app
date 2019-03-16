import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/button/Button'
import Content from '../components/content/Content'
import { CircleSpinner } from "react-spinners-kit";
import './App.css'

// App interfaces
interface IState {
  content: string,
}

interface IApp {
  content: string,
  loading: boolean,
  onRequestContent?: () => void;
  onCancelRequest?: () => void;
}

// App class
class App extends Component<IApp, IState> {

  render() {
    const {
      onRequestContent,
      onCancelRequest,
      loading,
      content
    } = this.props;
      
        return (
          <div className="app">
            <div className="btn__container">
              <Button
                name={"Get Posts"}
                onRequestContent={onRequestContent}
              />
              <Button name={"Cancel request"} onCancelRequest={onCancelRequest}/>
            </div>
            {loading ? (
              <div className="spinner__container">
                <CircleSpinner
                  size={30}
                  color="#458435"
                  loading={loading}
                />
              </div>
            ) : (
              <Content content={content} />
            )}
          </div>
        );
  }
}

const mapStateToProps = ( state: { axRequest: any; loading: any; content: string; error: any; } ) => {
    return {
        axRequest: state.axRequest,
        loading: state.loading,
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
