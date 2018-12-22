import styles from '../../../css/src/Components/Button.css';

import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }
    renderIcon() {
        if (typeof this.props.icon !== 'undefined') {
            return(
                <i className="material-icons">{this.props.icon}</i>
            );
        }

        return null;
    }
    renderTitle() {
        if (typeof this.props.title !== 'undefined') {
            return(
                <span>{this.props.title}</span>
            );
        }

        return null;
    }
    render() {
	return(
	    <button className={styles.button}
                    onClick={this.props.onClick}>
              {this.renderIcon()}
              {this.renderTitle()}
	    </button>
	);
    }
}

export{Button};
