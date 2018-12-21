import styles from '../../../css/src/Components/Modal.css';
import {Overlay} from './Overlay';

import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
            <Overlay>
              <div className={styles.modal}>
	      </div>
            </Overlay>
	);
    }
}

export{Modal};
