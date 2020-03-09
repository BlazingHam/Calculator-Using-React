import React from 'react';

class Key extends React.Component{
    

render(){
    return(
        <div >                                                                                                    
        <button name='7' className='Button1' onClick={event=>this.props.print(event.target.name)}>7</button>                         {/* using arrow functions to create reference for the name of the button which will be sent to result component */}
        <button name='8' className='Button1' onClick={event=>this.props.print(event.target.name)}>8</button>
        <button name='9' className='Button1' onClick={event=>this.props.print(event.target.name)}>9</button>
        <button name='*' className='Button2' onClick={event=>this.props.print(event.target.name)}>x</button><br className='br'/>     {/* <br> is like /n */}

        <button name='4' className='Button1' onClick={event=>this.props.print(event.target.name)}>4</button>
        <button name='5' className='Button1' onClick={event=>this.props.print(event.target.name)}>5</button>
        <button name='6' className='Button1' onClick={event=>this.props.print(event.target.name)}>6</button>
        <button name='-' className='Button2' onClick={event=>this.props.print(event.target.name)}>-</button><br className='br'/>

        <button name='1' className='Button1' onClick={event=>this.props.print(event.target.name)}>1</button>
        <button name='2' className='Button1' onClick={event=>this.props.print(event.target.name)}>2</button>
        <button name='3' className='Button1' onClick={event=>this.props.print(event.target.name)}>3</button>
        <button name='+' className='Button2' onClick={event=>this.props.print(event.target.name)}>+</button><br className='br'/>
    
        <button name='/' className='Button1' onClick={event=>this.props.print(event.target.name)}>/</button>
        <button name='0' className='Button1' onClick={event=>this.props.print(event.target.name)}>0</button>
        <button name='C' className='Button1' onClick={event=>this.props.print(event.target.name)}>C</button>
        <button name='=' className='Button2' onClick={event=>this.props.print(event.target.name)}>=</button>
        </div>

    );
 }


}

export default Key;