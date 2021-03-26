import {useFetch} from '../../hooks/useFetch';
import Card from './card';

const Work = (props) => {
    const { post } = useFetch(true);


    const apiResponse = props.apiResponse;
    const handleClick = () => {
        props.getStarted(true);
        const { apiResponse } = props;
        post(`/my_performances`, apiResponse );
    }
    return(

        <div className="workout">        
            <button onClick={props.recall} className="btn">Demander d'autres exercices</button>
            
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
            <button onClick={handleClick} className="btn">Go commencer l'entraînement !</button>
        </div>
    
    )
}

export default Work;