import React, { Component } from 'react';
import Ingredients from './Ingredients';

class IngredientList extends Component {
    render() {

        return (
            <div>
                <li>{this.props.food.name}</li>
            </div>
        )
    }
}


export default IngredientList;