import React from "react";

class DeviceFooter extends React.Component {
  render() {
    return (
      <div className="project-info">
        <p>freeCodeCamp Project</p>
        <p>
          <a
            rel="noopener noreferrer"
            href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine/"
            target="_blank"
          >
            Build a Drum Machine
          </a>
        </p>
        <p>
          Made by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/devlinh99bqb"
            target="_blank"
          >
            Linh Vo
          </a>
        </p>
      </div>
    );
  }
}

export default DeviceFooter;
