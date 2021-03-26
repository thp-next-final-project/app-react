import {useState, useEffect} from "react"
import {useFetch} from "../../hooks/useFetch";
import Menu from './menu'
import Progress from './progress'

const WodsProgress = () => {
    const [exercises, updateExercises] = useState();
    const [choice, updateChoice] = useState();
    const [perfs, updatePerfs] = useState();
    const [exercise, updateExercise] = useState();
    const {responseData, get} = useFetch(true);
    const {responseData:myPerfs, get:getPerfs} = useFetch(true);
    const {responseData:exo, get:getExos} = useFetch(true);
    useEffect(() => {
        get("/exercices")
    }, [])
    useEffect(() => {
        getPerfs("/my_performances")
    }, []);
    useEffect(() => {
        const apiReturnTreatment = responseData?.filter((item, index) => (responseData.indexOf(item) == index))
        console.log(apiReturnTreatment);
        updateExercises(apiReturnTreatment);
    }, [responseData])
    useEffect(() => {
        updatePerfs(myPerfs);
        console.log("myPerfs");
        console.log(myPerfs);
    }, [myPerfs])
    useEffect(() => {
        getExos(`/exercices/${choice}`)
    }, [choice])
    useEffect(() => {
        updateExercise(exo);
        console.log(exo);
    }, [exo])
    return(
        <div>
            <Menu exos={exercises} update={updateChoice}/>
            {
                choice
            }
            {
                exercise
                &&
                <Progress data={exercise}/>
            }
        </div>
    )
}

export default WodsProgress