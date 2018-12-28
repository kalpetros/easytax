import styles from '../../css/src/Clients.css';
import {List} from './Clients/List';
import {Create} from './Clients/Create';
import {View} from './Clients/View';

import axios from 'axios';
import update from 'immutability-helper';
import React from 'react';

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'list',
            content: [],
            client: null
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
            action: 'fetch_clients'
        };
        
        axios.post('/clients_view', data)
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
            client: {$set: event.currentTarget.id}
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
                      client={this.state.client}
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
	    <div className={styles.clients}>
              {this.renderView()}
	    </div>
	);
    }
}

export{Clients};
