import React, { Component } from 'react';

class BurgerIng extends Component {
    render() {
        return(
            <div>
                <li>{this.props.food}</li>
            </div>
        )
    }
};

export default BurgerIng;