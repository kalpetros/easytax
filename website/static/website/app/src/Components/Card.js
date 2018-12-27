import styles from '../../../css/src/Components/Card.css';

import {Link} from 'react-router-dom';
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.card}>
              <div className={styles.title}>
                {this.props.title}
              </div>
              <div className={styles.content}>
                {this.props.children}
              </div>
	    </div>
	);
    }
}

export{Card};
