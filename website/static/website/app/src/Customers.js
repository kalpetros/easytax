import styles from '../../css/src/Customers.css';
import {Modal} from './Components/Modal';
import {List} from './Customers/List';
import {Create} from './Customers/Create';
import {View} from './Customers/View';

import update from 'immutability-helper';
import React from 'react';
import ReactDOM from 'react-dom';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'list'
        };

        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleViewClick = this.handleViewClick.bind(this);
    }
    componentDidMount() {
    }
    handleBackClick() {
        const newState = update(this.state, {
            view: {$set: 'list'}
        });

        this.setState(newState);
    }
    handleDeleteClick() {
        console.log('delete clicked');
    }
    handleCreateClick() {
        const newState = update(this.state, {
            view: {$set: 'create'}
        });

        this.setState(newState);
    }
    handleViewClick() {
        const newState = update(this.state, {
            view: {$set: 'view'}
        });

        this.setState(newState);
    }
    renderView() {
        if (this.state.view == 'create') {
            return(
                <Create onBackClick={this.handleBackClick}
                        onDeleteClick={this.handleDeleteClick}
                        onAddClick={this.handleCreateClick}/>
            );
        } else if (this.state.view == 'view') {
            return(
                <View onBackClick={this.handleBackClick}
                      onDeleteClick={this.handleDeleteClick}
                      onAddClick={this.handleCreateClick}/>
            );
        }

        return(
            <List onDeleteClick={this.handleDeleteClick}
                  onAddClick={this.handleCreateClick}
                  onViewClick={this.handleViewClick}/>
        );
    }
    render() {
	return(
	    <div className={styles.customers}>
              {this.renderView()}
	    </div>
	);
    }
}

export{Customers};
