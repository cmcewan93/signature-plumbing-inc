import styles from './GoogleReviews.module.css';

export default function GoogleReviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
      <div className={styles.reviewsContainer}>
        <div className={styles.googleReviews}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740047.8988858298!2d-80.19752117017161!3d43.568798168370876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x635ccfd9d2cc678d%3A0xf5d45cd45002cb75!2sSignature%20Plumbing%20inc!5e0!3m2!1sen!2sca!4v1745004175736!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 