/**
 * ReactCardFlipper
 * Author: Eric Stout, https://ericwstout.com
 * License: MIT
 * 𝖕𝖊𝖗𝖕𝖊𝖙𝖚𝖆𝖑𝖑𝖞 𝖚𝖓𝖈𝖔𝖒𝖋𝖔𝖗𝖙𝖆𝖇𝖑𝖊
 **/

import React, { FC, forwardRef, useImperativeHandle, useState } from "react";
import classNames from "classnames";
import styles from "./styles/ReactCardFlipper.module.css";

import type { ReactCardFlipperHandle, ReactCardFlipperProps } from "./types";

/**
 * A React component for creating interactive, flip-style cards.
 *
 * @component
 * @param {Object} props - The props for the ReactCardFlipper component.
 * @param {React.ReactNode} props.front - The content to display on the front side of the card.
 * @param {React.ReactNode} props.back - The content to display on the back side of the card.
 * @param {"hover" | "click"} [props.behavior] - Determines the flip behavior. If "hover", the card flips on mouse hover. If "click", it flips on click.
 * @param {string} [props.className] - Additional CSS classes to apply to the outer container.
 * @param {string} [props.innerClassName] - Additional CSS classes to apply to the inner card elements (`front` and `back`).
 * @param {string | number} [props.width="auto"] - The width of the card container. Defaults to "auto".
 * @param {string | number} [props.height="auto"] - The height of the card container. Defaults to "auto".
 * @param {boolean} [props.levitate=false] - If `true`, adds a levitating effect when behavior is set to "click". Levitation does not support hover!
 *
 * @returns {JSX.Element} The ReactCardFlipper component.
 *
 * @example
 * <ReactCardFlipper
 *   front={<div>Front Content</div>}
 *   back={<div>Back Content</div>}
 *   behavior="click"
 *   width="300px"
 *   height="200px"
 *   levitate={true}
 * />
 */
export const ReactCardFlipper: FC<ReactCardFlipperProps> = forwardRef<
  ReactCardFlipperHandle,
  ReactCardFlipperProps
>(
  (
    {
      id,
      back,
      behavior,
      className,
      front,
      height = "auto",
      innerClassName,
      levitate,
      width = "auto",
      style,
      innerStyle,
    },
    ref
  ) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLevitated, setIsLevitated] = useState(false);

    const handleOnClick = () => {
      behavior === "click" && setIsFlipped(!isFlipped);
    };

    const handleMouseEnter = () => {
      if (behavior === "hover") {
        setIsFlipped(!isFlipped);
      } else if (behavior === "click" && levitate) {
        setIsLevitated(!isLevitated);
      }
    };

    const handleMouseLeave = () => {
      if (behavior === "hover") {
        setIsFlipped(!isFlipped);
      } else if (behavior === "click" && levitate) {
        setIsLevitated(!isLevitated);
      }
    };

    useImperativeHandle(ref, () => ({
      toggleFlip: () => {
        setIsFlipped((prev) => !prev);
      },
    }));

    return (
      <div
        className={classNames({
          [styles.rcfContainer]: true,
          [styles.rcfActive]: isFlipped,
          [styles.rcfLevitate]: isLevitated,
          className,
        })}
        style={!style ? { width, height } : { width, height, ...style }}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.rcfFlipper}>
          <div
            className={classNames(styles.rcfFront, innerClassName)}
            style={
              !innerStyle ? { width, height } : { width, height, ...innerStyle }
            }
          >
            {front}
          </div>
          <div
            className={classNames(styles.rcfBack, innerClassName)}
            style={
              !innerStyle ? { width, height } : { width, height, ...innerStyle }
            }
          >
            {back}
          </div>
        </div>
      </div>
    );
  }
);

// class ReactCardFlipper extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       isFlipped: false,
//       isLevitated: false,
//       behavior: this.props.behavior ? this.props.behavior : "click",
//       levitate: this.props.levitate ? this.props.levitate : false,
//     };
//   }

//   handleFlip = () => {
//     this.setState((state) => ({
//       isFlipped: !state.isFlipped,
//     }));
//   };

//   handleLevitate = () => {
//     this.setState((state) => ({ isLevitated: !state.isLevitated }));
//   };

//   handleMouseEvent = () => {
//     if (this.state.behavior === "hover") {
//       return this.handleFlip();
//     } else if (this.state.behavior === "click" && this.state.levitate) {
//       return this.handleLevitate();
//     } else if (this.state.behavior === "click") {
//       return;
//     }
//   };

//   render() {
//     const containerStyles = {
//       width: this.props.width,
//       height: this.props.height,
//     };

//     const { classes, innerCardClass, className } = this.props;
//     const { isFlipped, isLevitated } = this.state;

//     return (
//       <div
//         className={classNames(
//           classes.rcfContainer,
//           isFlipped ? classes.rcfActive : null,
//           isLevitated ? classes.rcfLevitate : null,
//           className
//         )}
//         style={containerStyles}
//         onClick={() => {
//           if (this.state.behavior === "click") {
//             this.handleFlip();
//           }
//         }}
//         onMouseEnter={() => {
//           this.handleMouseEvent();
//         }}
//         onMouseLeave={() => {
//           this.handleMouseEvent();
//         }}
//       >
//         <div className={classes.rcfFlipper}>
//           <div
//             className={classNames(innerCardClass, classes.rcfFront)}
//             style={containerStyles}
//           >
//             {this.props.children[0]}
//           </div>
//           <div
//             className={classNames(innerCardClass, classes.rcfBack)}
//             style={containerStyles}
//           >
//             {this.props.children[1]}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   rcfContainer: {
//     position: "relative",
//     perspective: "1000px",
//     transformStyle: "preserve-3d",
//     width: "auto",
//     height: "auto",
//     transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)",
//   },

//   rcfFront: {
//     width: "auto",
//     height: "auto",
//     backfaceVisibility: "hidden",
//     transformStyle: "preserve-3d",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     zIndex: "2",
//   },

//   rcfBack: {
//     width: "auto",
//     height: "auto",
//     backfaceVisibility: "hidden",
//     transformStyle: "preserve-3d",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     transform: "rotateY(180deg)",
//   },

//   rcfFlipper: {
//     transition: "0.6s",
//     transformStyle: "preserve-3d",
//     position: "relative",
//   },

//   rcfActive: {
//     "& $rcfFlipper": {
//       transform: "rotateY(180deg)",
//     },
//   },

//   rcfLevitate: {
//     transform: "translateY(-15px)",
//     transition: "transform 500ms cubic-bezier(.18,.45,.11,.91)",
//   },

//   "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
//     rcfActive: {
//       "& $rcfBack": {
//         transform: "rotateY(0deg)",
//       },
//       "& > div": {
//         transform: "rotateY(0deg)",
//       },
//       "& $rcfFront": {
//         transform: "rotateY(180deg)",
//       },
//     },
//     rcfFront: {
//       transform: "rotateY(0deg)",
//     },
//     rcfBack: {
//       transform: "rotateY(-180deg)",
//     },
//   },
// };

// export default injectSheet(styles)(ReactCardFlipper);
