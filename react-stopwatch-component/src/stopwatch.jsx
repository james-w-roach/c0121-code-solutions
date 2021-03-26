import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      timer: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.increment = this.increment.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.determineButton = this.determineButton.bind(this);
  }

  increment() {
    this.setState({
      timer: this.state.timer + 1
    });
  }

  handlePlay() {
    if (this.state.isPaused) {
      this.timerId = setInterval(
        () => this.increment(),
        1000
      );
      this.setState({
        isPaused: false,
        timer: this.state.timer
      });
    } else {
      clearInterval(this.timerId);
      this.setState({
        isPaused: true,
        timer: this.state.timer
      });
    }
  }

  resetTimer() {
    if (this.state.isPaused) {
      this.setState({
        timer: 0
      });
    }
  }

  determineButton() {
    if (this.state.isPaused) {
      return 'fas fa-play';
    }
    return 'fas fa-pause';
  }

  render() {
    return (
      <div>
        <div className={'watch'}>
          <p onClick={this.resetTimer}>{this.state.timer}</p>
        </div>
        <i className={this.determineButton()} onClick={this.handlePlay}></i>
      </div>
    );
  }
}

const stopwatch = <Stopwatch />;

export default stopwatch;
