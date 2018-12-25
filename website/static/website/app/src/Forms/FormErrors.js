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
                        <li key={"error-" + index}>{message}</li>
                    );
                });

                return(
                    <ul>
                      {items}
                    </ul>
                );
            }
            catch(error) {
            }
            
            return(
                <span>{errors}</span>
            );
        }

        return null;
    }
    render() {
	return(
            <div className={styles.formErrors}>
              {this.renderErrors()}
            </div>
	);
    }
}

export{FormErrors};
