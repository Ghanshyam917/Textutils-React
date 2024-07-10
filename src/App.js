import './App.css';
import Navbar from './Components/Navbar';
import TextLogic from './Components/TextLogic';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [Mode,ChangeMode] = useState("light");
  const [alert,setAlert] = useState(null);

  let ShowAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let tglMode = () =>{
    if(Mode === 'light'){
      ChangeMode('dark')
      document.body.style.backgroundColor = '#323943';
      ShowAlert("Dark Mode has been Enabled","success");

    }else{
      ChangeMode('light')
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode has been Enabled","success");

    }
    // setInterval(() => {
    //   document.title ="TextUtils - About"
    // }, 1000);
    // setInterval(() => {
    //   document.title ="TextUtils - Home"
    // }, 1500);
  }

  let tglBlue = () =>{
    if(Mode === 'light'){
    ChangeMode('primary')
    document.body.style.backgroundColor = '#4383bb';
    }else{
      ChangeMode('light')
    document.body.style.backgroundColor = 'white';
    }
  }

  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <><Navbar title="TextUtils" about="About" mode={Mode} toggleMode={tglMode} toggleBlue={tglBlue}/>
      <Alert alert={alert}/>
      <TextLogic heading="Enter Your Text" mode={Mode} showAlert={ShowAlert} /></>,
    },
    {
      path: "/about",
      element: <><Navbar title="TextUtils" about="About" mode={Mode} toggleMode={tglMode} toggleBlue={tglBlue}/>
      <Alert alert={alert}/>
      <About /></>,
    },
  ]);
  return (
   <>
    
    <RouterProvider router={router} />
    </>
  );
}

export default App;
