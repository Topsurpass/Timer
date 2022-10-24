import './App.css';
import styled from 'styled-components';
import { TimerApp } from './Redux/TimerApp';
import { useSelector, useDispatch } from 'react-redux';
import { countSeconds } from './Redux/slice';
import {RiPlayFill} from 'react-icons/ri'
import {MdPause} from 'react-icons/md';
import {FiRefreshCcw} from'react-icons/fi';
import beep from './Redux/beep.wav'

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


  const startTimer =()=>{  

    const handleDispatch =()=>{
      dispatch(countSeconds(inte));
    } 
    
    const inte = setInterval(handleDispatch,1000);

    document.getElementById('pause').addEventListener('click',()=>{
      clearInterval(inte);
    })
   
  }

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

      <div className='playPause' id='playPause'>
        <RiPlayFill id='play' onClick={startTimer}/>
        <MdPause id='pause'/>
        <FiRefreshCcw id='refresh'/>
      </div>
     
    </Compo>
  );
}

export default App;
