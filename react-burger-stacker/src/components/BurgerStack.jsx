import React, { Component } from 'react'
import ClearBurger from './ClearBurger'
import Ingredient from './Ingredient'


class BurgerStack extends Component {
    render() {
        let bits = this.props.burgerBits.map(bit => {
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
}

export default BurgerStack