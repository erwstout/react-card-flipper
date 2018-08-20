// @flow
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

import React, { Component } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

type Props = {
  width: string,
  height: string,
  behavior: string,
  levitate: boolean,
  innerCardClass?: string,
  className?: string,
  classes: Object,
  children: any
};

type State = {
  isFlipped: boolean,
  isLevitated: boolean,
  behavior: string,
  levitate: boolean
};

class ReactCardFlipper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFlipped: false,
      isLevitated: false,
      behavior: this.props.behavior ? this.props.behavior : "click",
      levitate: this.props.levitate ? this.props.levitate : false
    };
  }

  handleFlip = () => {
    this.setState(state => ({
      isFlipped: !state.isFlipped
    }));
  };

  handleLevitate = () => {
    this.setState(state => ({ isLevitated: !state.isLevitated }));
  };

  handleMouseEvent = () => {
    if (this.state.behavior === "hover") {
      return this.handleFlip();
    } else if (this.state.behavior === "click" && this.state.levitate) {
      return this.handleLevitate();
    } else if (this.state.behavior === "click") {
      return;
    }
  };

  render() {
    const containerStyles = {
      width: this.props.width,
      height: this.props.height
    };

    const { classes, innerCardClass, className } = this.props;
    const { isFlipped, isLevitated } = this.state;

    return (
      <div
        className={classNames(
          classes.rcfContainer,
          isFlipped ? classes.rcfActive : null,
          isLevitated ? classes.rcfLevitate : null,
          className
        )}
        style={containerStyles}
        onClick={() => {
          if (this.state.behavior === "click") {
            this.handleFlip();
          }
        }}
        onMouseEnter={() => {
          this.handleMouseEvent();
        }}
        onMouseLeave={() => {
          this.handleMouseEvent();
        }}
      >
        <div className={classes.rcfFlipper}>
          <div
            className={classNames(innerCardClass, classes.rcfFront)}
            style={containerStyles}
          >
            {this.props.children[0]}
          </div>
          <div
            className={classNames(innerCardClass, classes.rcfBack)}
            style={containerStyles}
          >
            {this.props.children[1]}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  rcfContainer: {
    position: "relative",
    perspective: "1000px",
    transformStyle: "preserve-3d",
    width: "auto",
    height: "auto",
    transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)"
  },

  rcfFront: {
    width: "auto",
    height: "auto",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "2"
  },

  rcfBack: {
    width: "auto",
    height: "auto",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "rotateY(180deg)"
  },

  rcfFlipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative"
  },

  rcfActive: {
    "& $rcfFlipper": {
      transform: "rotateY(180deg)"
    }
  },

  rcfLevitate: {
    transform: "translateY(-15px)",
    transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)"
  },

  "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
    rcfActive: {
      "& $rcfBack": {
        transform: "rotateY(0deg)"
      },
      "& > div": {
        transform: "rotateY(0deg)"
      },
      "& $rcfFront": {
        transform: "rotateY(180deg)"
      }
    },
    rcfFront: {
      transform: "rotateY(0deg)"
    },
    rcfBack: {
      transform: "rotateY(-180deg)"
    }
  }
};

export default injectSheet(styles)(ReactCardFlipper);
