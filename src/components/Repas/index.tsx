import Ingredient from './Ingredient';

const Menu = ({meal}:any) => {
  const {title, name, calories, ingredients } = meal
  
  const handleTitle = () => {
    switch (title) {
      case "breakfast": 
      return "Petit-déjeuner"
      case "lunch": 
      return "Déjeuner"
      case "dinner": 
      return "Diner"
    }
  }

  return (
  
      <div className="menu">
        <h1>{handleTitle()}</h1>
        <h2>{name}  <span>{calories} calories</span></h2>
         
      <div className="ingredients"> 
        { ingredients.map((ingredient:any, index:number) => (
          <Ingredient
              ingredient={ingredient}
              key={index}
            />
        ))}
      </div>
      
      </div>

  )
}

export default Menu;