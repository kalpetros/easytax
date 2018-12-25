import styles from '../../../css/src/Components/Panel.css';

import React from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.panel}>
              {this.props.children}
	    </div>
	);
    }
}

export{Panel};
