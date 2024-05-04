import React, { useState } from 'react'

export default function Page1(props) {

  // ths is uppercase and lowercase button 
  const upClicked = () => {
    let newText = text.toUpperCase();
    setText(newText)
    // console.log("up clicked")
  }
  const lowClicked = () => {
    let newText = text.toLowerCase();
    setText(newText)
    // console.log("up clicked")
  }


  // this is dark end light mode
  // const darkmode = () => {
  //   document.body.style.backgroundColor = "black";
  //   setText("");
  //     }
  // const Lightmode = () => {
  //     document.body.style.backgroundColor = "white";
  //     setText("");
  //    }
  // const handleReset = () => {
  //   setText("");
  // }
  // this is reset button 

  
  const reset = () => {
    setText("");
  }
  //  this is a onchage event 
  const onchange = (event) => {
    setText(event.target.value)
    // console.log("onchange")
  }

  const copytext = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("copyed");
  };

  let [text, setText] = useState('');

  return (
    <>
      {/* <button className="btn btn-dark " onClick={darkmode}>dark mode</button>
    <button className="btn btn-dark " onClick={Lightmode}>Lightmode</button> */}
      <div className="contener" style={{ color: props.mode === 'dark' ? 'light' : 'dark' }} >
        < h2>{props.heading}</h2>

        <div className="mb-4" style={{ color: props.mode === 'dark' ? 'light' : 'dark' }} >
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={onchange} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-light mx-2" onClick={upClicked} type=''>up letter</button>
        <button  disabled={text.length===0} className="btn btn-light mx-2" onClick={lowClicked} type=''>lower letter</button>
        <button  disabled={text.length===0} className="btn btn-light mx-2" onClick={reset}>🤷clear</button>
        <button  disabled={text.length===0} className="btn btn-light mx-2" onclick="myFunction()" onClick={copytext}>copy text</button>

      </div>
      <div className='contener my-3' style={{ color: props.mode === 'dark' ? 'light' : 'dark' }}>
        <h3>your text summary</h3>
        <p>{text.length} = this my text lendth</p>
        <p>{text.split(" ").length} = this my text word</p>
        <p>{0.008 * text.split(" ").length} = this my text time</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>


  )
}
