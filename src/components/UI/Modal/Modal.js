import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
        
    }

    componentDidUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', //vh means viewport height (slides out of the screen)
                        opacity: this.props.show ? '1' : '0' // checks whether to show up or disapear
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;