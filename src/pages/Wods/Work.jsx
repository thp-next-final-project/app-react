
import Card from './card'

const Work = (props) => {
    const apiResponse = props.apiResponse;
    //console.log(apiResponse)
    return(

        <div className="workout">        
            <button onClick={props.recall} className="btn">Demander d'autres exercices</button>
            
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
            <button onClick={()=>{props.getStarted(true)}} className="btn">Go commencer l'entraînement !</button>
        </div>
    
    )
}

export default Work;