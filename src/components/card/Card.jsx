import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({key ,item}) => {
  //console.log("item",item);
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item?.title}</h1>
        </Link>
        <p>
          Mỗi đoạn văn thường bắt đầu bằng một câu chủ đề hoặc một ý chính, từ
          đó phát triển và mở rộng ý kiến, thông tin hoặc quan điểm của tác giả.
          Các câu trong đoạn văn liên kết với nhau thông qua những từ nối, ví dụ
          như để tạo sự mạch lạc và logic
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
