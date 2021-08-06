import React, { Component } from 'react';
import { render } from 'react-dom';

import Router from './router';
import './style.css';

interface AppState {
  name: string;
}

class App extends Component<unknown, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <Router />;
  }
}

export default App;
