import { Link } from 'react-router-dom';
import profilePicture from '../../assets/profile-picture.png';
import informations from '../../assets/icons/informations.png';
import menu from '../../assets/icons/menu2.png';
import sport from '../../assets/icons/sport.png';
import favorite from '../../assets/icons/favorite.png';
import statistics from '../../assets/icons/statistics.png';


const ProfileMenu = () => {
    
    return (
        <>
            <div className="profile-picture-container">
                <img className="profile-picture" src={profilePicture} alt="photo de profil"/>
            </div>
            <ul className="list-menu">    
                <li className="items-list-menu">
                    <img className="icons-menu" src={informations} alt="icône informations"/>
                    <Link className="link-menu" to="/profile">Informations</Link>
                </li>  
                
                <li className="items-list-menu">
                    <img className="icons-menu" src={sport} alt="icône entraînement"/>
                    <Link className="link-menu" to="">Entraînement du jour</Link>
                </li> 
                <li className="items-list-menu">
                    <img className="icons-menu" src={menu} alt="icône menu"/>
                    <Link className="link-menu" to="">Menus du jour</Link>
                </li> 
                <li className="items-list-menu">
                    <img className="icons-menu" src={favorite} alt="icône favoris"/>
                    <Link className="link-menu" to="">Favoris</Link>
                </li> 
                <li className="items-list-menu">
                    <img className="icons-menu" src={statistics} alt="icône progression"/>
                    <Link className="link-menu" to="">Progression</Link>
                </li> 
                
            </ul>
        </>
    )
}

export default ProfileMenu;