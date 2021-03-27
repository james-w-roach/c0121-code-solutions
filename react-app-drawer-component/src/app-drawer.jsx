import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.determineHide = this.determineHide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  determineHide() {
    if (this.state.isOpen) {
      return '';
    } else {
      return 'hidden';
    }
  }

  handleClick() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
  }

  render() {
    return (
      <div>
        <i className={'fas fa-bars'} onClick={this.handleClick}></i>
        <div className={`overlay ${this.determineHide()}`} onClick={this.handleClick}></div>
        <div className={`drawer ${this.determineHide()}`}>
          <h1 onClick={this.handleClick}>Menu</h1>
          <h3 onClick={this.handleClick}>About</h3>
          <h3 onClick={this.handleClick}>Get Started</h3>
          <h3 onClick={this.handleClick}>Sign In</h3>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
