import {useFetch} from '../../hooks/useFetch'
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { COOKIE_TOKEN } from '../../config/config';

const Workout = (props) => {
    const { errors, responseData, token, post} = useFetch(true);
    
    useEffect(() => {
        if(!responseData){
            post("/wods", {})
        }
        console.log("testde la mort", responseData);
    }, [responseData])
    return(
        <div className="workout">

        </div>
    )
}

export default Workout;