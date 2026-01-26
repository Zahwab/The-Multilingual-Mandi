export const marketData = [
    {
        id: 1,
        commodityEn: 'Wheat (Sharbati)',
        commodityHi: 'गेहूँ (शरबती)',
        locationEn: 'Indore Mandi',
        locationHi: 'इंदौर मंडी',
        price: 2450,
        trend: 'up',
        confidence: 'High'
    },
    {
        id: 2,
        commodityEn: 'Soybean',
        commodityHi: 'सोयाबीन',
        locationEn: 'Ujjain Mandi',
        locationHi: 'उज्जैन मंडी',
        price: 4800,
        trend: 'down',
        confidence: 'Med'
    },
    {
        id: 3,
        commodityEn: 'Cotton',
        commodityHi: 'कपास',
        locationEn: 'Akola Mandi',
        locationHi: 'अकोला मंडी',
        price: 6400,
        trend: 'stable',
        confidence: 'High'
    },
    {
        id: 4,
        commodityEn: 'Chana (Gram)',
        commodityHi: 'चना (देसी)',
        locationEn: 'Bhopal Mandi',
        locationHi: 'भोपाल मंडी',
        price: 5250,
        trend: 'up',
        confidence: 'High'
    },
    {
        id: 5,
        commodityEn: 'Onion (Red)',
        commodityHi: 'प्याज (लाल)',
        locationEn: 'Lasalgaon Mandi',
        locationHi: 'लासलगाँव मंडी',
        price: 1800,
        trend: 'up',
        confidence: 'High'
    },
    {
        id: 6,
        commodityEn: 'Mustard Seeds',
        commodityHi: 'सरसों',
        locationEn: 'Jaipur Mandi',
        locationHi: 'जयपुर मंडी',
        price: 5600,
        trend: 'stable',
        confidence: 'High'
    },
    {
        id: 7,
        commodityEn: 'Turmeric',
        commodityHi: 'हल्दी',
        locationEn: 'Nizamabad Mandi',
        locationHi: 'निज़ामाबाद मंडी',
        price: 7200,
        trend: 'down',
        confidence: 'Med'
    },
    {
        id: 8,
        commodityEn: 'Maize',
        commodityHi: 'मक्का',
        locationEn: 'Chhindwara Mandi',
        locationHi: 'छिंदवाड़ा मंडी',
        price: 2100,
        trend: 'up',
        confidence: 'High'
    }
];

export const translations = {
    en: {
        heroTitle: 'Bridging India’s Local Markets with',
        heroSubtitle: 'Intelligent Trade.',
        heroDesc: 'Empower your business with real-time price discovery, instant negotiation, and a multilingual bridge connecting vendors and buyers seamlessly.',
        startTrading: 'Start Trading',
        viewLiveMandi: 'View Live Mandi',
        liveMandiRates: 'Live Mandi Rates',
        liveMandiDesc: 'Real-time AI-verified rates from across 500+ markets',
        commodity: 'Commodity',
        location: 'Location',
        price: 'Current Price',
        trend: 'Trend',
        confidence: 'AI Confidence',
        features: {
            discovery: {
                title: 'Instant Price Discovery',
                desc: 'Get real-time market rates analyzed from thousands of local data points.'
            },
            negotiation: {
                title: 'AI Negotiation',
                desc: 'Our AI agent negotiates on your behalf to get the best deal without the hassle.'
            },
            multilingual: {
                title: 'Multilingual Support',
                desc: 'Break language barriers. Trade in Hindi, Tamil, Bengali, and 10+ languages.'
            }
        }
    },
    hi: {
        heroTitle: 'भारत की स्थानीय मंडियों को जोड़ रहा है',
        heroSubtitle: 'इंटेलिजेंट ट्रेड।',
        heroDesc: 'अपने व्यवसाय को वास्तविक समय मूल्य खोज, त्वरित बातचीत और विक्रेताओं और खरीदारों को सहजता से जोड़ने वाले बहुभाषी सेतु के साथ सशक्त बनाएं।',
        startTrading: 'व्यापार शुरू करें',
        viewLiveMandi: 'लाइव मंडी देखें',
        liveMandiRates: 'लाइव मंडी भाव',
        liveMandiDesc: '500+ मंडियों से रीयल-टाइम एआई-सत्यापित दरें',
        commodity: 'जिंस / फसल',
        location: 'मंडी / स्थान',
        price: 'वर्तमान भाव',
        trend: 'रुझान',
        confidence: 'AI विश्वास',
        features: {
            discovery: {
                title: 'त्वरित मूल्य खोज',
                desc: 'हजारों स्थानीय डेटा बिंदुओं से विश्लेषित रीयल-टाइम मंडी दरें प्राप्त करें।'
            },
            negotiation: {
                title: 'AI मोल-भाव',
                desc: 'हमारा एआई एजेंट आपके लिए सबसे अच्छा सौदा पाने के लिए बातचीत करता है।'
            },
            multilingual: {
                title: 'बहुभाषी समर्थन',
                desc: 'भाषा की बाधाओं को तोड़ें। हिंदी, तमिल, बंगाली और 10+ भाषाओं में व्यापार करें।'
            }
        }
    }
};

export const vendorsData = [
    {
        id: 1,
        name: 'Ramesh Trading Co',
        location: 'Indore, MP',
        rating: 4.8,
        type: 'Grain Merchant',
        products: [
            { name: 'Wheat (Sharbati)', price: '₹2450/qtl' },
            { name: 'Soybean', price: '₹4800/qtl' }
        ],
        description: 'Leading grain merchant in Indore for over 20 years. Specialists in premium quality wheat and soybean.',
        contact: { phone: '+91 98765 43210', email: 'ramesh.trading@mandi.com' },
        joinedDate: '2015',
        badges: ['Top Rated', 'Verified']
    },
    {
        id: 2,
        name: 'AgriCorp India',
        location: 'Mumbai, MH',
        rating: 4.9,
        type: 'Exporter',
        products: [
            { name: 'Onion (Red)', price: '₹1800/qtl' },
            { name: 'Cotton', price: '₹6400/qtl' }
        ],
        description: 'Premium exporter connecting Indian farmers to global markets. We ensure the best prices for premium produce.',
        contact: { phone: '+91 99887 76655', email: 'contact@agricorp.in' },
        joinedDate: '2018',
        badges: ['Exporter', 'Premium']
    },
    {
        id: 3,
        name: 'Kisan Seva Kendra',
        location: 'Bhopal, MP',
        rating: 4.7,
        type: 'Wholesaler',
        products: [
            { name: 'Chana (Gram)', price: '₹5250/qtl' },
            { name: 'Maize', price: '₹2100/qtl' }
        ],
        description: 'Dedicated to serving the local farming community with fair trade practices and instant payments.',
        contact: { phone: '+91 88776 65544', email: 'info@kisanseva.org' },
        joinedDate: '2016',
        badges: ['Farmer Friendly', 'Fast Pay']
    },
    {
        id: 4,
        name: 'Golden Harvest Exports',
        location: 'Pune, MH',
        rating: 4.6,
        type: 'Exporter',
        products: [
            { name: 'Grapes', price: '₹8500/qtl' },
            { name: 'Pomegranate', price: '₹12000/qtl' }
        ],
        description: 'Specializing in fruit exports. We value quality above all else.',
        contact: { phone: '+91 77665 54433', email: 'sales@goldenharvest.com' },
        joinedDate: '2019',
        badges: ['Fruit Expert']
    },
    {
        id: 5,
        name: 'Malwa Organics',
        location: 'Ujjain, MP',
        rating: 4.9,
        type: 'Organic Trader',
        products: [
            { name: 'Organic Wheat', price: '₹3200/qtl' },
            { name: 'Organic Pulses', price: '₹6500/qtl' }
        ],
        description: 'Certified organic produce trader. Promoting chemical-free farming and healthy living.',
        contact: { phone: '+91 66554 43322', email: 'organic@malwa.com' },
        joinedDate: '2020',
        badges: ['Organic Certified', 'Eco-Friendly']
    },
    {
        id: 6,
        name: 'Desi Spice Traders',
        location: 'Guntur, AP',
        rating: 4.8,
        type: 'Spice Merchant',
        products: [
            { name: 'Dry Chilli', price: '₹14500/qtl' },
            { name: 'Turmeric', price: '₹7200/qtl' }
        ],
        description: 'The spice of life. We source the hottest chillies and purest turmeric directly from Guntur.',
        contact: { phone: '+91 55443 32211', email: 'spices@desi.com' },
        joinedDate: '2017',
        badges: ['Spice King']
    },
    {
        id: 7,
        name: 'Punjab Grain Depot',
        location: 'Ludhiana, PB',
        rating: 4.7,
        type: 'Wholesaler',
        products: [
            { name: 'Basmati Rice', price: '₹9500/qtl' },
            { name: 'Wheat', price: '₹2500/qtl' }
        ],
        description: 'Bulk suppliers of premium rice and wheat to retailers across the country.',
        contact: { phone: '+91 44332 21100', email: 'depot@punjabgrain.com' },
        joinedDate: '2014',
        badges: ['Bulk Supplier']
    },
    {
        id: 8,
        name: 'Nashik Onion Exchange',
        location: 'Nashik, MH',
        rating: 4.5,
        type: 'Cooperative',
        products: [
            { name: 'Onion (Summer)', price: '₹1600/qtl' },
            { name: 'Onion (Red)', price: '₹1850/qtl' }
        ],
        description: 'A cooperative society ensuring fair prices for onion farmers in the Nashik belt.',
        contact: { phone: '+91 33221 10099', email: 'connect@nashikonion.coop' },
        joinedDate: '2012',
        badges: ['Cooperative', 'Fair Trade']
    },
    {
        id: 9,
        name: 'Himachal Apple Direct',
        location: 'Shimla, HP',
        rating: 4.9,
        type: 'Fruit Merchant',
        products: [
            { name: 'Royal Gala Apple', price: '₹150/kg' },
            { name: 'Golden Apple', price: '₹120/kg' }
        ],
        description: 'Direct from the orchards of Shimla. Freshness guaranteed.',
        contact: { phone: '+91 22110 09988', email: 'fresh@himachalapple.com' },
        joinedDate: '2021',
        badges: ['Farm Fresh']
    },
    {
        id: 10,
        name: 'Deccan Cotton Gin Industries',
        location: 'Warangal, TS',
        rating: 4.6,
        type: 'Ginners',
        products: [
            { name: 'Cotton Bales', price: '₹6200/candy' },
            { name: 'Cotton Seeds', price: '₹3400/qtl' }
        ],
        description: 'Modern ginning facilities for the best quality cotton lint and seeds.',
        contact: { phone: '+91 11009 98877', email: 'sales@deccancotton.com' },
        joinedDate: '2016',
        badges: ['Industrial']
    },
    {
        id: 11,
        name: 'Green Leaf Vegetables',
        location: 'Bangalore, KA',
        rating: 4.7,
        type: 'Wholesaler',
        products: [
            { name: 'Tomato', price: '₹25/kg' },
            { name: 'Capsicum', price: '₹45/kg' }
        ],
        description: 'Supplying fresh vegetables to supermarkets and restaurants daily.',
        contact: { phone: '+91 99008 87766', email: 'orders@greenleaf.com' },
        joinedDate: '2019',
        badges: ['Fresh Daily']
    },
    {
        id: 12,
        name: 'Saffron Valley',
        location: 'Srinagar, JK',
        rating: 5.0,
        type: 'Luxury Goods',
        products: [
            { name: 'Kesar (Saffron)', price: '₹180/g' },
            { name: 'Walnuts', price: '₹800/kg' }
        ],
        description: 'Authentic Kashmiri saffron and dry fruits. The taste of paradise.',
        contact: { phone: '+91 88776 60000', email: 'luxury@saffronvalley.com' },
        joinedDate: '2022',
        badges: ['Luxury', 'Authentic']
    }
];
