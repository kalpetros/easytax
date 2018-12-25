import styles from '../../css/src/Navbar.css';

import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
	return(
	    <div className={styles.navbar}>
              <div className={styles.logo}>
                <ul>
                  <li><a href="/">easytax v0.0.1</a></li>
                </ul>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    <span>
                      <i className="material-icons">notifications</i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="material-icons">settings</i>
                    </span>
                  </li>
                  <li>
                    <span>
                      Guest
                    </span>
                  </li>
                  <li onClick={this.props.onLogout}>
                    <span>
                      <i className="material-icons">exit_to_app</i>
                    </span>
                  </li>
                </ul>
              </div>
	    </div>
	);
    }
}

export{Navbar};
