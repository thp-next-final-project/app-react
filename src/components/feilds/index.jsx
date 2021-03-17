export const Feild = (props) => {

    return(
        <div className={`feild ${props.invalid && "error"}`}>
        {   
            props.area 
            &&
            <textarea name="" id="" cols="30" rows="10" className="input" 
            placeholder=" " value={props.value} onChange={props.change} ></textarea>
            ||
            <input type={
                props.password
                &&
                "password"
                ||
                "text"
            } className="input" placeholder=" "
              value={props.value} onChange={props.change}/> }
            <div className="label">
                {props.label}
            </div>
        </div>
    )
}