import React from "react";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";

import "./Story.css";

const Story = ({ orderNumber, title, url, points, author, time }) => {
  return (
    <div className="story">
      <span className="story__order-number">{orderNumber}.</span>
      <div>
        <a className="story__link" href={url}>
          {title}
        </a>
        <div className="story__bottom-panel">
          {points} points by {author}
          {distanceInWordsToNow(time)}
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
};

export default Story;
