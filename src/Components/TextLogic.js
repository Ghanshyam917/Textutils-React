import React,{useState} from 'react'

export default function TextLogic(props) {

    const [text,setText] = useState("Enter Text Here");

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleOnClick = () =>{
        let netText = text.toUpperCase();
     setText(netText)
      props.showAlert("Converted to UpperCase","success")
    }
    const handleLwClick = () =>{
        let lwText = text.toLowerCase();
     setText(lwText)
     props.showAlert("Converted to LowerCase","success")

    }
    const handleClear = () =>{
        setText("")
    }

  return (
    <>
    <div className='container my-3'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode === 'light'?'black':'white'}}>{props.heading}</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary me-1" onClick={handleOnClick}>
            Convert UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick}>
            Convert LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
            Clear
        </button>
    </div>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>  
    </div>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
