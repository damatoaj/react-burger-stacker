import React, { Component } from 'react';
import Ingredients from './Ingredients';
import './App.css'


class IngredientList extends Component {
    render() {

        return (
            <div>
                <li>{this.props.food.name}</li>
                <button >Add Ingredient</button>
            </div>
        )
    }
}


export default IngredientList;