import styles from '../../../css/src/Components/TopBar.css';

import React from 'react';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
	return(
	    <div className={styles.topBar}>
              <div className={styles.left}>
                {this.props.left}
              </div>
              <div className={styles.right}>
                {this.props.right}
              </div>
            </div>
	);
    }
}

export{TopBar};
