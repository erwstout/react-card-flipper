import React, { Component } from 'react';

import './ReactCardFlipper.css';

/**
  * ReactCardFlipper
  * Author: Eric Stout, https://factor1studios.com
  *
  * Optional Props:
  * Width: string (default: auto)
  * Height: string (default: auto)
  * behavior: click, hover (default: click)
**/

class ReactCardFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
      width: this.props.width,
      height: this.props.height,
      behavior: this.props.behavior ? this.props.behavior : 'click'
    }

    // bind this 🤙
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip(e) {
    e.currentTarget.classList.toggle('rcf-active');
    this.setState({
      isFlipped: this.state.isFlipped ? false : true
    })
  }

  render(){
    const containerStyles = {
      width: this.state.width,
      height: this.state.height,
    }

    return(
      <div className="rcf-container" style={containerStyles} onClick={ (e) => { if(this.state.behavior === 'click'){ this.handleFlip(e) }}} onMouseEnter={ (e) => { if(this.state.behavior === 'hover'){ this.handleFlip(e) }}}
        onMouseLeave={ (e) => { if(this.state.behavior === 'hover'){ this.handleFlip(e) }}}>
        <div className="rcf-flipper">
          <div className="rcf-front" style={containerStyles}>
            {this.props.children[0]}
          </div>
          <div className="rcf-back" style={containerStyles}>
            {this.props.children[1]}
          </div>
        </div>
      </div>
    )
  }
}

export default ReactCardFlipper;
