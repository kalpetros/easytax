import styles from '../../../../css/src/Customers/List/TopBar.css';
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
                <Button icon="search"/>
              </div>
              <div className={styles.right}>
                <Button icon="reorder"/>
                <Button icon="delete_forever"
                        onClick={this.props.onDeleteClick}/>
                <Button icon="add"
                        onClick={this.props.onAddClick}/>
              </div>
            </div>
	);
    }
}

export{TopBar};
