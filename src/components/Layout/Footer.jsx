// import React from 'react';
// import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { lang } = useLanguage();
    // Footer translations handled locally for simplicity

    const t = {
        en: {
            slogan: 'Connecting India’s farmers and traders with the power of AI.',
            platform: 'Platform',
            company: 'Company',
            liveRates: 'Live Rates',
            aiTools: 'AI Tools',
            vendors: 'Vendors',
            about: 'About Us',
            contact: 'Contact',
            privacy: 'Privacy',
            builtFor: 'Built for'
        },
        hi: {
            slogan: 'AI की शक्ति से भारत के किसानों और व्यापारियों को जोड़ना।',
            platform: 'प्लेटफ़ॉर्म',
            company: 'कंपनी',
            liveRates: 'लाइव भाव',
            aiTools: 'AI टूल्स',
            vendors: 'विक्रेता',
            about: 'हमारे बारे में',
            contact: 'संपर्क करें',
            privacy: 'गोपनीयता',
            builtFor: 'के लिए बनाया गया'
        }
    }[lang];

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
                        <a href="#vendors" style={styles.link} className="hover-text-white">{t.liveRates}</a>
                        <a href="#features" style={styles.link} className="hover-text-white">{t.aiTools}</a>
                        <a href="#vendors" style={styles.link} className="hover-text-white">{t.vendors}</a>
                    </div>
                    <div style={styles.column}>
                        <h4 style={{ color: 'white', marginBottom: '8px' }}>{t.company}</h4>
                        <a href="#" style={styles.link} className="hover-text-white">{t.about}</a>
                        <a href="#" style={styles.link} className="hover-text-white">{t.contact}</a>
                        <a href="#" style={styles.link} className="hover-text-white">{t.privacy}</a>
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
