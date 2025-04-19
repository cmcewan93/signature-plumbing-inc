"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import MobileMenu from '@/components/MobileMenu'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { 
  DrainIcon, 
  ConstructionIcon, 
  EmergencyIcon, 
  InstallationIcon, 
  MaintenanceIcon, 
  WaterHeaterIcon, 
  WaterFiltrationIcon, 
  BackWaterValveIcon 
} from '@/components/icons/plumbing-icons';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <Link href="/" className={styles.logoContainer}>
        <Image
                src="/logo3.png"
                alt="Signature Plumbing - Quality that Exceeds the Standard"
          width={180}
                height={65}
          priority
              className={styles.logo}
                style={{
                  width: '63%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  margin: 'auto'
                }}
              />
            </Link>
            <ul className={styles.navLinks}>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="tel:416-450-9504" className={styles.phoneNumber}>416-450-9504</Link></li>
            </ul>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h2>Professional Plumbing Services You Can Trust</h2>
            <p>24/7 Emergency Service Available</p>
            <Link href="#contact" className="btn">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${styles.about}`}>
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>Welcome to Signature Plumbing — your trusted plumbing experts serving the Greater Toronto Area. We specialize in delivering dependable, high-quality plumbing solutions for residential, commercial, and service clients. Our mission is simple: to provide exceptional service with integrity, professionalism, and a commitment to your satisfaction.</p>
              <p>Founded in 2020 as a small family-owned business, Signature Plumbing was built on a passion for plumbing and a dedication to our community. While we've grown over the years, our core values remain the same — honesty, quality craftsmanship, and respect for every customer and home we serve.</p>
              <p>Our team of licensed and experienced plumbers brings years of expertise to every job, ensuring that your plumbing needs are met with the highest standards of quality and safety. We stay up-to-date with the latest industry technologies and best practices to deliver efficient and effective solutions.</p>
              <p>At Signature Plumbing, we understand that plumbing issues can be stressful. That's why we're committed to providing clear communication, transparent pricing, and reliable service you can count on. Your satisfaction is our top priority, and we won't consider a job complete until you're completely satisfied with the results.</p>
              <div className={styles.aboutFeatures}>
                <h3>Why Choose Us?</h3>
                <ul>
                  <li>Licensed & Insured</li>
                  <li>24/7 Emergency Service</li>
                  <li>15+ Years Experience</li>
                  <li>Satisfaction Guaranteed</li>
                  <li>Transparent Pricing</li>
                  <li>Locally Owned & Operated</li>
                  <li>Flexible Service Options</li>
                  <li>Customer-First Service</li>
                </ul>
              </div>
              <p className={styles.ctaText}>Ready to get started? <Link href="#contact">Contact us today</Link> to schedule your service or request a free estimate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviews}>
        <div className={styles.reviewsContainer}>
          <h2>What Our Customers Say</h2>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewerInfo}>
                <h4>John Prikosovich</h4>
                <p>Mississauga, ON</p>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewContent}>
                "Dean was recommended to me as someone who could resolve some plumbing issues I had. He did a fantastic job, knowledgeable and prompt. Too bad reviews don't have 6 stars, he deserves it. I was very impressed, thanks again Dean!"
              </p>
              <div className={styles.reviewDate}>April 04, 2025</div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewerInfo}>
                <h4>Connie Andrews</h4>
                <p>North York, ON</p>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewContent}>
                "I had a fantastic experience with Dean from Signature Plumbing. He was prompt and professional. Dean arrived on time, diagnosed the issue efficiently, and explained everything clearly before starting the work. Not only did he fix the problems, but he also ensured everything was clean before leaving. The pricing was fair, and the quality of work was top-notch. I highly recommend Signature Plumbing for anyone needing reliable and expert plumbing services. Will definitely call them again for future needs! 🚰🔧💧"
              </p>
              <div className={styles.reviewDate}>March 10, 2025</div>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewerInfo}>
                <h4>Yusef Ahmed</h4>
                <p>Mississauga, ON</p>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewContent}>
                "Had Signature Plumbing come out to fix a backed up kitchen drain. They ended up snaking it and I also got them to replace my toilet with a water saving one. Prices were very reasonable and the work was completed quickly. They also cleaned up before they left. Customer service was excellent! Would recommend Signature Plumbing to anyone looking for a plumber!"
              </p>
              <div className={styles.reviewDate}>February 15, 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactFormSection}>
              <ContactForm />
            </div>
            <div className={styles.mapSection}>
              <div className={styles.contactInfo}>
                <p><strong>Phone:</strong> <Link href="tel:416-450-9504">416-450-9504</Link></p>
                <p><strong>Email:</strong> <Link href="mailto:signatureplumbinggta@gmail.com">signatureplumbinggta@gmail.com</Link></p>
                <p><strong>Address:</strong> Etobicoke, Ontario, Canada</p>
                <div className={styles.socialMedia}>
                  <h4>Follow Us</h4>
                  <div className={styles.socialLinks}>
                    <Link href="https://www.facebook.com/share/1BBPM9ZBPb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      <svg className={styles.socialIcon} viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                      Facebook
                    </Link>
                    <Link href="https://instagram.com/signatureplumbinginc" target="_blank" rel="noopener noreferrer">
                      <svg className={styles.socialIcon} viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.738-7.975 4.02-1.189 2.281-1.078 5.38-1.078 8.907 0 3.528-.11 6.626 1.078 8.907 1.195 2.283 3.617 3.82 7.975 4.02 1.28.057 1.688.072 4.947.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.738 7.975-4.02 1.189-2.281 1.078-5.38 1.078-8.907 0-3.528.11-6.626-1.078-8.907-1.195-2.283-3.617-3.82-7.975-4.02-1.28-.057-1.688-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </Link>
                    <Link href="https://tiktok.com/@signatureplumbing" target="_blank" rel="noopener noreferrer">
                      <svg className={styles.socialIcon} viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      TikTok
                    </Link>
                  </div>
                </div>
              </div>
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
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

const services = [
  {
    title: 'Drain Services',
    description: 'Drain snaking and cleaning. Camera Inspections and drain locates.',
    icon: <DrainIcon />
  },
  {
    title: 'New Construction',
    description: 'Expert plumbing installation for new construction and custom homes.',
    icon: <ConstructionIcon />
  },
  {
    title: 'Emergency Repairs',
    description: '24/7 emergency plumbing services for your urgent needs.',
    icon: <EmergencyIcon />
  },
  {
    title: 'Installation',
    description: 'Professional installation of fixtures and appliances.',
    icon: <InstallationIcon />
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance to prevent costly repairs.',
    icon: <MaintenanceIcon />
  },
  {
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of water heaters.',
    icon: <WaterHeaterIcon />
  },
  {
    title: 'Water Filtration',
    description: 'Installation and maintenance of water filtration systems for clean, safe water.',
    icon: <WaterFiltrationIcon />
  },
  {
    title: 'Back Water Valve Installation',
    description: 'Professional installation of back water valves to prevent sewer backups.',
    icon: <BackWaterValveIcon />
  }
]
