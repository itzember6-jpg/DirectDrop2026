// ================================
// 📦 PRODUCT DATA
// ================================

const productsData = {
    // ==========================================
    // ELECTRONICS - PHONES
    // ==========================================
    'electronics-phones': [
        { 
            id: 1, 
            name: 'iPhone 15 Pro Max', 
            brand: 'Apple', 
            price: 149999, 
            originalPrice: 121000, 
            rating: 4.9, 
            reviews: 234, 
            badge: 'bestseller', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Apple iPhone Air 512 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Sky Blue',
            // 🖼️ IMAGE: Paste image URL or filename here
            image: 'https://m.media-amazon.com/images/I/31MWL1qkA+L._SX342_SY445_QL70_FMwebp_.jpg',
            // 🔗 AFFILIATE: Paste your Amazon affiliate link here
            affiliate: 'https://link.amazon/B001H7zPE'
        },
        { 
            id: 2, 
            name: 'Samsung Galaxy S24 Ultra', 
            brand: 'Samsung', 
            price: 98999, 
            originalPrice: 139999, 
            rating: 4.8, 
            reviews: 189, 
            badge: 'featured', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Gray, 12GB, 256GB Storage), Snapdragon 8 Gen 3, 200 MP Camera with ProVisual Engine and 5000mAh Battery',
            image: 'https://m.media-amazon.com/images/I/41X9qNxoJKL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B002K9zPE'
        },
        { 
            id: 3, 
            name: 'Google Pixel 8 Pro', 
            brand: 'Google', 
            price: 99999, 
            originalPrice: 109999, 
            rating: 4.7, 
            reviews: 156, 
            badge: 'new', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: '6.7-inch OLED, Google Tensor G3, 50MP main camera, AI-powered features.',
            image: 'https://m.media-amazon.com/images/I/41SkRfLsHdL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B09IPKYOW'
        },
        { 
            id: 4, 
            name: 'OnePlus 12', 
            brand: 'OnePlus', 
            price: 89999, 
            originalPrice: 99999, 
            rating: 4.6, 
            reviews: 123, 
            badge: 'sale', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: '6.82-inch AMOLED, Snapdragon 8 Gen 3, 50MP triple camera, 100W charging.',
            image: 'https://m.media-amazon.com/images/I/414H+BhDcpL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B075taBsZ'
        },
        { 
            id: 5, 
            name: 'Xiaomi 14 Pro', 
            brand: 'Xiaomi', 
            price: 79999, 
            originalPrice: 89999, 
            rating: 4.5, 
            reviews: 98, 
            badge: 'sale', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: '6.73-inch AMOLED, Snapdragon 8 Gen 3, 50MP Leica camera, 120W fast charging.',
            image: 'https://m.media-amazon.com/images/I/71HXsFonzaL._SL1500_.jpg',
            affiliate: 'https://link.amazon/B0ddbveoy'
        },
        { 
            id: 6, 
            name: 'Nothing Phone (2)', 
            brand: 'Nothing', 
            price: 45999, 
            originalPrice: 74999, 
            rating: 4.4, 
            reviews: 87, 
            badge: 'new', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Nothing Phone (3), Black (12GB, 256GB) | Snapdragon 8s Gen 4 | 50MP + 50MP + 50MP Rear Camera | 1.5K+ 120Hz AMOLED Flexible LTPS Display',
            image: 'https://m.media-amazon.com/images/I/414m0VuRT+L._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B09ELyn5p'
        },
        { 
            id: 7, 
            name: 'Samsung Galaxy Z Fold 5', 
            brand: 'Samsung', 
            price: 179999, 
            originalPrice: 169999, 
            rating: 4.8, 
            reviews: 145, 
            badge: 'featured', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Samsung Galaxy Z Fold8 5G Smartphone with Galaxy AI (Lavender, 12GB RAM, 256GB Storage), All New Shape, Content Native Ratio, 4800mAh Battery, Dual 50MP Camera, Now Nudge, Photo Assist.',
            image: 'https://m.media-amazon.com/images/I/31Y3LYc6DxL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B023wZVZu'
        },
        { 
            id: 8, 
            name: 'Apple iPhone 15', 
            brand: 'Apple', 
            price: 99999, 
            originalPrice: 109999, 
            rating: 4.7, 
            reviews: 210, 
            badge: 'bestseller', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Apple iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display with Promotion up to 120Hz, Dynamic Island, iOS 18, Deep Purple',
            image: 'https://m.media-amazon.com/images/I/31YrZL046rL._SX342_SY445_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B005UR21C'
        },
        { 
            id: 9, 
            name: 'Vivo X100 Pro', 
            brand: 'Vivo', 
            price: 49699, 
            originalPrice: 99999, 
            rating: 4.6, 
            reviews: 67, 
            badge: 'new', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'vivo X90 Pro (Legendary Black) – 12GB RAM, 256GB Storage | 6.78" AMOLED Display | Charger & Data Cable Not Included.',
            image: 'https://m.media-amazon.com/images/I/61aSBP-1ldL._SL1500_.jpg',
            affiliate: 'https://link.amazon/B00R7jzPa'
        },
        { 
            id: 10, 
            name: 'Oppo Find X7 Ultra', 
            brand: 'Oppo', 
            price: 169999, 
            originalPrice: 104999, 
            rating: 4.5, 
            reviews: 54, 
            badge: 'featured', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Oppo Find X9 Ultra 5G (Tundra Umber, 12GB, 512GB) | Hasselblad 50MP 10× Ultra-Sensing Optical-Zoom Telephoto | Dual 200MP | 8K Video | Snapdragon 8 Elite Gen 5 | 7050mAh 100W',
            image: 'https://m.media-amazon.com/images/I/41jnTHPFZVL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B004UgATO'
        },
        { 
            id: 11, 
            name: 'Realme GT 5 Pro', 
            brand: 'Realme', 
            price: 20999, 
            originalPrice: 79999, 
            rating: 4.4, 
            reviews: 43, 
            badge: 'sale', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'realme NARZO 100x 5G (Flash Orange,4GB+128GB) | Biggest 8000mAh Battery | 45W Fast Charge | 144Hz, 1200nits Bright Display | 7 Years Battery Health | Military-Grade Resistance | 48-Month Fluency',
            image: 'https://m.media-amazon.com/images/I/41pRnmy-nyL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/B01pljbl8'
        },
        { 
            id: 12, 
            name: 'Motorola Edge 50 Pro', 
            brand: 'Motorola', 
            price: 32729, 
            originalPrice: 69999, 
            rating: 4.3, 
            reviews: 32, 
            badge: 'new', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Motorola Edge 60 Pro 5G (Pantone Sparkling Grape, 12GB RAM, 256GB Storage), Purple',
            image: 'https://m.media-amazon.com/images/I/61JqtmqwNnL._SL1180_.jpg',
            affiliate: 'https://link.amazon/B08x7ZFdT'
        },
        { 
            id: 13, 
            name: 'Asus ROG Phone 8', 
            brand: 'Asus', 
            price: 199, 
            originalPrice: 599, 
            rating: 4.7, 
            reviews: 78, 
            badge: 'featured', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Helix Case Solid Shock Proof Crystal Clear Bumper Transparent TPU Hybrid Slimfit Case Edge to Edge Protective Case for Asus ROG Phone 8',
            image: 'https://m.media-amazon.com/images/I/512LzhQv4lL.jpg',
            affiliate: 'https://link.amazon/B09zk1gbX'
        },
        { 
            id: 14, 
            name: 'Sony Xperia 1 V', 
            brand: 'Sony', 
            price: 249, 
            originalPrice: 699, 
            rating: 4.6, 
            reviews: 56, 
            badge: 'bestseller', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Flexible Case Cover for Sony Xperia 1 V (Carbon Fibre_Black).',
            image: 'https://m.media-amazon.com/images/I/51y6G5RkJOL.jpg',
            affiliate: 'https://link.amazon/B00ISqNSV'
        },
        { 
            id: 15, 
            name: 'iQOO 12 Pro', 
            brand: 'iQOO', 
            price: 76999 , 
            originalPrice: 84999, 
            rating: 4.5, 
            reviews: 45, 
            badge: 'sale', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'iQOO 15 (Legend, 12GB RAM, 256GB Storage) | Fastest Snapdragon 8 Elite Gen 5 Processor* | Samsung 2K M14 Lead OLED Display | Origin OS 6 with Personalized AI Features',
            image: 'https://m.media-amazon.com/images/I/41EJryxe1WL._SY300_SX300_QL70_FMwebp_.jpg',
            affiliate: 'https://link.amazon/A0cv7OHL8'
        },
        { 
            id: 16, 
            name: 'Poco X6 Pro', 
            brand: 'Poco', 
            price: 27999, 
            originalPrice: 59999, 
            rating: 4.4, 
            reviews: 89, 
            badge: 'new', 
            stock: 'in-stock', 
            category: 'Electronics', 
            subcategory: 'Phones', 
            description: 'Poco X6 Pro 5G (Poco Yellow 8GB RAM 256GB Storage)',
            image: 'https://m.media-amazon.com/images/I/61MOQVWuJaL._SL1000_.jpg',
            affiliate: 'https://link.amazon/B06D8mCZ9'
        }
    ],

    // ==========================================
    // ELECTRONICS - LAPTOPS
    // ==========================================
    'electronics-laptops': [
        { id: 17, name: 'MacBook Pro 16" M3 Max',
         brand: 'Apple',
         price: 249999,
         originalPrice: 269999,
         rating: 4.9, 
         reviews: 189,
         badge: 'bestseller', 
         stock: 'in-stock',
         category: 'Electronics',
         subcategory: 'Laptops', 
         description: '16-inch Liquid Retina XDR, M3 Max chip, 36GB RAM, 1TB SSD, 22hr battery.'
         image:
         affiliate:
         },

         
        { id: 18, name: 'Dell XPS 16', brand: 'Dell', price: 189999, originalPrice: 199999, rating: 4.8, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch OLED, Intel Core Ultra 9, 32GB RAM, 1TB SSD, RTX 4070.' },
        { id: 19, name: 'HP Spectre x360 16', brand: 'HP', price: 169999, originalPrice: 179999, rating: 4.7, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch 4K OLED, Intel Core Ultra 7, 16GB RAM, 1TB SSD, 360° hinge.' },
        { id: 20, name: 'Lenovo ThinkPad X1 Carbon', brand: 'Lenovo', price: 159999, originalPrice: 169999, rating: 4.8, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '14-inch 2.8K OLED, Intel Core Ultra 7, 16GB RAM, 512GB SSD, 4G LTE.' },
        { id: 21, name: 'ASUS ROG Zephyrus G16', brand: 'ASUS', price: 179999, originalPrice: 199999, rating: 4.6, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch QHD, Intel Core i9, 16GB RAM, 1TB SSD, RTX 4080.' },
        { id: 22, name: 'Acer Swift Go 14', brand: 'Acer', price: 89999, originalPrice: 99999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '14-inch OLED, Intel Core Ultra 5, 16GB RAM, 512GB SSD, lightweight.' },
        { id: 23, name: 'MSI Stealth 16', brand: 'MSI', price: 199999, originalPrice: 219999, rating: 4.7, reviews: 76, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch QHD, Intel Core i9, 32GB RAM, 1TB SSD, RTX 4090.' },
        { id: 24, name: 'Razer Blade 16', brand: 'Razer', price: 229999, originalPrice: 249999, rating: 4.7, reviews: 67, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch OLED, Intel Core i9, 32GB RAM, 1TB SSD, RTX 4090.' },
        { id: 25, name: 'Samsung Galaxy Book 4 Ultra', brand: 'Samsung', price: 169999, originalPrice: 179999, rating: 4.6, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch AMOLED, Intel Core Ultra 9, 16GB RAM, 1TB SSD, 16hr battery.' },
        { id: 26, name: 'LG Gram 17', brand: 'LG', price: 149999, originalPrice: 159999, rating: 4.5, reviews: 45, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '17-inch WQXGA, Intel Core Ultra 5, 16GB RAM, 1TB SSD, ultra-lightweight.' },
        { id: 27, name: 'Microsoft Surface Laptop 6', brand: 'Microsoft', price: 139999, originalPrice: 149999, rating: 4.6, reviews: 78, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '15-inch PixelSense, Intel Core Ultra 7, 16GB RAM, 512GB SSD, 18hr battery.' },
        { id: 28, name: 'Gigabyte Aorus 17X', brand: 'Gigabyte', price: 209999, originalPrice: 229999, rating: 4.5, reviews: 34, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '17.3-inch QHD, Intel Core i9, 32GB RAM, 1TB SSD, RTX 4080.' },
        { id: 29, name: 'Predator Helios 16', brand: 'Acer', price: 189999, originalPrice: 209999, rating: 4.4, reviews: 43, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch QHD, Intel Core i9, 16GB RAM, 1TB SSD, RTX 4070.' },
        { id: 30, name: 'Apple MacBook Air 15"', brand: 'Apple', price: 169999, originalPrice: 179999, rating: 4.8, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '15-inch Liquid Retina, M3 chip, 16GB RAM, 512GB SSD, 18hr battery.' },
        { id: 31, name: 'Lenovo Yoga Pro 9i', brand: 'Lenovo', price: 159999, originalPrice: 169999, rating: 4.6, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch 3.2K OLED, Intel Core Ultra 9, 16GB RAM, 1TB SSD, RTX 4070.' },
        { id: 32, name: 'HP Omen 16', brand: 'HP', price: 139999, originalPrice: 149999, rating: 4.5, reviews: 67, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Laptops', description: '16-inch QHD, Intel Core i7, 16GB RAM, 1TB SSD, RTX 4060.' }
    ],

    // ==========================================
    // ELECTRONICS - TABLETS
    // ==========================================
    'electronics-tablets': [
        { id: 33, name: 'Apple iPad Pro 12.9" M4', brand: 'Apple', price: 149999, originalPrice: 159999, rating: 4.9, reviews: 178, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '12.9-inch Liquid Retina XDR, M4 chip, 16GB RAM, 1TB storage, 10hr battery.' },
        { id: 34, name: 'Samsung Galaxy Tab S9 Ultra', brand: 'Samsung', price: 129999, originalPrice: 139999, rating: 4.8, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '14.6-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 512GB storage, S Pen.' },
        { id: 35, name: 'Microsoft Surface Pro 10', brand: 'Microsoft', price: 139999, originalPrice: 149999, rating: 4.7, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '13-inch PixelSense, Intel Core Ultra 7, 16GB RAM, 512GB SSD, 15hr battery.' },
        { id: 36, name: 'iPad Air 11" M2', brand: 'Apple', price: 89999, originalPrice: 99999, rating: 4.7, reviews: 156, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '11-inch Liquid Retina, M2 chip, 8GB RAM, 256GB storage, 10hr battery.' },
        { id: 37, name: 'Samsung Galaxy Tab S9 FE', brand: 'Samsung', price: 79999, originalPrice: 89999, rating: 4.6, reviews: 98, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '10.9-inch OLED, Exynos 1380, 8GB RAM, 256GB storage, S Pen.' },
        { id: 38, name: 'Lenovo Tab P12 Pro', brand: 'Lenovo', price: 69999, originalPrice: 79999, rating: 4.5, reviews: 87, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '12.6-inch AMOLED, Snapdragon 870, 8GB RAM, 256GB storage.' },
        { id: 39, name: 'OnePlus Pad 2', brand: 'OnePlus', price: 79999, originalPrice: 89999, rating: 4.6, reviews: 76, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '12.1-inch AMOLED, Dimensity 9000, 12GB RAM, 256GB storage.' },
        { id: 40, name: 'Amazon Fire Max 11', brand: 'Amazon', price: 49999, originalPrice: 59999, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '11-inch 2.5K, Mediatek MT8186, 4GB RAM, 128GB storage.' },
        { id: 41, name: 'Google Pixel Tablet', brand: 'Google', price: 89999, originalPrice: 99999, rating: 4.5, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '11-inch LCD, Google Tensor G2, 8GB RAM, 256GB storage.' },
        { id: 42, name: 'Huawei MatePad Pro 13.2', brand: 'Huawei', price: 99999, originalPrice: 109999, rating: 4.5, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '13.2-inch OLED, Kirin 9000S, 12GB RAM, 512GB storage.' },
        { id: 43, name: 'iPad Mini 7', brand: 'Apple', price: 64999, originalPrice: 74999, rating: 4.6, reviews: 134, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '8.3-inch Liquid Retina, A17 Pro chip, 8GB RAM, 256GB storage.' },
        { id: 44, name: 'Xiaomi Pad 6S Pro', brand: 'Xiaomi', price: 59999, originalPrice: 69999, rating: 4.4, reviews: 45, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '12.4-inch AMOLED, Snapdragon 8+ Gen 1, 8GB RAM, 256GB storage.' },
        { id: 45, name: 'Nokia T21', brand: 'Nokia', price: 29999, originalPrice: 34999, rating: 4.2, reviews: 34, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '10.4-inch 2K, Unisoc T612, 4GB RAM, 128GB storage.' },
        { id: 46, name: 'Lenovo Yoga Tab 13', brand: 'Lenovo', price: 74999, originalPrice: 84999, rating: 4.4, reviews: 43, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '13-inch 2K, Snapdragon 870, 8GB RAM, 256GB storage, built-in stand.' },
        { id: 47, name: 'Samsung Galaxy Tab A9+', brand: 'Samsung', price: 39999, originalPrice: 44999, rating: 4.3, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '11-inch LCD, Snapdragon 695, 8GB RAM, 128GB storage.' },
        { id: 48, name: 'Realme Pad X', brand: 'Realme', price: 34999, originalPrice: 39999, rating: 4.2, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Tablets', description: '10.6-inch 2K, Snapdragon 870, 6GB RAM, 128GB storage.' }
    ],

    // ==========================================
    // ELECTRONICS - ACCESSORIES
    // ==========================================
    'electronics-accessories': [
        { id: 49, name: 'AirPods Pro 2', brand: 'Apple', price: 24999, originalPrice: 29999, rating: 4.8, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Active Noise Cancellation, Transparency mode, Spatial Audio, USB-C.' },
        { id: 50, name: 'Samsung Galaxy Buds 3 Pro', brand: 'Samsung', price: 19999, originalPrice: 24999, rating: 4.7, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Intelligent Noise Cancellation, 360 Audio, 30hr battery, IP57.' },
        { id: 51, name: 'Apple Watch Ultra 2', brand: 'Apple', price: 89999, originalPrice: 99999, rating: 4.9, reviews: 156, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '49mm titanium case, Always-on Retina display, 36hr battery, GPS.' },
        { id: 52, name: 'Samsung Galaxy Watch 6 Classic', brand: 'Samsung', price: 49999, originalPrice: 59999, rating: 4.7, reviews: 123, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '47mm stainless steel, Super AMOLED, Body composition, 40hr battery.' },
        { id: 53, name: 'Sony WH-1000XM5', brand: 'Sony', price: 34999, originalPrice: 39999, rating: 4.9, reviews: 178, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Industry-leading noise cancellation, 30hr battery, LDAC, comfortable fit.' },
        { id: 54, name: 'Logitech MX Master 3S', brand: 'Logitech', price: 12999, originalPrice: 14999, rating: 4.6, reviews: 98, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '8K DPI, MagSpeed wheel, Quiet clicks, 70-day battery, multi-device.' },
        { id: 55, name: 'Anker 100W Charger', brand: 'Anker', price: 7999, originalPrice: 9999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'GaN III, 100W output, 3 USB-C ports, 1 USB-A, compact design.' },
        { id: 56, name: 'Apple Magic Keyboard', brand: 'Apple', price: 8999, originalPrice: 10999, rating: 4.4, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Scissor mechanism, 18hr battery, USB-C charging, iPad compatibility.' },
        { id: 57, name: 'Samsung T7 Shield SSD', brand: 'Samsung', price: 14999, originalPrice: 17999, rating: 4.6, reviews: 67, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '1TB, 1050MB/s read, 1000MB/s write, IP65, rugged design.' },
        { id: 58, name: 'JBL Flip 6', brand: 'JBL', price: 8999, originalPrice: 10999, rating: 4.5, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '30W, 12hr battery, IP67 waterproof, PartyBoost, portable speaker.' },
        { id: 59, name: 'Microsoft Arc Mouse', brand: 'Microsoft', price: 5999, originalPrice: 6999, rating: 4.3, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Slim design, Bluetooth 5.0, 18-month battery, Scroll strip, multi-device.' },
        { id: 60, name: 'Bose QuietComfort Earbuds', brand: 'Bose', price: 29999, originalPrice: 34999, rating: 4.8, reviews: 134, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Active noise cancellation, 24hr battery, IPX4, comfortable fit.' },
        { id: 61, name: 'Belkin MagSafe Charger', brand: 'Belkin', price: 4999, originalPrice: 5999, rating: 4.4, reviews: 45, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: '15W fast charging, Magnetic alignment, Compact design, USB-C.' },
        { id: 62, name: 'Spigen Case AirPods Pro', brand: 'Spigen', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 34, badge: 'new', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Shockproof, Slim fit, Keychain included, Durable material.' },
        { id: 63, name: 'Sennheiser HD 560S', brand: 'Sennheiser', price: 19999, originalPrice: 24999, rating: 4.7, reviews: 78, badge: 'featured', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Open-back design, 120Ω impedance, 15-28kHz frequency, studio quality.' },
        { id: 64, name: 'Razer Chroma RGB Mousepad', brand: 'Razer', price: 4999, originalPrice: 5999, rating: 4.3, reviews: 43, badge: 'sale', stock: 'in-stock', category: 'Electronics', subcategory: 'Accessories', description: 'Full RGB lighting, Micro-textured surface, USB passthrough, 3mm thickness.' }
    ],

    // ==========================================
    // FASHION - MEN
    // ==========================================
    'fashion-men': [
        { id: 65, name: 'Premium Wool Blazer', brand: 'Hugo Boss', price: 24999, originalPrice: 29999, rating: 4.7, reviews: 89, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Classic fit wool blazer, notch lapel, two-button closure, fully lined.' },
        { id: 66, name: 'Classic White Oxford Shirt', brand: 'Ralph Lauren', price: 8999, originalPrice: 10999, rating: 4.6, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: '100% cotton, button-down collar, adjustable cuffs, classic fit.' },
        { id: 67, name: 'Slim Fit Tapered Jeans', brand: 'Levi\'s', price: 7999, originalPrice: 9999, rating: 4.5, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Premium denim, stretch comfort, 5-pocket design, tapered leg.' },
        { id: 68, name: 'Merino Wool Sweater', brand: 'Tommy Hilfiger', price: 11999, originalPrice: 14999, rating: 4.6, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: '100% Merino wool, ribbed cuffs, crew neck, soft and warm.' },
        { id: 69, name: 'Leather Penny Loafers', brand: 'Clarks', price: 9999, originalPrice: 12999, rating: 4.4, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Genuine leather, cushioned insole, classic penny loafer design.' },
        { id: 70, name: 'Sports Jacket', brand: 'Lacoste', price: 18999, originalPrice: 21999, rating: 4.5, reviews: 87, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Water-repellent, zip front, 2 side pockets, adjustable cuffs.' },
        { id: 71, name: 'Slim Chino Pants', brand: 'Uniqlo', price: 3999, originalPrice: 4999, rating: 4.4, reviews: 178, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Cotton blend, slim fit, stretchable, 4-way stretch fabric.' },
        { id: 72, name: 'Cashmere Scarf', brand: 'Johnstons', price: 14999, originalPrice: 17999, rating: 4.7, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: '100% Cashmere, 200cm x 30cm, fringed edges, winter luxury.' },
        { id: 73, name: 'Bomber Jacket', brand: 'Alpha Industries', price: 16999, originalPrice: 19999, rating: 4.6, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Flight jacket, satin lining, ribbed cuffs, 6 pockets.' },
        { id: 74, name: 'Turtleneck Sweater', brand: 'Zara', price: 5999, originalPrice: 7999, rating: 4.3, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Ribbed knit, slim fit, stretch fabric, versatile style.' },
        { id: 75, name: 'Leather Belt', brand: 'Gucci', price: 29999, originalPrice: 34999, rating: 4.8, reviews: 89, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Italian leather, GG buckle, 3.5cm width, luxury accessory.' },
        { id: 76, name: 'Slim Fit Blazer', brand: 'H&M', price: 6999, originalPrice: 8999, rating: 4.3, reviews: 78, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Slim fit, two-button, single vent, lined interior.' },
        { id: 77, name: 'Wool Coat', brand: 'Burberry', price: 44999, originalPrice: 49999, rating: 4.9, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Classic trench, wool blend, double-breasted, heritage style.' },
        { id: 78, name: 'Polo T-Shirt', brand: 'Ralph Lauren', price: 6999, originalPrice: 8999, rating: 4.5, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Cotton pique, embroidered logo, ribbed collar, classic fit.' },
        { id: 79, name: 'Leather Oxford Shoes', brand: 'Allen Edmonds', price: 24999, originalPrice: 29999, rating: 4.7, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Polished leather, Goodyear welt, Oxford style, formal shoes.' },
        { id: 80, name: 'Jogger Pants', brand: 'Nike', price: 4999, originalPrice: 6499, rating: 4.4, reviews: 156, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Men', description: 'Tech fleece, tapered leg, 3 pockets, elastic cuffs.' }
    ],

    // ==========================================
    // FASHION - WOMEN
    // ==========================================
    'fashion-women': [
        { id: 81, name: 'Silk Evening Gown', brand: 'Vera Wang', price: 49999, originalPrice: 59999, rating: 4.9, reviews: 89, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Pure silk, floor-length, V-neck, flowing silhouette, elegant design.' },
        { id: 82, name: 'Cashmere Turtleneck', brand: 'Loro Piana', price: 34999, originalPrice: 39999, rating: 4.8, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: '100% Baby Cashmere, 12-gauge, ribbed cuffs, luxurious warmth.' },
        { id: 83, name: 'High-Waist Skinny Jeans', brand: 'Frame', price: 12999, originalPrice: 15999, rating: 4.6, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Stretch denim, high waist, skinny leg, 5-pocket design.' },
        { id: 84, name: 'Wool Trench Coat', brand: 'Burberry', price: 69999, originalPrice: 79999, rating: 4.9, reviews: 178, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Classic trench, wool blend, double-breasted, heritage check lining.' },
        { id: 85, name: 'Silk Blouse', brand: 'Equipment', price: 19999, originalPrice: 24999, rating: 4.7, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Pure silk, signature neck tie, French cuffs, elegant drape.' },
        { id: 86, name: 'Leather Handbag', brand: 'Gucci', price: 89999, originalPrice: 99999, rating: 4.9, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Italian leather, GG Supreme, detachable strap, gold hardware.' },
        { id: 87, name: 'Alpaca Knit Cardigan', brand: 'Max Mara', price: 29999, originalPrice: 34999, rating: 4.6, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Alpaca wool, oversized fit, patch pockets, ribbed cuffs.' },
        { id: 88, name: 'Pleated Midi Skirt', brand: 'Dior', price: 39999, originalPrice: 45999, rating: 4.7, reviews: 87, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Silk blend, knife pleats, midi length, elasticated waist.' },
        { id: 89, name: 'Leather Ankle Boots', brand: 'Stuart Weitzman', price: 44999, originalPrice: 49999, rating: 4.8, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Polished leather, block heel, side zip, square toe design.' },
        { id: 90, name: 'Silk Scarf', brand: 'Hermès', price: 39999, originalPrice: 44999, rating: 4.9, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: '100% silk, hand-rolled edges, 90x90cm, iconic design.' },
        { id: 91, name: 'Wool Blazer', brand: 'Saint Laurent', price: 54999, originalPrice: 59999, rating: 4.8, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Wool blend, structured shoulders, single button, satin lapels.' },
        { id: 92, name: 'Cashmere Wrap', brand: 'N.Peal', price: 29999, originalPrice: 34999, rating: 4.6, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Pure cashmere, oversized wrap, 180x80cm, versatile styling.' },
        { id: 93, name: 'Pearl Earrings', brand: 'Tiffany & Co.', price: 24999, originalPrice: 29999, rating: 4.7, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'South Sea pearls, 18k gold, classic stud design.' },
        { id: 94, name: 'Silk Pajama Set', brand: 'La Perla', price: 34999, originalPrice: 39999, rating: 4.5, reviews: 45, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Pure silk, piped trim, button-down top, elastic waist pants.' },
        { id: 95, name: 'Wool Beret', brand: 'Maison Michel', price: 9999, originalPrice: 12999, rating: 4.4, reviews: 34, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: 'Wool felt, signature band, classic beret, made in France.' },
        { id: 96, name: 'Gold Chain Necklace', brand: 'Cartier', price: 149999, originalPrice: 169999, rating: 4.9, reviews: 78, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Women', description: '18k yellow gold, iconic chain design, spring-ring clasp.' }
    ],

    // ==========================================
    // FASHION - KIDS
    // ==========================================
    'fashion-kids': [
        { id: 97, name: 'Cotton Romper (0-12M)', brand: 'Baby Gap', price: 2499, originalPrice: 2999, rating: 4.6, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: '100% organic cotton, snap closure, cute prints, soft and breathable.' },
        { id: 98, name: 'Kids Denim Overalls', brand: 'Levi\'s', price: 4999, originalPrice: 5999, rating: 4.5, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Classic denim, adjustable straps, 5-pocket design, durable fabric.' },
        { id: 99, name: 'Polo Shirt (6-10Y)', brand: 'Ralph Lauren', price: 3999, originalPrice: 4999, rating: 4.4, reviews: 89, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Cotton pique, embroidered logo, ribbed collar, classic fit.' },
        { id: 100, name: 'Tulle Party Dress', brand: 'Monnalisa', price: 14999, originalPrice: 17999, rating: 4.7, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Tulle overlay, satin lining, floral appliqués, party ready.' },
        { id: 101, name: 'Kids Sneakers', brand: 'Nike', price: 4999, originalPrice: 5999, rating: 4.6, reviews: 178, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Air cushioning, rubber sole, hook-and-loop closure, durable.' },
        { id: 102, name: 'Wool Cardigan', brand: 'Jacadi', price: 9999, originalPrice: 11999, rating: 4.5, reviews: 56, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Merino wool, button front, patch pockets, cable knit design.' },
        { id: 103, name: 'Leggings Set', brand: 'Boden', price: 3999, originalPrice: 4999, rating: 4.3, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Cotton blend, elastic waist, all-over print, 2-piece set.' },
        { id: 104, name: 'Kids Denim Jacket', brand: 'Gap Kids', price: 5999, originalPrice: 6999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Classic denim, button front, chest pockets, adjustable cuffs.' },
        { id: 105, name: 'Puffer Jacket', brand: 'The North Face', price: 12999, originalPrice: 14999, rating: 4.7, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Water-resistant, down fill, zippered pockets, reflective logo.' },
        { id: 106, name: 'Kids Backpack', brand: 'Skip Hop', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Cute animal designs, insulated, adjustable straps, durable.' },
        { id: 107, name: 'Snow Boots', brand: 'Sorel', price: 6999, originalPrice: 7999, rating: 4.6, reviews: 78, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Waterproof, felt lining, rubber sole, easy on/off.' },
        { id: 108, name: 'Raincoat', brand: 'Hunter', price: 7999, originalPrice: 8999, rating: 4.3, reviews: 56, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Waterproof, snap closure, hood, bright fun colors.' },
        { id: 109, name: 'Kids Sunglasses', brand: 'Ray-Ban', price: 3999, originalPrice: 4999, rating: 4.2, reviews: 45, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'UV400 protection, durable frame, classic design, safe for kids.' },
        { id: 110, name: 'Swim Trunks', brand: 'Speedo', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Quick-dry, UV protection, elastic waist, fun prints.' },
        { id: 111, name: 'Kids Flannel Shirt', brand: 'Uniqlo', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Soft flannel, button front, chest pocket, classic plaid.' },
        { id: 112, name: 'Mittens & Beanie Set', brand: 'The North Face', price: 2999, originalPrice: 3499, rating: 4.5, reviews: 78, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Kids', description: 'Fleece lined, water-resistant, matching set, elastic cuffs.' }
    ],

    // ==========================================
    // FASHION - ACCESSORIES
    // ==========================================
    'fashion-accessories': [
        { id: 113, name: 'Leather Belt - Brown', brand: 'Gucci', price: 29999, originalPrice: 34999, rating: 4.8, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Italian leather, signature buckle, 3.5cm width, adjustable fit.' },
        { id: 114, name: 'Cashmere Scarf - Charcoal', brand: 'Johnstons', price: 14999, originalPrice: 17999, rating: 4.7, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Pure cashmere, herringbone pattern, 30x200cm, fringed edges.' },
        { id: 115, name: 'Aviator Sunglasses', brand: 'Ray-Ban', price: 14999, originalPrice: 17999, rating: 4.6, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Classic aviator, polarized lenses, gold frame, UV protection.' },
        { id: 116, name: 'Silk Tie - Navy', brand: 'Hermès', price: 19999, originalPrice: 23999, rating: 4.9, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: '100% silk, printed design, 8cm width, luxury gift box.' },
        { id: 117, name: 'Leather Gloves - Black', brand: 'Dents', price: 12999, originalPrice: 14999, rating: 4.5, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Italian leather, cashmere lining, touchscreen compatible, full grain.' },
        { id: 118, name: 'Wool Fedora - Grey', brand: 'Borsalino', price: 17999, originalPrice: 19999, rating: 4.6, reviews: 78, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Wool felt, wide brim, leather band, classic silhouette.' },
        { id: 119, name: 'Leather Wallet - Brown', brand: 'Montblanc', price: 24999, originalPrice: 29999, rating: 4.8, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Saffiano leather, 6-card slots, bill compartment, RFID protection.' },
        { id: 120, name: 'Silk Pocket Square', brand: 'Drake\'s', price: 7999, originalPrice: 9999, rating: 4.4, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: '100% silk, hand-rolled edges, 42x42cm, classic prints.' },
        { id: 121, name: 'Leather Bracelet', brand: 'Tiffany & Co.', price: 14999, originalPrice: 17999, rating: 4.7, reviews: 98, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Italian leather, silver clasp, engraved, adjustable length.' },
        { id: 122, name: 'Sunglasses - Tortoise', brand: 'Persol', price: 19999, originalPrice: 22999, rating: 4.6, reviews: 87, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Acetate frame, polarized lenses, Miele hinges, UV400 protection.' },
        { id: 123, name: 'Leather Journal Cover', brand: 'Moleskine', price: 4999, originalPrice: 5999, rating: 4.3, reviews: 45, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Italian leather, 6-ring binder, A5 size, business gift.' },
        { id: 124, name: 'Gold Cufflinks', brand: 'Cartier', price: 59999, originalPrice: 69999, rating: 4.9, reviews: 34, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: '18k gold, classic design, signature engraving, luxury gift.' },
        { id: 125, name: 'Silk Bow Tie - Navy', brand: 'Ralph Lauren', price: 9999, originalPrice: 11999, rating: 4.5, reviews: 67, badge: 'featured', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Silk woven, pre-tied, adjustable strap, classic print.' },
        { id: 126, name: 'Leather Satchel', brand: 'Coach', price: 29999, originalPrice: 34999, rating: 4.7, reviews: 89, badge: 'sale', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Pebbled leather, adjustable strap, zippered closure, brass hardware.' },
        { id: 127, name: 'Cashmere Beanie', brand: 'N.Peal', price: 8999, originalPrice: 10999, rating: 4.4, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Pure cashmere, ribbed knit, fold-over cuff, one size.' },
        { id: 128, name: 'Leather Keychain', brand: 'Louis Vuitton', price: 19999, originalPrice: 23999, rating: 4.8, reviews: 123, badge: 'bestseller', stock: 'in-stock', category: 'Fashion', subcategory: 'Accessories', description: 'Monogram canvas, brass hardware, 10cm, iconic design.' }
    ],

    // ==========================================
    // HOME & LIVING - FURNITURE
    // ==========================================
    'home-furniture': [
        { id: 129, name: 'Modern L-Shape Sofa', brand: 'IKEA', price: 89999, originalPrice: 99999, rating: 4.7, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Sleek L-shape, premium fabric, 3-seater, durable frame, modular design.' },
        { id: 130, name: 'Wooden Dining Table', brand: 'West Elm', price: 59999, originalPrice: 69999, rating: 4.6, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Solid oak, 6-seater, natural finish, mid-century modern design.' },
        { id: 131, name: 'Ergonomic Office Chair', brand: 'Herman Miller', price: 79999, originalPrice: 89999, rating: 4.9, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Adjustable lumbar, breathable mesh, 5-year warranty, premium comfort.' },
        { id: 132, name: 'Queen Size Bed Frame', brand: 'Pottery Barn', price: 69999, originalPrice: 79999, rating: 4.5, reviews: 98, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Upholstered headboard, solid wood, 5-year warranty, elegant design.' },
        { id: 133, name: 'Bookshelf 5-Tier', brand: 'Crate & Barrel', price: 34999, originalPrice: 39999, rating: 4.4, reviews: 87, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Industrial style, metal frame, wood shelves, adjustable tiers.' },
        { id: 134, name: 'Leather Recliner', brand: 'Natuzzi', price: 149999, originalPrice: 169999, rating: 4.8, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Italian leather, power recliner, USB charging, 360° swivel.' },
        { id: 135, name: 'Coffee Table - Marble', brand: 'CB2', price: 49999, originalPrice: 59999, rating: 4.6, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Marble top, gold legs, modern design, luxury addition.' },
        { id: 136, name: 'TV Stand Unit', brand: 'Wayfair', price: 29999, originalPrice: 34999, rating: 4.3, reviews: 89, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Wooden finish, cable management, 4 shelves, 65" TV capacity.' },
        { id: 137, name: 'Dressing Table with Mirror', brand: 'Ashley', price: 39999, originalPrice: 44999, rating: 4.5, reviews: 78, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'White finish, large mirror, 3 drawers, elegant design.' },
        { id: 138, name: 'Outdoor Patio Set', brand: 'Keter', price: 59999, originalPrice: 69999, rating: 4.4, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Rattan weave, 6-seater, weather-resistant, cushion included.' },
        { id: 139, name: 'Bar Stool Set', brand: 'IKEA', price: 19999, originalPrice: 24999, rating: 4.3, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Wooden seat, metal frame, 65cm height, 2-piece set.' },
        { id: 140, name: 'Wardrobe 4-Door', brand: 'Godrej', price: 44999, originalPrice: 49999, rating: 4.5, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Sliding doors, 4 shelves, hanging space, durable finish.' },
        { id: 141, name: 'Bedside Table', brand: 'West Elm', price: 14999, originalPrice: 17999, rating: 4.4, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Solid wood, single drawer, open shelf, minimalist design.' },
        { id: 142, name: 'Dining Chairs Set', brand: 'Crate & Barrel', price: 39999, originalPrice: 44999, rating: 4.5, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Upholstered seat, wood legs, 4-piece set, modern design.' },
        { id: 143, name: 'Wall Shelf Unit', brand: 'IKEA', price: 12999, originalPrice: 15999, rating: 4.3, reviews: 45, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Floating shelves, 3-tier, metal brackets, sturdy design.' },
        { id: 144, name: 'Storage Ottoman', brand: 'Pottery Barn', price: 24999, originalPrice: 29999, rating: 4.6, reviews: 67, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Furniture', description: 'Upholstered top, storage compartment, 2-in-1 design, versatile use.' }
    ],

    // ==========================================
    // HOME & LIVING - DECOR
    // ==========================================
    'home-decor': [
        { id: 145, name: 'Handwoven Persian Rug', brand: 'Oushak', price: 89999, originalPrice: 99999, rating: 4.9, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Hand-knotted wool, traditional pattern, 240x340cm, premium quality.' },
        { id: 146, name: 'Wall Art - Abstract', brand: 'Minted', price: 29999, originalPrice: 34999, rating: 4.6, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Canvas print, abstract design, 120x80cm, ready to hang.' },
        { id: 147, name: 'Ceramic Vase Set', brand: 'Jonathan Adler', price: 24999, originalPrice: 29999, rating: 4.5, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Handcrafted ceramic, 3 sizes, modern design, glazed finish.' },
        { id: 148, name: 'Mirror - Modern Round', brand: 'CB2', price: 39999, originalPrice: 44999, rating: 4.7, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Gold frame, round design, 90cm diameter, wall-mounted.' },
        { id: 149, name: 'Decorative Throw Pillow', brand: 'Pottery Barn', price: 5999, originalPrice: 6999, rating: 4.4, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Velvet cover, 50x50cm, feather insert, mix of colors.' },
        { id: 150, name: 'Table Lamp - Gold', brand: 'IKEA', price: 7999, originalPrice: 9999, rating: 4.3, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Gold finish, fabric shade, 60cm height, dimmable.' },
        { id: 151, name: 'Decorative Tray', brand: 'West Elm', price: 4999, originalPrice: 5999, rating: 4.2, reviews: 56, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Wooden tray, brass handles, 45cm, multifunctional use.' },
        { id: 152, name: 'Indoor Plant - Fiddle Leaf', brand: 'The Sill', price: 14999, originalPrice: 17999, rating: 4.6, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: '60-90cm tall, pot included, easy care, decorative plant.' },
        { id: 153, name: 'Wall Clock - Vintage', brand: 'Howard Miller', price: 19999, originalPrice: 24999, rating: 4.5, reviews: 78, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Vintage design, silent movement, 45cm diameter, classic look.' },
        { id: 154, name: 'Decorative Candles Set', brand: 'Diptyque', price: 8999, originalPrice: 10999, rating: 4.7, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Luxury scented candles, 3-piece set, 100hr burn time.' },
        { id: 155, name: 'Photo Frame Set', brand: 'Muji', price: 2999, originalPrice: 3499, rating: 4.3, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: '3-piece set, 10x15cm, wooden frame, minimalist design.' },
        { id: 156, name: 'Wall Hooks Set', brand: 'IKEA', price: 1999, originalPrice: 2499, rating: 4.2, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: '5-hook set, brass finish, 30cm length, wall-mounted.' },
        { id: 157, name: 'Decorative Bookends', brand: 'The Container Store', price: 3999, originalPrice: 4999, rating: 4.3, reviews: 45, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Marble bookends, geometric design, 15cm, heavy base.' },
        { id: 158, name: 'Curtains - Linen Blend', brand: 'Pottery Barn', price: 12999, originalPrice: 14999, rating: 4.4, reviews: 78, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Linen blend, 200x250cm, thermal lined, neutral color.' },
        { id: 159, name: 'Decorative Globe', brand: 'National Geographic', price: 19999, originalPrice: 22999, rating: 4.5, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: '30cm diameter, illuminated, antique design, detailed map.' },
        { id: 160, name: 'Rug - Sheepskin', brand: 'IKEA', price: 9999, originalPrice: 11999, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Decor', description: 'Sheepskin rug, 70x110cm, soft and warm, natural cream.' }
    ],

    // ==========================================
    // HOME & LIVING - KITCHEN
    // ==========================================
    'home-kitchen': [
        { id: 161, name: 'Non-Stick Cookware Set', brand: 'Tefal', price: 19999, originalPrice: 24999, rating: 4.7, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '10-piece set, induction compatible, scratch-resistant, 5-year warranty.' },
        { id: 162, name: 'Stainless Steel Knife Set', brand: 'Zwilling', price: 29999, originalPrice: 34999, rating: 4.8, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '6-piece set, German steel, ergonomic handles, precision sharpness.' },
        { id: 163, name: 'Stand Mixer - Artisan', brand: 'KitchenAid', price: 44999, originalPrice: 49999, rating: 4.9, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '5QT mixing bowl, 10 speeds, 3 attachments, iconic design.' },
        { id: 164, name: 'Cast Iron Dutch Oven', brand: 'Le Creuset', price: 39999, originalPrice: 45999, rating: 4.8, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Enameled cast iron, 5.5QT, oven safe, vibrant colors.' },
        { id: 165, name: 'Espresso Maker', brand: 'De\'Longhi', price: 24999, originalPrice: 29999, rating: 4.6, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Automatic espresso, milk frother, 15-bar pressure, compact design.' },
        { id: 166, name: 'Glass Storage Containers', brand: 'Pyrex', price: 3999, originalPrice: 4999, rating: 4.4, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '24-piece set, glass lids, oven safe, airtight seals.' },
        { id: 167, name: 'Ceramic Knife Set', brand: 'Kyocera', price: 14999, originalPrice: 17999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '3-piece set, ceramic blades, ultra-sharp, lightweight.' },
        { id: 168, name: 'Bamboo Cutting Board', brand: 'OXO', price: 4999, originalPrice: 5999, rating: 4.3, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Bamboo wood, 2-sided, deep juice groove, dishwasher safe.' },
        { id: 169, name: 'Electric Kettle - Glass', brand: 'Breville', price: 8999, originalPrice: 10999, rating: 4.6, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Glass body, blue LED, 6 temperatures, keep-warm function.' },
        { id: 170, name: 'Kitchen Scale', brand: 'Taylor', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Digital scale, 5kg capacity, precision to 1g, tare function.' },
        { id: 171, name: 'Stainless Steel Water Bottle', brand: 'Hydro Flask', price: 1999, originalPrice: 2499, rating: 4.5, reviews: 89, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Double-wall vacuum, 1L, BPA-free, 24hr cold, 12hr hot.' },
        { id: 172, name: 'Baking Sheet Set', brand: 'Nordic Ware', price: 3999, originalPrice: 4999, rating: 4.3, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '2-piece set, non-stick, 45x35cm, heavy-gauge steel.' },
        { id: 173, name: 'Wine Glasses Set', brand: 'Riedel', price: 12999, originalPrice: 14999, rating: 4.7, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '6-piece set, crystal glass, stemware, delicate design.' },
        { id: 174, name: 'Food Storage Bags', brand: 'Stasher', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Reusable silicone, 4 sizes, leak-proof, microwave safe.' },
        { id: 175, name: 'Tea Infuser', brand: 'Adagio', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 45, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: 'Stainless steel, fine mesh, 500ml capacity, tea strainer.' },
        { id: 176, name: 'Spice Organizer Set', brand: 'IKEA', price: 1499, originalPrice: 1999, rating: 4.2, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Kitchen', description: '3-tier organizer, glass jars, bamboo lid, 12-piece set.' }
    ],

    // ==========================================
    // HOME & LIVING - GARDEN
    // ==========================================
    'home-garden': [
        { id: 177, name: 'Premium Garden Shears', brand: 'Fiskars', price: 4999, originalPrice: 5999, rating: 4.7, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Precision steel, ergonomic handles, 20cm blade, rust-resistant.' },
        { id: 178, name: 'Outdoor Planter Set', brand: 'Bloem', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: '3-piece set, weather-resistant, 40cm, 30cm, 20cm sizes.' },
        { id: 179, name: 'Garden Hose 50ft', brand: 'Gilmour', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Heavy-duty, brass fittings, 50ft, 5-year warranty.' },
        { id: 180, name: 'Hanging Planters', brand: 'Umbra', price: 4999, originalPrice: 5999, rating: 4.6, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Metal frame, 3-tier, 120cm, holds 3 plants, modern design.' },
        { id: 181, name: 'Garden Trowel Set', brand: 'Radius', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: '2-piece set, stainless steel, ergonomic handles, rust-proof.' },
        { id: 182, name: 'Bird Feeder', brand: 'Perky-Pet', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 67, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Metal feeder, 4 feeding ports, 1.5kg capacity, squirrel-proof.' },
        { id: 183, name: 'Solar Garden Lights', brand: 'Energizer', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 98, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: '6-pack, warm white, solar-powered, 8hr runtime, waterproof.' },
        { id: 184, name: 'Pruning Saw', brand: 'Corona', price: 2499, originalPrice: 2999, rating: 4.4, reviews: 56, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Curved blade, 30cm, razor-sharp teeth, non-slip handle.' },
        { id: 185, name: 'Plant Watering Can', brand: 'Haws', price: 3999, originalPrice: 4999, rating: 4.6, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Metal watering can, 2L capacity, rose head, durable finish.' },
        { id: 186, name: 'Kneeling Pad', brand: 'Garden Guru', price: 1499, originalPrice: 1999, rating: 4.3, reviews: 67, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Ergonomic kneeling pad, 45x30cm, foam cushioning, waterproof.' },
        { id: 187, name: 'Compost Bin', brand: 'FCMP', price: 7999, originalPrice: 8999, rating: 4.5, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Tumbling composter, 200L capacity, dual-chamber, 2 wheels.' },
        { id: 188, name: 'Plant Stand', brand: 'Bamboo', price: 4999, originalPrice: 5999, rating: 4.4, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Bamboo plant stand, 3-tier, 110cm, holds 6 plants.' },
        { id: 189, name: 'Weeding Tool', brand: 'Garden Weasel', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 45, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Cordless weed puller, stainless steel head, ergonomic handle.' },
        { id: 190, name: 'Garden Edging', brand: 'EverEdge', price: 5999, originalPrice: 6999, rating: 4.4, reviews: 34, badge: 'new', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Steel edging, 6m length, rust-resistant, easy installation.' },
        { id: 191, name: 'Pest Repellent', brand: 'Bonide', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 56, badge: 'sale', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Natural repellent, 1L spray, chemical-free, long-lasting.' },
        { id: 192, name: 'Greenhouse 4x6ft', brand: 'Palram', price: 24999, originalPrice: 29999, rating: 4.6, reviews: 89, badge: 'featured', stock: 'in-stock', category: 'Home & Living', subcategory: 'Garden', description: 'Polycarbonate panels, 4x6ft, easy assembly, UV-protected.' }
    ],

    // ==========================================
    // BEAUTY - SKINCARE
    // ==========================================
    'beauty-skincare': [
        { id: 193, name: 'Vitamin C Serum', brand: 'SkinCeuticals', price: 8999, originalPrice: 10999, rating: 4.9, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: '20% Vitamin C, 30ml, brightening, antioxidant protection.' },
        { id: 194, name: 'Retinol Cream 1%', brand: 'The Ordinary', price: 2999, originalPrice: 3499, rating: 4.7, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Advanced retinol, anti-aging, 50ml, fine line reduction.' },
        { id: 195, name: 'Moisturizer - Hyaluronic', brand: 'CeraVe', price: 2499, originalPrice: 2999, rating: 4.6, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Hyaluronic acid, niacinamide, 50ml, fragrance-free.' },
        { id: 196, name: 'SPF 50 Sunscreen', brand: 'Supergoop!', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Mineral sunscreen, 50ml, non-greasy, SPF 50 PA+++.' },
        { id: 197, name: 'Glycolic Acid Toner', brand: 'Pixi', price: 1999, originalPrice: 2499, rating: 4.4, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: '5% Glycolic acid, exfoliating, 250ml, brightening toner.' },
        { id: 198, name: 'Eye Cream - Caffeine', brand: 'Origins', price: 3999, originalPrice: 4999, rating: 4.6, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Caffeine + Ginseng, 15ml, reduces puffiness, brightens.' },
        { id: 199, name: 'Rosewater Face Mist', brand: 'Heritage Store', price: 1499, originalPrice: 1999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Rosewater mist, 100ml, hydration, soothing, natural.' },
        { id: 200, name: 'Niacinamide Serum 10%', brand: 'The Inkey List', price: 1999, originalPrice: 2499, rating: 4.4, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Niacinamide 10%, 30ml, pores refining, oil control.' },
        { id: 201, name: 'Hydrating Face Mask', brand: 'Dr. Jart', price: 3999, originalPrice: 4999, rating: 4.7, reviews: 134, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Hydrating sheet mask, 5 pieces, hyaluronic acid, soothing.' },
        { id: 202, name: 'Salicylic Acid Cleanser', brand: 'CeraVe', price: 1999, originalPrice: 2499, rating: 4.6, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Salicylic acid, 200ml, acne-prone, gentle formula.' },
        { id: 203, name: 'Peptide Moisturizer', brand: 'Olay', price: 2999, originalPrice: 3499, rating: 4.5, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Peptide complex, 50ml, anti-aging, firming moisturizer.' },
        { id: 204, name: 'Aloe Vera Gel', brand: 'Fruit of the Earth', price: 999, originalPrice: 1299, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: '100% Aloe vera, 200ml, soothing, cooling, natural.' },
        { id: 205, name: 'Face Oil - Squalane', brand: 'Biossance', price: 4999, originalPrice: 5999, rating: 4.6, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: '100% squalane oil, 30ml, hydration, barrier repair.' },
        { id: 206, name: 'Under Eye Patches', brand: 'Patchology', price: 2499, originalPrice: 2999, rating: 4.3, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Under eye gel patches, 30 pairs, depuffing, brightening.' },
        { id: 207, name: 'Face Scrub - Gentle', brand: 'Dermalogica', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Gentle exfoliant, 100ml, rice based, suitable for all skin.' },
        { id: 208, name: 'Toner - Witch Hazel', brand: 'Thayers', price: 1499, originalPrice: 1999, rating: 4.4, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Skincare', description: 'Witch hazel toner, 350ml, alcohol-free, rose petal.' }
    ],

    // ==========================================
    // BEAUTY - MAKEUP
    // ==========================================
    'beauty-makeup': [
        { id: 209, name: 'Foundation - Natural Finish', brand: 'NARS', price: 4999, originalPrice: 5999, rating: 4.8, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Natural finish, 30ml, buildable coverage, 20 shades.' },
        { id: 210, name: 'Lipstick Set - 5 Pcs', brand: 'MAC', price: 7999, originalPrice: 9999, rating: 4.7, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: '5-piece lipstick set, matte finish, iconic shades.' },
        { id: 211, name: 'Eyeshadow Palette', brand: 'Urban Decay', price: 5999, originalPrice: 6999, rating: 4.9, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: '12-pan eyeshadow, warm neutrals, highly pigmented.' },
        { id: 212, name: 'Mascara - Volume', brand: 'L\'Oréal', price: 1999, originalPrice: 2499, rating: 4.6, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Volume mascara, 10ml, curl + volume, smudge-proof.' },
        { id: 213, name: 'Blush - Rose', brand: 'NARS', price: 3999, originalPrice: 4999, rating: 4.7, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Rose blush, 8g, natural flush, long-wear formula.' },
        { id: 214, name: 'Highlighter - Gold', brand: 'Fenty Beauty', price: 3999, originalPrice: 4999, rating: 4.6, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Gold highlighter, 10g, shimmer, buildable glow.' },
        { id: 215, name: 'Eyeliner - Liquid', brand: 'Stila', price: 2499, originalPrice: 2999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Liquid eyeliner, ultra-fine tip, waterproof, 10hr wear.' },
        { id: 216, name: 'Lip Gloss Set', brand: 'Fenty Beauty', price: 4999, originalPrice: 5999, rating: 4.5, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: '3-piece lip gloss, glossy finish, sheer shine, hydrating.' },
        { id: 217, name: 'Face Primer - Poreless', brand: 'Benefit', price: 3999, originalPrice: 4999, rating: 4.6, reviews: 134, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Pore-filling primer, 22ml, smooth base, matte finish.' },
        { id: 218, name: 'Concealer - Full Coverage', brand: 'Tarte', price: 2999, originalPrice: 3499, rating: 4.7, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Full coverage concealer, 10ml, crease-proof, 12 shades.' },
        { id: 219, name: 'Setting Spray', brand: 'Urban Decay', price: 2999, originalPrice: 3499, rating: 4.5, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Setting spray, 118ml, long-lasting, 16hr wear.' },
        { id: 220, name: 'Brow Pomade', brand: 'Anastasia', price: 2499, originalPrice: 2999, rating: 4.6, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Brow pomade, 5g, waterproof, natural finish.' },
        { id: 221, name: 'Lip Liner - Neutral', brand: 'MAC', price: 1999, originalPrice: 2499, rating: 4.4, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Lip pencil, neutral shade, smooth application, long-wear.' },
        { id: 222, name: 'Bronzer - Natural', brand: 'Physicians Formula', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Natural bronzer, 10g, matte finish, suitable for light skin.' },
        { id: 223, name: 'Eye Primer', brand: 'Urban Decay', price: 1999, originalPrice: 2499, rating: 4.5, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Eye primer, 10ml, crease-proof, 24hr wear, matte finish.' },
        { id: 224, name: 'Face Oil - Glow', brand: 'Milk Makeup', price: 3999, originalPrice: 4999, rating: 4.4, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Makeup', description: 'Face oil, 30ml, dewy glow, hydrating, natural finish.' }
    ],

    // ==========================================
    // BEAUTY - HAIRCARE
    // ==========================================
    'beauty-haircare': [
        { id: 225, name: 'Shampoo - Repairing', brand: 'Olaplex', price: 3999, originalPrice: 4999, rating: 4.9, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Bond-building shampoo, 250ml, repairs damage, strengthens hair.' },
        { id: 226, name: 'Conditioner - Moisture', brand: 'Moroccanoil', price: 4999, originalPrice: 5999, rating: 4.8, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Argan oil conditioner, 250ml, moisturizing, detangles hair.' },
        { id: 227, name: 'Hair Oil - Argan', brand: 'Argan Oil', price: 2999, originalPrice: 3499, rating: 4.7, reviews: 156, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Pure argan oil, 100ml, nourishing, adds shine, heat protectant.' },
        { id: 228, name: 'Hair Serum - Shine', brand: 'L\'Oréal', price: 1499, originalPrice: 1999, rating: 4.5, reviews: 123, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Shine serum, 75ml, smooths frizz, enhances shine.' },
        { id: 229, name: 'Dry Shampoo', brand: 'Batiste', price: 999, originalPrice: 1299, rating: 4.4, reviews: 98, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Dry shampoo, 200ml, absorbs oil, fresh scent, no residue.' },
        { id: 230, name: 'Hair Mask - Deep Condition', brand: 'SheaMoisture', price: 1999, originalPrice: 2499, rating: 4.6, reviews: 145, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Deep conditioning mask, 300ml, shea butter, repairing.' },
        { id: 231, name: 'Heat Protectant Spray', brand: 'TRESemmé', price: 1499, originalPrice: 1999, rating: 4.5, reviews: 87, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Heat protectant spray, 250ml, up to 230°C, protects hair.' },
        { id: 232, name: 'Hair Gel - Strong Hold', brand: 'Eco Styler', price: 999, originalPrice: 1299, rating: 4.3, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Strong hold gel, 500ml, alcohol-free, flake-free.' },
        { id: 233, name: 'Scalp Scrub', brand: 'Christophe Robin', price: 4999, originalPrice: 5999, rating: 4.7, reviews: 134, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Scalp scrub, 250ml, sea salt, exfoliates, stimulates.' },
        { id: 234, name: 'Leave-in Conditioner', brand: 'It\'s a 10', price: 2999, originalPrice: 3499, rating: 4.6, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Leave-in conditioner, 250ml, detangles, protects, softens.' },
        { id: 235, name: 'Hair Brush - Detangling', brand: 'Tangle Teezer', price: 1999, originalPrice: 2499, rating: 4.5, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Detangling brush, flexible teeth, reduces breakage, smooth.' },
        { id: 236, name: 'Hair Spray - Strong Hold', brand: 'L\'Oréal', price: 1499, originalPrice: 1999, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Strong hold hairspray, 300ml, 24hr hold, humidity-resistant.' },
        { id: 237, name: 'Curl Defining Cream', brand: 'Cantu', price: 1499, originalPrice: 1999, rating: 4.5, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Curl cream, 300ml, defines curls, reduces frizz, hydrates.' },
        { id: 238, name: 'Blow Dry Cream', brand: 'Living Proof', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Blow dry cream, 200ml, smooths, 75% less drying time.' },
        { id: 239, name: 'Clarifying Shampoo', brand: 'Paul Mitchell', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Clarifying shampoo, 300ml, removes buildup, deep cleanses.' },
        { id: 240, name: 'Hair Scalp Massager', brand: 'Scalp Care', price: 999, originalPrice: 1299, rating: 4.3, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Haircare', description: 'Scalp massager, silicone bristles, stimulates blood flow, relaxes.' }
    ],

    // ==========================================
    // BEAUTY - FRAGRANCE
    // ==========================================
    'beauty-fragrance': [
        { id: 241, name: 'Eau de Parfum - Floral', brand: 'Chanel', price: 8999, originalPrice: 10999, rating: 4.9, reviews: 234, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Floral fragrance, 50ml, jasmine + rose, iconic scent.' },
        { id: 242, name: 'Perfume - Citrus', brand: 'Dior', price: 7999, originalPrice: 9999, rating: 4.8, reviews: 189, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Citrus fragrance, 50ml, bergamot + orange, summer scent.' },
        { id: 243, name: 'Fragrance Discovery Set', brand: 'Jo Malone', price: 9999, originalPrice: 11999, rating: 4.7, reviews: 156, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: '4-piece fragrance set, 9ml each, variety of scents.' },
        { id: 244, name: 'Eau de Toilette - Woody', brand: 'Tom Ford', price: 8999, originalPrice: 10999, rating: 4.8, reviews: 145, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Woody fragrance, 50ml, sandalwood + oakmoss, masculine.' },
        { id: 245, name: 'Perfume - Vanilla', brand: 'Yves Saint Laurent', price: 6999, originalPrice: 8999, rating: 4.6, reviews: 123, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Vanilla fragrance, 30ml, warm + sweet, cozy scent.' },
        { id: 246, name: 'Roll-on Perfume Oil', brand: 'Nemat', price: 1999, originalPrice: 2499, rating: 4.5, reviews: 98, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Perfume oil, 10ml, roll-on, amber + musk, natural.' },
        { id: 247, name: 'Mini Perfume Gift Set', brand: 'Viktor & Rolf', price: 4999, originalPrice: 5999, rating: 4.6, reviews: 87, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: '3-piece mini perfume, 5ml each, gift set, elegant.' },
        { id: 248, name: 'Cologne - Fresh', brand: 'Acqua di Gio', price: 5999, originalPrice: 6999, rating: 4.5, reviews: 76, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Fresh cologne, 75ml, aquatic + citrus, summer essential.' },
        { id: 249, name: 'Perfume - Oriental', brand: 'Gucci', price: 8999, originalPrice: 10999, rating: 4.7, reviews: 134, badge: 'bestseller', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Oriental fragrance, 50ml, amber + patchouli, exotic.' },
        { id: 250, name: 'Room & Linen Spray', brand: 'Le Labo', price: 3999, originalPrice: 4999, rating: 4.5, reviews: 156, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Linen spray, 100ml, santal 33, fresh scent, gentle.' },
        { id: 251, name: 'Travel Size Perfume', brand: 'Byredo', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Travel perfume, 12ml, Mojave Ghost, convenient size.' },
        { id: 252, name: 'Fragrance Lotion', brand: 'Marc Jacobs', price: 2999, originalPrice: 3499, rating: 4.4, reviews: 67, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Scented body lotion, 100ml, Daisy, moisturizing, lightly scented.' },
        { id: 253, name: 'Perfume - Musk', brand: 'Kiehl\'s', price: 4999, originalPrice: 5999, rating: 4.5, reviews: 123, badge: 'featured', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Musk fragrance, 50ml, subtle + warm, unisex scent.' },
        { id: 254, name: 'Candle - Scented', brand: 'Diptyque', price: 8999, originalPrice: 10999, rating: 4.8, reviews: 56, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Scented candle, 190g, baies, 60hr burn time.' },
        { id: 255, name: 'Fragrance Rollerball', brand: 'Nest', price: 1999, originalPrice: 2499, rating: 4.3, reviews: 78, badge: 'sale', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Rollerball fragrance, 8ml, grapefruit, fresh + vibrant.' },
        { id: 256, name: 'Perfume Atomizer', brand: 'Luxury', price: 1499, originalPrice: 1999, rating: 4.3, reviews: 89, badge: 'new', stock: 'in-stock', category: 'Beauty', subcategory: 'Fragrance', description: 'Refillable atomizer, 10ml, gold finish, elegant design.' }
    ]
};

// ================================
// STATE MANAGEMENT
// ================================

let currentCategory = 'all';
let currentSubcategory = null;
let quickViewProduct = null;
let cartCount = 0;
let wishlistItems = new Set();

// ================================
// CATEGORY NAVIGATION
// ================================

const subcategoryMap = {
    'electronics': ['Phones', 'Laptops', 'Tablets', 'Accessories'],
    'fashion': ['Men', 'Women', 'Kids', 'Accessories'],
    'home': ['Furniture', 'Decor', 'Kitchen', 'Garden'],
    'beauty': ['Skincare', 'Makeup', 'Haircare', 'Fragrance']
};

const categoryDisplayNames = {
    'electronics': 'Electronics',
    'fashion': 'Fashion',
    'home': 'Home & Living',
    'beauty': 'Beauty'
};

function filterCategory(category) {
    currentCategory = category;
    currentSubcategory = null;
    
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    updateSubcategories(category);
    updateProducts(category, null);
}

function updateSubcategories(category) {
    const nav = document.getElementById('subcategoryNav');
    
    if (category === 'all') {
        nav.innerHTML = '';
        document.getElementById('categoryTitle').textContent = 'All Products';
        return;
    }
    
    const subcategories = subcategoryMap[category] || [];
    const displayName = categoryDisplayNames[category] || category;
    
    let html = `<button class="subcategory-btn active" data-subcategory="all" onclick="filterSubcategory('${category}', null)">
        All ${displayName}
    </button>`;
    
    subcategories.forEach(sub => {
        html += `<button class="subcategory-btn" data-subcategory="${sub}" onclick="filterSubcategory('${category}', '${sub}')">
            ${sub}
        </button>`;
    });
    
    nav.innerHTML = html;
    document.getElementById('categoryTitle').textContent = displayName;
}

function filterSubcategory(category, subcategory) {
    currentSubcategory = subcategory;
    
    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.subcategory === (subcategory || 'all'));
    });
    
    const displayName = categoryDisplayNames[category] || category;
    const subDisplay = subcategory ? ` - ${subcategory}` : '';
    document.getElementById('categoryTitle').textContent = `${displayName}${subDisplay}`;
    
    updateProducts(category, subcategory);
}

function getProductsForCategory(category, subcategory) {
    if (category === 'all') {
        let allProducts = [];
        for (const key in productsData) {
            allProducts = allProducts.concat(productsData[key]);
        }
        return allProducts;
    }
    
    if (subcategory) {
        const key = `${category}-${subcategory.toLowerCase()}`;
        return productsData[key] || [];
    }
    
    let products = [];
    const subcategories = subcategoryMap[category] || [];
    subcategories.forEach(sub => {
        const key = `${category}-${sub.toLowerCase()}`;
        if (productsData[key]) {
            products = products.concat(productsData[key]);
        }
    });
    return products;
}

function updateProducts(category, subcategory) {
    const grid = document.getElementById('productGrid');
    const products = getProductsForCategory(category, subcategory);
    
    document.getElementById('productsCount').textContent = `Showing ${products.length} products`;
    
    if (products.length === 0) {
        grid.innerHTML = `<div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
            <i class="fas fa-box-open" style="font-size: 48px; color: var(--gray-300);"></i>
            <p style="margin-top: 16px; color: var(--gray-500);">No products found in this category.</p>
        </div>`;
        return;
    }
    
    let html = '';
    products.forEach(product => {
        html += createProductCard(product);
    });
    grid.innerHTML = html;
}

// ==========================================
// 🎯 CREATE PRODUCT CARD - WITH AFFILIATE LINKS
// ==========================================

function createProductCard(product) {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const badgeMap = {
        'sale': `<span class="sale-badge">-${discount}%</span>`,
        'featured': '<span class="featured-badge">Featured</span>',
        'bestseller': '<span class="bestseller-badge"># Best Seller</span>',
        'new': '<span class="new-badge">New</span>'
    };
    const badgeHtml = product.badge && badgeMap[product.badge] ? badgeMap[product.badge] : '';
    
    const ratingStars = getRatingStars(product.rating);
    const originalPriceHtml = product.originalPrice ? 
        `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : '';
    
    const stockMap = {
        'in-stock': '<div class="stock-status in-stock">In Stock</div>',
        'low-stock': '<div class="stock-status low-stock">Only 3 left</div>',
        'out-of-stock': '<div class="stock-status out-of-stock">Out of Stock</div>',
        'pre-order': '<div class="stock-status pre-order">Pre-order</div>'
    };
    const stockHtml = stockMap[product.stock] || stockMap['in-stock'];
    
    // 🖼️ IMAGE: Use image if provided, else placeholder
    let imageHtml = '';
    if (product.image) {
        if (product.image.startsWith('http://') || product.image.startsWith('https://')) {
            imageHtml = `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" />`;
        } else {
            imageHtml = `<img src="images/${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" />`;
        }
    } else {
        imageHtml = `<i class="fas fa-image"></i>`;
    }
    
    // 🔗 AFFILIATE LINK: Check if product has affiliate link
    const hasAffiliate = product.affiliate && product.affiliate !== '';
    const affiliateUrl = hasAffiliate ? product.affiliate : '#';
    
    // 🛒 Buy Button: Show "Buy on Amazon" if affiliate, else "Buy Now"
    const buyButton = hasAffiliate 
        ? `<a href="${affiliateUrl}" target="_blank" rel="nofollow sponsored" class="add-to-cart-btn" onclick="event.stopPropagation();">
            <i class="fab fa-amazon"></i> Buy on Amazon
           </a>`
        : `<button class="add-to-cart-btn" onclick="event.stopPropagation(); buyNow(${product.id})">
            <i class="fas fa-bolt"></i> Buy Now
           </button>`;
    
    // 🖱️ Card Click: Redirect to affiliate if available
    const cardClick = hasAffiliate 
        ? `window.open('${affiliateUrl}', '_blank');` 
        : `openProductDetail(${product.id})`;
    
    // 📝 Affiliate Disclosure (only for affiliate products)
    const disclosure = hasAffiliate 
        ? `<div class="affiliate-disclosure" style="margin-top:8px; padding:6px 10px; background:#F3F4F6; border-radius:6px; font-size:11px; color:#6B7280; text-align:center;">
            <small>🛒 As an Amazon Associate, we earn from qualifying purchases.</small>
           </div>` 
        : '';
    
    return `
        <div class="product-card" data-id="${product.id}" onclick="${cardClick}">
            <div class="product-image">
                <div class="image-placeholder">${imageHtml}</div>
                ${badgeHtml}
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this)">
                    <i class="far fa-heart"></i>
                </button>
                <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.rating}) ${product.reviews} reviews</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${originalPriceHtml}
                </div>
                <div class="product-actions">
                    ${buyButton}
                    <button class="compare-btn" onclick="event.stopPropagation(); addToCompare(${product.id})">
                        <i class="fas fa-chart-simple"></i>
                    </button>
                </div>
                ${stockHtml}
                ${disclosure}
            </div>
        </div>
    `;
}

function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ==========================================
// 🛒 BUY NOW FUNCTION
// ==========================================

function buyNow(productId) {
    let product = null;
    for (const key in productsData) {
        const found = productsData[key].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }
    
    if (!product) return;
    
    cartCount++;
    updateCartBadge();
    
    const btn = event ? event.target.closest('.add-to-cart-btn') : null;
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.style.background = '#34C759';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    }
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = cartCount;
    });
}

// ==========================================
// 👁️ QUICK VIEW
// ==========================================

function openQuickView(productId) {
    let product = null;
    for (const key in productsData) {
        const found = productsData[key].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }
    
    if (!product) return;
    
    quickViewProduct = product;
    
    document.getElementById('qvBrand').textContent = product.brand;
    document.getElementById('qvTitle').textContent = product.name;
    document.getElementById('qvDescription').textContent = product.description;
    document.getElementById('qvPrice').textContent = `₹${product.price.toLocaleString()}`;
    
    const qvOriginal = document.getElementById('qvOriginalPrice');
    if (product.originalPrice) {
        qvOriginal.textContent = `₹${product.originalPrice.toLocaleString()}`;
        qvOriginal.style.display = 'inline';
    } else {
        qvOriginal.style.display = 'none';
    }
    
    document.getElementById('qvRating').innerHTML = `
        ${getRatingStars(product.rating)}
        <span>(${product.rating}) ${product.reviews} reviews</span>
    `;
    
    document.getElementById('quick-view-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('quick-view-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateQuantity(delta) {
    const qtySpan = document.getElementById('quick-qty');
    let qty = parseInt(qtySpan.textContent) + delta;
    if (qty < 1) qty = 1;
    qtySpan.textContent = qty;
}

function addToCartFromQuickView() {
    if (quickViewProduct) {
        buyNow(quickViewProduct.id);
        closeQuickView();
    }
}

function buyNowFromQuickView() {
    if (quickViewProduct) {
        buyNow(quickViewProduct.id);
        closeQuickView();
        window.location.href = 'checkout.html';
    }
}

function toggleWishlistQuick() {
    if (quickViewProduct) {
        const btn = document.querySelector('.wishlist-quick i');
        btn.classList.toggle('far');
        btn.classList.toggle('fas');
        btn.classList.toggle('fa-heart');
    }
}

function toggleWishlist(element) {
    const icon = element.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    element.classList.toggle('active');
}

function addToCompare(productId) {
    alert('Product added to comparison!');
}

function openProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// ==========================================
// 🔍 SEARCH FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    let results = [];
                    for (const key in productsData) {
                        const found = productsData[key].filter(p => 
                            p.name.toLowerCase().includes(query.toLowerCase()) ||
                            p.brand.toLowerCase().includes(query.toLowerCase()) ||
                            p.category.toLowerCase().includes(query.toLowerCase()) ||
                            p.subcategory.toLowerCase().includes(query.toLowerCase())
                        );
                        results = results.concat(found);
                    }
                    
                    if (results.length > 0) {
                        const grid = document.getElementById('productGrid');
                        let html = '';
                        results.forEach(product => {
                            html += createProductCard(product);
                        });
                        grid.innerHTML = html;
                        document.getElementById('categoryTitle').textContent = `Search Results: "${query}"`;
                        document.getElementById('productsCount').textContent = `Showing ${results.length} products`;
                    } else {
                        document.getElementById('productGrid').innerHTML = `
                            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
                                <i class="fas fa-search" style="font-size: 48px; color: var(--gray-300);"></i>
                                <h3 style="margin-top: 16px;">No products found</h3>
                                <p style="color: var(--gray-500);">Try searching for something else</p>
                            </div>
                        `;
                        document.getElementById('categoryTitle').textContent = `Search Results: "${query}"`;
                        document.getElementById('productsCount').textContent = 'Showing 0 products';
                    }
                }
            }
        });
    }
    
    // Handle URL parameters for category navigation
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const sub = params.get('sub');
    
    if (category) {
        const categoryMap = {
            'electronics': 'electronics',
            'fashion': 'fashion',
            'home': 'home',
            'beauty': 'beauty'
        };
        const catKey = categoryMap[category];
        if (catKey) {
            filterCategory(catKey);
            if (sub) {
                filterSubcategory(catKey, sub);
            }
        }
    }
});

function setView(view) {
    const grid = document.getElementById('productGrid');
    grid.classList.remove('grid-view', 'list-view');
    grid.classList.add(view + '-view');
}

// Initial load
document.addEventListener('DOMContentLoaded', function() {
    updateProducts('all', null);
});
