'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ShoppingBag() {
  const [isMobile, setIsMobile] = useState(false);
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const subtotal = cartTotal;
  const shipping = 0; // Complimentary
  const gst = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + gst;

  if (cart.length === 0) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1 className="text-h1" style={{ marginBottom: '24px' }}>Your Bag is Empty😔</h1>
        <p className="text-body-reg" style={{ marginBottom: '40px', color: 'var(--on-surface-variant)' }}>
          Discover our latest arrivals and find something special.
        </p>
        <Link href="/products" className="btn-primary" style={{ padding: '16px 48px' }}>
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '72px', paddingBottom: '120px' }}>
      <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
        <h1 className="text-h1" style={{ marginBottom: '8px' }}>Shopping Bag</h1>
        <p className="text-body-reg" style={{ color: 'var(--on-surface-variant)' }}>Review your premium selections from our heritage collection.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? '32px' : '64px',
        alignItems: 'start'
      }}>
        
        {/* Cart Items - 2 column grid on left half (PC) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', 
          gap: isMobile ? '16px' : '24px' 
        }}>
          {cart.map((item, index) => (
            <div key={`${item.id}-${item.size}-${item.color}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              padding: '16px', 
              background: 'white', 
              border: '1px solid var(--border-light)', 
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              position: 'relative',
              transition: 'transform 0.2s ease'
            }} className="cart-item-card">
              <div style={{ 
                width: '100%', 
                aspectRatio: '3/4', 
                overflow: 'hidden', 
                borderRadius: '8px',
                background: 'var(--surface-container-low)'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2, margin: 0 }}>{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ff4444', padding: '4px' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete_outline</span>
                  </button>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '10px', background: 'var(--surface-container-high)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>{item.size}</span>
                  <span style={{ fontSize: '10px', background: 'var(--surface-container-high)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>{item.color}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontWeight: 700, color: 'black', fontSize: '15px' }}>{item.price}</span>
                  
                  {/* Quantity Controls */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '99px',
                    padding: '2px 8px',
                    background: 'var(--ivory-white)'
                  }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                    >−</button>
                    <span style={{ fontSize: '12px', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary - Right half (PC) */}
        <div>
          <div style={{ 
            position: isMobile ? 'static' : 'sticky', 
            top: '120px', 
            padding: isMobile ? '24px' : '40px', 
            background: 'white', 
            color: 'black', 
            borderRadius: '24px', 
            border: '2px solid black',
            boxShadow: '0 20px 50px rgba(212,175,55,0.1)'
          }}>
            <h3 className="text-h3" style={{ color: 'black', marginBottom: '32px', letterSpacing: '0.05em' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#666666', fontSize: '14px' }}>Subtotal</span>
                <span style={{ fontWeight: 500, color: 'black' }}>₹{subtotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#666666', fontSize: '14px' }}>Shipping</span>
                <span style={{ color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px', fontWeight: 700 }}>Complimentary</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#666666', fontSize: '14px' }}>GST (12%)</span>
                <span style={{ fontWeight: 500, color: 'black' }}>₹{gst.toLocaleString()}</span>
              </div>
              
              <div style={{ 
                paddingTop: '24px', 
                marginTop: '12px', 
                borderTop: '1px solid var(--gold-luxury)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline' 
              }}>
                <span style={{ fontSize: '18px', fontWeight: 600, color: 'black' }}>Total</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: 'black' }}>₹{total.toLocaleString()}</span>
                  <p style={{ fontSize: '10px', color: '#999999', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>All taxes included</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <button className="btn-primary" style={{ 
                width: '100%', 
                padding: '20px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                fontSize: '14px',
                fontWeight: 700,
                background: 'var(--gold-luxury)',
                color: 'black',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>Proceed to Checkout</button>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.7, color: '#666666' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--gold-luxury)', fontSize: '20px' }}>shield_lock</span>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure encrypted payment</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '32px', padding: '24px', borderRadius: '16px', background: 'var(--surface-container-low)', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>Wholesale Inquiries</h4>
            <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', lineHeight: 1.5, marginBottom: '16px' }}>
              Ordering for a team or retail store? Our wholesale partners receive exclusive heritage pricing and custom tailoring services.
            </p>
            <a href="https://wa.me/918825481550" target="_blank" style={{ color: 'var(--action-blue)', fontWeight: 600, fontSize: '12px', textDecoration: 'none' }}>Contact Wholesale Team →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
