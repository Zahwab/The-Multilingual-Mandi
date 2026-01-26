// import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { useLanguage } from '../../context/LanguageContext';

const TradeModal = ({ isOpen, onClose, commodity }) => {
    const { lang } = useLanguage();
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState(commodity?.price || '');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 2000);
        }, 1500);
    };

    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '16px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
        },
        label: {
            color: 'var(--color-text-muted)',
            fontSize: '12px',
            marginBottom: '4px',
        },
        value: {
            color: 'white',
            fontWeight: '600',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
        },
        input: {
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            fontSize: '16px',
            outline: 'none',
        },
        button: {
            padding: '14px',
            borderRadius: '12px',
            background: 'var(--color-secondary)',
            color: 'var(--color-primary)',
            border: 'none',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '8px',
            transition: 'transform 0.2s',
        },
        successMsg: {
            textAlign: 'center',
            color: '#4CAF50',
            padding: '20px',
        }
    };

    if (success) {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="Trade Successful">
                <div style={styles.successMsg}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                    <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                        Bid Placed Successfully!
                    </div>
                    <div style={{ color: 'var(--color-text-muted)' }}>
                        You will be notified when a seller accepts your bid.
                    </div>
                </div>
            </Modal>
        );
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={lang === 'en' ? `Trade ${commodity?.commodityEn || ''}` : `${commodity?.commodityHi || ''} व्यापार`}
        >
            <div style={styles.infoRow}>
                <div>
                    <div style={styles.label}>Current Rate</div>
                    <div style={styles.value}>₹{commodity?.price}/q</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={styles.label}>Location</div>
                    <div style={styles.value}>{lang === 'en' ? commodity?.locationEn : commodity?.locationHi}</div>
                </div>
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Quantity (Quintals)</label>
                    <input
                        type="number"
                        placeholder="e.g. 50"
                        style={styles.input}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        min="1"
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Your Bid Price (₹/q)</label>
                    <input
                        type="number"
                        placeholder={commodity?.price}
                        style={styles.input}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={loading}
                    onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)')}
                >
                    {loading ? 'Processing...' : (lang === 'en' ? 'Place Bid' : 'बोली लगाएँ')}
                </button>
            </form>
        </Modal>
    );
};

export default TradeModal;
