import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import LinkForm from './components/LinkForm/LinkForm';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';


const params={
  polygon: {
      enable: true,
      type: 'o',
      move: {
          radius: 10
      },
  }
}

class App extends Component {

  constructor(){
    super();
    this.state={
      input:''
    }

  }

  onInputChange =(event)=>{
    console.log(event.target.value)
  }

  onButtonClick =()=>{}

  /* api_key = 42250900794740c5bd44616be0729d08; */
  
  render=()=>{
    return (
      <div className="App">
        <Particles className='particles' p={params}/>
        <Nav />
        <Logo />
        <Rank />
        <LinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        {/*<ImageRecognition /> */}
      </div>
    );
  }
  
}

export default App;
