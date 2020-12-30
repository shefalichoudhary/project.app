import React, { useState } from 'react';
import Acordio from './acordio';
import Search from './search';
import DropDown from './dropdown';
import  Translate from './translate';
import Route from './route';
import Header from './header';

const items =[
  {
    title:'What is React ?',
    content:'React is a Javascript framework library.'
  },
  {
    title:'Why use React ?',
    content:'React is a favorite javascript library.'
  },
  {
    title:'How do you use React ?',
    content:'You use React by creating components.'
  }
];

const options =[
  {
    label:'The Color Red',
    value:'red'
  },
  {
    label:'The Color Green',
    value:'green'
  },
  {
    label:'The Color Blue',
    value:'blue'
  },
];
 

export default  ()=>{
  const [selected, setSelected] = useState(options[0]);
  const [showdropdown, setShowDropDown] = useState(true);
 const breakLine =  <div style={{margin:'100px'}} />
  return (
     <div className="ui container" style={{marginTop:'40px'}}> 

        <Header />

        <Route path='/'>
          <Acordio items={items} />
        </Route>

        <Route path='/list'>
          <Search />
        </Route>

        <Route path='/dropdown'>
          <DropDown label ="Select a color"
           options={options}
           selected={selected}
           onSelectedChange={setSelected}
          />
        </Route>
        
        <Route path='/translate'>
          <Translate  label="Select a language "/>
        </Route>
     </div>);
};
