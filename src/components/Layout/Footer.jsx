// import React from 'react';
import { Link } from 'react-router-dom';
// import { translations } from '../../data/marketData';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { lang } = useLanguage();
    // Footer translations handled locally for simplicity

    const t = (translations[lang]?.footer) || translations['en'].footer;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">The Mandi</div>
                    <p>{t.slogan}</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4 style={{ color: 'white', marginBottom: '8px' }}>{t.platform}</h4>
                        <Link to="/marketplace" className="footer-link hover-text-white">{t.liveRates}</Link>
                        <Link to="/#features" className="footer-link hover-text-white">{t.aiTools}</Link>
                        <Link to="/#vendors" className="footer-link hover-text-white">{t.vendors}</Link>
                    </div>

                </div>
            </div>
            <div className="footer-copyright">
                © 2026 The Multilingual Mandi. {t.builtFor} <span style={{ color: 'var(--color-secondary)' }}>India 🇮🇳</span>
            </div>
        </footer>
    );
};

export default Footer;
