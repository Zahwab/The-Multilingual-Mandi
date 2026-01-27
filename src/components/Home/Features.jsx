import { useNavigate } from 'react-router-dom';
import { translations } from '../../data/marketData';
import { useLanguage } from '../../context/LanguageContext';

const Features = () => {
    const { lang, setLang } = useLanguage();
    const navigate = useNavigate();
    const getFeatureTrans = (key, subKey) => {
        const langData = translations[lang]?.features?.[key];
        const enData = translations['en'].features[key];
        return langData?.[subKey] || enData[subKey];
    };

    const features = [
        {
            title: getFeatureTrans('discovery', 'title'),
            description: getFeatureTrans('discovery', 'desc'),
            icon: '📊',
            action: () => navigate('/marketplace')
        },
        {
            title: getFeatureTrans('negotiation', 'title'),
            description: getFeatureTrans('negotiation', 'desc'),
            icon: '🤖',
            action: () => alert("AI Negotiation Agent is connecting...\n(Demo: This feature is coming soon!)")
        },
        {
            title: getFeatureTrans('multilingual', 'title'),
            description: getFeatureTrans('multilingual', 'desc'),
            icon: '🗣️',
            action: () => setLang(prev => prev === 'en' ? 'hi' : 'en')
        },
    ];

    return (
        <section className="section-features" id="features">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card clickable"
                            onClick={feature.action}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
