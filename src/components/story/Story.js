import React from "react";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";

import "./Story.css";

const Story = ({
  orderNumber,
  title,
  url,
  points,
  author,
  time,
  commentsNumber
}) => {
  return (
    <div className="story">
      <span className="story__order-number">{orderNumber}.</span>
      <div>
        <div className="story__primary-row">
          <a className="story__link" href={url}>
            {title}
          </a>
        </div>
        <div className="story__bottom-panel">
          {points} points by {author}{" "}
          {distanceInWordsToNow(time, { addSuffix: true })} | {commentsNumber}{" "}
          comments
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
  time: PropTypes.number.isRequired,
  commentsNumber: PropTypes.number.isRequired
};

export default Story;
