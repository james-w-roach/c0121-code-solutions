import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      timer: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handlePlay() {
    if (this.state.isPaused) {
      this.setState({
        isPaused: false,
        timer: this.state.timer - 1
      });
    } else {
      this.setState({
        isPaused: true
      });
    }
  }

  handleReset() {

  }
}
