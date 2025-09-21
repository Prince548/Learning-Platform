import React from 'react';
import styles from './Block.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.pageBtn}>&lt;</button>
      <button className={styles.pageBtn}>&gt;</button>
    </div>
  );
};

export default Pagination;
