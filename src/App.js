import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const [name,setName]=useState("")
  const [data,setdata]=useState([])

const nav=useNavigate();

  const clickevent=()=>{
    if(name.trim()!==""){
 setdata([...data,name])
      setName("")
    }
  }

  return (

    <>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <button type='button' onClick={clickevent}>btn</button>
    {/* <button type='button' onclick={()=>{nav("/ano")}}>click</button> */}
    <button type='button' onClick={() => nav("/another", {state:{data}})}>click</button>

   
    {data.map((item, index) => (
        <p key={index}>{item}  index val :{index}</p>
      ))}
      <p>{data[5]}</p>
      {data}
      {/* <Another val={data}/> */}
    </>
  );
}

export default App;
