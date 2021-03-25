
import Card from './card'
import { useFetch } from '../../hooks/useFetch';

const Work = (props) => {
    const { post } = useFetch(true);


    const apiResponse = props.apiResponse;
    const handleClick = () => {
        props.getStarted(true);
        const { apiResponse } = props;
        console.log("my ",props)
        post(`/my_performances`, apiResponse );
    }
    //console.log(apiResponse)
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