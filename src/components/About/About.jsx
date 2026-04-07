import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grain"></div>
      
      <div className="about-container">
        
        {/* Header - More Minimal */}
        <div className="about-header">
          <span className="about-tag">The Philosophy</span>
          <h2 className="about-statement">
            Preserving <span className="italic-text">Legacies</span> Through <br />
            Cinematic Artistry.
          </h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-content-grid">
          {/* Left: Simple Thin Quote */}
          <div className="about-left">
            <div className="minimal-quote-box">
              <p className="about-quote">
                “We don't just take photographs; we capture the silent 
                language of emotions that words fail to express.”
              </p>
            </div>
          </div>

          {/* Right: Refined Description */}
          <div className="about-right">
            <p className="about-description">
              Based in <strong>Erode</strong>,MihtunaPhotography specializes in high-end 
              visual storytelling. We believe every frame should be a masterpiece—crafted 
              with elegance, sophistication, and raw authenticity.
            </p>
            
            <div className="about-signature">
              <div className="sig-line-top"></div>
              <div className="sig-meta">
                <span className="sig-brand">Mithuna Photography</span>
                <span className="sig-year">Est. 2024 / TRICHY</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}