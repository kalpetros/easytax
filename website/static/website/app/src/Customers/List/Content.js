import styles from '../../../../css/src/Customers/List/Content.css';

import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    renderTableBody() {
        let items = this.props.content.map((item, index) => {
            let firstName = item.first_name;
            let lastName = item.last_name;
            let taxNumber = item.tax_number;
            let country = item.country;
            
            return(
                <tr key={index}
                    id={item.pk}
                    onClick={this.props.onViewClick}>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>{index + 1}</td>
                  <td>{lastName}</td>
                  <td>{firstName}</td>
                  <td>{taxNumber}</td>
                  <td>{country}</td>
                </tr>
            );
        });

        return(
            <tbody className={styles.tbody}>
              {items}
            </tbody>
        );
    }
    renderTableHead() {
        let entries = this.props.content.length;

        if (entries == 1) {
            entries = `${entries} entry`;
        } else {
            entries = `${entries} entries`;
        }
        
        return(
            <thead>
              <tr>
                <th>
                  <input type="checkbox"/>
                </th>
                <th>{entries}</th>
                <th>Surname / Entity</th>
                <th>Name</th>
                <th>Tax number</th>
                <th>Country</th>
              </tr>
            </thead>
        );
    }
    renderTable() {
        if (this.props.content.length > 0) {
            return(
                <table className={styles.table}>
                  {this.renderTableHead()}
                  {this.renderTableBody()}
                </table>
            );
        }

        return null;
    }
    render() {
	return(
	    <div className={styles.content}>
              {this.renderTable()}
            </div>
	);
    }
}

export{Content};
