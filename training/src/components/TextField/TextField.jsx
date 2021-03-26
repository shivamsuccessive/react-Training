import React, { Component } from "react";
import Styles from "./style.js";
import PropTypes from "prop-types";
class TextField extends Component {
  constructor(props) {
    console.log("--------> controller from TextField component <------",props);
    super(props);
  }

  render() {
    return (
      <>
        <div>
          {this.props.value === "101" ? (
            <input
              style={Styles.errorStyle}
              type="text"
              disabled={this.props.disable}
              error={this.props.error}
              value={this.props.value}
            />
          ) : (
            <input
              style={Styles.InputStyle}
              onChange={e => this.props.handleChangeInput(e, "input")}
              type="text"
              disabled={this.props.disable}
              onBlur={this.props.isTouched}
            />
          )}
        </div>
      </>
    );
  }
}
TextField.defaultProps = {
  error: "",
  value: "",
  onChange: ""
};

TextField.propsTypes = {
  error: PropTypes.string.required,
  value: PropTypes.string.required,
  onChange: PropTypes.func
};

export default TextField;
