import React from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlipper from './ReactCardFlipper';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-10 col-centered">
        <ReactCardFlipper width="300px" height="400px">
          <div className="text-center">
            You can click me, go ahead... Try it.
          </div>
          <div className="text-center">
            Great job! You win person of the year.
          </div>
        </ReactCardFlipper>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
