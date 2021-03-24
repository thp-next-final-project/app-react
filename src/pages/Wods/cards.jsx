const Cards = (props) => (
    <div className="card">
        <h2>{props.card.name}</h2>
        <h3>temps : {props.card.time.min} : {props.card.time.sec}</h3>
        <h3>nombre de tours : {props.card.rep_set} </h3>
        <h2>Exercices : </h2>
        {console.log(props.card)}
        <div className="exos">
            {
                props.card.set.exercices.map(exo => (
                    <div className="exo">
                        <h3>{exo.name}</h3>
                        <p>{exo.description}</p>

                    </div>
                ))
            }
        </div>
    </div>
)

export default Cards;