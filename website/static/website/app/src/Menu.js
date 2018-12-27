import styles from '../../css/src/Menu.css';

import update from 'immutability-helper';
import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    renderList() {
        let list = this.props.list;
        
        let items = list.map((item, index) => {
            let className = (
                item.id == this.props.active ? styles.active : styles.li
            );
            
            return(
                <li key={index}
                    className={className}
                    id={list[index].id}
                    onClick={this.props.onClick}>
                  <i className="material-icons">{list[index].icon}</i> {list[index].name}
                </li>
            );
        });

        return items;
    }
    render() {
        let className = this.props.className ? (
            `${styles.menu} ${this.props.className}`
        ) : styles.menu;
        
	return(
	    <div className={className}>
              <ul className={styles.list}>
                {this.renderList()}
              </ul>
	    </div>
	);
    }
}

export{Menu};
