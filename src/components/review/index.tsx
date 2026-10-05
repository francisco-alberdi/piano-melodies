import Image from "next/image";
import styles from "./styles.module.css";

interface ReviewProps {
  imageSrc: string;
  imageAlt: string;
  reviewText: string;
  reviewerName: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function Review({
  imageSrc,
  imageAlt,
  reviewText,
  reviewerName,
}: ReviewProps) {
  return (
    <div className={styles.review}>
      <span className={styles.quote}>&ldquo;</span>
      <p className={styles.reviewText}>{reviewText}</p>
      <div className={styles.reviewFooter}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className={styles.reviewImage}
        />
        <span className={styles.reviewerName}>{reviewerName}</span>
      </div>
    </div>
  );
}
