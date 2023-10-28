import React from 'react'
import styles from "./featured.module.css";
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, An dev is here!</b>
         Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Here is Title</h1>
          <b className={styles.postDesc}>Đây là bài viết đầu tiên trên blog của tôi</b>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured

// import React from "react";
// import styles from "./featured.module.css";
// import Image from "next/image";

// const Featured = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>
//         <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
//       </h1>
//       <div className={styles.post}>
//         <div className={styles.imgContainer}>
//           <Image src="/p1.jpeg" alt="" fill className={styles.image} />
//         </div>
//         <div className={styles.textContainer}>
//           <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
//           <p className={styles.postDesc}>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Cupiditate, quam nisi magni ea laborum inventore voluptatum
//             laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
//             quisquam! Harum unde sit culpa debitis.
//           </p>
//           <button className={styles.button}>Read More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;