// import React from 'react';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Features = () => {
    const { lang } = useLanguage();
    const t = translations[lang].features;

    const features = [
        {
            title: t.discovery.title,
            description: t.discovery.desc,
            icon: '📊',
        },
        {
            title: t.negotiation.title,
            description: t.negotiation.desc,
            icon: '🤖',
        },
        {
            title: t.multilingual.title,
            description: t.multilingual.desc,
            icon: '🗣️',
        },
    ];

    const styles = {
        section: {
            padding: '80px 24px',
            background: 'var(--color-bg-dark)',
            position: 'relative',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
        },
        card: {
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            padding: '40px 32px',
            borderRadius: '24px',
            backdropFilter: 'var(--glass-blur)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
        },
        icon: {
            fontSize: '48px',
            marginBottom: '24px',
            background: 'rgba(255, 255, 255, 0.05)',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
        },
        title: {
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '16px',
            color: 'white',
        },
        description: {
            fontSize: '16px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6',
        },
    };

    return (
        <section style={styles.section} id="features">
            <div style={styles.container}>
                <div style={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 21, 75, 0.2)';
                                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <div style={styles.icon}>{feature.icon}</div>
                            <h3 style={styles.title}>{feature.title}</h3>
                            <p style={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
