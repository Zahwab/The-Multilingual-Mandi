import React, { useState } from 'react';
import Marketplace from '../components/Home/Marketplace.jsx';
import { marketData } from '../data/marketData';
import { useLanguage } from '../context/LanguageContext';

const MarketplacePage = () => {
    const { lang } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    // Get unique locations
    const locations = [...new Set(marketData.map(item => item.location?.en || item.location?.['en']))];

    const filteredData = marketData.filter(item => {
        const commodityEn = item.commodity?.en || '';
        const commodityHi = item.commodity?.hi || '';
        const locationEn = item.location?.en || '';

        const matchesSearch =
            commodityEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            commodityHi.includes(searchTerm);
        const matchesLocation = selectedLocation === '' || locationEn === selectedLocation;
        return matchesSearch && matchesLocation;
    });

    const styles = {
        page: {
            paddingTop: '80px',
            minHeight: '100vh',
            background: 'var(--color-bg-dark)',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '32px 24px',
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'var(--font-main)',
        },
        controls: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            outline: 'none',
            fontSize: '16px',
            minWidth: '250px',
            transition: 'border-color 0.3s',
        },
        select: {
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            outline: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            minWidth: '200px',
        },
        option: {
            background: '#121212',
            color: 'white',
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>
                    {lang === 'en' ? 'Mandi Marketplace' : 'मंडी बाज़ार'}
                </h1>

                {/* Search and Filters */}
                <div style={styles.controls}>
                    <input
                        type="text"
                        placeholder={lang === 'en' ? "Search commodity..." : "फसल खोजें..."}
                        style={styles.input}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                    />

                    <select
                        style={styles.select}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                    >
                        <option value="" style={styles.option}>{lang === 'en' ? "All Locations" : "सभी स्थान"}</option>
                        {locations.map(loc => (
                            <option key={loc} value={loc} style={styles.option}>{loc}</option>
                        ))}
                    </select>
                </div>

                <Marketplace data={filteredData} />
            </div>
        </div>
    );
};

export default MarketplacePage;
