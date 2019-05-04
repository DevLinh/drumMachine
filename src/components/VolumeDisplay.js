import React from "react";
import PropTypes from "prop-types";

class VolumeDisplay extends React.Component {
  render() {
    return (
      <div
        className={
          "volume-display" + (this.props.power ? " volume-display--on" : "")
        }
      >
        Vol: {this.props.volume} %
      </div>
    );
  }
}
VolumeDisplay.propTypes = {
  volume: PropTypes.number.isRequired
};

export default VolumeDisplay;
