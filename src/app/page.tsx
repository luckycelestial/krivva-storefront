'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="animate-fade-in" style={{ paddingTop: '72px' }}>
      {/* Brand Hero - Centered Logo */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        background: 'transparent',
        position: 'relative'
      }}>
        <div style={{ 
          width: '100%', 
          position: 'relative', 
          aspectRatio: isMobile ? '1/1' : '21/9',
          background: 'var(--action-blue)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '2px solid var(--gold-luxury)'
        }}>
          <Image 
            src="/assets/Krivva_logo.jpg" 
            alt="Krivva Logo" 
            fill
            priority
            style={{ 
              objectFit: 'contain',
              padding: '20px'
            }} 
          />
        </div>

        {/* Explore Collections Button in its own Symmetric Black Box */}
        <div style={{ 
          width: '100%', 
          background: 'var(--action-blue)', 
          padding: isMobile ? '40px 20px' : '64px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link href="/products" className="btn-primary" style={{ 
            textDecoration: 'none', 
            borderRadius: '40px', 
            padding: isMobile ? '14px 48px' : '18px 80px', 
            fontSize: isMobile ? '16px' : '18px', 
            fontWeight: 600,
            background: 'var(--gold-luxury)',
            color: 'var(--action-blue)',
            boxShadow: '0 4px 20px rgba(192,140,140,0.3)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Explore Collections
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container" style={{ padding: '20px 20px 40px', background: 'transparent' }}>
        <h2 className="text-h2" style={{ marginBottom: '24px', fontSize: isMobile ? '22px' : '32px' }}>New Arrivals</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
          gap: isMobile ? '16px' : '32px',
          marginBottom: '40px'
        }}>
          {[
            { id: 101, name: "New Arrival 01", price: "₹689", image: "/assets/arrival-1.jpg" },
            { id: 102, name: "New Arrival 02", price: "₹689", image: "/assets/arrival-2.jpg" },
            { id: 103, name: "New Arrival 03", price: "₹689", image: "/assets/arrival-3.png" },
            { id: 104, name: "New Arrival 04", price: "₹689", image: "/assets/arrival-4.png" }
          ].map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
               <div style={{ position: 'relative', aspectRatio: '3/4', background: 'transparent', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', border: '2px solid var(--gold-luxury)' }}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
               </div>
               <p className="text-body-sm" style={{ fontWeight: 600, marginBottom: '4px' }}>{item.name}</p>
               <p className="text-body-sm" style={{ opacity: 0.7 }}>{item.price}</p>
            </Link>
          ))}
        </div>

        {/* New Arrival Feature Video */}
        <div style={{ 
          width: '100%', 
          maxWidth: '400px',
          margin: '0 auto',
          borderRadius: '16px', 
          overflow: 'hidden', 
          background: 'var(--action-blue)',
          aspectRatio: '9/16',
          boxShadow: '0 20px 40px rgba(61,11,28,0.2)',
          border: '2px solid var(--gold-luxury)'
        }}>
          <video 
            src="/assets/Video-160.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Value Propositions - Auto Scrolling Marquee */}
      <section style={{ background: 'transparent', padding: '60px 0', overflow: 'hidden' }}>
        <div className="marquee-container">
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px' }}>
              {[
                { icon: "workspace_premium", title: "Premium T-Shirts", desc: "Long lasting craftsmanship" },
                { icon: "eco", title: "Pure Cotton", desc: "Sourced from Tiruppur" },
                { icon: "local_shipping", title: "Pan-India Delivery", desc: "Fast & Secure shipping" },
                { icon: "history", title: "Heritage Fits", desc: "Classic Indian silhouettes" },
                { icon: "verified", title: "Quality Check", desc: "Multi-point inspection" }
              ].map((value, index) => (
                <div key={index} style={{ 
                  flex: '0 0 280px',
                  padding: '32px 24px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  border: '1px solid var(--gold-luxury)'
                }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'var(--surface-container-low)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'var(--gold-luxury)'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{value.icon}</span>
                  </div>
                  <h4 className="text-h4" style={{ fontSize: '16px', marginBottom: '8px' }}>{value.title}</h4>
                  <p className="text-body-sm" style={{ opacity: 0.6 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Wholesale Partnership */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '640px', 
            margin: '0 auto',
            padding: '0 20px' 
          }}>
            <h2 className="text-h2" style={{ marginBottom: '20px', fontSize: isMobile ? '24px' : '32px' }}>Wholesale Partnership</h2>
            <p className="text-body-reg" style={{ color: 'var(--ivory-white)', marginBottom: '32px', lineHeight: '1.6' }}>
              Partner with Krivva by rethika to bring premium Tiruppur craftsmanship to your retail space. 
              We offer exclusive wholesale pricing and custom production services for bulk orders.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a 
                href="https://wa.me/919944400399?text=Hey%2C%20I%20want%20to%20enquire%20about%20your%20wholesale%20deals" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="btn-outline" style={{ borderRadius: '24px', padding: '12px 32px', minWidth: '200px', background: 'var(--gold-luxury)', color: 'var(--action-blue)', border: 'none', fontWeight: 600 }}>Contact Wholesale Team</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
