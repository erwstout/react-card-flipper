import React, { Component } from 'react';
import styled from 'styled-components';

/**
  * ReactCardFlipper
  * Author: Eric Stout, https://factor1studios.com
  *
  * Accepted Props:
  * Width
  * Height
**/

class ReactCardFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    }
  }

  render(){
    const Container = styled.div`
      perspective: 1000px;
    `;

    return(
      <div>
        Hello, World.
      </div>
    )
  }
}

export default ReactCardFlipper;
