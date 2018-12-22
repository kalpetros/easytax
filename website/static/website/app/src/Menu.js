import styles from '../../css/src/Menu.css';

import update from 'immutability-helper';
import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'adm'
        };

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
    }
    handleChange(event) {
        const newState = update(this.state, {
            active: {$set: event.currentTarget.id}
        });

        this.setState(newState);
    }
    renderList() {
        let list = [
            {name: 'Administration', id: 'adm', icon: 'language'},
            {name: 'Customers', id: 'cus', icon: 'supervised_user_circle'},
            {name: 'Regulations', id: 'reg', icon: 'beenhere'},
            {name: 'Tax', id: 'tax', icon: 'euro_symbol'},
            {name: 'Invoices', id: 'inv', icon: 'donut_small'},
            {name: 'Expenses', id: 'exp', icon: 'poll'}
        ];
        
        let items = list.map((item, index) => {
            let className = (
                item.id == this.state.active ? styles.active : styles.li
            );
            
            return(
                <li key={index}
                    className={className}
                    id={list[index].id}
                    onClick={this.handleChange}>
                  <i className="material-icons">{list[index].icon}</i> {list[index].name}
                </li>
            );
        });

        return items;
    }
    render() {
	return(
	    <div className={styles.menu}>
              <ul className={styles.list}>
                {this.renderList()}
              </ul>
	    </div>
	);
    }
}

export{Menu};
