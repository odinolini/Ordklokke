import React, { Component } from 'react';
import './App.css';
import Klokke from './Klokke';
import OrdKlokke from './OrdKlokke';

class App extends Component {
  render() {

    let ord = [];

    return (
      <div>
        <OrdKlokke />
      </div>
    );
  }
}

export default App;
