'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    image: "/products/product-1.jpeg",
    isPremium: true
  },
  {
    id: 2,
    name: "Royal White Shirt",
    category: "Shirts",
    price: "₹2,499",
    image: "/products/product-2.jpeg",
    isPremium: true
  },
  {
    id: 3,
    name: "Tiruppur Cotton Tee",
    category: "T-Shirts",
    price: "₹1,499",
    image: "/products/product-3.jpeg",
    isPremium: false
  },
  {
    id: 4,
    name: "Heritage Linen Shirt",
    category: "Shirts",
    price: "₹3,299",
    image: "/products/product-4.jpeg",
    isPremium: true
  },
  {
    id: 5,
    name: "Premium Indigo Polo",
    category: "T-Shirts",
    price: "₹1,899",
    image: "/products/product-5.jpeg",
    isPremium: false
  },
  {
    id: 6,
    name: "Signature Gold Edition",
    category: "Shirts",
    price: "₹4,499",
    image: "/products/product-6.jpeg",
    isPremium: true
  },
  {
    id: 7,
    name: "Classic Kurta Shirt",
    category: "Heritage",
    price: "₹2,899",
    image: "/products/product-7.jpeg",
    isPremium: false
  },
  {
    id: 8,
    name: "Modern Fit Chinos",
    category: "Pants",
    price: "₹3,499",
    image: "/products/product-8.jpeg",
    isPremium: false
  },
  {
    id: 9,
    name: "Urban Utility T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    image: "/products/product-9.jpeg",
    isPremium: false
  },
  {
    id: 10,
    name: "Luxury Silk Blend Shirt",
    category: "Premium",
    price: "₹5,299",
    image: "/products/product-10.jpeg",
    isPremium: true
  },
  {
    id: 11,
    name: "Artisan Crafted Tee",
    category: "T-Shirts",
    price: "₹1,599",
    image: "/products/product-11.jpeg",
    isPremium: false
  },
  {
    id: 12,
    name: "Classic White Poplin",
    category: "Shirts",
    price: "₹2,199",
    image: "/shirt.png",
    isPremium: false
  },
  {
    id: 13,
    name: "Premium Crew Tee",
    category: "T-Shirts",
    price: "₹1,199",
    image: "/tshirt.png",
    isPremium: false
  }
];

export default function ProductsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '72px', paddingBottom: '120px' }}>
      <header style={{ 
        marginBottom: isMobile ? '32px' : '48px', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        alignItems: isMobile ? 'flex-start' : 'flex-end', 
        justifyContent: 'space-between', 
        gap: '24px' 
      }}>
        <div>
          <h2 className="text-h2" style={{ fontSize: isMobile ? '24px' : '36px' }}>The Collection</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: isMobile ? '100%' : 'auto', justifyContent: 'space-between' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            border: '1px solid var(--border-light)', 
            padding: '8px 16px', 
            borderRadius: '99px', 
            background: 'white',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer'
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>tune</span>
            <span>Refine</span>
          </button>
          <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', fontWeight: 500 }}>{products.length} Items</p>
        </div>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: isMobile ? '12px' : '40px' 
      }}>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="group" style={{ cursor: 'pointer' }}>
              <div style={{ 
                position: 'relative', 
                aspectRatio: '3/4', 
                background: 'var(--surface-container-low)', 
                marginBottom: '12px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                border: product.isPremium ? '1px solid var(--gold-luxury)' : '1px solid var(--border-light)',
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {product.isPremium && (
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span style={{ 
                      background: 'var(--gold-luxury)', 
                      color: 'var(--charcoal-black)', 
                      fontSize: '8px', 
                      fontWeight: 800, 
                      padding: '3px 8px', 
                      borderRadius: '2px', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>Premium</span>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <p className="text-caption" style={{ color: 'var(--medium-grey)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px', fontWeight: 600 }}>{product.category}</p>
                <h3 className="text-body-reg" style={{ fontWeight: 600, fontSize: isMobile ? '13px' : '16px', lineHeight: 1.2 }}>{product.name}</h3>
                <p className="text-body-reg" style={{ color: 'var(--charcoal-black)', fontWeight: 700, fontSize: isMobile ? '13px' : '16px', marginTop: '4px' }}>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
