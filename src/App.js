import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Hello from './components/Hello'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Hello name='Hello from Hello' />
        <h1>Hello from App {"\u2728"}</h1>
      </div>
    );
  }
}

export default App;
