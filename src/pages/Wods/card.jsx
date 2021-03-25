const Card = (props) => {
    const rep = props.card.set.rep;
    return (
    <div className="card">
        <h2>{props.card.name}</h2>
        <div className="exos">    
            <h3>Temps : {props.card.time.min} min {props.card.time.sec} s</h3>
            <h3>Nombre de tours : {props.card.rep_set} </h3>
        </div>
        <h3>Exercices</h3>
        {console.log(props.card)}
        <div className="exos">

        
            {
                props.card.set.exercices.map(exo => (
                    <div className="exo">
                        <h4>{exo.name} - {rep} répétitions</h4>
                        <p>{exo.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
)}

export default Card;