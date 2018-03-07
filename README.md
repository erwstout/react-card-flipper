# react-card-flipper
[![Build Status](https://travis-ci.org/factor1/react-card-flipper.svg?branch=master)](https://travis-ci.org/factor1/react-card-flipper)
[![npm version](https://badge.fury.io/js/react-card-flipper.svg)](https://badge.fury.io/js/react-card-flipper)
![GitHub issues](https://img.shields.io/github/issues-raw/factor1/react-card-flipper.svg)
![license](https://img.shields.io/github/license/factor1/react-card-flipper.svg)


A React card flipper component (built with React `16.2.0`) that can be triggered by hover or click. Inspired
from [David Walsh's great tutorial](https://davidwalsh.name/css-flip).

## Installation
### Yarn:
`yarn add react-card-flipper`

### npm:
`npm install react-card-flipper --save`

## Current Browser Support
Initial testing via BrowserStack:

| Browser | Support | Notes |
| ------------- |:--:| ------ |
| Chrome >= 38  | ✅ | |
| Edge >= 14    | ✅ | |
| IE 11         | ⚠️ | |
| IE 10         | ❌ | Card flip appears backwards |
| Safari >= 10.1| ✅ | |
| Safari 9.1    | ⚠️ | React doesn't render, possibly needs a babel polyfill for testing |


## Getting Started
You can import react-card-flipper into your React app. The following is a bare
bones example.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlipper from 'react-card-flipper';

ReactDOM.render(
  <div>
    <ReactCardFlipper>
      <div>
        The cards front content goes here.
      </div>
      <div>
        The cards back content goes here.
      </div>
    </ReactCardFlipper>
  </div>,
  document.getElementById('root')
);
```

## Props and Options
The `ReactCardFlipper` component has 3 props it accepts that you can use to adjust
how your card behaves.

| Prop / Option | Accepted Prop(s)            | Default |
| ------------- |:---------------------------:|--------:|
| `width`       | String (ex: `300px`)        | `auto`  |
| `height`      | String (ex: `600px`)        | `auto`  |
| `behavior`    | String (`click` or `hover`) | `click` |

#### Example:
```js
render() {
  return(
    <div>
      <ReactCardFlipper width="300px" height="550px" behavior="hover">
        <div>
          <h3>Hover me to learn more</h3>
        </div>
        <div>
          <p>You hovered! Keep that knowledge growing...</p>
        </div>
      </ReactCardFlipper>
    </div>
  )
}
```

## Styling
Out of the box we provide very little styling aside from core styles like transitions
to let you shape the design as you see fit. All of the css classes provided for are
prefixed with `rcf-` to avoid any conflicts with existing classes. In most cases you'll
only be adding styles to `.rcf-front` & `.rcf-back`. All classes available for styling are:

- `rcf-container` - main container for the component
- `rcf-front` - front card styling
- `rcf-back` - back card styling
- `rcf-flipper` - "flipper" container, controls animation speed, etc.

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

#### Running Test Build
##### `yarn build`
Compiles a new test build.
