import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(0, 0, 0, 0.2)',
      color: 'var(--ivory-white)',
      borderTop: '1px solid var(--gold-luxury)',
      padding: '64px 20px 120px', // Extra bottom padding for mobile nav
      marginTop: '64px'
    }}>
      {/* Top Value Props Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 64px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(192, 140, 140, 0.2)',
        paddingBottom: '48px'
      }}>
        <div>
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--gold-luxury)', marginBottom: '16px' }}>workspace_premium</span>
          <h4 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: 600 }}>Premium Craftsmanship</h4>
          <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.6' }}>Our products are made with the highest quality materials and expert craftsmanship in Tiruppur.</p>
        </div>
        <div>
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--gold-luxury)', marginBottom: '16px' }}>lock</span>
          <h4 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: 600 }}>Trusted Payments</h4>
          <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.6' }}>Shop safely with our fully encrypted, secure payment system.</p>
        </div>
        <div>
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--gold-luxury)', marginBottom: '16px' }}>verified</span>
          <h4 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: 600 }}>Quality Assurance</h4>
          <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.6' }}>Crafted with care, each piece guarantees exceptional quality and attention to detail.</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Brand Section */}
        <div style={{ gridColumn: 'span 1' }}>
          <h3 style={{ 
            fontFamily: "'Playfair Display', serif", 
            color: 'var(--gold-luxury)',
            fontSize: '20px',
            marginBottom: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Krivva by rethika
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.8, textTransform: 'uppercase' }}>
            <strong>KRIVVA</strong> A BRAND THAT EMBODIES THE REGAL ESSENCE OF INDIAN HERITAGE, METICULOUSLY CRAFTED FOR THE MODERN CONNOISSEUR. WITH UNWAVERING DEDICATION AND COUNTLESS HOURS OF HARD WORK, WE HAVE CREATED A COLLECTION THAT MARRIES THE GRANDEUR OF TRADITION WITH THE REFINEMENT OF CONTEMPORARY DESIGN.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <a href="https://www.instagram.com/krivvabyrethika?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-luxury)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" style={{ color: 'var(--gold-luxury)', textDecoration: 'none' }}>
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Menu & Policy side by side on mobile */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '20px',
          gridColumn: 'span 1'
        }}>
          {/* Menu Section */}
          <div>
            <h4 style={{ color: 'var(--gold-luxury)', marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Menu</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <Link href="/" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>home</span> Home
                </Link>
              </li>
              <li>
                <Link href="/products" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>shopping_bag</span> Shop
                </Link>
              </li>
              <li>
                <a href="https://wa.me/919944400399" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h4 style={{ color: 'var(--gold-luxury)', marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Policy</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link href="#" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>Shipping</Link></li>
              <li><Link href="#" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>Privacy</Link></li>
              <li><Link href="#" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>Terms</Link></li>
              <li><Link href="#" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontSize: '14px', opacity: 0.9 }}>Refund</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 style={{ color: 'var(--gold-luxury)', marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Contact</h4>
          <p style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>Questions? We're here for you</p>
          <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.9 }}>Mon - Sat 10am-6pm.</p>
          <p style={{ fontSize: '14px', marginBottom: '12px' }}><strong>WhatsApp:</strong> +91 99444 00399</p>
          <p style={{ fontSize: '14px' }}><strong>Email:</strong> support@krivva.com</p>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid rgba(192, 140, 140, 0.2)', 
        marginTop: '48px', 
        paddingTop: '24px', 
        textAlign: 'center',
        fontSize: '12px',
        opacity: 0.6,
        maxWidth: '1200px',
        margin: '48px auto 0'
      }}>
        Copyright © 2026, Krivva by rethika
      </div>
    </footer>
  );
}
