import React from "react";
import PropTypes from "prop-types";

class Display extends React.Component {
  render() {
    return (
      <div
        className={
          "drum-display" + (this.props.power ? " drum-display--on" : "")
        }
        id="display"
      >
        {this.props.text}
      </div>
    );
  }
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
  power: PropTypes.bool.isRequired
};

export default Display;
