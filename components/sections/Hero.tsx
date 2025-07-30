'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background with gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1rem',
        maxWidth: '64rem',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            Discover Your Perfect
            <span style={{
              display: 'block',
              color: '#86efac'
            }}>Land Investment</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: '#dcfce7',
            marginBottom: '2rem',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}>
            Premium land opportunities across the United States. From hunting land to investment properties, 
            we help you find the perfect opportunity that matches your vision.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '3rem' }}>
          <form onSubmit={handleSearch} style={{ maxWidth: '42rem', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="Search by location, property type, or price range..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    fontSize: '1.125rem',
                    borderRadius: '0.75rem',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    outline: 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                Search Properties
              </button>
            </div>
          </form>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '48rem',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>500+</div>
            <div style={{
              color: '#86efac',
              fontWeight: '500'
            }}>Properties Available</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>25+</div>
            <div style={{
              color: '#86efac',
              fontWeight: '500'
            }}>States Covered</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem'
            }}>98%</div>
            <div style={{
              color: '#86efac',
              fontWeight: '500'
            }}>Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button className="btn-outline" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            borderRadius: '0.75rem'
          }}>
            View Featured Properties
          </button>
          <button className="btn-primary" style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            borderRadius: '0.75rem'
          }}>
            Get Expert Consultation
          </button>
        </div>
      </div>
    </section>
  );
} 