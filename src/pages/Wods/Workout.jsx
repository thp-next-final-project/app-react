import {useFetch} from '../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Card from './card'

const Workout = (props) => {
    const { errors, responseData, isLoading, token, post} = useFetch(true);
    const [apiResponse, handleApiResponse] = useState();
    useEffect(() => {
        if(!apiResponse){
            post("/wods", {})
        }
        console.log(responseData);
        handleApiResponse(responseData?.wod);
    }, [apiResponse])
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