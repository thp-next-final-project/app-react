import workout from '../../../assets/icons/workout.png';
import menu from '../../../assets/icons/menu.png';
import followup from '../../../assets/icons/followup.png';


export function Presentation () {
    return (
    <>
        <h2 className="title-presentation"><strong>Sporteat</strong>, c'est quoi ?</h2>                
       
        
        <div className="container-icons">
                <a href="#workout" className="cards">
                    <div className="card">
                        <img src={workout} className="icons" alt="workout"></img>
                    </div>
                    <h3>Des exercices sur mesure</h3>
                </a>
                
                <a href="#menu" className="cards">
                    <div className="card">
                        <img src={menu} className="icons" alt="menu"></img>
                    </div>
                    <h3>Des menus personnalisés</h3>
                </a>
                <a href="#followup" className="cards">
                    <div className="card">
                        <img src={followup} className="icons" alt="followup"></img>
                    </div>
                    <h3>Un suivi régulier</h3>
                </a>
            </div>
        </>

            
       
    )

};

