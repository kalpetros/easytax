import styles from '../../css/src/Settings.css';

import {Link} from 'react-router-dom';
import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.settings}>
	    </div>
	);
    }
}

export{Settings};
