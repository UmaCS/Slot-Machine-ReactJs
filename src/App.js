import React from 'react';
import './App.css';
// import NumPicker from './NumPicker';
import Machine from './Machine'

const symbolGenerator = () => {
  const symbols = ["🍇", "🍉", "🍏"];
  const randomSym = Math.floor(Math.random() * 3);
  return symbols[randomSym];
}

function App() {
  return(
    <div>
    <h1>Slot Machines!</h1>
      <Machine 
      s1={symbolGenerator()}
      s2={symbolGenerator()}
      s3={symbolGenerator()}
      />
      <Machine 
      s1={symbolGenerator()}
      s2={symbolGenerator()}
      s3={symbolGenerator()}
      />
      <Machine 
      s1={symbolGenerator()}
      s2={symbolGenerator()}
      s3={symbolGenerator()}
      />
    </div>
    
  );
  
}


export default App;
// 