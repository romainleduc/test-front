import React from 'react';
import styles from "./Stack.module.scss";

const Stack = ({ className, children, ...other }) => (
  <div
    className={`${styles.stackRoot} ${className || ''}`}
    {...other}
  >
    {React.Children.map(
      children,
      (child, index) =>
        React.cloneElement(
          child,
          {
            className: `${styles.stackItem} ${index > 0 ? styles.stackLeftMargin: ''} ${className || ''}`,
          }
        )
    )}
  </div>
)

export default React.memo(Stack);