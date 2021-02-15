// Importing required components and modules
import React from "react";

// Build container component with imported props
function Container(props) {
    return <div className="container" style={props.style}>{props.children}</div>;
}

export default Container;
