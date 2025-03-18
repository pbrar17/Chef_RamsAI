import {useState} from 'react';
export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    const [loading, setLoading] = useState(false);

    const handleGetRecipe = async () => {
        setLoading(true);
        await props.getRecipe();
        setLoading(false);
    }
    return (
        <section className='ingredients-section'>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length < 4 && <h3>Please Enter Atleast 4 Ingredients to Get Started</h3>}
            {props.ingredients.length >= 4 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                {/* <button onClick={props.getRecipe}>Get a recipe</button> */}

                <button onClick={handleGetRecipe} disabled={loading}>
                Get a recipe
                        {/* {loading ? "Loading..." : "Get a recipe"} */}
                    </button>
                    {/* {loading && <div className="spinner"></div>} */}


            </div>}
            {loading && (
                        <div className="frying-pan-loader">
                            <div className="pan">
                                <div className="handle"></div>
                            </div>
                            <div className="food food-1">🥕</div>
                            <div className="food food-2">🥩</div>
                            <div className="food food-3">🥓</div>
                        </div>
                    )}
        </section>
    )
}