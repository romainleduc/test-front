import React from 'react';

const VehicleFilterOption = ({ label, ...other }) => (
  <option {...other}>{label}</option>
);

const vehicleFilterOptionPropsAreEqual = (prevFilterOption, nextFilterOption) => {
  return prevFilterOption.value === nextFilterOption.value
    && prevFilterOption.label === nextFilterOption.label;
}

export default React.memo(VehicleFilterOption, vehicleFilterOptionPropsAreEqual);