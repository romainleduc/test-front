import React from "react";
import PropTypes from "prop-types";

const DisplayLimit = (props) => {
  const onChange = (e) => {
    console.log(e.target.value);
    props.setLimit(e.target.value);
  };

  return (
    <div>
      <select onChange={onChange} value={props.limit}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
      {props.limit}
    </div>
  );
};

DisplayLimit.propTypes = {};

export default DisplayLimit;
