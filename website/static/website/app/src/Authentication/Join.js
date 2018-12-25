import styles from '../../../css/src/Authentication/Join.css';
import {FormErrors} from '../Forms/FormErrors';
import {Input} from '../Forms/Input';
import {Button} from '../Components/Button';
import {Panel} from '../Components/Panel';

import update from 'immutability-helper';
import React from 'react';

class Join extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
	return(
            <Panel>
              <div className={styles.join}>
                <FormErrors errors={this.props.formErrors}/>
                <div>
                  <Input id="username"
                         name="username"
                         type="text"
                         label="Username"
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
                  <Input id="password2"
                         name="password2"
                         type="password"
                         label="Επιβεβαίωση κωδικού"
                         value={this.props.form.password2}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Input id="email"
                         name="email"
                         type="email"
                         label="E-mail"
                         value={this.props.form.email}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Input id="first_name"
                         name="first_name"
                         type="text"
                         label="Όνομα"
                         value={this.props.form.first_name}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Input id="last_name"
                         name="last_name"
                         type="text"
                         label="Επώνυμο"
                         value={this.props.form.last_name}
                         onChange={this.props.onChange}/>
                </div>
                <div>
                  <Button name="Δημιουργία λογαριασμού"
                          onClick={this.props.onClick}/>
                </div>
                <div>
                  <span onClick={this.props.onViewChange}>
                    Already have an account? Log in
                  </span>
                </div>
              </div>
            </Panel>
	);
    }
}

export{Join};
