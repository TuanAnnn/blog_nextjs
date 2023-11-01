import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({key ,item}) => {
  console.log("item",item);
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && <Image src={item.img} alt="" fill />}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item?.createdAt?.substring(0,10)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item?.title}`}>
          <h1>{item?.title}</h1>
        </Link>
        <p>
          {item.desc.substring(0)}
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
