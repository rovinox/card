import React, { Component } from 'react';

import './App.css';
import Name from "./components/Name"
import data from "./components/data.js"
import PersonalInfo from "./components/PersonalInfo"
import FavoriteMovies from './components/FavoriteMovies';


class App extends Component {
  constructor(){
    super();
    this.state = {
      index: 0
    }
  }
  render() {
    return (
      <div className="App">
            <header id="header">
               <a id = "home">Home</a>
            </header>
          
            <div id="middle">
                <div id = "info-container">
                     <Name index={(this.state.index)}/>
                     <PersonalInfo index={(this.state.index)}/>
                     <FavoriteMovies index={(this.state.index)}/>
                </div>
                <div id = "meter">
                  {this.state.index + 1}/25
                </div>
                
            </div>

            <footer id = "footer">
                <button className = "pre-next" onClick = {() => this.setState({index: this.state.index -1})}>{"<"} Previous</button>
                  <div id = "buttons-div">
                    <button >Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                  </div>
                <button className = "pre-next" onClick= {() => this.setState({index: this.state.index + 1 })}>Next {">"} </button>
                
            </footer>
            
          
      </div>
    );
  }
}

export default App;


                  