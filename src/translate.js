
import React, { useState , useEffect,} from 'react';
import DropDown from './dropdown';
import Convert from './convert';

const options =[
  {
    label :'Hindi',
    value: 'hi',
  },
  {
    label :'Afrikaans',
    value: 'af',
  },
  {
    label :'Arabic',
    value: 'ar', 
  },
  
];


const Translate =({label})=> {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
    return(
      <React.Fragment>
        <div className="ui form">
          <div className="field">
            <label> Enter Text</label>
            <input value={text} onChange= {(e)=> setText(e.target.value)} />
            <label className="label">  {label}</label> 
          <DropDown  
          selected={language} onSelectedChange={setLanguage} options={options} />
          <hr/>
          <h2> Output</h2>
          <Convert text={text} language={language} />
          </div>
       </div>
      </React.Fragment>
    );
}


export default Translate;