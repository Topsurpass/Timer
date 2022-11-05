import './App.css';
import styled from 'styled-components';
import { TimerApp } from './Redux/TimerApp';
import { useSelector, useDispatch } from 'react-redux';
import { countSeconds, reset } from './Redux/slice';
import {RiPlayFill} from 'react-icons/ri'
import {MdPause} from 'react-icons/md';
import {FiRefreshCcw} from'react-icons/fi';
import beep from './Redux/beep.wav'
import { useEffect } from 'react';
import { useState } from 'react';

const Compo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `
function App() {
  let countSession = useSelector((state)=>state.timer.minutes);
  let countDown = useSelector((state)=>state.timer.seconds);
  const initialSec = countDown=== 60 ? '0':countDown;
  const seconds = initialSec < 10 ? '0' + initialSec: initialSec
  const dispatch = useDispatch();
  const [clickOnce,setclickOnce] =useState(false);

  useEffect(() => {
    const play = document.getElementById('play');
    const pause = document.getElementById('pause')
    const refresh = document.getElementById('refresh')

    const startTimer =()=>{  

      const handleDispatch =()=>{
        dispatch(countSeconds(interval));
      } 
      
      const interval = setInterval(handleDispatch,1000);

      pause.addEventListener('click',()=>{
        clearInterval(interval);
        setclickOnce(false); // after pause, setclick to false so play can work again.
      });

      refresh.addEventListener('click',()=>{
        clearInterval(interval);
        setclickOnce(false);
        dispatch(reset())
      });

    }
    
    if(clickOnce){
      startTimer();
    }

    
    play.addEventListener('click',()=>setclickOnce(true))
    
    return () => {
      play.removeEventListener('click',()=>setclickOnce(true))
    }
// eslint-disable-next-line 
  }, [clickOnce])

  return (
    <Compo className="App">

      <div className='label'>25 + 5 Clock</div>
      <TimerApp/>
      <br/> 

      <Compo className='timerBox' id='timerBox' >
        <div className='count' id='count'>Session</div>
        <div className='count time-view' >{countSession}:{seconds}</div>
        <audio src={beep} id='beep' />
      </Compo>
      <br/>
      <div className='playPause' id='playPause'>
        <RiPlayFill id='play' />
        <MdPause id='pause'/>
        <FiRefreshCcw id='refresh'/>
      </div>
     
    </Compo>
  );
}

export default App;
