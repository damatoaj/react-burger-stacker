import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import ClearBoard from './ClearBoard';
import './App.css'

class App extends Component {
  //make a state with the array of ingredients
  state = {
    menu: this.props.theMenu,
    burgerArray: []
  }

  /* clear patty function */

  /*add food function */


  render () {
 let menuIng = this.state.menu.map((food, index) => {
   return <IngredientList food={food} key={index} />
 })


    return (
      <span class="container">
        <ul>{menuIng}</ul>

        <BurgerPane />
      </span>
    );
  }
}

export default App;
