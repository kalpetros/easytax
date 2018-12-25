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
    renderName() {
        if (typeof this.props.name !== 'undefined') {
            return(
                <span>{this.props.name}</span>
            );
        }

        return null;
    }
    render() {
        let classes = {
            basic: styles.basic,
            round: styles.round
        };
        
        let className = this.props.type ? classes[this.props.type] : classes.basic;
        
	return(
	    <button className={className}
                    onClick={this.props.onClick}>
              {this.renderIcon()}
              {this.renderName()}
	    </button>
	);
    }
}

export{Button};
