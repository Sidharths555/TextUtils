import React, { useState } from 'react';
import './Form.css';

export default function Form(props) {
    const [style, setStyle] = useState({ display: 'none', visibility: 'hidden' });
    const [text, settext] = useState('');
    const [search, setsearch] = useState('');
    const [replace, setReplace] = useState();

    const UpperCase = () => {
        let Uptext = text.toUpperCase();
        settext(Uptext);
    }

    const lowerCase = () => {
        const lowtext = text.toLowerCase();
        settext(lowtext);
    }

    const cleartxt = () => {
        settext('');
        props.showAlert(" Text field cleared", "danger", "exclamation-triangle")
    }

    const toggleSearch = () => {
        setStyle(prevStyle => ({ display: prevStyle.display === 'none' ? 'inline' : 'none', visibility: prevStyle.visibility === 'hidden' ? 'visible' : 'hidden'}));
    }

    const tchange = (event) => {
        settext(event.target.value);
    }

    const handleSearchChange = (event) => {
        setsearch(event.target.value);
    }

    const handleReplaceChange = (event) =>{
        setReplace(event.target.value);
    }

    const handleReplace = () => {
        let regex = new RegExp(`${search}`, 'g');
        let nword = text.replace(regex, replace);
        settext(nword);
        // props.showAlert(nword.trim() ? (" Word replaced!", "sucess", "check") : ("Enter value to replace", "danger", "exclamation-triangle") );
    }

    const copy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied Successfully!", "primary", "check")
    }
    

    return (
        <>
            <div className="Form">
                <label className={`label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</label>
                <input type="text" className="Inputbx" id='inptbx' value={text} onChange={tchange} placeholder="Enter Text Here!" />
                <button className="btn btn-primary" onClick={UpperCase}>UpperCase</button>
                <button className="btn btn-primary" onClick={lowerCase}>LowerCase</button>
                <button className="btn btn-primary" onClick={cleartxt}>Clear</button>
                <button className="btn btn-primary" onClick={copy}>Copy</button>
                <button className="btn btn-primary" onClick={toggleSearch}>Search</button>
                <input type='text' className='search' value={search} onChange={handleSearchChange} placeholder='Search' style={style} />
                <input type='text' className='search' value={replace} onChange={handleReplaceChange} placeholder='Replace with' style={style} />
                <button className="btn btn-primary" onClick={handleReplace} style={style}>Replace</button>

                <div className="info">
                    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.trim() ? text.trim().split(/\s+/).length : 0} Words and {text.replace(/\s/g, '').length} number of characters</p>
                    <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h2>
                    <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text}</p>
                </div>
            </div>
        </>
    )
}
