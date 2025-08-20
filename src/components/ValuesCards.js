"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <img src={`/images/image${(index % 4) + 1}.jpg`} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default function ValuesCards() {
  const cards = [
    {
      title: "Our Philosophy",
      copy: "We believe every child, youth, and family carries inherent strength, dignity, and potential. At Pluming Eagle Lodge, we walk alongside those we serve, with compassion, respect, and cultural integrity. We create safe spaces where voices are heard, stories are honoured, and healing is rooted in tradition. Through this approach, we nurture identity, belonging, and transformation that endures across generations.",
    },
    {
      title: "Our Purpose",
      copy: "To empower Indigenous children, youth, and families to heal, grow, and thrive, while staying rooted in culture, identity, and community.",
    },
    {
      title: "Our Mission",
      copy: "To provide culturally safe, trauma-informed programs that support Indigenous children, youth, and families through all stages of life, fostering healing, resilience, and reconnection.",
    },
    {
      title: "Our Vision",
      copy: "To have a future where Indigenous children, youth, and families are strong, connected, and thriving, surrounded by community, culture, and care.",
    },
  ];

  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");
      const isMobile = window.innerWidth <= 768;

      // Disable complex animations on mobile for better performance
      if (isMobile) {
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 65%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index == cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        // Pin all cards except the last one
        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: cards[cards.length - 1],
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: cards[cards.length - 1],
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="intro">
          <h1>Our Impact</h1>
          <div className="impact-stats">
            <div className="impact-item">
              <span className="impact-icon">📈</span>
              <p>Expanded to 6 holistic programs supporting Indigenous children, youth, and families from birth to adulthood</p>
            </div>
            <div className="impact-item">
              <span className="impact-icon">🧡</span>
              <p>Supported 100+ children and youth in culturally grounded, trauma-informed environments that promote healing and growth</p>
            </div>
            <div className="impact-item">
              <span className="impact-icon">🪶</span>
              <p>Partnered with Elders and communities to restore identity, belonging, and traditional wisdom</p>
            </div>
            <div className="impact-item">
              <span className="impact-icon">🏠</span>
              <p>Provided safe, nurturing homes that prioritize emotional healing, education, cultural connection, and independence</p>
            </div>
          </div>
        </section>
        <section className="cards">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </section>
        <section className="outro">
          <div className="outro-content">
            <p className="outro-paragraph">
              At Pluming Eagle Lodge, we are committed to creating lasting positive change in the lives of children, youth, and families. Our dedicated team works tirelessly to provide the support, guidance, and opportunities needed for every individual to thrive and reach their full potential.
            </p>
            
            <div className="outro-info-section">
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=23+Taralea+Bay+NE+Calgary+AB+T3J+5H1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pluming Eagle Lodge Location"
                ></iframe>
              </div>
              
              <div className="business-info">
                <h3>Contact Information</h3>
                                 <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>23 Taralea Bay NE<br />Calgary, AB T3J 5H1</span>
                 </div>
                 
                 <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09494 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55778 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59522 1.99522 8.06574 2.16708 8.43376 2.48353C8.80178 2.79999 9.042 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97348 7.27675 9.89381 7.65319C9.81415 8.02963 9.62901 8.36836 9.35999 8.62L8.08999 9.9C9.51355 12.4136 11.5864 14.4865 14.1 15.91L15.38 14.64C15.6316 14.3709 15.9704 14.1858 16.3468 14.1061C16.7232 14.0265 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>(403) 807-6088</span>
                 </div>
                 
                 <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>info@plumingeaglelodge.com</span>
                 </div>
              </div>
            </div>
            
            <div className="outro-buttons">
              <a href="/programs" className="outro-button programs-btn">
                <span>Our Programs</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/careers" className="outro-button careers-btn">
                <span>Join Our Team</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
} 