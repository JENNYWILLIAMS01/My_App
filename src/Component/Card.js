const Card = (props) => {
    return(
        <div className="Card">
            <img className="Snacks" src={props.image} />
            <h4>
                {props.name}
            </h4>
            <p>Price: #{props.price}</p>
            <button onClick={props.onClick}>Add</button>
        </div>
    )
}

export default Card;