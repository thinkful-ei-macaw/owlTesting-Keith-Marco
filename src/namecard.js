import React from "react";

export default function Card(props) {
  let dot = function() {
    if (props.inSession === true) {
      return <img src="/greenDot.jpg" alt="online" />;
    } else {
      return <img src="/greyDot.jpg" alt="offline" />;
    }
  };

  let words = function() {
    if (props.onStage === true) {
      return <p>On Stage</p>;
    } else if (props.onStage === false && props.inSession === true) {
      return <p>In Session</p>;
    } else {
      return <p>Left Session</p>;
    }
  };

return (
  <div className="Placeholder">
    <img src={props.avatar} alt="avatar" />
    <h3>{props.name}</h3>
    <div className="Dot">{dot}</div>
    <div className="words">{words}</div>
  </div>
)}
