import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/languages';
import { translations } from '../../data/marketData';

const Header = () => {
    const { lang, setLang } = useLanguage();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

    const handleLanguageSelect = (languageCode) => {
        setLang(languageCode);
        setIsLangMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsLangMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const t = (key) => {
        const langData = translations[lang];
        return langData?.nav?.[key] || translations['en'].nav[key];
    };

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('marketplace'), path: '/marketplace' },
        { name: t('vendors'), path: '/#vendors' },
        { name: t('buyers'), path: '/#buyers' },
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <span className="logo-highlight">The</span> Mandi
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ position: 'relative' }}>
                        <button
                            className="lang-btn hover-lift"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        >
                            <span>🌐</span> {languages.find(l => l.code === lang)?.name || 'English'}
                        </button>

                        {isLangMenuOpen && (
                            <div className="lang-dropdown">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        className={`lang-option ${lang === language.code ? 'active' : ''}`}
                                        onClick={() => handleLanguageSelect(language.code)}
                                    >
                                        <span>{language.name}</span>
                                        <span style={{ fontSize: '12px', opacity: 0.7 }}>{language.nativeName}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
                    <span className="bar" style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                className="lang-btn"
                                style={{
                                    justifyContent: 'center',
                                    background: lang === language.code ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.05)',
                                    color: lang === language.code ? 'black' : 'white',
                                    borderColor: lang === language.code ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.1)',
                                }}
                                onClick={() => { handleLanguageSelect(language.code); closeMobileMenu(); }}
                            >
                                {language.nativeName}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
