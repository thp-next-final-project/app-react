import {useState} from 'react';
import TimeCount from './timer';

const Work = () => {
    const [time, setTime] = useState(50);

    return(
        <>
            <TimeCount time={time} setTime={setTime}/>
        </>
    )
}

export default Work;