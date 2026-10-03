import React from 'react';
import FadeUp from './FadeUp';
import styles from './ProductCard.module.css';

function ProductCard({ product, delay = 0, onViewDetail }) {
  return (
    <FadeUp delay={delay}>
      <div className={styles.card}>
        {/* Image */}
        <div className={styles.imgWrap}>
          <img
            className={styles.img}
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
          <span
            className={styles.tag}
            style={{ background: product.tagColor || '#1D6B38' }}
          >
            {product.tag}
          </span>
          <div className={styles.overlay} />
        </div>

        {/* Body */}
        <div className={styles.body}>
          <div className={styles.category}>{product.category}</div>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.desc}>{product.shortDesc}</p>

          {/* Specs preview */}
          <ul className={styles.specs}>
            {product.specs.slice(0, 3).map((s) => (
              <li key={s.label} className={styles.specItem}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specVal}>{s.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button
            className={styles.detailBtn}
            onClick={() => onViewDetail && onViewDetail(product)}
          >
            View Details
          </button>
          <button
            className={styles.enquireBtn}
            onClick={() => onViewDetail && onViewDetail(product)}
          >
            Enquire →
          </button>
        </div>
      </div>
    </FadeUp>
  );
}

export default ProductCard;
