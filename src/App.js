import react, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const[count, setcount]= useState(0)
  const[button, setbutton]= useState('User')
  console.log("Sayfa Açıldı, burası Global değer")

  useEffect(()=>{
    console.log(`Basılan button ${button} `)
  },[button])

  useEffect(()=>{
    console.log(`Basılan button ${count} `)
  },[count])
  return (
    <div>
      <div>
        <button onClick={()=>setbutton("User")}>User</button>
        <button onClick={()=>setbutton("Comments")}>Comments</button>
        <button onClick={()=>setbutton("Posts")}>Posts</button>
        <h1>{button}</h1>
      </div>
      <button onClick={()=>setbutton("Count")}>Count</button>
      <h1></h1>

    </div>
  );
}

export default App;
