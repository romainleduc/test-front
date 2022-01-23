import React from 'react';
import styles from "./Drawer.module.scss";

const Drawer = ({ title, children }) => (
  <div className={styles.drawer}>
    <span className={styles.drawerTitle}>{title}</span>
    <div className={styles.drawerContent}>
      {children}
    </div>
  </div>
);

export default React.memo(Drawer);