import React from 'react';
import styles from './BlockCard.module.css';

const BlockCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textSection}>
        <p className={styles.category}>
          By Themadbrains in <span className={styles.highlight}>inspiration</span>
        </p>
        <h2 className={styles.title}>
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
          Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <button className={styles.button}>Start learning now</button>
      </div>

      <div className={styles.imageSection}>
        <img src="/BlockCard1.PNG" alt="Meeting on Laptop" className={styles.image} />
      </div>
    </div>
  );
};

export default BlockCard;
