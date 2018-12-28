import styles from '../../../css/src/Clients/List.css';
import {TopBar} from '../Components/TopBar';
import {Button} from '../Components/Button';

import {Content} from './List/Content';

import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let left = (
            <Button icon="search"
                    type={"round"}/>
        );

        let right = (
            <React.Fragment>
              <Button icon="reorder"
                      type={"round"}/>
              <Button icon="delete_forever"
                      type={"round"}
                      onClick={this.props.onDeleteClick}/>
              <Button icon="add"
                      type={"round"}
                      onClick={this.props.onAddClick}/>
            </React.Fragment>
        );
        
	return(
	    <div className={styles.list}>
              <TopBar left={left}
                      right={right}/>
              <Content content={this.props.content}
                       onViewClick={this.props.onViewClick}/>
	    </div>
	);
    }
}

export{List};
