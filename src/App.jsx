import receta from "./assets/image-omelette.jpeg"
import "./design-sistems.css"
import "./app-estructura.css"
function App (){
    return (<>
    
    <article >
        <img src={receta} alt="Omelette"/>  
        <div className="all">
        <header> 
            <h1 className="text-preset-1 stone-900" >Simple Omelette Recipe</h1>
            <p className="text-preset-4 stone-600">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </header>
        <div className="preparation-time">
            <h2 className="text-preset-3 rose-800">Preparation Time</h2>
            <dl className="preparation-list">
                <span className="rose-800 text-preset-4-bold">•</span>
                <div className="descriptive-container">
                    <dt className="text-preset-4-bold stone-600">Total: </dt>
                    <dd className="text-preset-4 stone-600"> Approximately 10 minutes</dd>
                </div>
                <span className="rose-800 text-preset-4-bold">•</span>
                <div className="descriptive-container">
                    <dt className="text-preset-4-bold stone-600">Preparation: </dt>
                    <dd className="text-preset-4 stone-600"> 5 minutes</dd>
                </div>
                <span className="rose-800 text-preset-4-bold">•</span>
                <div className="descriptive-container">
                    <dt className="text-preset-4-bold stone-600">Cooking: </dt>
                    <dd className="text-preset-4 stone-600"> 5 minutes</dd>
                </div>
            </dl>
        </div>

        <section className="section-ingredients">
            <h2 className="text-preset-2 brown">Ingredients</h2>
            <ul>
                <span className="brown text-preset-4-bold">•</span>
                <li className="text-preset-4 stone-600">2-3 large eggs</li>
                <span className="brown text-preset-4-bold">•</span>
                <li className="text-preset-4 stone-600">Salt, to taste</li>
                <span className="brown text-preset-4-bold">•</span>
                <li className="text-preset-4 stone-600">Pepper, to taste</li>
                <span className="brown text-preset-4-bold">•</span>
                <li className="text-preset-4 stone-600">1 tablespoon of butter or oil</li>
                <span className="brown text-preset-4-bold">•</span>
                <li className="text-preset-4 stone-600">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>   
        </section>
        <section className="section-instructions">
            <h2 className="text-preset-2 brown">Instructions</h2>
            <ol className="instructions-container">
                <li>
                    <span className="text-preset-4-bold brown">1.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Beat the eggs: </dt>
                        <dd className="text-preset-4 stone-600">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</dd>
                    </dl>
                </li>
                <li>    
                    <span className="text-preset-4-bold brown">2.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Heat the pan: </dt>
                        <dd className="text-preset-4 stone-600">Place a non-stick frying pan over medium heat and add butter or oil</dd>
                    </dl>
                </li>
                <li>
                    <span className="text-preset-4-bold brown">3.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Cook the omelette: </dt>
                        <dd className="text-preset-4 stone-600">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</dd>
                    </dl>
                </li>
                <li>
                    <span className="text-preset-4-bold brown">4.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Add fillings (optional): </dt>
                        <dd className="text-preset-4 stone-600">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</dd>
                    </dl>
                </li>
                <li>
                    <span className="text-preset-4-bold brown">5.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Fold and serve:</dt>
                        <dd className="text-preset-4 stone-600">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</dd>
                    </dl>
                </li>
                <li>
                    <span className="text-preset-4-bold brown">1.</span>
                    <dl>
                        <dt className="text-preset-4-bold stone-600">Enjoy: </dt>
                        <dd className="text-preset-4 stone-600">Serve hot, with additional salt and pepper if needed.</dd>
                    </dl>
                </li>
            </ol>
        </section>

        <section className="section-nutrition">
            <h2 className="text-preset-2 brown">Nutrition</h2>
            <p className="text-preset-4 stone-600">The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
                <tbody>
                    <tr>
                        <th className="text-preset-4 stone-600" scope="row">Calories</th>
                        <td className="text-preset-4-bold brown">277kcal</td>
                    </tr>
                    <tr>
                        <th className="text-preset-4 stone-600" scope="row">Carbs</th>
                        <td className="text-preset-4-bold brown">0g</td>
                    </tr>
                    <tr>
                        <th className="text-preset-4 stone-600" scope="row">Protein</th>
                        <td className="text-preset-4-bold brown">20g</td>
                    </tr>
                    <tr>
                        <th className="text-preset-4 stone-600" scope="row">fat</th>
                        <td className="text-preset-4-bold brown">22g</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </div>
    </article>
    </>)
}

export default App