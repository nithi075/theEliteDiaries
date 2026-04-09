import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  const whatsappNumber = "918610574181";
  const message = "Hello Elite Diaries, I would like to book a luxury photography session. Please share details.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // 3 Unsplash images for the slideshow
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494955464529-790512c65305?q=80&w=2071&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds-ku oru murai change aagum
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="hero">
      
      {/* Background Slideshow */}
      <div className="hero-bg">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt="Luxury Photography" 
            className={`hero-img ${index === currentImg ? "active" : ""}`} 
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <div className="hero-grain"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
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