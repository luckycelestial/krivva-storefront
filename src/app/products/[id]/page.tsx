'use client';

import { useEffect, useState, use } from "react";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    image: "/products/product-1.jpeg",
    details: ["/products/product-1.jpeg", "/products/product-1.jpeg"],
    description: "Our signature black tee is crafted from premium 100% long-staple cotton sourced directly from Tiruppur, Tamil Nadu. Designed for the Indian climate, it offers superior breathability and a structured fit that retains its shape wash after wash."
  },
  {
    id: 2,
    name: "Royal White Shirt",
    category: "Shirts",
    price: "₹2,499",
    image: "/products/product-2.jpeg",
    details: ["/products/product-2.jpeg", "/products/product-2.jpeg"],
    description: "The Royal White Shirt is an essential for every modern wardrobe. Made from fine Giza cotton, it features a crisp finish and refined silhouette perfect for both business and evening settings."
  },
  {
    id: 3,
    name: "Tiruppur Cotton Tee",
    category: "T-Shirts",
    price: "₹1,499",
    image: "/products/product-3.jpeg",
    details: ["/products/product-3.jpeg", "/products/product-3.jpeg"],
    description: "Experience the legacy of Tiruppur cotton. This tee offers unmatched comfort with a focus on sustainable production and durability."
  },
  {
    id: 4,
    name: "Heritage Linen Shirt",
    category: "Shirts",
    price: "₹3,299",
    image: "/products/product-4.jpeg",
    details: ["/products/product-4.jpeg", "/products/product-4.jpeg"],
    description: "Breathable, sophisticated, and timeless. Our Heritage Linen Shirt is pre-washed for extra softness and designed with a relaxed yet tailored fit."
  },
  {
    id: 5,
    name: "Premium Indigo Polo",
    category: "T-Shirts",
    price: "₹1,899",
    image: "/products/product-5.jpeg",
    details: ["/products/product-5.jpeg", "/products/product-5.jpeg"],
    description: "A modern take on a classic silhouette. The Premium Indigo Polo features a rich, deep hue and a slightly tapered fit for a contemporary look."
  },
  {
    id: 6,
    name: "Signature Gold Edition",
    category: "Shirts",
    price: "₹4,499",
    image: "/products/product-6.jpeg",
    details: ["/products/product-6.jpeg", "/products/product-6.jpeg"],
  description: "Our Signature Gold Edition shirt represents the pinnacle of Krivva craftsmanship. Featuring subtle gold-thread detailing and a luxurious hand-feel."
  },
  {
    id: 7,
    name: "Classic Kurta Shirt",
    category: "Heritage",
    price: "₹2,899",
    image: "/products/product-7.jpeg",
    details: ["/products/product-7.jpeg", "/products/product-7.jpeg"],
    description: "Merging traditional Indian aesthetics with modern shirting. The Kurta Shirt is versatile, elegant, and perfect for cultural celebrations or upscale casual wear."
  },
  {
    id: 8,
    name: "Modern Fit Chinos",
    category: "Pants",
    price: "₹3,499",
    image: "/products/product-8.jpeg",
    details: ["/products/product-8.jpeg", "/products/product-8.jpeg"],
    description: "Tailored for the modern professional. These chinos offer a slight stretch for all-day comfort without compromising on a sharp, clean look."
  },
  {
    id: 9,
    name: "Urban Utility T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    image: "/products/product-9.jpeg",
    details: ["/products/product-9.jpeg", "/products/product-9.jpeg"],
    description: "Functional design meets street aesthetic. The Urban Utility Tee features reinforced stitching and a slightly heavier weight fabric for everyday durability."
  },
  {
    id: 10,
    name: "Luxury Silk Blend Shirt",
    category: "Premium",
    price: "₹5,299",
    image: "/products/product-10.jpeg",
    details: ["/products/product-10.jpeg", "/products/product-10.jpeg"],
    description: "A blend of fine cotton and pure mulberry silk. This shirt offers a subtle sheen and a liquid-like drape that feels incredible against the skin."
  },
  {
    id: 11,
    name: "Artisan Crafted Tee",
    category: "T-Shirts",
    price: "₹1,599",
    image: "/products/product-11.jpeg",
    details: ["/products/product-11.jpeg", "/products/product-11.jpeg"],
    description: "Each piece tells a story. This tee is hand-finished by master artisans, ensuring a unique character and exceptional attention to detail."
  },
  {
    id: 12,
    name: "Classic White Poplin",
    category: "Shirts",
    price: "₹2,199",
    image: "/shirt.png",
    details: ["/shirt.png", "/shirt.png"],
    description: "A crisp, versatile white shirt that transitions seamlessly from office to evening. Made from high-grade cotton poplin."
  },
  {
    id: 13,
    name: "Premium Crew Tee",
    category: "T-Shirts",
    price: "₹1,199",
    image: "/tshirt.png",
    details: ["/tshirt.png", "/tshirt.png"],
    description: "Our core essential. A perfect-weight crew neck tee designed to be the foundation of any outfit."
  },
  {
    id: 101,
    name: "New Arrival 01",
    category: "New Arrivals",
    price: "₹689",
    image: "/assets/arrival-1.jpg",
    details: ["/assets/arrival-1.jpg", "/assets/arrival-1.jpg"],
    description: "Exclusive new arrival for the season. Features premium craftsmanship and modern silhouette."
  },
  {
    id: 102,
    name: "New Arrival 02",
    category: "New Arrivals",
    price: "₹689",
    image: "/assets/arrival-2.jpg",
    details: ["/assets/arrival-2.jpg", "/assets/arrival-2.jpg"],
    description: "Sophisticated style from our latest collection. Designed for versatility and comfort."
  },
  {
    id: 103,
    name: "New Arrival 03",
    category: "New Arrivals",
    price: "₹689",
    image: "/assets/arrival-3.png",
    details: ["/assets/arrival-3.png", "/assets/arrival-3.png"],
    description: "A fresh take on a classic favorite. Part of our exclusive new arrival drop."
  },
  {
    id: 104,
    name: "New Arrival 04",
    category: "New Arrivals",
    price: "₹689",
    image: "/assets/arrival-4.png",
    details: ["/assets/arrival-4.png", "/assets/arrival-4.png"],
    description: "Unmatched quality and distinctive design. The perfect addition to your modern wardrobe."
  },
  {
    id: 14,
    name: "Luxury Velvet Tee",
    category: "T-Shirts",
    price: "₹1,999",
    image: "/assets/product-extra-1.png",
    details: ["/assets/product-extra-1.png", "/assets/product-extra-1.png"],
    description: "Indulge in pure luxury with our Velvet Tee. A soft, premium feel that elevates your casual look."
  },
  {
    id: 15,
    name: "Onyx Collection Shirt",
    category: "Shirts",
    price: "₹2,799",
    image: "/assets/product-extra-2.png",
    details: ["/assets/product-extra-2.png", "/assets/product-extra-2.png"],
    description: "The Onyx Collection represents the darker side of luxury. Sharp, black, and undeniably sophisticated."
  },
  {
    id: 16,
    name: "Sandstone Relaxed Fit",
    category: "T-Shirts",
    price: "₹1,399",
    image: "/assets/product-extra-3.png",
    details: ["/assets/product-extra-3.png", "/assets/product-extra-3.png"],
    description: "Earthy tones and a relaxed silhouette. Perfect for those who value both style and freedom of movement."
  },
  {
    id: 17,
    name: "Midnight Silk Blend",
    category: "Premium",
    price: "₹4,999",
    image: "/assets/product-extra-4.png",
    details: ["/assets/product-extra-4.png", "/assets/product-extra-4.png"],
    description: "Our finest silk blend yet. The Midnight edition offers a deep, rich texture that shines in the night."
  },
  {
    id: 18,
    name: "Ivory Minimalist Tee",
    category: "T-Shirts",
    price: "₹1,199",
    image: "/assets/product-extra-5.png",
    details: ["/assets/product-extra-5.png", "/assets/product-extra-5.png"],
    description: "Pure, simple, and essential. The Ivory Minimalist Tee is the bedrock of a sophisticated wardrobe."
  }
];

const COLORS = [
  { name: 'Charcoal Black', hex: '#1A1A1A' },
  { name: 'Ivory White', hex: '#F8F7F4' },
  { name: 'Royal Blue', hex: '#1E3A8A' },
  { name: 'Deep Maroon', hex: '#800000' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Mustard Yellow', hex: '#FFDB58' },
  { name: 'Terracotta', hex: '#E2725B' },
  { name: 'Slate Grey', hex: '#708090' },
  { name: 'Olive Green', hex: '#556B2F' },
  { name: 'Midnight Navy', hex: '#191970' },
  { name: 'Sandstone', hex: '#C2B280' },
  { name: 'Rust Orange', hex: '#B7410E' }
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

import { useCart } from "@/context/CartContext";


// ... (existing COLORS and SIZES) ...


export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [isMobile, setIsMobile] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
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
      color: selectedColor.name
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
            aspectRatio: '3/4', 
            overflow: 'hidden', 
            borderRadius: '12px', 
            background: 'white', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
            width: '100%'
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px', background: 'white', border: '1px solid var(--border-light)' }}>
                <img src={img} alt={`Detail ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <p className="text-h3" style={{ color: 'var(--action-blue)' }}>{product.price}</p>
              <span style={{ background: 'var(--surface-container-high)', padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>In Stock</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Color Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="text-label" style={{ fontWeight: 600 }}>Color: <span style={{ fontWeight: 400, color: 'var(--on-surface-variant)' }}>{selectedColor.name}</span></span>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)', gap: isMobile ? '10px' : '12px', width: '100%', overflow: 'visible' }}>
                {COLORS.map(color => (
                  <div
                    key={color.name}
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%'
                    }}
                  >
                    <button 
                      onClick={() => setSelectedColor(color)}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: color.hex,
                        border: selectedColor.name === color.name ? '3px solid var(--action-blue)' : '1px solid rgba(0,0,0,0.1)',
                        padding: '0',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        transform: selectedColor.name === color.name ? 'scale(1.1)' : 'scale(1)',
                        boxSizing: 'border-box'
                      }}
                      title={color.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label" style={{ fontWeight: 600 }}>Select Size</span>
                <Link href="#" className="text-caption" style={{ color: 'var(--action-blue)', textDecoration: 'underline' }}>Size Guide</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)', gap: isMobile ? '10px' : '12px', width: '100%', overflow: 'hidden' }}>
                {SIZES.map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    style={{ 
                      padding: '12px 0', 
                      border: size === selectedSize ? '2px solid var(--action-blue)' : '1px solid var(--border-light)', 
                      borderRadius: '8px', 
                      background: size === selectedSize ? 'var(--action-blue)' : 'transparent',
                      color: size === selectedSize ? 'white' : 'var(--on-surface-variant)',
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
                    fontSize: '20px'
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
                    fontSize: '20px'
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
            <div style={{ padding: '24px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)', fontSize: '32px' }}>architecture</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fit</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>Modern Classic Fit</p>
              </div>
            </div>
            <div style={{ padding: '24px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)', fontSize: '32px' }}>eco</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Origin</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>100% Tiruppur Cotton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
