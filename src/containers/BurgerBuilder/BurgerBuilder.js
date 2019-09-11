import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ingredients: {
    //             salad: 1,
    //             bacon: 1,
    //             cheese: 2,
    //             meat: 2
    //         }
    //     }
    // }

    state = {
        //list of object, not an array (must transform into an array for Burger.js)
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;