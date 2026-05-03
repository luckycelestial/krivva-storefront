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
      {/* Top Value Props Section - Auto Scrolling Marquee */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 64px',
        borderBottom: '1px solid rgba(192, 140, 140, 0.2)',
        paddingBottom: '48px',
        overflow: 'hidden'
      }}>
        <div className="marquee-wrapper">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-content" style={{ animationDuration: '20s' }}>
              {[
                { icon: "workspace_premium", title: "Premium Craftsmanship", desc: "Our products are made with the highest quality materials and expert craftsmanship in Tiruppur." },
                { icon: "lock", title: "Trusted Payments", desc: "Shop safely with our fully encrypted, secure payment system." },
                { icon: "verified", title: "Quality Assurance", desc: "Crafted with care, each piece guarantees exceptional quality and attention to detail." }
              ].map((prop, idx) => (
                <div key={idx} style={{ flex: '0 0 350px', textAlign: 'center', padding: '0 20px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--gold-luxury)', marginBottom: '16px' }}>{prop.icon}</span>
                  <h4 style={{ fontSize: '16px', marginBottom: '8px', fontWeight: 600 }}>{prop.title}</h4>
                  <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.6' }}>{prop.desc}</p>
                </div>
              ))}
            </div>
          ))}
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
          <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.8 }}>
            Our mission is to create premium clothing that blends modern elegance with everyday comfort. We design thoughtful styles that are easy to wear, beautifully crafted, and accessible.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <a href="#" style={{ color: 'var(--gold-luxury)', textDecoration: 'none' }}>
              <span className="material-symbols-outlined">photo_camera</span>
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
