import React from 'react';

require('./App.css');


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
            <h1>こんにちは世界</h1>
            <div>
                {this.props.children}
            </div>
        </div>
    );
  }
}

