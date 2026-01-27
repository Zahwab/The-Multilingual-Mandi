import { useState } from 'react';
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

    return (
        <div className="marketplace-page">
            <div className="container">
                <h1 className="section-title">
                    {lang === 'en' ? 'Mandi Marketplace' : 'मंडी बाज़ार'}
                </h1>

                {/* Search and Filters */}
                <div className="page-controls">
                    <input
                        type="text"
                        placeholder={lang === 'en' ? "Search commodity..." : "फसल खोजें..."}
                        className="control-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                    />

                    <select
                        className="control-select"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
                    >
                        <option value="" className="control-option">{lang === 'en' ? "All Locations" : "सभी स्थान"}</option>
                        {locations.map(loc => (
                            <option key={loc} value={loc} className="control-option">{loc}</option>
                        ))}
                    </select>
                </div>

                <Marketplace data={filteredData} />
            </div>
        </div>
    );
};

export default MarketplacePage;
