import './App.css';
import React, {useState} from 'react'
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alert';

function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({msg:" Welcome to TextUtils", tipe:"success", icn:"emoji-heart-eyes-fill"});
  
  const showAlert=(message, type, icon)=>{
  setAlert({msg:message, tipe:type, icn:icon});
  } 
  setTimeout(showAlert, 4000);
  
  const togglemode = ()=>{
      if(mode ==="light"){
        setMode("dark")
        document.body.style.backgroundColor = '#495057';
        showAlert(" Dark mode is enabled.", "success", "check")
      }
      else{
        setMode("light")
        document.body.style.backgroundColor = 'white';
        showAlert(" Light mode is enabled.", "success", "check")
      }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Form heading="Enter text here to analyse!" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
