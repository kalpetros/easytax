import styles from '../../../css/src/Components/Overlay.css';

import React from 'react';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
            <div className={styles.overlay}>
              {this.props.children}
	    </div>
	);
    }
}

export{Overlay};
