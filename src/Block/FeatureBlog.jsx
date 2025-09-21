import React from 'react';
import styles from './FeatureBlog.module.css';

const blogPosts = [
  {
    image: '/LastBlog1.PNG',
    title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
    author: 'Lina',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    views: '251,232',
  },
  {
    image: '/LastBlog2.PNG',
    title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
    author: 'Lina',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    views: '251,232',
  },
];

const FeatureBlog = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Related Blog</h3>
      <div className={styles.grid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt="Blog visual" className={styles.image} />
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}>{post.title}</h4>
              <div className={styles.author}>
                <div className={styles.avatar}></div>
                <span className={styles.name}>{post.author}</span>
              </div>
              <p className={styles.desc}>{post.description}</p>
              <div className={styles.footer}>
                <a href="#" className={styles.readMore}>
                  Read more
                </a>
                <span className={styles.views}>👁 {post.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBlog;
