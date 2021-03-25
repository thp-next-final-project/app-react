import {useFetch} from '../../hooks/useFetch'
import Card from './card'

const Work = (props) => {
    const { errors, responseData, isLoading, token, post} = useFetch(true);
    const apiResponse = props.apiResponse;
    //console.log(apiResponse)
    const handleClick = () => {
        props.getStarted(true);
        post("/my_performances", `{
            "my_performance" :  ${JSON.stringify(apiResponse)}
        }`)
        //pour ajouter les performances a la db
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