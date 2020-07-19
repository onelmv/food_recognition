import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import LinkForm from './components/LinkForm/LinkForm';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

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
      url:'',
      ingredients: {},
      route: 'signin',
      isSignedIn: false
      
    }

  }

  onInputChange =(event)=>{
    
    this.setState({input:event.target.value});
    
    console.log('input',this.state.input)
  }

  onButtonClick =()=>{

      this.setState({url:  this.state.input})
    
      app.models
          .predict(Clarifai.FOOD_MODEL, this.state.input)/* you can use this.state.url because that state change in this function and is not ready for use it */
          .then((response)=> {
              console.log('API its working',response)
              this.setState({ingredients:response.outputs[0].data.concepts.map(item=>item)})
              console.log(response.outputs[0].data.concepts[0].name,this.state.ingredients)
          })
          .catch(err => console.log(err));
  }

  onRouteChange=(route)=>{
    /* 3 route states : {signin|register|home} */
    if(route==='home'){
      this.setState({isSignedIn: true})
    }else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})      
  }
  
  render=()=>{
    return (
      <div className="App">
        <Particles className='particles' p={params}/>
        <Nav  onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        <Logo />
        {(this.state.route==='home')
          ?(<div>
              
            <Rank state={this.state.route}/>
            <LinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
            <ImageRecognition url={this.state.url} ingredients={this.state.ingredients}/>
          </div>)
          :(
            this.state.route==='signin' 
                ?<Signin onRouteChange={this.onRouteChange}/>
                : <Register onRouteChange={this.onRouteChange}/> 
          
            )  
        }
      </div>
    );
  }
  
}

export default App;
