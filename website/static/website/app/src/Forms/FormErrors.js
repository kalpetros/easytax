import styles from '../../../css/src/Forms/FormErrors.css';

import update from 'immutability-helper';
import React from 'react';

class FormErrors extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    renderErrors() {
        let errors = this.props.errors;

        if (errors !== null) {
            try {
                errors = JSON.parse(errors);

                let items = Object.keys(errors).map((item, index) => {
                    let message = errors[item][0].message;
                    return(
                        <li key={"error-" + index}>
                          <span>{item}: </span>
                          {message}
                        </li>
                    );
                });

                return(
                    <ul className={styles.list}>
                      {items}
                    </ul>
                );
            }
            catch(error) {
            }
            
            return(
                <ul className={styles.list}>
                  <li>
                    {errors}
                  </li>
                </ul>
            );
        }

        return null;
    }
    render() {
        if (this.props.errors !== null) {
            return(
                <div className={styles.formErrors}>
                  {this.renderErrors()}
                </div>
	    );
        }

        return null;
    }
}

export{FormErrors};
