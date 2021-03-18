import { useEffect } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

const Observed = (props) => {

    const [ref, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;
    
    useEffect(() => {
        console.log(`The component is ${isVisible ? "visible" : "not visible"}.`) 
    },[isVisible])


    if (isVisible === true){
        console.log("ok if réussit")
    }

    return (
        <div className={` card-section ${isVisible? "card-section-scrolled" : ""}`} ref={ref}>
            {props.children}
        </div>
    )

};
export default Observed;