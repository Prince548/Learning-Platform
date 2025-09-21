import React from 'react';
import styles from './BlockCard1.module.css';

const blogItems = [
  { image: '/Card1a.PNG', label: 'ux/ui' },
  { image: '/Card1b.PNG', label: 'React' },
  { image: '/Card1c.PNG', label: 'PHP' },
  { image: '/Card1d.PNG', label: 'JavaScript' },
];

const BlockCard1 = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Reading blog list</h3>
      <div className={styles.grid}>
        {blogItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.label} className={styles.image} />
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockCard1;
