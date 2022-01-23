import React from 'react';

const Option = ({ label, ...other }) => (
  <option {...other}>{label}</option>
);

const optionPropsAreEqual = (prevOption, nextOption) => {
  return prevOption.value === nextOption.value
    && prevOption.label === nextOption.label;
}

export default React.memo(Option, optionPropsAreEqual);