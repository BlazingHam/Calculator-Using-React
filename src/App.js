import React from 'react';
import img from './Assets/iu.png';                                    //imports image
import './App.css';                                                  // imports CSS styles
import Key from './Key.js';                                         // imports Keypad component

class App extends React.Component{

  constructor(props){
  super(props);                                                      // necessary to access this.props                
  this.state={result:''};
  }

  calculate = () => {                                               //using arrows just to show you can use it as well
  this.setState({result:parseFloat(eval(this.state.result))});     //eval() evalautes a string to integer and parseFloat() converts number into float
  }

  print(x){        // recieves target.name as x
  if(x==='C'){
    this.clear();
  }
  else if(x==='='){
    this.calculate();
  }
  else{
  this.setState({result:this.state.result+x});                    //this adds numbers or characters in the result component
  }
  }

  clear = () => {
  this.setState({result:''})                                      // makes result component empty
  }

  render(){
    return (
      <div className= "App">                                         {/* use div to show compoenents in render*/}
        <style>{'body{background-color:aquamarine;}'}</style>        {/* use this to color the whole webpage*/}
        <h1>Calculator</h1>                                          {/* this is to create a header, number means order of importance */}
        <img src={img} alt='math'></img>                             {/* practice for adding images*/}
        <p className='Result'> {this.state.result}</p>               {/* <p> creates paragraph , this is the result component*/}
        <div className='Keypad'>   
        <Key print={this.print.bind(this)}/>                         {/* call the keypad component, use bind or arrow to use in functions as reference*/}
        </div>
      </div>
    );
    }
}


export default App;                                                 // exporting App to index.js
