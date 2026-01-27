import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/marketData';

const Buyers = () => {
    const { lang } = useLanguage();
    const buyers = [
        { name: 'Fresh Foods Ltd', requirement: '500q Wheat', location: 'Delhi', budget: 'High', contact: { phone: '+91-9876543210', email: 'procurement@freshfoods.com' } },
        { name: 'Organic Mart', requirement: '200q Soybean', location: 'Pune', budget: 'Medium', contact: { phone: '+91-9876543211', email: 'buy@organicmart.in' } },
        { name: 'Global Mills', requirement: '1000q Maize', location: 'Gujarat', budget: 'High', contact: { phone: '+91-9876543212', email: 'contact@globalmills.com' } },
    ];

    const handleContact = (e, buyer) => {
        e.stopPropagation();
        alert(`Contacting ${buyer.name}...\nRequirement: ${buyer.requirement}\nPhone: ${buyer.contact.phone}`);
    };

    return (
        <section className="section-common" id="buyers" style={{ background: 'linear-gradient(to top, var(--color-bg-dark), #1a0b1c)' }}>
            <div className="container">
                <h2 className="section-title">{(translations[lang]?.buyersSection || translations['en'].buyersSection).title}</h2>
                <div className="vendors-grid">
                    {buyers.map((buyer, index) => (
                        <div
                            key={index}
                            className="vendor-card hover-lift"
                            style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                        >
                            <div className="vendor-name" style={{ color: 'white', marginBottom: '8px' }}>{buyer.name}</div>
                            <div style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '20px', marginBottom: '12px' }}>{buyer.requirement}</div>
                            <div className="vendor-detail-row" style={{ justifyContent: 'space-between' }}>
                                <span>📍 {buyer.location}</span>
                                <span>💰 {buyer.budget} Cap</span>
                            </div>
                            <button
                                className="action-btn"
                                onClick={(e) => handleContact(e, buyer)}
                            >
                                {(translations[lang]?.buyersSection || translations['en'].buyersSection).contact}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Buyers;
