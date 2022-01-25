import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import React, {useState} from 'react';
import Alert from  "./components/Alert";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert=(message,type)=>{

    setalert(
      {msg: message,
        Type: type
        }
    )
    setTimeout(()=>{
      setalert(null)
    },1500)
    
  }

  const toogleMode = ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#1e1e31';
        showalert("Dark mode has been enable","success")
        
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enable","success")
      }}
  return (
    <>
      <Navbar title = 'TextUtils'  mode={mode} toogleMode={toogleMode} />
      <Alert  alert ={alert}/>
      <TestForm heading="Enter your text here" mode={mode} showalert={showalert} />
    </>
 
  );
}

export default App;
