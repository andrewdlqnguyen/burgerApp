import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', //vh means viewport height (slides out of the screen)
                opacity: props.show ? '1' : '0' // checks whether to show up or disapear
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;