import React,{useState} from 'react'

// state

export default function TestForm(props) {
    const [Text, setText] = useState('enter text here');
    const handleupclick=( )=>{
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to upper text","primary")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
     
    }
    
    return (
        <>
        <div className='container'>
            <h2 style={{color: props.mode=== 'dark' ? 'white':'black'}} >{props.heading}</h2>
            <div className="input-group my-5" >
                <textarea className="form-control" value = {Text} onChange={handleonchange} aria-label="With textarea" rows="8"></textarea>
            </div>
            <button className="btn btn-warning" onClick={handleupclick}> convert to uppercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark' ? 'white':'black'}} >
            <h3>Text Summary</h3>
            <p>{Text.split(" ").length-1} words and {Text.length} characters</p>
            <p>{0.008*Text.split(" ").length} Minutes To Read</p>
        </div>

        </>
    )
}
