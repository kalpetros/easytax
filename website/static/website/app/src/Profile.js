import styles from '../../css/src/Profile.css';
import {Card} from './Components/Card';

import moment from 'moment';
import {Link} from 'react-router-dom';
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    render() {
        let user = this.props.user;
        let username = user.username;
        let email = user.email;
        let firstName = user.first_name;
        let lastName = user.last_name;
        let lastLogin = moment(user.last_login).format('D M Y HH:mm:ss');
        let dateJoined = moment(user.date_joined).format('D M Y HH:mm:ss');
        
	return(
	    <div className={styles.profile}>
              <div className="container">
                <Card title="User">
                  <ul className={styles.list}>
                    <li>{username}</li>
                    <li>{email}</li>
                    <li>{firstName} {lastName}</li>
                    <li>Last login: {lastLogin}</li>
                    <li>Date joined: {dateJoined}</li>
                  </ul>
                </Card>
              </div>
	    </div>
	);
    }
}

export{Profile};
