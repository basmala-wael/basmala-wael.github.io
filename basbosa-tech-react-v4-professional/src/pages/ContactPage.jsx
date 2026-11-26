import { useCart } from "../context/CartContext";

export default function ContactPage() {
  const { showToast } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    showToast("Demo form — your message wasn't sent");
    e.target.reset();
  }

  return (
    <>
      <section className="contact-page container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><svg className="contact-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg> Mansoura, Egypt</p>
            <p><svg className="contact-ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> <a href="mailto:support@basbosatech.com">support@basbosatech.com</a></p>
            <p className="demo-note">Sample details for this demo store.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
            <p className="demo-note">Demo form — messages aren't sent anywhere yet.</p>
          </form>
        </div>
      </section>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps?q=Mansoura,Egypt&output=embed"
          allowFullScreen
          loading="lazy"
          title="Map of Mansoura, Egypt"
        ></iframe>
      </section>
    </>
  );
}
