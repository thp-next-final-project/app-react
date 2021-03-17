


export function Homepage () {
    return (
     <div className="homepage-container">
         <div className="header">
             <h1>Le sport sur mesure, jusque dans l'assiette !</h1>
             <button className="header-cta">Commencer dès maintenant</button>
         </div>
       
        <div className="card-homepage"> 
            
            <div className="text-part">
                <h2><strong>Sporteat</strong>, c'est quoi ?</h2>
                <div className="cards">
                    <div className="card">
                        <div className="card_face card_face-title">
                            <h3>Un programme de sport personnalisé</h3>
                        </div>
                        <div className="card_face card_face-content">
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                        </div>
                    </div>
                    <div className="card card2">
                        <h3>Des menus sur mesure</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}

                    </div>
                    <div className="card card3">
                        <h3>Un niveau adapté</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                    <div className="card card4">
                        <h3>Un programme complet</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                </div>

            </div>

        </div>
        <div className="work-section">
            <h1>Un programme sportif adapté à vos envies</h1>
        </div>
        <div className="food-section">
            <h1>Une programme alimentaire sur mesure</h1>
        </div>
    </div>
       
    )

};

