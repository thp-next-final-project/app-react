import React from "react";
import { useEffect } from "react";


const TimeCount = (props) => {
    

    useEffect(() => {

        let interval = null;
        if (props.play) {
        interval = setInterval(() => {
            props.setTime(props.time + 1);
        }, 1000);
        } else if (!props.play) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.play, props.time]);

    return (
        <span>{props.time}</span>
    )
};

export default TimeCount;