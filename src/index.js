import React, { Suspense, useState, } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <h2 style={{ textAlign: "center" }}>React App</h2>

      </div>
    )
  }
}


const element = < App />;
ReactDOM.render(element, document.getElementById("root"))