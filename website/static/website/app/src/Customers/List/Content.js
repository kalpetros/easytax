import styles from '../../../../css/src/Customers/List/Content.css';

import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    renderBody() {
        let items = Array(25).fill(1).map((item, index) => {
            return(
                <tr key={index}
                    onClick={this.props.onViewClick}>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>{index + 1}</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>SK88291</td>
                  <td>$392.90</td>
                </tr>
            );
        });

        return items;
    }
    render() {
	return(
	    <div className={styles.content}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox"/>
                    </th>
                    <th>240 entries</th>
                    <th>Name / Entity</th>
                    <th>Name</th>
                    <th>Tax number</th>
                    <th>Credit</th>
                  </tr>
                </thead>
                <tbody className={styles.tbody}>
                  {this.renderBody()}
                </tbody>
              </table>
            </div>
	);
    }
}

export{Content};
