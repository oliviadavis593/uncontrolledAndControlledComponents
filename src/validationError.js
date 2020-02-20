import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}

/*======= Validating the form ======== */
//Step 5:
// New component accepts a property called message = contains validation message to be displayed
// If message is a string - displat the message - otherwiese its undefined so return an empty fragment
//validationError.js ===> controlledComponent.js
