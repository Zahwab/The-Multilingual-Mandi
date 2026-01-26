import { useState } from 'react';
import { marketData, translations } from '../../data/marketData';
import TradeModal from '../Shared/TradeModal';
import { useLanguage } from '../../context/LanguageContext';

const Marketplace = ({ data }) => {
    const { lang } = useLanguage();
    const [selectedCommodity, setSelectedCommodity] = useState(null);
    const t = translations[lang];

    // Use passed data or default to all marketData
    const displayData = data || marketData;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const styles = {
        section: {
            padding: '80px 24px',
            background: 'linear-gradient(to bottom, var(--color-bg-dark), #1a0b1c)',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '48px',
        },
        title: {
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '16px',
            color: 'white',
        },
        subtitle: {
            color: 'var(--color-text-muted)',
            fontSize: '18px',
        },
        tableContainer: {
            background: 'var(--glass-bg)',
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            overflow: 'hidden',
            backdropFilter: 'var(--glass-blur)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        },
        tableHeader: {
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1.5fr 1fr 1.2fr 1fr',
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid var(--glass-border)',
            color: 'var(--color-text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        row: {
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1.5fr 1fr 1.2fr 1fr',
            padding: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            alignItems: 'center',
            transition: 'background 0.2s',
            color: 'white',
        },
        trendUp: {
            color: '#4CAF50',
        },
        trendDown: {
            color: '#F44336',
        },
        aiBadge: {
            background: 'rgba(255, 215, 0, 0.1)',
            color: 'var(--color-secondary)',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
        },
        tradeBtn: {
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            transition: 'all 0.2s',
        }
    };

    return (
        <section style={styles.section} id="live">
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>{t.liveMandiRates}</h2>
                    <p style={styles.subtitle}>{t.liveMandiDesc}</p>
                </div>

                <div style={styles.tableContainer}>
                    <div style={{ overflowX: 'auto' }}>
                        <div style={{ minWidth: '800px' }}>
                            <div style={styles.tableHeader}>
                                <div>{t.commodity}</div>
                                <div>{t.location}</div>
                                <div>{t.price}</div>
                                <div>{t.trend}</div>
                                <div>{t.confidence}</div>
                                <div>Action</div>
                            </div>

                            {displayData.map((item, index) => (
                                <div
                                    key={index}
                                    style={styles.row}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <div style={{ fontWeight: '600' }}>
                                        {lang === 'en' ? item.commodityEn : item.commodityHi}
                                    </div>
                                    <div style={{ color: 'var(--color-text-muted)' }}>
                                        {lang === 'en' ? item.locationEn : item.locationHi}
                                    </div>
                                    <div style={{ fontWeight: '700', fontFamily: 'monospace', fontSize: '16px' }}>
                                        {formatPrice(item.price)}/q
                                    </div>
                                    <div style={item.trend === 'up' ? styles.trendUp : item.trend === 'down' ? styles.trendDown : {}}>
                                        {item.trend === 'up' ? '▲ Up' : item.trend === 'down' ? '▼ Down' : '• Stable'}
                                    </div>
                                    <div>
                                        <span style={styles.aiBadge}>
                                            {item.confidence === 'High' && '✨'} {item.confidence}
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            style={styles.tradeBtn}
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
                                            {lang === 'en' ? 'Trade' : 'व्यापार'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
