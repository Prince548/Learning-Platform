import React from 'react';
import styles from './Block.module.css';
import FeatureBlog from './FeatureBlog';
import Pagination from './Pagination';
import BlockCard from './BlockCard';
import BlockCard1 from './BlockCard1';

const Block = () => {
  return (
    <section className={styles.blockSection}>
      <BlockCard/>
      <BlockCard1/>
      <FeatureBlog />
      <Pagination />
    </section>
   
  );
};

export default Block;
