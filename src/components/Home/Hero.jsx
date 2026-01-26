import { useNavigate } from 'react-router-dom';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();
    const t = translations[lang];

    const styles = {
        section: {
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            overflow: 'hidden',
            paddingTop: '80px', // Account for fixed header
        },
        bgGradient: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 10% 20%, rgba(74, 21, 75, 0.4) 0%, rgba(18, 18, 18, 0) 50%), radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.08) 0%, rgba(18, 18, 18, 0) 50%)',
            zIndex: 0,
        },
        content: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '900px',
        },
        badge: {
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '30px',
            color: 'var(--color-secondary)',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px',
            backdropFilter: 'blur(5px)',
        },
        heading: {
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: '1.1',
            fontWeight: '700',
            margin: '0 0 24px 0',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        highlight: {
            color: 'var(--color-secondary)',
            WebkitTextFillColor: 'var(--color-secondary)',
        },
        description: {
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 48px auto',
        },
        buttonGroup: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        primaryBtn: {
            padding: '16px 40px',
            background: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            fontSize: '16px',
            fontWeight: '700',
            borderRadius: '50px',
            transition: 'transform 0.2s',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            cursor: 'pointer',
        },
        secondaryBtn: {
            padding: '16px 40px',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '50px',
            backdropFilter: 'blur(5px)',
            cursor: 'pointer',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.bgGradient}></div>

            <div style={styles.content} className="animate-slide-up">
                <div style={styles.badge}>
                    ✨ AI-Powered Trade Revolution
                </div>

                <h1 style={styles.heading}>
                    {t.heroTitle} <br />
                    <span style={styles.highlight}>{t.heroSubtitle}</span>
                </h1>

                <p style={styles.description}>
                    {t.heroDesc}
                </p>

                <div style={styles.buttonGroup}>
                    <button
                        style={styles.primaryBtn}
                        className="hover-lift"
                        onClick={() => navigate('/marketplace')}
                    >
                        {t.startTrading}
                    </button>
                    <a href="#vendors" style={{ textDecoration: 'none' }}>
                        <button style={styles.secondaryBtn} className="hover-lift">
                            {t.viewLiveMandi}
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
