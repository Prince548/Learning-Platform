// import React from 'react';
// import styles from './Home8.module.css';

// const Home8 = () => {
//   return (
//     <div className={styles.container}>
     

//       <div className={styles.textRight}>
//         <h1>
//           <span className={styles.greenText}>Tools</span> For Teachers<br />And Learners
//         </h1>
//         <h3>
//           Class has a dynamic set of teaching tools built to be deployed and used during class.
//           Teachers can handout assignments in real-time for students to complete and submit.
//         </h3>
//       </div>
//        <img src="/NewGirl.PNG" alt="Visual" className={styles.imageLeft} />
//     </div>
//   );
// };

// export default Home8;


import React from 'react';
import styles from './Home8.module.css';

const Home8 = () => {
  return (
    <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imageLeft}>
        <img src="/NewGirl.PNG" alt="Educational Visual" />
      </div>

      {/* Text Section */}
      <div className={styles.textRight}>
        <h1>
          <span className={styles.greenText}>Tools</span> For Teachers<br />And Learners
        </h1>
        <h3>
          Class has a dynamic set of teaching tools built to be deployed and used during class.
          Teachers can hand out assignments in real-time for students to complete and submit.
        </h3>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Get Started</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home8;