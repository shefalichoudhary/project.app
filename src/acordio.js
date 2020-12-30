import React, {useState} from 'react';

const Acordio =({items}) =>{
  const [activeIndex,setActiveIndex] = useState (null);

  const onTitleClick = (index)=>{
    setActiveIndex(index);
  };

  const renderItems= items.map((item, index)=>{
    const active= index===activeIndex ?'active':''
    return(
      <React.Fragment key={item.title}>
          <div className={`title ${active}`} 
            onClick={ ()=>{return onTitleClick(index)}}>
            <i className="dropdown icon">
            </i>
            {item.title}
         </div>

          <div className={`content ${active}`} >
            <p className="dropdown icon"> </p>
            {item.content}
          </div>

      </React.Fragment >);
  });
    return(
      <React.Fragment>
        <div className="ui styled accordion"> 
           {renderItems}
       </div>
      </React.Fragment>
      );
      
};
 export default Acordio ;
