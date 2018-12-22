import styles from '../../../css/src/Components/Modal.css';
import {Button} from '../Components/Button';
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
                <div className={styles.header}>
                  <span>Add a client</span>
                </div>
                <div className={styles.content}>
                  {this.props.children}
                </div>
                <div className={styles.footer}>
                  <Button title="Create"/>
                </div>
	      </div>
            </Overlay>
	);
    }
}

export{Modal};
