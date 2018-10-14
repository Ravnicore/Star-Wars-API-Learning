import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class radioFilterButtons extends Component {
  constructor (props) {
    super(props);

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <div>
        <h5>Card List Type</h5>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
      </div>
    );
  }
}

export default radioFilterButtons;