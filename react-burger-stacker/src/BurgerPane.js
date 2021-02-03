import React, { Component } from 'react';
import Ingredients from './Ingredients';
import ClearBoard from './ClearBoard';

class BurgerPane extends Component {
    render() {
        return (
            <div>
                <h1>Burger Pane</h1>
                <ClearBoard />
            </div>
        )
    }
}

export default BurgerPane;