import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    
    
    render() {
        //iterate over the ingredients array, return an li with Ingredient component, given the ingredient
        let ingredients = this.props.ingredients.map(elem => {
            return <li onClick={this.props.add}><Ingredient ingredient={elem} /></li>
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
}

export default IngredientList