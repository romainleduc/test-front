import React from 'react';

const VehicleFilter = ({ label, name, children, ...other }) => (
  <div>
    <label htmlFor={`${name}-filter`}>{label}</label>
    <select
      id={`${name}-filter`}
      name={name}
      {...other}
    >
      {children}
    </select>
  </div>
);

export default VehicleFilter;