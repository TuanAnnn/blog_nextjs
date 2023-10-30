import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comment</h1>
      {status == "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comments" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Dohn</span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
          <p className={styles.decs}>
            day la mot bai viet hay day la mot bai viet hay
            day la mot bai viet hay day la mot bai viet hay
            day la mot bai viet hay day la mot bai viet hay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
