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

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        logo: {
            fontSize: '24px',
            fontFamily: "var(--font-main)",
            fontWeight: '700',
            color: 'var(--color-primary-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textDecoration: 'none',
            zIndex: 1002, // Above mobile menu
        },
        logoHighlight: {
            color: 'var(--color-secondary)',
        },
        nav: {
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
        },
        navLink: {
            color: 'var(--color-text-muted)',
            fontWeight: '500',
            fontSize: '15px',
            transition: 'color 0.3s ease',
            textDecoration: 'none',
        },
        langBtn: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s',
            position: 'relative',
        },
        langDropdown: {
            position: 'absolute',
            top: '120%',
            right: 0,
            background: 'var(--color-bg-dark)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '8px',
            display: isLangMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '160px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            maxHeight: '300px',
            overflowY: 'auto',
        },
        langOption: {
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            transition: 'all 0.2s',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            width: '100%',
            textAlign: 'left',
            fontSize: '14px',
        },
        // Mobile Styles
        hamburger: {
            display: 'none', // Hidden on desktop by default via CSS media queries usually, but doing inline logic here
            flexDirection: 'column',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 1002,
        },
        bar: {
            width: '24px',
            height: '2px',
            backgroundColor: 'white',
            transition: 'all 0.3s ease',
        },
        mobileMenu: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'var(--color-bg-dark)',
            padding: '100px 24px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 1001,
            alignItems: 'center',
        },
        mobileNavLink: {
            fontSize: '24px',
            fontWeight: '600',
            color: 'white',
            textDecoration: 'none',
        }
    };

    return (
        <header style={styles.header}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .desktop-nav { display: none !important; }
                        .mobile-hamburger { display: flex !important; }
                    }
                    @media (min-width: 769px) {
                        .mobile-hamburger { display: none !important; }
                    }
                `}
            </style>
            <div style={styles.container}>
                <Link to="/" style={styles.logo} onClick={closeMobileMenu}>
                    <span style={styles.logoHighlight}>The</span> Mandi
                </Link>

                {/* Desktop Nav */}
                <nav style={styles.nav} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                ...styles.navLink,
                                color: location.pathname === link.path ? 'var(--color-secondary)' : styles.navLink.color
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
                            onMouseLeave={(e) => {
                                if (location.pathname !== link.path) {
                                    e.target.style.color = 'var(--color-text-muted)';
                                }
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ position: 'relative' }}>
                        <button
                            style={styles.langBtn}
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="hover-lift"
                        >
                            <span>🌐</span> {languages.find(l => l.code === lang)?.name || 'English'}
                        </button>

                        {isLangMenuOpen && (
                            <div style={styles.langDropdown}>
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        style={{
                                            ...styles.langOption,
                                            background: lang === language.code ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                            color: lang === language.code ? 'white' : 'var(--color-text-muted)',
                                        }}
                                        onClick={() => handleLanguageSelect(language.code)}
                                        onMouseEnter={(e) => {
                                            if (lang !== language.code) {
                                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                e.target.style.color = 'white';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (lang !== language.code) {
                                                e.target.style.background = 'transparent';
                                                e.target.style.color = 'var(--color-text-muted)';
                                            }
                                        }}
                                    >
                                        <span>{language.name}</span>
                                        <span style={{ fontSize: '12px', opacity: 0.7 }}>{language.nativeName}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Auth buttons removed - App is open to all */}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    style={styles.hamburger}
                    className="mobile-hamburger"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    <span style={{ ...styles.bar, transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
                    <span style={{ ...styles.bar, opacity: isMobileMenuOpen ? 0 : 1 }}></span>
                    <span style={{ ...styles.bar, transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div style={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={styles.mobileNavLink}
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                style={{
                                    ...styles.langBtn,
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
