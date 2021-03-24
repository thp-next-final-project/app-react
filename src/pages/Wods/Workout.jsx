import {useFetch} from '../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Work from './Work'
import Card from './card'

const Workout = (props) => {
    const { errors, responseData, isLoading, token, post} = useFetch(true);
    const [apiResponse, handleApiResponse] = useState();
    useEffect(() => {
        if(!responseData || !apiResponse){
            post("/wods", {})
        }
        handleApiResponse(responseData?.wod);
        console.log(responseData);

    }, [responseData])
    const recall = (e) => {
        e.preventDefault();
        handleApiResponse(!apiResponse);
    }
    return(
        
        apiResponse
        &&
        <div className="workout">
            
            <div>
            pas content? 
            </div>
            <button onClick={recall} className="btn">Redemander des exercices</button>
            <Work/>
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
            
        </div>
    
        ||
        <>
            chargement...
        </>
    )
}

export default Workout;