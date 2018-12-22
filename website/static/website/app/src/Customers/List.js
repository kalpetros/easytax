import styles from '../../../css/src/Customers/List.css';
import {TopBar} from './List/TopBar';
import {Content} from './List/Content';

import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.list}>
              <TopBar onDeleteClick={this.props.onDeleteClick}
                      onAddClick={this.props.onAddClick}/>
              <Content onViewClick={this.props.onViewClick}/>
	    </div>
	);
    }
}

export{List};
