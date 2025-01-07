/**
 * CardFlipper
 * Author: Eric Stout, https://ericwstout.com
 * License: MIT
 * 𝖕𝖊𝖗𝖕𝖊𝖙𝖚𝖆𝖑𝖑𝖞 𝖚𝖓𝖈𝖔𝖒𝖋𝖔𝖗𝖙𝖆𝖇𝖑𝖊
 **/

import React, { FC, forwardRef, useImperativeHandle, useState } from "react";
import classNames from "classnames";
import styles from "./styles/CardFlipper.module.css";

import type { CardFlipperHandle, CardFlipperProps } from "./types";

/**
 * A React component for creating interactive, flip-style cards.
 *
 * @component
 * @param {Object} props - The props for the CardFlipper component.
 * @param {React.ReactNode} props.front - The content to display on the front side of the card.
 * @param {React.ReactNode} props.back - The content to display on the back side of the card.
 * @param {"hover" | "click"} [props.behavior] - Determines the flip behavior. If "hover", the card flips on mouse hover. If "click", it flips on click.
 * @param {string} [props.className] - Additional CSS classes to apply to the outer container.
 * @param {string} [props.innerClassName] - Additional CSS classes to apply to the inner card elements (`front` and `back`).
 * @param {string | number} [props.width="auto"] - The width of the card container. Defaults to "auto".
 * @param {string | number} [props.height="auto"] - The height of the card container. Defaults to "auto".
 * @param {boolean} [props.levitate=false] - If `true`, adds a levitating effect when behavior is set to "click". Levitation does not support hover!
 *
 * @returns {JSX.Element} The CardFlipper component.
 *
 * @example
 * <CardFlipper
 *   front={<div>Front Content</div>}
 *   back={<div>Back Content</div>}
 *   behavior="click"
 *   width="300px"
 *   height="200px"
 *   levitate={true}
 * />
 */
export const CardFlipper: FC<CardFlipperProps> = forwardRef<
  CardFlipperHandle,
  CardFlipperProps
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

    const handleMouseEvent = () => {
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
        id={id}
        className={classNames(
          {
            [styles.rcfContainer]: true,
            [styles.rcfActive]: isFlipped,
            [styles.rcfLevitate]: isLevitated,
          },
          className
        )}
        style={!style ? { width, height } : { width, height, ...style }}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
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
