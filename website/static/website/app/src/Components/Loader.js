import styles from '../../../css/src/Components/Loader.css';

import update from 'immutability-helper';
import React from 'react';

class Loader extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
        return(
            <div className={styles.loader}>

            </div>
        );
    }
}

export{Loader};
