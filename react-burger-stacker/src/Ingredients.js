import React, { Component } from 'react';

/* */
class Ingredients extends Component {
    render () {
        return (
            <div>
                <li>{this.props.task}</li>
            </div>
        )
    }
} 

export default Ingredients;