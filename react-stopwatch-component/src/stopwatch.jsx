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
  }

  increment() {
    setInterval(() => this.state.timer + 1, 1000);
  }

  handlePlay() {
    if (this.state.isPaused) {
      this.setState({
        isPaused: false,
        timer: this.state.timer + 1
      });
    } else {
      this.setState({
        isPaused: true,
        timer: 0
      });
    }
  }

  render() {
    if (!this.state.isPaused) {
      return (
        <div>
          <div className={'circle'}>
            <p>{this.state.timer}</p>
          </div>
          <i className={'fas fa-pause'} onClick={this.handlePlay}></i>
        </div>
      );
    }
    return (
      <div>
        <div className={'circle'}>
          <p>{this.state.timer}</p>
        </div>
        <i className={'fas fa-play'} onClick={this.handlePlay}></i>
      </div>
    );
  }
}

const stopwatch = <Stopwatch />;

export default stopwatch;
