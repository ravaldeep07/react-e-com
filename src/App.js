import React, { useState, } from "react";
import Navbar from "./components/navbar";
import Page1 from "./components/page1";
import Alert from "./components/Alert1";
// import Tools from "./components/tools";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }

    const [mode, setmode] = useState('light');
    const togglemode = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("light is off", "succsesfully");
        } else {
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("light is on", "succsesfully");
        }
    }
    return (
        <>
       {/* <Router>  */}
       <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <div className="container">
           
        
        {/* <Switch> */}
            {/* <Route path="/page1">
                
                </Route> */}
           
            {/* <Route exact path="/tools"> */}
                {/* <Tools  mode={mode}  /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
               <Page1 heading="enter the text to analyze" mode={mode} /><br />
            {/* </Route> */}
    {/* </Switch> */}
    </div>
  {/* </Router > */}
         </>
    );
}


export default App;
