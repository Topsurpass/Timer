import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countBreak:5,
    minutes:25,
    seconds:60,
}
export const timerSlice = createSlice({
    name: 'TimerSlice',
    initialState,
    reducers:{
        incrementBreak:(state)=>{
            state.countBreak +=1;
            if(state.countBreak > 60){
                state.countBreak=60;
            }
        },
        decrementBreak:(state)=>{
            state.countBreak -=1;
            if(state.countBreak < 1 ){
                state.countBreak=1     
            }
        },
        incrementSec:(state)=>{
            state.minutes +=1;
            if(state.minutes > 60  ){
                state.minutes=60
            }
        },
        decrementSec:(state)=>{
            state.minutes -=1;
            if( state.minutes < 1){
                state.minutes=1;
            }
        },
        countSeconds:(state,action)=>{

            state.seconds -=1;
            if(state.seconds === 59){
                state.minutes -=1;
            }
            else if(state.seconds < 0){
                state.seconds = 59;
                state.minutes -=1;
            }
            if(state.minutes < 1){
                document.getElementById('beep').play();
                document.getElementById('timerBox').style.border= '10px solid red';
                document.querySelector('.time-view').style.color ="red";
            }else{
                document.getElementById('timerBox').style.border= '10px solid grey';
                document.querySelector('.time-view').style.color ="white";
            }
            if(state.minutes < 0){
                clearInterval(action.payload);
                state.minutes = 0;
                state.seconds = 0;
                // document.getElementById('count').innerHTML= 'Break';
                // state.minutes = state.countBreak-1;
                // state.seconds = 59;
                // if(state.minutes === 0 && state.seconds === 0){
                //     clearInterval(action.payload);
                // }
            }
                                      
        }  
       
    }
})
export const {incrementBreak,decrementBreak,incrementSec,decrementSec,countSeconds} = timerSlice.actions;
export default timerSlice.reducer;