const Card = (props) => (
    <div className="card">
        <h2>{props.card.name}</h2>
        <h3>temps : {props.card.time.min} : {props.card.time.sec}</h3>
        <h3>nombre de tours : {props.card.rep_set} </h3>
        <h2>Exercices : </h2>
        <div className="exos">

        </div>
    </div>
)

export default Card;