import {useFetch} from '../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Card from './card'

const Workout = (props) => {
    const { errors, responseData, token, post} = useFetch(true);
    const [apiResponse, handleApiResponse] = useState();
    useEffect(() => {
        if(!responseData){
            post("/wods", {})
        }
        handleApiResponse(responseData?.wod);
    }, [responseData])
    return(
        <div className="workout">
            {
                apiResponse?.map(element => (
                    <Card card={element}/>
                ))
            }
            {apiResponse?.length}
        </div>
    )
}

export default Workout;