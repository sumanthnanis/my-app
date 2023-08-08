import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handletoClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleonChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>      
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonChange}></textarea>
    </div>
    <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>convert toUpperCase</button>
    <button type="submit" className="btn btn-primary mx-1" onClick={handletoClick}>Submit toLowerCase</button>
</div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  )
}
