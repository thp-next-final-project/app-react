
import Card from './card'

const Work = (props) => {
    const apiResponse = props.apiResponse;
    return(

        <div className="workout">
            
            <div>
            pas content? 
            </div>
            <button onClick={props.recall} className="btn">Redemander des exercices</button>
            
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
            <button onClick={()=>{props.getStarted(true)}} className="btn"> ze parti </button>
        </div>
    
    )
}

export default Work;