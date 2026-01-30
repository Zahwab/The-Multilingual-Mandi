import { useState } from 'react';
import { marketData, translations } from '../../data/marketData';
import TradeModal from '../Shared/TradeModal';
import { useLanguage } from '../../context/LanguageContext';

const Marketplace = ({ data }) => {
    const { lang } = useLanguage();
    const [selectedCommodity, setSelectedCommodity] = useState(null);
    const t = { ...translations['en'], ...translations[lang] };

    // Use passed data or default to all marketData
    const displayData = data || marketData;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <section className="section-features" id="live" style={{ background: 'linear-gradient(to bottom, var(--color-bg-dark), #1a0b1c)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>{t.liveMandiRates}</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>{t.liveMandiDesc}</p>
                </div>

                <div className="marketplace-container">
                    {/* Header Row - Hidden on mobile via CSS if needed, or keeping it */}
                    <div className="market-item" style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: 'none', borderRadius: '16px 16px 0 0', display: 'none' }}>
                        {/* Actually, the CSS for .market-item is set up for rows. The header might need its own class or be hidden on mobile
                             and shown on desktop. My CSS didn't explicitly handle a separate header row well for mobile hiding.
                             I'll use a specific class for header or just rely on the card layout for items.
                             Let's keep the header row but maybe hide it on mobile?
                             responsive table headers are tricky. I'll just skip the header row for mobile logic in CSS or hide it.
                         */}
                    </div>

                    {/* We can use a separate header div if we want, but for now let's just render the items.
                        If we want headers, we should add a header row that hides on mobile.
                    */}
                    <div className="market-item header-row" style={{ background: 'transparent', border: 'none', paddingBottom: '10px', textTransform: 'uppercase', fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: '600', letterSpacing: '1px' }}>
                        <div>{t.commodity}</div>
                        <div>{t.location}</div>
                        <div>{t.price}</div>
                        <div style={{ textAlign: 'center' }}>{t.trend}</div>
                        <div style={{ textAlign: 'center' }}>{t.action}</div>
                    </div>

                    <style>{`
                        @media (max-width: 768px) {
                            .header-row { display: none !important; }
                        }
                    `}</style>

                    {displayData.map((item, index) => {
                        // Dynamic language selection with fallback to English
                        const commodityName = item.commodity[lang] || item.commodity['en'];
                        const locationName = item.location[lang] || item.location['en'];

                        // Localized button text
                        const tradeBtnText = {
                            en: 'Trade', hi: 'व्यापार', bn: 'বাণিজ্য', te: 'వర్తకం', mr: 'व्यापार', ta: 'வர்த்தகம்',
                            ur: 'تجارت', gu: 'વેપાર', kn: 'ವ್ಯಾಪಾರ', ml: 'വ്യാപാരം', pa: 'ਵਪਾਰ', or: 'ବାଣିଜ୍ୟ'
                        };

                        return (
                            <div
                                key={index}
                                className="market-item"
                            >
                                <div className="market-cell-main">
                                    <div className="commodity-name">
                                        {commodityName}
                                    </div>
                                </div>
                                <div className="market-cell-location">
                                    <div className="commodity-location">
                                        📍 {locationName}
                                    </div>
                                </div>

                                <div className="market-cell-price">
                                    {formatPrice(item.price)}/q
                                </div>

                                <div className="market-cell-trend" style={{ textAlign: 'center' }}>
                                    <span style={item.trend === 'up' ? { color: '#4CAF50' } : item.trend === 'down' ? { color: '#F44336' } : {}}>
                                        {item.trend === 'up' ? '▲ Up' : item.trend === 'down' ? '▼ Down' : '• Stable'}
                                    </span>
                                </div>

                                <div className="market-cell-action" style={{ textAlign: 'right' }}>
                                    <button
                                        className="trade-btn"
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            transition: 'all 0.2s'
                                        }}
                                        onClick={() => setSelectedCommodity(item)}
                                        onMouseEnter={e => {
                                            e.target.style.background = 'var(--color-secondary)';
                                            e.target.style.color = 'var(--color-primary)';
                                        }}
                                        onMouseLeave={e => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            e.target.style.color = 'white';
                                        }}
                                    >
                                        {tradeBtnText[lang] || tradeBtnText['en']}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <TradeModal
                isOpen={!!selectedCommodity}
                onClose={() => setSelectedCommodity(null)}
                commodity={selectedCommodity}
                lang={lang}
            />
        </section>
    );
};

export default Marketplace;
