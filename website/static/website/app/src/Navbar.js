import styles from '../../css/src/Navbar.css';

import {Link} from 'react-router-dom';
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
        let user = this.props.user;
        
	return(
	    <div className={styles.navbar}>
              <div className={styles.logo}>
                <ul>
                  <li>
                    <Link to="/">easytax v0.0.1</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.list}>
                <ul>
                  <li>
                    <span>
                      <span className={styles.badge}>
                        <i className="material-icons">notifications</i>
                        <span>2</span>
                      </span>
                    </span>
                  </li>
                  <li>
                    <Link to="settings">
                      <i className="material-icons">settings</i>
                    </Link>
                  </li>
                  <li>
                    <Link to="profile">
                      {user.username}
                    </Link>
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
