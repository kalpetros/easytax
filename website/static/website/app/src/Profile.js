import styles from '../../css/src/Profile.css';

import {Link} from 'react-router-dom';
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.profile}>
	    </div>
	);
    }
}

export{Profile};
