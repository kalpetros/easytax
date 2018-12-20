import styles from '../../css/src/Landing.css';
import {Button} from './Components/Button';

import React from 'react';

class Landing extends React.Component {
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
                <tr key={index}>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>{index + 1}</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>SK88291</td>
                  <td>19924828</td>
                  <td>$392.90</td>
                </tr>
            );
        });

        return items;
    }
    render() {
	return(
	    <div className={styles.landing}>
              <div className={styles.actionBar}>
                <div className={styles.left}>
                  <Button icon="search"/>
                </div>
                <div className={styles.right}>
                  <Button icon="delete_forever"/>
                  <Button icon="add"/>
                </div>
              </div>
              <div className={styles.content}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox"/>
                      </th>
                      <th>#</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Social security number</th>
                      <th>Tax number</th>
                      <th>Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderBody()}
                  </tbody>
                </table>
              </div>
	    </div>
	);
    }
}

export{Landing};
