import styles from './page.module.css';
import ContactForm from '@/components/ContactForm';
import GoogleReviews from '@/components/GoogleReviews';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.contactSection}>
            <ContactForm />
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <p><strong>Phone:</strong> <a href="tel:416-450-9504">416-450-9504</a></p>
              <p><strong>Email:</strong> <a href="mailto:signatureplumbinggta@gmail.com">signatureplumbinggta@gmail.com</a></p>
              <p><strong>Address:</strong> Signature Plumbing inc, Etobicoke, Ontario, Canada</p>
              <p>Contact us today for any plumbing issues and estimates!</p>
            </div>
          </div>
          <div className={styles.reviewsSection}>
            <h2>What Our Customers Say</h2>
            <GoogleReviews />
            <div className={styles.mapSection}>
              <h2>Our Location</h2>
              <div className={styles.mapContainer}>
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
          </div>
        </div>
      </div>
    </main>
  );
} 