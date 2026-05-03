'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    price: "₹1,299",
    image: "/assets/arrival-1.jpg",
    isPremium: true
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    price: "₹2,499",
    image: "/assets/arrival-2.jpg",
    isPremium: true
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 1",
    price: "₹1,499",
    image: "/assets/arrival-3.png",
    isPremium: false
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 2",
    price: "₹3,299",
    image: "/assets/arrival-4.png",
    isPremium: true
  },
  {
    id: 5,
    name: "Product 5",
    category: "Category 1",
    price: "₹1,899",
    image: "/assets/product-extra-1.png",
    isPremium: false
  },
  {
    id: 6,
    name: "Product 6",
    category: "Category 2",
    price: "₹4,499",
    image: "/assets/product-extra-2.png",
    isPremium: true
  },
  {
    id: 7,
    name: "Product 7",
    category: "Category 3",
    price: "₹2,899",
    image: "/assets/product-extra-3.png",
    isPremium: false
  },
  {
    id: 8,
    name: "Product 8",
    category: "Category 4",
    price: "₹3,499",
    image: "/assets/product-extra-4.png",
    isPremium: false
  },
  {
    id: 9,
    name: "Product 9",
    category: "Category 1",
    price: "₹1,299",
    image: "/assets/product-extra-5.png",
    isPremium: false
  },
  {
    id: 10,
    name: "Product 10",
    category: "Category 5",
    price: "₹5,299",
    image: "/assets/shirt.png",
    isPremium: true
  },
  {
    id: 11,
    name: "Product 11",
    category: "Category 1",
    price: "₹1,599",
    image: "/assets/tshirt.png",
    isPremium: false
  },
  {
    id: 12,
    name: "Product 12",
    category: "Category 4",
    price: "₹3,499",
    image: "/assets/pants.png",
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
            border: '1px solid var(--gold-luxury)', 
            padding: '8px 16px', 
            borderRadius: '99px', 
            background: 'transparent',
            color: 'var(--ivory-white)',
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
                border: '2px solid var(--gold-luxury)',
              }}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  style={{ 
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
