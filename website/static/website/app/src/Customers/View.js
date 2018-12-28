import styles from '../../../css/src/Customers/View.css';
import {Menu} from '../Menu';
import {Customer} from './View/Customer';

import update from 'immutability-helper';
import React from 'react';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'customer'
        };
        
        this.handleViewClick = this.handleViewClick.bind(this);
    }
    componentDidMount() {
    }
    renderView() {
        if (this.state.view == 'customer') {
            return(
                <Customer customer={this.props.customer}
                          onBackClick={this.props.onBackClick}/>
            );
        } else if (this.state.view == 'rec') {
            return(
                null
            );
        } else if (this.state.view == 'efk') {
            return(
                null
            );
        } else if (this.state.view == 'inf') {
            return(
                null
            );
        } else if (this.state.view == 'reg') {
            return(
                null
            );
        } else if (this.state.view == 'pay') {
            return(
                null
            );
        } else {
            return(
                <Customer/>
            );
        }
    }
    handleViewClick(event) {
        const newState = update(this.state, {
            view: {$set: event.currentTarget.id}
        });

        this.setState(newState);
    }
    render() {
        let customer = this.props.content.find(c => c.pk == this.props.customer);
        let customerName = `${customer.first_name} ${customer.last_name}`;
        
        let list = [
            {name: customerName, id: 'customer'},
            {name: 'Οφειλές', id: 'rec'},
            {name: 'ΕΦΚΑ', id: 'efk'},
            {name: 'Eνημερότητα', id: 'inf'},
            {name: 'Μητρώο', id: 'reg'},
            {name: 'Πληρωμές', id: 'pay'},
            {name: 'Μισθωτήρια', id: 'sld'},
            {name: 'Δημόσια Κλήρωση', id: 'pdr'},
            {name: 'Αυτοκίνητα', id: 'car'},
            {name: 'Ακατάσχετος', id: 'upd'},
            {name: 'Επιδόματα', id: 'han'}
        ];
        
	return(
	    <div className={styles.view}>
              <Menu list={list}
                    active={this.state.view}
                    className={styles.menu}
                    onClick={this.handleViewClick}/>
              <div className={styles.content}>
                {this.renderView()}
              </div>
	    </div>
	);
    }
}

export{View};
