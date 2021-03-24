import {useState} from 'react';
import TimeCount from './timer';
import Work from './Work';
import Cards from './cards';

const Working = (props) => {
    const [time, setTime] = useState(50);
    const [play, setPlayStatus] = useState(false);
    const apiResponse = props.apiResponse;

    const playToggle = () => {
        setPlayStatus(!play);
        console.log(play);
    }

    //console.log(apiResponse)


    

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
            {/* <Work apiResponse={apiResponse} recall={recall} getStarted={getStarted} /> */}
            {
                apiResponse?.map(element => (
                    <Cards cards={element}/>
                ))
            }

        </>
    )
}

export default Working;