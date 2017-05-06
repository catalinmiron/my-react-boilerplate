import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./styles/app.less');

export default class App extends Component {
  state = {
    a: 1
  };

  render() {
    return (
      <div>
        <p>Main {this.state.a}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
