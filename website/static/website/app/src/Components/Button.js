import styles from '../../../css/src/Components/Button.css';

import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <button className={styles.button}>
              <i className="material-icons">{this.props.icon}</i>
	    </button>
	);
    }
}

export{Button};
