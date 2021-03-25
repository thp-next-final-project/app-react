import {useFetch} from '../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Work from './Work'
import Card from './card'

const Workout = (props) => {
    const { responseData, post} = useFetch(true);
    const [apiResponse, handleApiResponse] = useState();
    useEffect(() => {
        if(!apiResponse){
            post("/wods", {})
        }
        console.log(responseData);
        handleApiResponse(responseData?.wod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiResponse])
    const recall = (e) => {
        e.preventDefault();
        handleApiResponse(!apiResponse);
    }
    return(
        
        apiResponse
        (apiResponse
        &&
        <div className="workout">
            <div>
            pas content? 
            </div>
            <button onClick={recall} className="btn">Redemander des exercices</button>
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
        </div>)
        ||
        <>
            chargement...
        </>
    )
}

export default Workout;