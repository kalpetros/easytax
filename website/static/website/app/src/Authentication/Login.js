import styles from '../../../css/src/Authentication/Login.css';
import {Input} from '../Forms/Input';
import {Button} from '../Components/Button';
import {Panel} from '../Components/Panel';

import update from 'immutability-helper';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
	return(
            <Panel>
              <div className={styles.login}>
                <div>
                  <Input id="username"
                         name="username"
                         type="text"
                         label="Όνομα Χρήστη"
                         value={this.props.form.username}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Input id="password"
                         name="password"
                         type="password"
                         label="Κωδικός πρόσβασης"
                         value={this.props.form.password}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Button name="Σύνδεση"
                          onClick={this.props.onClick}/>
                </div>
                <div>
                  <a href="#">Forgot your password?</a>
                </div>
                <div>
                  <a href="#"
                     onClick={this.props.onViewChange}>
                    Don't have an account? Join
                  </a>
                </div>
              </div>
            </Panel>
	);
    }
}

export{Login};
