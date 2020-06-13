import React from 'react';
import './App.css';
import ValidatationComponent from './validationComponent/validationComponent';
import CharComponent from './charComponent/charComponent';

class App extends React.Component {
  state = {userInput : ''};
  changeListnerHandler = (event)=>{
    this.setState({userInput : event.target.value});
  }
  deleteCharhandler(charIndex){
    const text = this.state.userInput.split('');
    text.splice(charIndex,1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText});
  }
  render() {
    const charList = 
      this.state.userInput.split('').map((char,index) =>{
       return <CharComponent clicked = {()=>{this.deleteCharhandler(index)}}charecter = {char} key = {index}/>
      })
    return (
      <div className="App">
        <input type="text" onChange = {(event)=> this.changeListnerHandler(event)} value = {this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <ValidatationComponent userInputlength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
