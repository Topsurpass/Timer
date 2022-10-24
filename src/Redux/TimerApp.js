import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { incrementBreak,decrementBreak,incrementSec,decrementSec } from './slice';
//import styled from 'styled-components';
import {FaArrowUp,FaArrowDown} from 'react-icons/fa'
import '../App.css'
// const Flexdiv= styled.div`
//     display:grid;
//     grid-template-columns:1fr;
//     text-align:center;
// `
export const TimerApp = () => {
    const countBreak = useSelector((state)=>state.timer.countBreak);
    const countSession = useSelector((state)=>state.timer.minutes);
    const dispatch = useDispatch();
  return (
    <div className='flexTimer'>
        <div>
            <p>Break Length</p>
            <div className='arrow'>
                <FaArrowDown  className='down' onClick={()=>dispatch(decrementBreak())}/> 
                <div className='count'>{countBreak}</div>
                <FaArrowUp className='up' onClick={()=>dispatch(incrementBreak())}/>
            </div>
           
        </div>
        <div>
            <p>Session Length</p>
            <div className='arrow'>
                <FaArrowDown className='down' onClick={()=>dispatch(decrementSec())}/>
                <div className='count'>{countSession}</div>
                <FaArrowUp className='up' onClick={()=>dispatch(incrementSec())}/>
            </div>
            </div>
    </div>  
  )
}
