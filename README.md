# react-card-flipper

[![Build Status](https://travis-ci.org/erwstout/react-card-flipper.svg?branch=master)](https://travis-ci.org/erwstout/react-card-flipper)
[![npm version](https://badge.fury.io/js/react-card-flipper.svg)](https://badge.fury.io/js/react-card-flipper)
![GitHub issues](https://img.shields.io/github/issues-raw/erwstout/react-card-flipper.svg)
![license](https://img.shields.io/github/license/erwstout/react-card-flipper.svg)

A React card flipper component (built with React `16.2.0`) that can be triggered by hover or click. Inspired
from [David Walsh's great tutorial](https://davidwalsh.name/css-flip).

## Installation

### Yarn:

`yarn add react-card-flipper`

### npm:

`npm install react-card-flipper --save`

## Current Browser Support

Initial testing via BrowserStack of a React app that simply renders the card
component.

| Browser         | Support | Notes                        |
| --------------- | :-----: | ---------------------------- |
| Chrome >= 38    |   ✅    |                              |
| Edge >= 14      |   ✅    |                              |
| Firefox >= 16   |   ✅‍   |                              |
| IE 11-10        |   ⚠️    | Card flips have no animation |
| IE 9.0          |   ❌    | No toggling of cards         |
| Opera >= 30     |   ✅    |                              |
| Safari >= 6.2.8 |   ✅    |                              |
| Safari 6.0.5    |   ⚠️    | Card flips have no animation |

## Getting Started

You can import react-card-flipper into your React app. The following is a bare
bones example.

> **Important:** The `<ReactCardFlipper>` component must have two `<div>` elements, one for the front and one for the back.

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactCardFlipper from "react-card-flipper";

ReactDOM.render(
  <div>
    <ReactCardFlipper>
      <div>The cards front content goes here.</div>
      <div>The cards back content goes here.</div>
    </ReactCardFlipper>
  </div>,
  document.getElementById("root")
);
```

## Props and Options

The `ReactCardFlipper` component has 4 props it accepts that you can use to adjust
how your card behaves.

| Prop / Option |      Accepted Prop(s)       | Default | Description                                                                         |
| ------------- | :-------------------------: | :-----: | ----------------------------------------------------------------------------------- |
| `width`       |    String (ex: `300px`)     | `auto`  | Card width.                                                                         |
| `height`      |    String (ex: `600px`)     | `auto`  | Card height.                                                                        |
| `behavior`    | String (`click` or `hover`) | `click` | If the card should click to flip, or hover to flip.                                 |
| `levitate`    |           Boolean           | `false` | If the card should "levitate" up on hover. Only applied when `behavior` is `click`. |

#### Example:

```js
render() {
  return(
    <div>
      <ReactCardFlipper width="300px" height="550px" behavior="click" levitate={true}>
        <div>
          <h3>Click me to learn more</h3>
        </div>
        <div>
          <p>You Clicked!</p>
        </div>
      </ReactCardFlipper>
    </div>
  )
}
```

## Styling

Out of the box we provide very little styling aside from core styles like transitions
to let you shape the design as you see fit. You can style your cards by passing className's as props.
To style the card itself, you want to use `innerCardClass`, for the card container itself you
would use a normal `className`. You can see a working example [here](https://codesandbox.io/s/p99p8mxqqj) or reference the following code snippet (this example is using `react-jss`):

```js
<ReactCardFlipper
  width="300px"
  height="400px"
  behavior="click"
  className={classes.root}
  innerCardClass={classes.card}
>
  <div className="text-center">You can click me, go ahead... Try it.</div>
  <div className="text-center">Great job! You win person of the month.</div>
</ReactCardFlipper>
```

## Development

To get started developing on this project, fork or clone the repo. Then run `yarn install`

#### Start the development server

##### `yarn start`

Starts the development/test server and polls for changes.

#### Running EsLint

##### `yarn lint`

Lints `ReactCardFlipper.js` and outputs any warnings or errors.

#### Running Tests

##### `yarn test`

Runs EsLint, and builds the test output.

#### Running Production Build

##### `yarn build`

Compiles a new build in the `dist/` folder.
