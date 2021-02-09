import React from 'react'
import Ingredient from './Ingredient'


function BurgerStack (props) {
        console.log(typeof props.burgerBits)
        let bits = props.burgerBits.map(bit => {
            return <li><Ingredient ingredient={bit} /></li>
        })
        return(
            <div>
                <h5>Your burger here</h5>
                <ul className='burger'></ul>
                    {bits}
            </div>
        )
    }


export default BurgerStack