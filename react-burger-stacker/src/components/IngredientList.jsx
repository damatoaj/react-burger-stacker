import React, { useState, useEffect } from 'react'
import Ingredient from './Ingredient'

function IngredientList(props) {
        console.log(props.ingredients)
        console.log(props.add)
        // iterate over the ingredients array, return an li with Ingredient component, given the ingredient
        let ingredients = props.ingredients.map(elem => {
            return <li onClick={props.add}><Ingredient ingredient={elem} /></li>
        })
        return(
            <div className='pane'>
            <h3>Ingredient List </h3>
            <ul className='stuff-list'>
                 {ingredients}
                 
            </ul>
            </div>
    )
}


export default IngredientList