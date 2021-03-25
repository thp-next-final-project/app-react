import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import {useEffect, useState} from "react"
import {useFetch} from "../../hooks/useFetch";
const Progress = () => {
    const { errors, responseData, isLoading, token, get} = useFetch(true);
    const [weights, updateWeights] = useState();
    const [reps, updateReps] = useState();
    useEffect(() => {
        get("/my_performances")
        console.log(responseData);

    }, [!responseData])
    return(
        <div>
            <XYPlot
                width={300}
                height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    data={[
                        {x: 1, y: 4},
                        {x: 5, y: 2},
                        {x: 15, y: 6}
                    ]}/>

            </XYPlot>
        </div>
    )
}

export default Progress

/*
    jours en absice
    ordonees 
        baton : nb d'exos
        courbe : nb de reps
*/