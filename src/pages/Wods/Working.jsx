import {useState} from 'react';
import TimeCount from './timer';
import Work from './Work';
import Cards from './cards';

const Working = (props) => {
    const [currentStep, updateStep] = useState(0);
    const [currentExo, updateExo] = useState(0);
    const [time, setTime] = useState(0);
    const [play, setPlayStatus] = useState(false);
    const apiResponse = props.apiResponse;
    const Step = apiResponse[currentStep];

    const playToggle = () => {
        setPlayStatus(!play);
        console.log(play);
    }
    const switchStep = () => {
        updateStep((currentStep + 1) % apiResponse.length);
        updateExo(0);
        window.scrollTo(0, 0);
    }
    const handleTimerChange = (value) => {
        setTime(value);
        updateExo(Math.floor(value/15));
    }
    return(
        <div className="workout">
            <div className="top-menu">
                {
                    apiResponse.map( Step =>(
                        <btn onClick={()=>{updateStep(apiResponse.indexOf(Step))}}>
                            
                            {
                                Step.name
                                
                            }
                        </btn>
                    ))
                }
            </div>
            <h1>{Step.name}</h1>
            <h3>Temps : {Step.time.min} min {Step.time.sec} s</h3>
            <h3>Nombre de tours du circuit : {Step.rep_set} </h3>
            <div className="timer">        
                <div className="timer-tim"><TimeCount time={time} setTime={handleTimerChange} play={play}/><span> secondes  </span></div>
                <button className="btn" onClick={playToggle}>
                    {
                        play
                        &&
                        "pause"
                        ||
                        "play"
                    }
                </button>
            </div> 
            {
            
                    <Cards card={Step} exo={currentExo}/>
            }
            <button className="btn" onClick={switchStep}>Passer à la suite de l'entrainement</button>

        </div>
    )
}

export default Working;