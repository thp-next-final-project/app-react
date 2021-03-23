const Ingredient = ({ingredient}:any) => {
  const handleMesure = () => {
    if (ingredient.liter) {
      return `${ingredient.liter} mL`
    }
    if (ingredient.weight) {
      return `${ingredient.weight} kg`
    }
    if (ingredient.quantity) {
      return `${ingredient.quantity} x`
    }
  }
  return (
    <>
      <p>{handleMesure()} - {ingredient.name}</p>
    </>
  )
}

export default Ingredient