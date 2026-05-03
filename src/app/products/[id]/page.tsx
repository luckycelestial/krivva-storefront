'use client';

import { useEffect, useState, use } from "react";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    price: "₹1,699",
    image: "/assets/arrival-1.jpg",
    details: ["/assets/arrival-1.jpg", "/assets/arrival-1.jpg"],
    description: "Our signature black tee is crafted from premium 100% long-staple cotton sourced directly from Tiruppur, Tamil Nadu. Designed for the Indian climate, it offers superior breathability and a structured fit that retains its shape wash after wash."
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 2",
    price: "₹1,699",
    image: "/assets/arrival-2.jpg",
    details: ["/assets/arrival-2.jpg", "/assets/arrival-2.jpg"],
    description: "The Royal White Shirt is an essential for every modern wardrobe. Made from fine Giza cotton, it features a crisp finish and refined silhouette perfect for both business and evening settings."
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 1",
    price: "₹1,699",
    image: "/assets/arrival-3.png",
    details: ["/assets/arrival-3.png", "/assets/arrival-3.png"],
    description: "Experience the legacy of Tiruppur cotton. This tee offers unmatched comfort with a focus on sustainable production and durability."
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 2",
    price: "₹1,699",
    image: "/assets/arrival-4.png",
    details: ["/assets/arrival-4.png", "/assets/arrival-4.png"],
    description: "Breathable, sophisticated, and timeless. Our Heritage Linen Shirt is pre-washed for extra softness and designed with a relaxed yet tailored fit."
  },
  {
    id: 5,
    name: "Product 5",
    category: "Category 1",
    price: "₹1,699",
    image: "/assets/product-extra-1.png",
    details: ["/assets/product-extra-1.png", "/assets/product-extra-1.png"],
    description: "A modern take on a classic silhouette. The Premium Indigo Polo features a rich, deep hue and a slightly tapered fit for a contemporary look."
  },
  {
    id: 6,
    name: "Product 6",
    category: "Category 2",
    price: "₹1,699",
    image: "/assets/product-extra-2.png",
    details: ["/assets/product-extra-2.png", "/assets/product-extra-2.png"],
  description: "Our Signature Gold Edition shirt represents the pinnacle of Krivva craftsmanship. Featuring subtle gold-thread detailing and a luxurious hand-feel."
  },
  {
    id: 7,
    name: "Product 7",
    category: "Category 3",
    price: "₹1,699",
    image: "/assets/product-extra-3.png",
    details: ["/assets/product-extra-3.png", "/assets/product-extra-3.png"],
    description: "Merging traditional Indian aesthetics with modern shirting. The Kurta Shirt is versatile, elegant, and perfect for cultural celebrations or upscale casual wear."
  },
  {
    id: 8,
    name: "Product 8",
    category: "Category 4",
    price: "₹1,699",
    image: "/assets/product-extra-4.png",
    details: ["/assets/product-extra-4.png", "/assets/product-extra-4.png"],
    description: "Tailored for the modern professional. These chinos offer a slight stretch for all-day comfort without compromising on a sharp, clean look."
  },
  {
    id: 9,
    name: "Product 9",
    category: "Category 1",
    price: "₹1,699",
    image: "/assets/product-extra-5.png",
    details: ["/assets/product-extra-5.png", "/assets/product-extra-5.png"],
    description: "Functional design meets street aesthetic. The Urban Utility Tee features reinforced stitching and a slightly heavier weight fabric for everyday durability."
  }
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

import Image from "next/image";
import { useCart } from "@/context/CartContext";


// ... (existing COLORS and SIZES) ...


export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [isMobile, setIsMobile] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, showToast } = useCart();

  
  const product = products.find(p => p.id === parseInt(productId)) || products[0];


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
      color: "Default"
    });
    showToast(`${product.name} Added!`);
  };


  return (
    <div className="container animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', 
        gap: isMobile ? '32px' : '64px' 
      }}>
        
        {/* Left: Imagery */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 7', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isMobile ? '16px' : '32px',
          width: '100%',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'relative',
            aspectRatio: '3/4', 
            overflow: 'hidden', 
            borderRadius: '12px', 
            background: 'white', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
            width: '100%'
          }}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: isMobile ? '16px' : '32px',
            width: '100%',
            overflow: 'hidden'
          }}>
            {product.details.map((img, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px', background: 'white', border: '1px solid var(--border-light)' }}>
                <Image src={img} alt={`Detail ${i}`} fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 5', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isMobile ? '32px' : '40px' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="text-caption" style={{ color: 'var(--warm-bronze)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>{product.category}</span>
            <h1 className="text-h1" style={{ fontSize: isMobile ? '28px' : '40px' }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p className="text-h3" style={{ color: 'var(--gold-luxury)' }}>{product.price}</p>
              <span style={{ background: 'var(--gold-luxury)', color: 'var(--action-blue)', padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>In Stock</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>


            {/* Size Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label" style={{ fontWeight: 600 }}>Select Size</span>
                <Link href="#" className="text-caption" style={{ color: 'var(--gold-luxury)', textDecoration: 'underline' }}>Size Guide</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)', gap: isMobile ? '10px' : '12px', width: '100%', overflow: 'hidden' }}>
                {SIZES.map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    style={{ 
                      padding: '12px 0', 
                      border: size === selectedSize ? '2px solid var(--gold-luxury)' : '1px solid var(--border-light)', 
                      borderRadius: '8px', 
                      background: size === selectedSize ? 'var(--gold-luxury)' : 'transparent',
                      color: size === selectedSize ? 'var(--action-blue)' : 'var(--ivory-white)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >{size}</button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="text-label" style={{ fontWeight: 600 }}>Quantity</span>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                width: 'fit-content',
                padding: '4px'
              }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: 'var(--gold-luxury)'
                  }}
                >−</button>
                <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: 'var(--gold-luxury)'
                  }}
                >+</button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary" 
                  style={{ flex: 1, padding: isMobile ? '16px' : '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
                <button style={{ 
                  width: isMobile ? '56px' : '64px', 
                  height: isMobile ? '56px' : '64px', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'transparent',
                  cursor: 'pointer'
                }}>
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <button className="btn-gold" style={{ width: '100%', padding: isMobile ? '16px' : '20px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined">magic_button</span>
                Custom Fit Tailoring
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information - Moved to bottom */}
      <div style={{ 
        marginTop: isMobile ? '48px' : '80px', 
        paddingTop: '48px', 
        borderTop: '1px solid var(--border-light)',
        maxWidth: '800px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: '16px' }}>Product Description</h3>
            <p className="text-body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8, fontSize: isMobile ? '16px' : '18px' }}>{product.description}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
            <div style={{ padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }} className="icon-box-contrast">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>architecture</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fit</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>Modern Classic Fit</p>
              </div>
            </div>
            <div style={{ padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }} className="icon-box-contrast">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>eco</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Origin</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>100% Tiruppur Cotton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
