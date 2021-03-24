import React from "react";
import { useEffect } from "react";


const TimeCount = (props) => {
    

    useEffect(() => {        
        timeFlow()
      }, [props.time && false]);
    
    const timeFlow = () => {
        setTimeout(function(){
            props.setTime(props.time-1);
        }, 1000);
    }

    return (
        <div>{props.time}</div>
    )
};

export default TimeCount;