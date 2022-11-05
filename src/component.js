import React from 'react';
import './App.css';
import {FaArrowUp,FaArrowDown} from 'react-icons/fa'

export const Component = (props) => {
  return (
    <div className='flexTimer'>
      25 + 5 Clock
         <div>
            <p>Break Length</p>
            <div className='arrow'>
            <FaArrowUp className='up' onClick={props.funcBrkUp}/>
            <div className='count'>{props.break}</div>
            <FaArrowDown  className='down' onClick={props.funcBrkDown}/>   
            </div>        
         </div>
         <div>
             <p>Session Length</p>
            <div className='arrow'>
              <FaArrowUp className='up' onClick={props.funcSecUp}/>
              <div className='count'>{props.session}</div>
              <FaArrowDown className='down' onClick={props.funcSecDown}/>
            </div>
         </div>
     </div> 
  )
}
