import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import LinkForm from './components/LinkForm/LinkForm';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Rank from './components/Rank/Rank';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '42250900794740c5bd44616be0729d08'
});

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
      input:'',
      url:''
    }

  }

  onInputChange =(event)=>{
    
    this.setState({input:event.target.value});
    
    console.log('input',this.state.input)
  }

  onButtonClick =()=>{

      this.setState({url:  this.state.input})

      console.log('url',this.state.url)

      app.models.predict(Clarifai.FOOD_MODEL, "https://samples.clarifai.com/food.jpg").then(
        function(response) {
          console.log('API its working',response)/* .outputs[0].data.concepts[0].name) */
          /* const ingredientList = response.outputs[0].data.map(item=>{item.name})
          return ingredientList; */

        },
        function(err) {
          // there was an error
        }
      );
  }

  
  render=()=>{
    return (
      <div className="App">
        <Particles className='particles' p={params}/>
        <Nav />
        <Logo />
        <Rank />
        <LinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        <ImageRecognition url={this.state.url}/>
      </div>
    );
  }
  
}

export default App;
