import {useState} from "react";
import {Menu} from "./Menu";

export const Wods = () => {
    const [menuChoice, setMenuChoice] = useState(3);
    const updateMenuChoice = (choice) => {
        setMenuChoice(choice);
    }
    return(
        <div className="override-nav">
            <div className="wod-container">

                <div className="choice">
                    <div className="card" onClick={()=>{updateMenuChoice(1)}}>
                        <h2>
                            Haut du corps
                        </h2>
                    </div>
                    <div className="card" onClick={()=>{updateMenuChoice(2)}}>
                        <h2>
                            Bas du corps
                        </h2>
                    </div>
                    <div className="card" onClick={()=>{updateMenuChoice(3)}}>
                        <h2>
                            Full body
                        </h2>
                    </div>
                </div>
                <div className="line"></div>
                <div className="menu">
                    <div className="title">
                        <h2>Entrainement du jour</h2>
                    </div>
                    <Menu choice={menuChoice}/>
                </div>
            </div>
        </div>
    );
}