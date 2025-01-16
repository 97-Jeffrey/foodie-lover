import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/meals/meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
      <article className={styles.meal}>
        <header>
          <div className={styles.image}>
            <Image
              src={`https://jeffrey-food-image.s3.us-west-2.amazonaws.com/${image}`}
              alt={title} 
              fill 
            />
          </div>
          <div className={styles.headerText}>
            <h2>{title}</h2>
            <p>by {creator}</p>
          </div>
        </header>
        <div className={styles.content}>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.actions}>
            <Link href={`/meals/${slug}`}>View Details</Link>
          </div>
        </div>
      </article>
  );
}