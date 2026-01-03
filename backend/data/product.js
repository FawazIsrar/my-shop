const product = [
  {
    
    name: "AirPods",
    price: 199,
    description: "High-quality wireless Bluetooth earbuds.",
    image: "/images/airpods.jpg",
    category: "Electronics",
    brand: "Apple",
    rating: 4.5,
    numReviews: 120,
    countInStock: 15
  },
  {
   
    name: "Alexa",
    price: 99,
    description: "Smart voice assistant for home automation.",
    image: "/images/alexa.jpg",
    category: "Smart Devices",
    brand: "Amazon",
    rating: 4.2,
    numReviews: 90,
    countInStock: 0
  },
  {
  
    name: "Camera",
    price: 499,
    description: "DSLR camera with high-quality photo and video recording.",
    image: "/images/camera.jpg",
    category: "Photography",
    brand: "Canon",
    rating: 4.7,
    numReviews: 75,
    countInStock: 8
  },
  {
   
    name: "Mouse",
    price: 25,
    description: "Wireless ergonomic mouse with smooth tracking.",
    image: "/images/mouse.jpg",
    category: "Accessories",
    brand: "Logitech",
    rating: 4.3,
    numReviews: 42,
    countInStock: 60
  },
  {
   
    name: "Phone",
    price: 799,
    description: "Latest high-performance smartphone.",
    image: "/images/phone.jpg",
    category: "Mobile",
    brand: "Samsung",
    rating: 4.6,
    numReviews: 150,
    countInStock: 12
  },
  {
  
    name: "PlayStation",
    price: 499,
    description: "Next-gen gaming console for immersive gameplay.",
    image: "/images/playstation.jpg",
    category: "Gaming",
    brand: "Sony",
    rating: 4.8,
    numReviews: 200,
    countInStock: 5
  },
  {
   
    name: "Sample Product",
    price: 59,
    description: "Sample product for testing and demo purposes.",
    image: "/images/sample.jpg",
    category: "General",
    brand: "Generic",
    rating: 3.9,
    numReviews: 10,
    countInStock: 30
  },
  
  {
    name: 'Fancy Perfume - Royal Oud',
    image: '/images/perfume.jpg',
    description: 'Long lasting premium fragrance for gifts.',
    category: 'Gifts',
    price: 2500,
    countInStock: 50, // Quantity barha di
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Luxury Watch - Silver Edition',
    image: '/images/watch.jpg',
    description: 'Elegant watch perfect for anniversaries.',
    category: 'Gifts',
    price: 4500,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
  },
  // Teddy bear, Flowers, Mobile phone wagera isi tarah add karein
// --- Baskets Section ---
  {
    name: 'Rust & Rose Gift Box',
    image: '/images/Basket1.jpg',
    description: 'A beautifully crafted gift box featuring a rich red and natural brown tone, designed to deliver warmth, elegance, and timeless charm for every special moment.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 49,
    countInStock: 100,
  },
   {
    name: 'Royal Rust Box',
    image: '/images/Basket2.jpg',
    description: 'Where deep crimson meets earthy brown, this gift box reflects love, comfort, and premium simplicity — perfect for thoughtful gifting.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 1699,
    countInStock: 100,
  },
  // --- Gift Items Section ---
   {
    name: 'Blue Pearl Gift Basket',
    image: '/images/Basket3.jpg',
    description: 'Inspired by ocean tones and pearl whites, this basket delivers a clean, classy look for meaningful and stylish gifts.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 2499,
    countInStock: 100,
  },
  {
    name: 'Black Royale Gift Box',
    image: '/images/Basket4.jpg',
    description: 'A premium black gift box finished with a golden ribbon, designed to express luxury, power, and timeless elegance.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 1799,
    countInStock: 100,
  },
   {
    name: 'Heritage Brown Suitcase Basket',
    image: '/images/Basket5.jpg',
    description: 'Crafted in rich brown tones, this suitcase-style basket reflects tradition, warmth, and premium presentation.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 2999,
    countInStock: 100,
  },
   {
    name: 'Sunlit Charm Basket',
    image: '/images/Basket6.jpg',
    description: 'A radiant gold round basket that brings warmth, luxury, and a touch of sophistication to any gift.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 1849,
    countInStock: 100,
  },
  {
    name: 'Luxe Ring Basket',
    image: '/images/Basket7.jpg',
    description: 'A round open basket in gold finish, blending simplicity with luxury for every special occasion.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 799,
    countInStock: 100,
  },
   {
    name: 'White Haven Basket',
    image: '/images/Basket8.jpg',
    description: 'A square white basket designed to hold your gifts with purity, simplicity, and style.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 1249,
    countInStock: 100,
  },
   {
    name: 'Ribboned Treasure Box',
    image: '/images/Basket9.jpg',
    description: 'A charming gift basket with a secure lid and elegant ribbon, perfect for keeping surprises safe and stylish.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 399,
    countInStock: 100,
  },
   {
    name: 'Ruby Tie Box',
    image: '/images/Basket10.jpg',
    description: 'A simple yet stunning red box wrapped with a ribbon, designed to make every gift feel special.',
    brand: 'GiftShop',
    category: 'Basket', // 👈 Category 'Basket' lazmi rakhni hai
    price: 99,
    countInStock: 100,
  },
 
];

const products = product; // Ensure the variable matches the export
export default products;
