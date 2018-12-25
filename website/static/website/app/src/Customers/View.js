import styles from '../../../css/src/Customers/View.css';
import {Menu} from '../Menu';

import update from 'immutability-helper';
import React from 'react';
import ReactDOM from 'react-dom';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        let list = [
            {name: 'John Doe', id: 'usn'},
            {name: 'Οφειλές', id: 'rec'},
            {name: 'ΕΦΚΑ', id: 'efk'},
            {name: 'Eνημερότητα', id: 'cus'},
            {name: 'Μητρώο', id: 'idx'},
            {name: 'Πληρωμές', id: 'pay'}
        ];
        
	return(
	    <div className={styles.view}>
              <Menu list={list}
                    className={styles.menu}/>
              <div>
              </div>
	    </div>
	);
    }
}

export{View};
