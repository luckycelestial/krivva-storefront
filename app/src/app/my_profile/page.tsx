'use client';

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '72px', paddingBottom: '120px' }}>
      {/* User Profile Header */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '100px 1fr' : 'repeat(12, 1fr)', 
        gap: isMobile ? '16px' : '48px', 
        marginBottom: isMobile ? '32px' : '64px',
        alignItems: 'center'
      }}>
        {/* Profile Photo */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 3', 
          display: 'flex', 
          justifyContent: isMobile ? 'flex-start' : 'center'
        }}>
          <div style={{ 
            width: isMobile ? '80px' : '160px', 
            height: isMobile ? '80px' : '160px', 
            borderRadius: '50%', 
            padding: '2px', 
            border: '2px solid var(--brand-gold)', 
            overflow: 'hidden'
          }}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLStH_uZTh0jB_HvBp8SMapP4ECpoLBB05wSBSrPLaUB1ZoBRPAY5Am25rWeZSwECkuYFuWz6bM8ofQmVO8rv9-KCn2JOeQC03qOD5V3c_T9NOa1Nc7gRtGX8hfw6iSivS0Ih8-84Pdv_Gi0rZPO3HTU-r3BK9s7B5gqPwSiqiONGZ0pmXOqyXC4h6W-7AJ_Edo5F0e4fYFGI7f5ZIwKWh7BuUE975-C1l9rHoFCzQdXlQpJoPQq7mcWOQeUQE46g5lXAqmor_jit1" 
              alt="Profile photo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>

        {/* Profile Info Rows */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 9', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px'
        }}>
          {/* Row 1: Name */}
          <h1 className="text-h3" style={{ fontSize: isMobile ? '20px' : '32px', margin: 0 }}>Chakravarthy</h1>
          
          {/* Row 2: Stats/Icons */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--brand-gold)' }}>package_2</span>
              <span className="text-body-sm" style={{ fontWeight: 600 }}>12 Orders</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--brand-gold)' }}>straighten</span>
              <span className="text-body-sm" style={{ fontWeight: 600 }}>Size: M</span>
            </div>
          </div>

          {/* Row 3: Edit Button */}
          <button className="btn-outline" style={{ 
            fontSize: '12px', 
            padding: '6px 16px', 
            borderRadius: '24px', 
            width: 'fit-content'
          }}>Edit Profile</button>
        </div>
      </section>

      {/* Measurement Box Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 className="text-h4" style={{ marginBottom: '16px', color: 'var(--slate-gray)' }}>My Measurements</h2>
        <div style={{ 
          background: 'var(--off-white)', 
          borderRadius: '16px', 
          padding: '24px', 
          border: '1px solid var(--border-light)',
          position: 'relative'
        }}>
          <button style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brand-gold)' }}>
            <span className="material-symbols-outlined">edit</span>
          </button>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--medium-grey)', marginBottom: '4px' }}>Waist</p>
              <p className="text-h3" style={{ fontSize: '20px' }}>32 <span style={{ fontSize: '12px', color: 'var(--medium-grey)' }}>in</span></p>
            </div>
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--medium-grey)', marginBottom: '4px' }}>Hip</p>
              <p className="text-h3" style={{ fontSize: '20px' }}>38 <span style={{ fontSize: '12px', color: 'var(--medium-grey)' }}>in</span></p>
            </div>
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--medium-grey)', marginBottom: '4px' }}>Chest</p>
              <p className="text-h3" style={{ fontSize: '20px' }}>40 <span style={{ fontSize: '12px', color: 'var(--medium-grey)' }}>in</span></p>
            </div>
            
            {/* Calculated Size Box */}
            <div style={{ 
              background: 'var(--charcoal-black)', 
              color: 'white', 
              padding: '16px', 
              borderRadius: '12px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '1px solid var(--brand-gold)'
            }}>
              <p style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--brand-gold)', marginBottom: '4px' }}>Recommended Size</p>
              <p className="text-h2" style={{ color: 'white', fontSize: '28px' }}>M</p>
              <p style={{ fontSize: '9px', opacity: 0.6 }}>Based on Tiruppur Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
          <h2 className="text-h3" style={{ fontSize: isMobile ? '20px' : '28px' }}>Recent Orders</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { id: 'KR-22983', status: 'Delivered', items: '2x Royal White Shirt, 1x Cotton Chinos', date: 'Feb 15, 2024', total: '₹8,297' },
            { id: 'KR-22812', status: 'Fulfilled', items: 'Classic Black T-Shirt, Navy Blue T-Shirt', date: 'Jan 28, 2024', total: '₹2,598' }
          ].map((order, i) => (
            <div key={i} style={{ 
              background: 'white', 
              border: '1px solid var(--border-light)', 
              borderRadius: '16px', 
              padding: isMobile ? '16px' : '24px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '16px' : '32px',
              alignItems: isMobile ? 'flex-start' : 'center'
            }} className="order-card">
              <div style={{ flexGrow: 1, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 className="text-label" style={{ fontWeight: 700 }}>Order #{order.id}</h4>
                  <span style={{ 
                    background: order.status === 'Delivered' ? '#E6F4EA' : 'var(--soft-grey)', 
                    color: order.status === 'Delivered' ? '#1E8E3E' : 'var(--on-surface-variant)', 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    padding: '4px 12px', 
                    borderRadius: '99px'
                  }}>{order.status}</span>
                </div>
                <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '16px' }}>{order.items}</p>
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div>
                    <p style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--medium-grey)' }}>Date</p>
                    <p className="text-label" style={{ fontSize: '11px' }}>{order.date}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--medium-grey)' }}>Total</p>
                    <p className="text-label" style={{ fontSize: '11px' }}>{order.total}</p>
                  </div>
                </div>
              </div>
              <button style={{ 
                border: '1px solid var(--action-blue)', 
                color: 'var(--action-blue)', 
                background: 'transparent', 
                padding: '8px 20px', 
                borderRadius: '4px', 
                fontWeight: 600,
                width: isMobile ? '100%' : 'auto',
                fontSize: '13px'
              }}>Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
