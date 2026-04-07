import "./Services.css";

export default function Services() {
  const servicesData = [
    {
      id: "01",
      title: "Wedding Storytelling",
      desc: "Elegant wedding photography capturing real emotions and cinematic moments that last forever.",
      tag: "Cinematic • Traditional"
    },
    {
      id: "02",
      title: "Couture Albums",
      desc: "Handcrafted, premium quality album layouts designed with an artistic editorial storytelling style.",
      tag: "Physical • Digital"
    },
    {
      id: "03",
      title: "Motion Films",
      desc: "Creative cinematic wedding films with high-end color grading and emotional soundscapes.",
      tag: "4K • Cinematic Edit"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-grain"></div>
      
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag-mini">Our Expertise</span>
          <h2 className="services-main-title">Bespoke <span className="italic-text">Experiences</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="services-list">
          {servicesData.map((service) => (
            <div key={service.id} className="service-row">
              <div className="row-left">
                <span className="service-id">{service.id}</span>
                <div className="title-group">
                  <h3>{service.title}</h3>
                  <span className="service-subtag">{service.tag}</span>
                </div>
              </div>
              
              <div className="row-right">
                <p>{service.desc}</p>
                <div className="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
              
              {/* Subtle hover background highlight */}
              <div className="row-hover-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}