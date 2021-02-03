import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import ClearBoard from './ClearBoard';

class App extends Component {
  //make a state with the array of ingredients
  state = {
    menu: this.props.theMenu
  }

  /* clear patty function */

  /*add food function */
  
  render () {
 let menuIng = this.state.menu.map((food, index) => {
   return <IngredientList food={food} key={index} />
 })
    return (
      <div>
        <ul>{menuIng}</ul>

        <BurgerPane />

      </div>
    );
  }
}

export default App;
