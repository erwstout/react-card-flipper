/**
  * ReactCardFlipper
  * Author: Eric Stout, https://factor1studios.com
  *
  * Optional Props:
  * Width: string (default: auto)
  * Height: string (default: auto)
  * behavior: click, hover (default: click)
  * levitate: boolean (default: false, only works when behavior is set to `click`)
**/

import React, { Component } from 'react';
import './ReactCardFlipper.css';

class ReactCardFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
      width: this.props.width,
      height: this.props.height,
      behavior: this.props.behavior ? this.props.behavior : 'click',
      levitate: this.props.levitate ? this.props.levitate : false
    }

    // bind this 🤙
    this.handleFlip = this.handleFlip.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
  }

  handleFlip(e) {
    e.currentTarget.classList.toggle('rcf-active');
    this.setState({
      isFlipped: this.state.isFlipped ? false : true
    })
  }

  handleLevitate(e) {
    e.currentTarget.classList.toggle('rcf-levitate');
  }

  handleMouseEvent(e) {
    if( this.state.behavior === 'hover' ) {
      return this.handleFlip(e);
    } else if ( this.state.behavior === 'click' && this.state.levitate ) {
      return this.handleLevitate(e);
    } else if ( this.state.behavior === 'click' ) {
      return
    }
  }

  render(){
    const containerStyles = {
      width: this.state.width,
      height: this.state.height,
    }

    return(
      <div className="rcf-container" style={containerStyles} onClick={ (e) => { if(this.state.behavior === 'click'){ this.handleFlip(e) }}} onMouseEnter={ (e) => { this.handleMouseEvent(e) }}
        onMouseLeave={ (e) => { this.handleMouseEvent(e) }}>
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
