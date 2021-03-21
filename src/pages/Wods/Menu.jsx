export const Menu = (props) => {
    const entitled = [
        "Haut du corps",
        "Bas du corps",
        "Full body"
    ];
    return(
        <div className="menu">
            <div className="sub">
                <h3>{entitled[props.choice-1]}</h3>
            </div>
            
        </div>
    )
}