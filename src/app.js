import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

import './styles/app.less';

export default class App extends Component {
  render() {
    return <Main />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
