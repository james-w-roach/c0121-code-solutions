import React from 'react';

let clicks = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicks: clicks
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    clicks++;
    this.setState({
      buttonClicks: clicks
    });
  }

  render() {
    if (this.state.buttonClicks > 17) {
      return <button className={'white-hot'} onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.buttonClicks > 14) {
      return <button className={'burning'} onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.buttonClicks > 11) {
      return <button className={'hot'} onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.buttonClicks > 8) {
      return <button className={'warm'} onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.buttonClicks > 5) {
      return <button className={'lukewarm'} onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.buttonClicks > 2) {
      return <button className={'cool'} onClick={this.handleClick}>Hot Button</button>;
    }
    return <button className={'cold'} onClick={this.handleClick}>Hot Button</button>;
  }
}

const element = <HotButton />;

export default element;
