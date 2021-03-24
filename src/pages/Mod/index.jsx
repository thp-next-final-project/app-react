import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch'
import Menu from '../../components/Repas/index';


const Wod = () => {
  const { isLoading, responseData:Mod , get} = useFetch(true);

  useEffect(() => {
    if(!Mod){
        get("/mods")
    }
    console.log("Mod", Mod);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [Mod])
  return (
    <>
      { (!Mod && isLoading) && <p>2 sec ça charge</p>}
      { Mod && 
      <div className="menu-of-the-day"> 
        <p>Mon objectif de calorie pour la journée : {Mod.calories} calories</p> 
          { Mod.meals.map((meal, index) => (
            <Menu
                meal={meal}
                key={index}
              />
          ))}
      </div>
}
    </>
  )
}

export default Wod;