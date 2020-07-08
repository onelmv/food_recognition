import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import LinkForm from './components/LinkForm/LinkForm';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';


class App extends Component {
  
  
  
  render=()=>{
    return (
      <div className="App">
        <p>Its working....</p>
         <Nav />
        {/*<Logo />
        <LinkForm />
        <ImageRecognition /> */}
      </div>
    );
  }
  
}

export default App;
