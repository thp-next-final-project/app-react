const Card = (props) => (
    <div className="card">
        <h2>{props.card.name}</h2>
        <h3>{props.card.time.min} : {props.card.time.sec}</h3>
    </div>
)

export default Card;