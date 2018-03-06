import React, { Component } from 'react';

class Flipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: this.props.isFlipped
    }

  }
  render() {
    return(
      <div className="flipper">
        {this.props.children}
      </div>
    )
  }
}

export default Flipper;
