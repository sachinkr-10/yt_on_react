import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Components/Layout/Layout'

class App extends Component {
  
  render() {
    return (
      <div className="App container">
       <Layout/>
      </div>
    );
  }
}

export default App;
