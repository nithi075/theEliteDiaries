import "./Hero.css";

export default function Hero() {
  const whatsappNumber = "919659414250";
  const message =
    "Hello Mithuna Photography, I would like to book a luxury photography session. Please share details.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Intha URL high-end dark photography vibe kodukkum
  const heroImageUrl = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="hero" id="hero">
      
      {/* Background */}
      <div className="hero-bg">
        <img 
          src={heroImageUrl} 
          alt="Luxury Wedding Photography" 
          className="hero-img" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-grain"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <p className="hero-tag">Luxury Wedding Photography</p>

          <h1 className="hero-title">
            Capturing Moments <br />
            <span className="accent-text">That Feel Timeless</span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Cinematic storytelling crafted with emotion & elegance
            <span>Wedding • Pre-Wedding • Couple • Portrait</span>
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              Book Session
            </a>

            <a href="#work" className="btn-outline">
              View Portfolio
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}