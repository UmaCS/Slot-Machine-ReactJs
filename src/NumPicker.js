import React from 'react';

const xNum = Math.floor(Math.random() * 7) + 1;

class NumPicker extends React.Component{
    render(){
    
     return (
        <div>
            <h1>Your random number is {xNum}</h1>
            <h2>{xNum === 7 ? 'Congrats!' : 'Sorry you lose!'}</h2>
            {xNum === 7 && <img src="https://media.giphy.com/media/jPOjetGs2g8w0/giphy.gif"/>}
        </div>
    );
    } 
}
export default NumPicker;