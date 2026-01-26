import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
    const { lang, setLang } = useLanguage();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'hi' : 'en');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: lang === 'en' ? 'Home' : 'होम', path: '/' },
        { name: lang === 'en' ? 'Marketplace' : 'बाज़ार', path: '/marketplace' },
        { name: lang === 'en' ? 'Vendors' : 'विक्रेता', path: '/#vendors' },
        { name: lang === 'en' ? 'Buyers' : 'खरीदार', path: '/#buyers' },
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

                    <button
                        style={styles.langBtn}
                        onClick={toggleLang}
                        className="hover-lift"
                    >
                        <span>🇮🇳</span> {lang === 'en' ? 'HI' : 'EN'}
                    </button>

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

                    <button
                        style={{ ...styles.langBtn, fontSize: '18px', padding: '12px 24px' }}
                        onClick={() => { toggleLang(); closeMobileMenu(); }}
                    >
                        <span>🇮🇳</span> {lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
