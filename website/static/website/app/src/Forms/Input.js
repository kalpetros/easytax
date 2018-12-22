import styles from '../../../css/src/Forms/Input.css';

import React from "react";

class Input extends React.Component {
    render() {
        let inputClass = this.props.disabled ? styles.inputDisabled : styles.input;
        let labelClass = this.props.value !== '' ? styles.labelActive : styles.label;
	return(
            <div className={inputClass}>
              <div className={labelClass}>
                <label><i className={"fas fa-" + this.props.icon}></i> {this.props.label}</label>
              </div>
              <input id={this.props.id}
                     name={this.props.name}
                     type={this.props.type}
                     value={this.props.value}
                     min={this.props.min}
                     max={this.props.max}
                     disabled={this.props.disabled}
                     required={this.props.required}
                     onChange={this.props.onChange}/>
            </div>
	);
    }
}

export{Input};
