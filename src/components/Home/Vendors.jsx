import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { vendorsData, translations } from '../../data/marketData';
import Modal from '../Shared/Modal';

const Vendors = () => {
    const { lang } = useLanguage();
    const [selectedVendor, setSelectedVendor] = useState(null);

    const handleViewProfile = (vendor) => {
        setSelectedVendor(vendor);
    };

    const handleCloseModal = () => {
        setSelectedVendor(null);
    };

    const handleContact = (e, vendor) => {
        e.stopPropagation();
        alert(`Contacting ${vendor.name}...\nPhone: ${vendor.contact.phone}\nEmail: ${vendor.contact.email}`);
    };

    const styles = {
        section: {
            padding: '60px 24px',
            background: 'var(--color-bg-dark)',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
        },
        title: {
            fontSize: '32px',
            marginBottom: '40px',
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
        },
        card: {
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
        },
        name: {
            fontSize: '20px',
            fontWeight: '600',
            color: 'var(--color-secondary)',
            marginBottom: '4px',
        },
        badge: {
            background: 'rgba(255, 215, 0, 0.1)',
            color: 'var(--color-secondary)',
            fontSize: '11px',
            padding: '4px 8px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
        },
        detailRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--color-text-muted)',
            fontSize: '14px',
        },
        rating: {
            color: '#FFD700',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
        },
        productList: {
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '8px',
        },
        productTag: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#fff',
        },
        actionBtn: {
            width: '100%',
            padding: '12px',
            marginTop: '8px',
            background: 'transparent',
            border: '1px solid var(--color-secondary)',
            color: 'var(--color-secondary)',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
        },
        // Modal Styles
        modalContent: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
        },
        modalSection: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        modalLabel: {
            fontSize: '14px',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        modalText: {
            fontSize: '16px',
            color: 'white',
            lineHeight: '1.6',
        },
        contactBtn: {
            background: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            marginTop: '16px',
            width: '100%',
        }
    };

    return (
        <section style={styles.section} id="vendors">
            <div style={styles.container}>
                <h2 style={styles.title}>
                    {/* {lang === 'en' ? 'Verified Vendors' : 'सत्यापित विक्रेता'} */}
                    {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).title}
                </h2>
                <div style={styles.grid}>
                    {vendorsData.map((vendor) => (
                        <div
                            key={vendor.id}
                            style={styles.card}
                            className="hover-lift"
                            onClick={() => handleViewProfile(vendor)}
                        >
                            <div style={styles.cardHeader}>
                                <div>
                                    <div style={styles.name}>{vendor.name}</div>
                                    <div style={styles.detailRow}>
                                        <span>📍 {vendor.location}</span>
                                    </div>
                                </div>
                                <div style={styles.rating}>
                                    ★ {vendor.rating}
                                </div>
                            </div>

                            <div style={styles.detailRow}>
                                <span>🏢 {vendor.type}</span>
                                <span>•</span>
                                <span>📅 Since {vendor.joinedDate}</span>
                            </div>

                            <div style={styles.productList}>
                                {vendor.products.slice(0, 3).map((p, i) => (
                                    <span key={i} style={styles.productTag}>{p.name}</span>
                                ))}
                            </div>

                            <button
                                style={styles.actionBtn}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewProfile(vendor);
                                }}
                                onMouseEnter={e => {
                                    e.target.style.background = 'var(--color-secondary)';
                                    e.target.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'var(--color-secondary)';
                                }}
                            >
                                {/* {lang === 'en' ? 'View Profile' : 'प्रोफ़ाइल देखें'} */}
                                {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).viewProfile}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVendor && (
                <Modal
                    isOpen={!!selectedVendor}
                    onClose={handleCloseModal}
                    title={selectedVendor.name}
                >
                    <div style={styles.modalContent}>
                        <div style={styles.modalSection}>
                            <div style={styles.detailRow}>
                                <span>📍 {selectedVendor.location}</span>
                                <span>•</span>
                                <span>⭐ {selectedVendor.rating}/5.0</span>
                                <span>•</span>
                                <span>🏢 {selectedVendor.type}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {selectedVendor.badges?.map((badge, i) => (
                                    <span key={i} style={styles.badge}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        <div style={styles.modalSection}>
                            <span style={styles.modalLabel}>{(translations[lang]?.vendorsSection || translations['en'].vendorsSection).about}</span>
                            <p style={styles.modalText}>{selectedVendor.description}</p>
                        </div>

                        <div style={styles.modalSection}>
                            <span style={styles.modalLabel}>{(translations[lang]?.vendorsSection || translations['en'].vendorsSection).products}</span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {selectedVendor.products.map((p, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        minWidth: '140px'
                                    }}>
                                        <div style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>{p.name}</div>
                                        <div style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>{p.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            style={styles.contactBtn}
                            onClick={(e) => handleContact(e, selectedVendor)}
                            className="hover-lift"
                        >
                            📞 {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).contact}
                        </button>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Vendors;
