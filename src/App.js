
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const[tip, setTip]= useState('');

  useEffect( ()=>{
    getTips()
  },[])

  const  getTips = async() =>{
  const response = await fetch('http://www.boredapi.com/api/activity' );
  const data = await response.json();
  setTip(data.activity)
}

  return (
    <div  className='container'>
      <p className='tip'>{tip}</p>
      <button className='btn' onClick={getTips}>New Tip</button>
    </div>
  );
}

export default App;

