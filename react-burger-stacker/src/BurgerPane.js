import React, { Component } from 'react';
import Ingredients from './Ingredients';
import ClearBoard from './ClearBoard';
import './App.css'

class BurgerPane extends Component {
    render() {
        let burgerIng =this.state.burgerArray.map((food,index) => {
            return <BurgerIng food={food} key={index} />
        })
        return (
            <div>
                <div></div>
                <h1>Burger Pane</h1>
                <ClearBoard />
            </div>
        )
    }
}

export default BurgerPane;