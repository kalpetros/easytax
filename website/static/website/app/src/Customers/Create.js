import styles from '../../../css/src/Customers/Create.css';
import {TopBar} from './Create/TopBar';
import {Content} from './Create/Content';

import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
	return(
	    <div className={styles.create}>
              <TopBar onBackClick={this.props.onBackClick}
                      onDeleteClick={this.props.onDeleteClick}
                      onAddClick={this.props.onAddClick}/>
              <Content/>
	    </div>
	);
    }
}

export{Create};
