import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Delightful<br />
              events<br />
              <span className="gradient-text">start here.</span>
            </h1>
            <p className="hero-description">
              Set up an event page, invite friends and sell<br />
              tickets. Host a memorable event today.
            </p>
            <button className="cta-button">
              Create Your First Event
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="status-bar">
                    <span className="time">9:41</span>
                    <div className="signal-icons">
                      <div className="signal"></div>
                      <div className="wifi"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="browser-bar">
                    <span className="url">Create Event</span>
                    <div className="browser-icons">
                      <span>⟲</span>
                      <span>⊕</span>
                    </div>
                  </div>
                </div>
                
                <div className="event-card">
                  <div className="event-header">
                    <h2 className="summer-title">SUMMER</h2>
                    <span className="party-text">PARTY PARTY PARTY PARTY PARTY</span>
                  </div>
                  
                  <div className="date-badge">
                    <span className="date-number">23</span>
                  </div>
                  
                  <div className="event-details">
                    <h3 className="event-name">Summer Party at Ocean Beach</h3>
                    <p className="hosted-by">Hosted by Gabrielle Aston</p>
                    
                    <div className="event-info">
                      <div className="info-item">
                        <span className="icon">📅</span>
                        <span>Sunday, July 23</span>
                      </div>
                      <div className="info-item">
                        <span className="icon">🕐</span>
                        <span>4:00 PM - 8:00 PM PST</span>
                      </div>
                      <div className="info-item">
                        <span className="icon">📍</span>
                        <span>Ocean Beach</span>
                        <span className="location-detail">San Francisco, California</span>
                      </div>
                    </div>
                    
                    <div className="attendees">
                      <div className="attendee-avatars">
                        <div className="avatar avatar-1"></div>
                        <div className="avatar avatar-2"></div>
                        <div className="avatar avatar-3"></div>
                      </div>
                      <span className="attendee-count">45 Guests</span>
                      <span className="attendee-names">Sam, Hugo & John</span>
                    </div>
                    
                    <div className="event-status">
                      <div className="status-indicator">
                        <div className="profile-pic"></div>
                        <div className="status-text">
                          <span className="you-are-in">You're in</span>
                          <span className="confirmation">Confirmation sent via email</span>
                        </div>
                      </div>
                      <span className="countdown">32d</span>
                    </div>
                    
                    <button className="add-calendar-btn">
                      📅 Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="floating-ring ring-1"></div>
            <div className="floating-ring ring-2"></div>
            <div className="floating-star star-1">✦</div>
            <div className="floating-star star-2">✦</div>
            <div className="floating-star star-3">✦</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 