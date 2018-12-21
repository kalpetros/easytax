import styles from '../../css/src/Customers.css';
import {Modal} from './Components/Modal';
import {TopBar} from './Customers/TopBar';
import {Content} from './Customers/Content';

import React from 'react';
import ReactDOM from 'react-dom';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }
    componentDidMount() {
    }
    handleDeleteClick() {
        console.log('delete clicked');
    }
    handleAddClick() {
        console.log('add clicked');
        let modalContainer = document.getElementById('modal-container');

        ReactDOM.render(
            <Modal/>,
            modalContainer
        );
    }
    render() {
	return(
	    <div className={styles.customers}>
              <TopBar onDeleteClick={this.handleDeleteClick}
                      onAddClick={this.handleAddClick}/>
              <Content/>
	    </div>
	);
    }
}

export{Customers};
