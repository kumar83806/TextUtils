import React, {useState} from 'react';

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className='buttons'>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
            </div>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split('  ').length} words and {text.length} Characters</p>
            <h2 className='preview my-3'>Priview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;
