import {useState} from 'react';
import TimeCount from './timer';

const Working = () => {
    const [time, setTime] = useState(50);
    const [play, setPlayStatus] = useState(false)
    const playToggle = () => {
        setPlayStatus(!play);
        console.log(play);
    }
    return(
        <>
            <TimeCount time={time} setTime={setTime} play={play}/>
            <button onClick={playToggle}>
                {
                    play
                    &&
                    "pause"
                    ||
                    "play"
                }
            </button>
        </>
    )
}

export default Working;