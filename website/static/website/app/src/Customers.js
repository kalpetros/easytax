import styles from '../../css/src/Customers.css';
import {List} from './Customers/List';
import {Create} from './Customers/Create';
import {View} from './Customers/View';

import axios from 'axios';
import update from 'immutability-helper';
import React from 'react';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'list',
            content: [],
            customer: null
        };

        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleViewClick = this.handleViewClick.bind(this);
    }
    componentDidMount() {
        this.fetch();
    }
    fetch() {
        let data = {
            action: 'fetch_customers'
        };
        
        axios.post('/customers_view', data)
            .then((response) => {
                if (!response.data.errors) {
                    const newState = update(this.state, {
                        content: {$set: response.data.content}
                    });

                    this.setState(newState);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
            });
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
    handleViewClick(event) {
        const newState = update(this.state, {
            view: {$set: 'view'},
            customer: {$set: event.currentTarget.id}
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
                <View content={this.state.content}
                      customer={this.state.customer}
                      onBackClick={this.handleBackClick}/>
            );
        }

        return(
            <List content={this.state.content}
                  onDeleteClick={this.handleDeleteClick}
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
