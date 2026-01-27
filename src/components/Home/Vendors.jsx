import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { vendorsData, translations } from '../../data/marketData';
import Modal from '../Shared/Modal';

const Vendors = () => {
    const { lang } = useLanguage();
    const [selectedVendor, setSelectedVendor] = useState(null);

    const handleViewProfile = (vendor) => {
        setSelectedVendor(vendor);
    };

    const handleCloseModal = () => {
        setSelectedVendor(null);
    };

    const handleContact = (e, vendor) => {
        e.stopPropagation();
        alert(`Contacting ${vendor.name}...\nPhone: ${vendor.contact.phone}\nEmail: ${vendor.contact.email}`);
    };

    return (
        <section className="section-common" id="vendors">
            <div className="container">
                <h2 className="section-title">
                    {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).title}
                </h2>
                <div className="vendors-grid">
                    {vendorsData.map((vendor) => (
                        <div
                            key={vendor.id}
                            className="vendor-card hover-lift"
                            onClick={() => handleViewProfile(vendor)}
                        >
                            <div className="vendor-header">
                                <div>
                                    <div className="vendor-name">{vendor.name}</div>
                                    <div className="vendor-detail-row">
                                        <span>📍 {vendor.location}</span>
                                    </div>
                                </div>
                                <div className="vendor-rating">
                                    ★ {vendor.rating}
                                </div>
                            </div>

                            <div className="vendor-detail-row">
                                <span>🏢 {vendor.type}</span>
                                <span>•</span>
                                <span>📅 Since {vendor.joinedDate}</span>
                            </div>

                            <div className="product-list">
                                {vendor.products.slice(0, 3).map((p, i) => (
                                    <span key={i} className="product-tag">{p.name}</span>
                                ))}
                            </div>

                            <button
                                className="action-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewProfile(vendor);
                                }}
                            >
                                {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).viewProfile}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVendor && (
                <Modal
                    isOpen={!!selectedVendor}
                    onClose={handleCloseModal}
                    title={selectedVendor.name}
                >
                    <div className="modal-content-wrapper">
                        <div className="modal-section">
                            <div className="vendor-detail-row">
                                <span>📍 {selectedVendor.location}</span>
                                <span>•</span>
                                <span>⭐ {selectedVendor.rating}/5.0</span>
                                <span>•</span>
                                <span>🏢 {selectedVendor.type}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {selectedVendor.badges?.map((badge, i) => (
                                    <span key={i} className="modal-badge">{badge}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <span className="modal-label">{(translations[lang]?.vendorsSection || translations['en'].vendorsSection).about}</span>
                            <p className="modal-text">{selectedVendor.description}</p>
                        </div>

                        <div className="modal-section">
                            <span className="modal-label">{(translations[lang]?.vendorsSection || translations['en'].vendorsSection).products}</span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {selectedVendor.products.map((p, i) => (
                                    <div key={i} className="modal-product-card">
                                        <div style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>{p.name}</div>
                                        <div style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>{p.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="contact-btn hover-lift"
                            onClick={(e) => handleContact(e, selectedVendor)}
                        >
                            📞 {(translations[lang]?.vendorsSection || translations['en'].vendorsSection).contact}
                        </button>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Vendors;
