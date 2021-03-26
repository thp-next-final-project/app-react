const Menu = (props) => (
    <div className="menu">
        {
            props.exos?.map((exo) => (
                <div className="choice" onClick={()=>{props.update(exo.id)}} >
                    {
                        exo.name
                        
                    }
                </div>
            ))
        }
    </div>
)

export default Menu