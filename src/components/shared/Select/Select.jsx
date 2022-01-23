import React from 'react';
import styles from "./Select.module.scss";

const Select = ({ label, name, children, className, ...other }) => (
  <select
    className={`${styles.select} ${className || ''}`}
    id={`${name}-filter`}
    name={name}
    {...other}
  >
    {children}
  </select>
);

export default Select;