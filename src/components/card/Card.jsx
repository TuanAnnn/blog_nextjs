import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>DAY LA POST THU 2</h1>
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
