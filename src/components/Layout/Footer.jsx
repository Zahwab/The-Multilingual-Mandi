// import React from 'react';
import { Link } from 'react-router-dom';
// import { translations } from '../../data/marketData';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { lang } = useLanguage();
    // Footer translations handled locally for simplicity

    const t = (translations[lang]?.footer) || translations['en'].footer;

    const styles = {
        footer: {
            background: 'var(--color-bg-dark)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '60px 24px',
            color: 'var(--color-text-muted)',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
        },
        brand: {
            flex: '1',
            minWidth: '250px',
        },
        logo: {
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '16px',
        },
        links: {
            display: 'flex',
            gap: '40px',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        link: {
            transition: 'color 0.2s',
            cursor: 'pointer',
        },
        copyright: {
            textAlign: 'center',
            marginTop: '60px',
            fontSize: '14px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        },
        highlight: {
            color: 'var(--color-secondary)'
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.brand}>
                    <div style={styles.logo}>The Mandi</div>
                    <p>{t.slogan}</p>
                </div>

                <div style={styles.links}>
                    <div style={styles.column}>
                        <h4 style={{ color: 'white', marginBottom: '8px' }}>{t.platform}</h4>
                        <Link to="/marketplace" style={styles.link} className="hover-text-white">{t.liveRates}</Link>
                        <Link to="/#features" style={styles.link} className="hover-text-white">{t.aiTools}</Link>
                        <Link to="/#vendors" style={styles.link} className="hover-text-white">{t.vendors}</Link>
                    </div>

                </div>
            </div>
            <div style={styles.copyright}>
                © 2026 The Multilingual Mandi. {t.builtFor} <span style={styles.highlight}>India 🇮🇳</span>
            </div>
        </footer>
    );
};

export default Footer;
