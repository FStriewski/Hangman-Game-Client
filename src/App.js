import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import Sidebar from './containers/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-flex row text-white bg-dark">
        <MainContainer />
        <Sidebar />
      </div>
    );
  }
}

export default App;
