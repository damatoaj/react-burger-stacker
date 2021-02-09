import React, { useState } from 'react';
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'

function App() { 
  
    const [ingredients, setIngredients]= useState([
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ])
    const [burgerBits, setBurgerBits] = useState([])
  

    // // //add an ingredient
  const addToStack = (e) => {
      let name = e.target.innerText
      let color = e.target.style.backgroundColor

        setBurgerBits(
            ([{name, color}, ...burgerBits])
          )}
            
            
            //clear the ingredient
  const  clearBurger = (e) => {
        console.log('No Burger For You')
        setBurgerBits(
            []
          )}
                
    return (
      <main>
        <h1>Burger Stacker</h1>
        <div className='panes'>
          <IngredientList 
            ingredients={ingredients} 
            add={addToStack} 
          />
        <BurgerPane 
          burgerBits={burgerBits} 
          clear={clearBurger}
          />
        </div>
      </main>
    )
}


export default App;