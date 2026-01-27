import { useNavigate, Link } from 'react-router-dom';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();
    const t = translations[lang] || translations['en'];

    return (
        <section className="hero-section">
            <div className="hero-bg-gradient"></div>

            <div className="hero-content animate-slide-up">
                <div style={{
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
                }}>
                    ✨ AI-Powered Trade Revolution
                </div>

                <h1 className="hero-heading">
                    {t.heroTitle} <br />
                    <span style={{ color: 'var(--color-secondary)', WebkitTextFillColor: 'var(--color-secondary)' }}>{t.heroSubtitle}</span>
                </h1>

                <p className="hero-description">
                    {t.heroDesc}
                </p>

                <div className="hero-btn-group">
                    <button
                        className="btn-primary hover-lift"
                        onClick={() => navigate('/marketplace')}
                    >
                        {t.startTrading}
                    </button>
                    {/* Changed from a tag to Link to prevent full reload and enable smooth scroll via ScrollToAnchor */}
                    <Link to="/#vendors" style={{ textDecoration: 'none', width: 'auto' }} className="btn-secondary-link">
                        {/* Note: In CSS we made btn-secondary width 100% on mobile, but wrapping Link needs display block or similar.
                             Adding a wrapper class or inline style might be needed for the link if button has width.
                         */}
                        <button className="btn-secondary hover-lift">
                            {t.viewLiveMandi}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
