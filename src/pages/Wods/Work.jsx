import {useState} from 'react';
import Timer from './timer';

const Work = () => {
    const [time, updateTime] = useState(50);
    Timer.new(updateTime, time);
    return(
        <>
        {time}
        </>
    )
}

export default Work;