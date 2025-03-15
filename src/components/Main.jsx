import React from "react"
import IngredientsList from "../components/IngredientsList"
import TheRecipe from "../components/TheRecipe"
import { getRecipeFromMistral } from "@/app/ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState("")

   async function getRecipe() {
        // setRecipeShown(prevShown => !prevShown)
        const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <TheRecipe recipe={recipe} />}
        </main>
    )
}