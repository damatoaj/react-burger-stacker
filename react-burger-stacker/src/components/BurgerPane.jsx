import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane (props) {
    console.log(props.burgerBits)
    return(
        <div className="pane">
            <h3>Make your own burger</h3>
            <BurgerStack burgerBits={props.burgerBits} />
            <ClearBurger clear={props.clear}/>
        </div>
    )
}

export default BurgerPane