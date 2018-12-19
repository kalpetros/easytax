import styles from '../../css/src/Landing.css';

import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.landing}>
              <h1>Easytax</h1>
	    </div>
	);
    }
}

export{Landing};
