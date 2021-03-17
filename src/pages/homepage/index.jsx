import { Link } from "react-router-dom";
import { Presentation } from './presentation/index';
import { Workout } from './workout/index';
import { Menu } from './menu/index';
import { Followup } from './followup/index';


export function Homepage () {
    return (
     <div className="homepage-container">
         <div className="header">
             <h1>Le sport sur mesure, jusque dans l'assiette !</h1>
             <p>Sporteat vous propose un <strong>programme sportif</strong> et <strong>nutrionnel</strong>,</p>
             <p>afin que vous atteignez rapidement les <strong>objectifs</strong> que vous avez défini.</p>
             <Link to="/signup">
                <button className="hp-cta">Commencer dès maintenant</button>
            </Link> 
         </div>
       
        <div className="card-homepage">             
            <Presentation/>
        </div>
        <div className="workout-section card-section"id="workout">
            <Workout/>        
        </div>
        <div className="food-section card-section" id="menu">
            <Menu/>
        </div>
        <div className="followup-section card-section" id="followup">
            <Followup/>
        </div>
        <Link to="/signup">
            <button className="hp-cta">Commencer dès maintenant</button>
        </Link> 

    </div>
       
    )

};

