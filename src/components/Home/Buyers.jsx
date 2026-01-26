// import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/marketData';

const Buyers = () => {
    const { lang } = useLanguage();
    const buyers = [
        { name: 'Fresh Foods Ltd', requirement: '500q Wheat', location: 'Delhi', budget: 'High', contact: { phone: '+91-9876543210', email: 'procurement@freshfoods.com' } },
        { name: 'Organic Mart', requirement: '200q Soybean', location: 'Pune', budget: 'Medium', contact: { phone: '+91-9876543211', email: 'buy@organicmart.in' } },
        { name: 'Global Mills', requirement: '1000q Maize', location: 'Gujarat', budget: 'High', contact: { phone: '+91-9876543212', email: 'contact@globalmills.com' } },
    ];

    const handleContact = (e, buyer) => {
        e.stopPropagation();
        alert(`Contacting ${buyer.name}...\nRequirement: ${buyer.requirement}\nPhone: ${buyer.contact.phone}`);
    };

    const styles = {
        section: {
            padding: '60px 24px',
            background: 'linear-gradient(to top, var(--color-bg-dark), #1a0b1c)',
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
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
        },
        card: {
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px',
            transition: 'background 0.2s',
        },
        name: {
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginBottom: '8px',
        },
        req: {
            color: 'var(--color-secondary)',
            fontWeight: '600',
            fontSize: '20px',
            marginBottom: '12px',
        },
        meta: {
            display: 'flex',
            justifyContent: 'space-between',
            color: 'var(--color-text-muted)',
            fontSize: '14px',
        },
        contactBtn: {
            width: '100%',
            marginTop: '16px',
            padding: '10px',
            background: 'transparent',
            border: '1px solid var(--color-secondary)',
            color: 'var(--color-secondary)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.2s',
        }
    };

    return (
        <section style={styles.section} id="buyers">
            <div style={styles.container}>
                <h2 style={styles.title}>{(translations[lang]?.buyersSection || translations['en'].buyersSection).title}</h2>
                <div style={styles.grid}>
                    {buyers.map((buyer, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                        >
                            <div style={styles.name}>{buyer.name}</div>
                            <div style={styles.req}>{buyer.requirement}</div>
                            <div style={styles.meta}>
                                <span>📍 {buyer.location}</span>
                                <span>💰 {buyer.budget} Cap</span>
                            </div>
                            <button
                                style={styles.contactBtn}
                                onClick={(e) => handleContact(e, buyer)}
                                onMouseEnter={e => {
                                    e.target.style.background = 'var(--color-secondary)';
                                    e.target.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'var(--color-secondary)';
                                }}
                            >
                                {(translations[lang]?.buyersSection || translations['en'].buyersSection).contact}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Buyers;
