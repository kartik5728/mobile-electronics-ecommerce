import ps5_1 from "./ps5_1.png"
import ps5_2 from "./ps5_2.png"
import xboxx_1 from './xboxx_1.png'
import xboxx_2 from './xboxx_2.png'
import xboxs_1 from "./xboxs_1.png"
import switch1_1 from "./switch1_1.png"
import switch1_2 from "./switch1_2.png"
import iphone17pm_1 from './iphone17pm_1.png'
import iphone17pm_2 from './iphone17pm_2.png'
import s24_1 from "./s24_1.png"
import s24_2 from "./s24_2.png"
import px9_1 from "./px9_1.png"
import px9_2 from "./px9_2.png"
import op12_1 from "./op12_1.png"
import op12_2 from "./op12_2.png"

export const products = [

/* ===================== GAMING CONSOLES (6) ===================== */
{
  _id: "g001",
  name: "Sony PlayStation 5 Slim Digital",
  description: "Next-gen gaming console with ultra-fast SSD.",
  price: 549,
  image: [ps5_1, ps5_2],
  category: "Gaming",
  brand: "Sony",
  stock: 12,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["featured", "new"],
  discount: 18,
  rating: 4.8,
  reviewsCount: 214,
//   reviews: [{ user: "Alex", rating: 5, comment: "Amazing performance." }],
  specs: {
    storage: "1TB SSD",
    resolution: "4K",
    fps: "120fps",
    processor: "Custom AMD Ryzen"
  }
},
{
  _id: "g002",
  name: "Xbox Series X",
  description: "Powerful console built for true 4K gaming.",
  price: 599,
  image: [xboxx_1, xboxx_2],
  category: "Gaming",
  brand: "Microsoft",
  stock: 9,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["hot"],
  discount: 12,
  rating: 3.9,
  reviewsCount: 180,
//   reviews: [{ user: "Chris", rating: 5, comment: "Super powerful." }],
  specs: {
    storage: "1TB SSD",
    resolution: "4K",
    fps: "120fps",
    processor: "AMD Zen 2"
  }
},
{
  _id: "g003",
  name: "Xbox Series S",
  description: "Compact all-digital gaming console.",
  price: 349,
  image: [xboxs_1],
  category: "Gaming",
  brand: "Microsoft",
  stock: 14,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["offer"],
  discount: 20,
  rating: 4.5,
  reviewsCount: 96,
//   reviews: [{ user: "Sam", rating: 4, comment: "Great value." }],
  specs: {
    storage: "512GB SSD",
    resolution: "1440p",
    fps: "120fps"
  }
},
{
  _id: "g004",
  name: "Nintendo Switch OLED",
  description: "Hybrid console with vibrant OLED screen.",
  price: 399,
  image: [switch1_1, switch1_2 ],
  category: "Gaming",
  brand: "Nintendo",
  stock: 20,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["sale"],
  discount: 8,
  rating: 4.0,
  reviewsCount: 320,
//   reviews: [{ user: "Jamie", rating: 5, comment: "Perfect portable console." }],
  specs: {
    storage: "64GB",
    resolution: "1080p",
    display: "7-inch OLED"
  }
},
// {
//   _id: "g005",
//   name: "PlayStation 4 Pro",
//   description: "Enhanced PS4 with 4K support.",
//   price: 399,
//   image: ["ps4pro_1"],
//   category: "Gaming",
//   brand: "Sony",
//   stock: 5,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["discount"],
//   discount: 30,
//   rating: 4.4,
//   reviewsCount: 410,
// //   reviews: [{ user: "Leo", rating: 4, comment: "Still solid." }],
//   specs: {
//     storage: "1TB HDD",
//     resolution: "4K",
//     fps: "60fps"
//   }
// },
// {
//   _id: "g006",
//   name: "Steam Deck 512GB",
//   description: "Portable PC gaming powerhouse.",
//   price: 649,
//   image: ["steamdeck_1"],
//   category: "Gaming",
//   brand: "Valve",
//   stock: 7,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 5,
//   rating: 4.7,
//   reviewsCount: 88,
// //   reviews: [{ user: "Nate", rating: 5, comment: "PC games anywhere." }],
//   specs: {
//     storage: "512GB SSD",
//     display: "7-inch LCD",
//     processor: "AMD APU"
//   }
// },

/* ===================== SMARTPHONES (18) ===================== */
{
  _id: "p101",
  name: "iPhone 17 Pro Max",
  description: "Apple flagship with A17 Pro chip.",
  price: 1199,
  image: [iphone17pm_1, iphone17pm_2],
  category: "Smartphone",
  brand: "Apple",
  stock: 15,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["new", "hot"],
  discount: 5,
  rating: 4.9,
  reviewsCount: 520,
//   reviews: [{ user: "Ryan", rating: 5, comment: "Best iPhone ever." }],
  specs: {
    ram: "8GB",
    storage: "256GB",
    display: "6.1 OLED",
    camera: "48MP",
    battery: "3274mAh"
  }
},
{
  _id: "p102",
  name: "Samsung Galaxy S24 Ultra",
  description: "Premium Android flagship phone.",
  price: 1299,
  image: [s24_1, s24_2],
  category: "Smartphone",
  brand: "Samsung",
  stock: 12,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["hot"],
  discount: 8,
  rating: 3.8,
  reviewsCount: 430,
//   reviews: [{ user: "Adam", rating: 5, comment: "Camera beast." }],
  specs: {
    ram: "12GB",
    storage: "512GB",
    display: "6.8 AMOLED",
    camera: "200MP",
    battery: "5000mAh"
  }
},
{
  _id: "p103",
  name: "Google Pixel 9",
  description: "AI-powered clean Android experience.",
  price: 799,
  image: [px9_1, px9_2],
  category: "Smartphone",
  brand: "Google",
  stock: 18,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["new"],
  discount: 10,
  rating: 3.8,
  reviewsCount: 210,
//   reviews: [{ user: "Ella", rating: 5, comment: "Love the camera." }],
  specs: {
    ram: "8GB",
    storage: "128GB",
    display: "6.2 OLED",
    camera: "50MP",
    battery: "4575mAh"
  }
},
{
  _id: "p104",
  name: "OnePlus 12",
  description: "Fast and smooth flagship killer.",
  price: 899,
  image: [op12_1, op12_2],
  category: "Smartphone",
  brand: "OnePlus",
  stock: 16,
  createdAt: Date.now(),
  bestseller: true,
  tags: ["hot"],
  discount: 12,
  rating: 4.7,
  reviewsCount: 180,
  specs: {
    ram: "12GB",
    storage: "256GB",
    display: "6.7 AMOLED",
    camera: "50MP",
    battery: "5400mAh"
  }
},
// {
//   _id: "p105",
//   name: "Xiaomi 14 Pro",
//   category: "Smartphone",
//   brand: "Xiaomi",
//   price: 899,
//   image: ["mi14"],
//   stock: 20,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 15,
//   rating: 4.6,
//   reviewsCount: 140,
//   specs: {
//     ram: "12GB",
//     storage: "256GB",
//     display: "6.73 AMOLED",
//     camera: "50MP"
//   }
// },
// {
//   _id: "p106",
//   name: "Samsung Galaxy A54",
//   category: "Smartphone",
//   brand: "Samsung",
//   price: 449,
//   image: ["a54"],
//   stock: 22,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 20,
//   rating: 4.4,
//   reviewsCount: 310,
//   specs: {
//     ram: "8GB",
//     storage: "128GB",
//     display: "6.4 AMOLED",
//     camera: "50MP"
//   }
// },
// {
//   _id: "p107",
//   name: "iPhone 14",
//   category: "Smartphone",
//   brand: "Apple",
//   price: 799,
//   image: ["ip14"],
//   stock: 10,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["discount"],
//   discount: 18,
//   rating: 4.7,
//   reviewsCount: 640,
//   specs: {
//     ram: "6GB",
//     storage: "128GB",
//     display: "6.1 OLED",
//     camera: "12MP"
//   }
// },
// {
//   _id: "p108",
//   name: "Nothing Phone (2)",
//   category: "Smartphone",
//   brand: "Nothing",
//   price: 699,
//   image: ["np2"],
//   stock: 14,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 10,
//   rating: 4.5,
//   reviewsCount: 90,
//   specs: {
//     ram: "12GB",
//     storage: "256GB",
//     display: "6.7 OLED",
//     camera: "50MP"
//   }
// },
// {
//   _id: "p109",
//   name: "Poco X6 Pro",
//   category: "Smartphone",
//   brand: "Poco",
//   price: 399,
//   image: ["poco"],
//   stock: 25,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 22,
//   rating: 4.6,
//   reviewsCount: 170,
//   specs: {
//     ram: "12GB",
//     storage: "256GB",
//     display: "6.67 AMOLED",
//     camera: "64MP"
//   }
// },
// {
//   _id: "p110",
//   name: "Motorola Edge 40",
//   category: "Smartphone",
//   brand: "Motorola",
//   price: 499,
//   image: ["edge40"],
//   stock: 17,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 18,
//   rating: 4.3,
//   reviewsCount: 80,
//   specs: {
//     ram: "8GB",
//     storage: "256GB",
//     display: "6.55 OLED",
//     camera: "50MP"
//   }
// },

// /* ===================== TABLETS (6) ===================== */
// {
//   _id: "t201",
//   name: "iPad Pro 12.9",
//   category: "Tablet",
//   brand: "Apple",
//   price: 1099,
//   image: ["ipadpro"],
//   stock: 7,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 6,
//   rating: 4.9,
//   reviewsCount: 260,
//   specs: {
//     ram: "8GB",
//     storage: "256GB",
//     display: "12.9 Liquid Retina",
//     processor: "Apple M2"
//   }
// },
// {
//   _id: "t202",
//   name: "iPad Air 5",
//   category: "Tablet",
//   brand: "Apple",
//   price: 699,
//   image: ["ipadair"],
//   stock: 10,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["new"],
//   discount: 10,
//   rating: 4.8,
//   reviewsCount: 300,
//   specs: {
//     ram: "8GB",
//     storage: "256GB",
//     display: "10.9 Retina",
//     processor: "Apple M1"
//   }
// },
// {
//   _id: "t203",
//   name: "Samsung Galaxy Tab S9",
//   category: "Tablet",
//   brand: "Samsung",
//   price: 899,
//   image: ["tabs9"],
//   stock: 11,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 8,
//   rating: 4.7,
//   reviewsCount: 150,
//   specs: {
//     ram: "8GB",
//     storage: "256GB",
//     display: "11 AMOLED",
//     processor: "Snapdragon 8 Gen 2"
//   }
// },
// {
//   _id: "t204",
//   name: "Xiaomi Pad 6",
//   category: "Tablet",
//   brand: "Xiaomi",
//   price: 499,
//   image: ["pad6"],
//   stock: 14,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 15,
//   rating: 4.5,
//   reviewsCount: 120,
//   specs: {
//     ram: "8GB",
//     storage: "256GB",
//     display: "11 LCD",
//     processor: "Snapdragon 870"
//   }
// },
// {
//   _id: "t205",
//   name: "Lenovo Tab P12",
//   category: "Tablet",
//   brand: "Lenovo",
//   price: 399,
//   image: ["p12"],
//   stock: 9,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["discount"],
//   discount: 20,
//   rating: 4.4,
//   reviewsCount: 70,
//   specs: {
//     ram: "6GB",
//     storage: "128GB",
//     display: "12.7 LCD",
//     processor: "MediaTek Dimensity"
//   }
// },
// {
//   _id: "t206",
//   name: "Microsoft Surface Go 3",
//   category: "Tablet",
//   brand: "Microsoft",
//   price: 549,
//   image: ["surfacego"],
//   stock: 6,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 12,
//   rating: 4.3,
//   reviewsCount: 65,
//   specs: {
//     ram: "8GB",
//     storage: "128GB SSD",
//     display: "10.5 PixelSense",
//     processor: "Intel Pentium"
//   }
// },

// /* ===================== HEADSETS (5) ===================== */
// {
//   _id: "h301",
//   name: "Sony WH-1000XM5",
//   category: "Headset",
//   brand: "Sony",
//   price: 399,
//   image: ["xm5"],
//   stock: 20,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 12,
//   rating: 4.9,
//   reviewsCount: 480,
//   specs: {
//     sound: "Hi-Res",
//     noiseCancellation: true,
//     batteryLife: "30h"
//   }
// },
// {
//   _id: "h302",
//   name: "Bose QuietComfort 45",
//   category: "Headset",
//   brand: "Bose",
//   price: 349,
//   image: ["qc45"],
//   stock: 14,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["offer"],
//   discount: 15,
//   rating: 4.8,
//   reviewsCount: 350,
//   specs: {
//     sound: "Balanced",
//     noiseCancellation: true,
//     batteryLife: "24h"
//   }
// },
// {
//   _id: "h303",
//   name: "Apple AirPods Pro 2",
//   category: "Headset",
//   brand: "Apple",
//   price: 249,
//   image: ["airpods"],
//   stock: 30,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["new"],
//   discount: 5,
//   rating: 4.9,
//   reviewsCount: 820,
//   specs: {
//     sound: "Spatial Audio",
//     noiseCancellation: true,
//     batteryLife: "6h"
//   }
// },
// {
//   _id: "h304",
//   name: "JBL Tune 770NC",
//   category: "Headset",
//   brand: "JBL",
//   price: 199,
//   image: ["jbl770"],
//   stock: 18,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["discount"],
//   discount: 25,
//   rating: 4.4,
//   reviewsCount: 110,
//   specs: {
//     sound: "Bass Boost",
//     noiseCancellation: true,
//     batteryLife: "70h"
//   }
// },
// {
//   _id: "h305",
//   name: "Razer BlackShark V2",
//   category: "Headset",
//   brand: "Razer",
//   price: 179,
//   image: ["razer"],
//   stock: 13,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 18,
//   rating: 4.5,
//   reviewsCount: 95,
//   specs: {
//     sound: "THX Spatial",
//     noiseCancellation: false,
//     batteryLife: "Wired"
//   }
// },

// /* ===================== SPEAKERS (5) ===================== */
// {
//   _id: "s401",
//   name: "JBL Charge 5",
//   category: "Speaker",
//   brand: "JBL",
//   price: 179,
//   image: ["charge5"],
//   stock: 25,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["offer"],
//   discount: 20,
//   rating: 4.7,
//   reviewsCount: 390,
//   specs: {
//     output: "40W",
//     batteryLife: "20h",
//     waterproof: "IP67"
//   }
// },
// {
//   _id: "s402",
//   name: "Sony SRS-XE300",
//   category: "Speaker",
//   brand: "Sony",
//   price: 199,
//   image: ["xe300"],
//   stock: 14,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 10,
//   rating: 4.5,
//   reviewsCount: 150,
//   specs: {
//     output: "30W",
//     batteryLife: "24h",
//     waterproof: "IP67"
//   }
// },
// {
//   _id: "s403",
//   name: "Bose SoundLink Flex",
//   category: "Speaker",
//   brand: "Bose",
//   price: 149,
//   image: ["flex"],
//   stock: 18,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 12,
//   rating: 4.8,
//   reviewsCount: 420,
//   specs: {
//     output: "Balanced",
//     batteryLife: "12h",
//     waterproof: "IP67"
//   }
// },
// {
//   _id: "s404",
//   name: "Marshall Emberton",
//   category: "Speaker",
//   brand: "Marshall",
//   price: 169,
//   image: ["emberton"],
//   stock: 10,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 8,
//   rating: 4.6,
//   reviewsCount: 200,
//   specs: {
//     output: "360 Sound",
//     batteryLife: "20h",
//     waterproof: "IPX7"
//   }
// },
// {
//   _id: "s405",
//   name: "Anker Soundcore Motion+",
//   category: "Speaker",
//   brand: "Anker",
//   price: 129,
//   image: ["motion"],
//   stock: 22,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["discount"],
//   discount: 25,
//   rating: 4.4,
//   reviewsCount: 180,
//   specs: {
//     output: "30W",
//     batteryLife: "12h",
//     waterproof: "IPX7"
//   }
// },

// /* ===================== SMARTWATCHES (5) ===================== */
// {
//   _id: "w501",
//   name: "Apple Watch Series 9",
//   category: "Smartwatch",
//   brand: "Apple",
//   price: 499,
//   image: ["aw9"],
//   stock: 16,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["new"],
//   discount: 5,
//   rating: 4.9,
//   reviewsCount: 600,
//   specs: {
//     display: "Always-On Retina",
//     batteryLife: "18h",
//     sensors: ["ECG", "Heart Rate", "Blood Oxygen"]
//   }
// },
// {
//   _id: "w502",
//   name: "Samsung Galaxy Watch 6",
//   category: "Smartwatch",
//   brand: "Samsung",
//   price: 399,
//   image: ["gw6"],
//   stock: 14,
//   createdAt: Date.now(),
//   bestseller: true,
//   tags: ["hot"],
//   discount: 10,
//   rating: 4.7,
//   reviewsCount: 310,
//   specs: {
//     display: "AMOLED",
//     batteryLife: "40h",
//     sensors: ["Heart Rate", "Sleep"]
//   }
// },
// {
//   _id: "w503",
//   name: "Garmin Venu Sq",
//   category: "Smartwatch",
//   brand: "Garmin",
//   price: 249,
//   image: ["venu"],
//   stock: 12,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["offer"],
//   discount: 18,
//   rating: 4.6,
//   reviewsCount: 140,
//   specs: {
//     display: "LCD",
//     batteryLife: "6 days",
//     sensors: ["GPS", "Heart Rate"]
//   }
// },
// {
//   _id: "w504",
//   name: "Amazfit GTR 4",
//   category: "Smartwatch",
//   brand: "Amazfit",
//   price: 199,
//   image: ["gtr4"],
//   stock: 18,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["discount"],
//   discount: 20,
//   rating: 4.5,
//   reviewsCount: 190,
//   specs: {
//     display: "AMOLED",
//     batteryLife: "14 days",
//     sensors: ["GPS", "SpO2"]
//   }
// },
// {
//   _id: "w505",
//   name: "Huawei Watch GT 4",
//   category: "Smartwatch",
//   brand: "Huawei",
//   price: 299,
//   image: ["gt4"],
//   stock: 11,
//   createdAt: Date.now(),
//   bestseller: false,
//   tags: ["new"],
//   discount: 12,
//   rating: 4.6,
//   reviewsCount: 160,
//   specs: {
//     display: "AMOLED",
//     batteryLife: "14 days",
//     sensors: ["Heart Rate", "SpO2"]
//   }
// }

];
