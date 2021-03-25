import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isToggled) {
      this.setState({
        isToggled: true
      });
    } else {
      this.setState({
        isToggled: false
      });
    }
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div className={'switch'} onClick={this.handleClick}>
          <div className={'container green'}>
            <button className={'slider on'}></button>
          </div>
          <p>ON</p>
        </div>
      );
    }
    return (
      <div className={'switch'} onClick={this.handleClick}>
        <div className={'container'}>
          <button className={'slider off'}></button>
        </div>
        <p>OFF</p>
      </div>
    );
  }
}

const toggleSwitch = <ToggleSwitch />;

export default toggleSwitch;
