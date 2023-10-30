import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import React from "react";
import styles from "./singlePage.module.css";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            DAY LA POST THU 5 sajdj
            askdoakspodkals
            kdkmmznxcmznx
            cnzxmncmznxcmznxmc
            nzx
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> 10.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          <p className={styles.userTextContainer}>
            Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một luồng ý để
            trình bày một ý kiến, một suy nghĩ hoặc một phần của nội dung. Nó
            bao gồm một tập hợp các câu văn có liên quan, có mục đích chung và
            được sắp xếp một cách logic.
          </p>
          <p className={styles.userTextContainer}>
            Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một luồng ý để
            trình bày một ý kiến, một suy nghĩ hoặc một phần của nội dung. Nó
            bao gồm một tập hợp các câu văn có liên quan, có mục đích chung và
            được sắp xếp một cách logic.
          </p>
          <p className={styles.userTextContainer}>
            Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một luồng ý để
            trình bày một ý kiến, một suy nghĩ hoặc một phần của nội dung. Nó
            bao gồm một tập hợp các câu văn có liên quan, có mục đích chung và
            được sắp xếp một cách logic.
          </p>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
