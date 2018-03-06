import React, { Component } from 'react';
import styled from 'styled-components';

import Flipper from './lib/Flipper';
import './ReactCardFlipper.css';

/**
  * ReactCardFlipper
  * Author: Eric Stout, https://factor1studios.com
  *
  * Required Props:
  * Width: string
  * Height: string
  *
  * Optional Props:
  * behavior: click, hover
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget)
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
      <div className="rcf-container rcf-card" style={containerStyles} onClick={ (e) => this.handleClick(e) }>
        <Flipper {...this.state}>
          <div className="rcf-front" style={containerStyles}>
            {this.props.children[0]}
          </div>
          <div className="rcf-back" style={containerStyles}>
            {this.props.children[1]}
          </div>
        </Flipper>
      </div>
    )
  }
}

export default ReactCardFlipper;
