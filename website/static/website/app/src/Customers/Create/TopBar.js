import styles from '../../../../css/src/Customers/Create/TopBar.css';
import {Button} from '../../Components/Button';

import React from 'react';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.topBar}>
              <div className={styles.left}>
                <Button icon="arrow_back"
                        type={"round"}
                        onClick={this.props.onBackClick}/>
              </div>
              <div className={styles.right}>
                <Button icon="save"
                        type={"round"}
                        onClick={this.props.onAddClick}/>
              </div>
            </div>
	);
    }
}

export{TopBar};
