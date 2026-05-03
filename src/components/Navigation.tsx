'use client';

import { useState, KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";


export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, toast } = useCart();



  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setIsSearchOpen(false);
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="header" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        background: 'var(--action-blue)',
        borderBottom: '1px solid rgba(192, 140, 140, 0.2)',
        justifyContent: 'center', 
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        height: '72px'
      }}>
        <Link href="/" className="logo" style={{ 
          fontSize: '24px', 
          letterSpacing: '0.2em', 
          color: 'var(--gold-luxury)', 
          fontWeight: '700' 
        }}>
          Krivva by rethika
        </Link>
      </header>

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1002,
          animation: 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            background: 'var(--charcoal-black)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '99px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--gold-luxury)',
            whiteSpace: 'nowrap'
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--gold-luxury)', fontSize: '20px' }}>check_circle</span>
            <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>{toast}</span>
          </div>
        </div>
      )}

      {/* Persistent Search Bar (Toggled) */}

      {isSearchOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '500px',
          padding: '8px',
          zIndex: 1001,
          animation: 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            position: 'relative',
            background: 'white',
            borderRadius: '99px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            border: '1px solid var(--gold-luxury)',
            overflow: 'hidden'
          }}>
            <input 
              type="text" 
              placeholder="Search our collections..." 
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              style={{
                width: '100%',
                padding: '16px 56px 16px 24px',
                border: 'none',
                background: 'transparent',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--charcoal-black)',
                outline: 'none'
              }}
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'var(--action-blue)',
                color: 'white',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
            </button>
          </div>
        </div>
      )}

      <nav className="bottom-nav">
        <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </Link>
        <Link href="/products" className={`nav-item ${isActive('/products') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">apparel</span>
          <span>Products</span>
        </Link>
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className={`nav-item ${isSearchOpen ? 'active' : ''}`}
          style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined">search</span>
          <span>Search</span>
        </button>
        <Link href="/shopping_bag" className={`nav-item ${isActive('/shopping_bag') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px', width: '24px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>shopping_bag</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'var(--brand-gold)',
                color: 'white',
                fontSize: '10px',
                fontWeight: 'bold',
                minWidth: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2px',
                border: '1.5px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 1
              }}>
                {cartCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </Link>

        <Link href="/my_profile" className={`nav-item ${isActive('/my_profile') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </Link>
      </nav>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
