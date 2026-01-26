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

    const commodityName = commodity ? (commodity.commodity[lang] || commodity.commodity['en']) : '';
    const locationName = commodity ? (commodity.location[lang] || commodity.location['en']) : '';

    // UI Translations
    const uiText = {
        trade: { en: 'Trade', hi: 'व्यापार', bn: 'বাণিজ্য', te: 'వర్తకం', mr: 'व्यापार', ta: 'வர்த்தகம்', ur: 'تجارت', gu: 'વેપાર', kn: 'ವ್ಯಾಪಾರ', ml: 'വ്യാപാരം', pa: 'ਵਪਾਰ', or: 'ବାଣିଜ୍ୟ' },
        rate: { en: 'Current Rate', hi: 'वर्तमान भाव', bn: 'বর্তমান মূল্য', te: 'ప్రస్తుత ధర', mr: 'सध्याचा भाव', ta: 'தற்போதைய விலை', ur: 'موجودہ قیمت', gu: 'વર્તમાન ભાવ', kn: 'ಪ್ರಸ್ತುತ ಬೆಲೆ', ml: 'നിലവിലെ വില', pa: 'ਮੌਜੂਦਾ ਕੀਮਤ', or: 'ବର୍ତ୍ତମାନର ମୂଲ୍ୟ' },
        location: { en: 'Location', hi: 'स्थान', bn: 'অবস্থান', te: 'ప్రాంతం', mr: 'स्थान', ta: 'இடம்', ur: 'مقام', gu: 'સ્થળ', kn: 'ಸ್ಥಳ', ml: 'സ്ഥലം', pa: 'ਸਥਾਨ', or: 'ସ୍ଥାନ' },
        qty: { en: 'Quantity (Quintals)', hi: 'मात्रा (क्विंटल)', bn: 'পরিমাণ (কুইন্টাল)', te: 'పరిమాణం (క్వింటాల్స్)', mr: 'प्रमाण (क्विंटल)', ta: 'அளவு (குவிண்டால்)', ur: 'مقدار (کوئنٹل)', gu: 'જથ્થો (ક્વિન્ટલ)', kn: 'ಪ್ರಮಾಣ (ಕ್ವಿಂಟಾಲ್)', ml: 'അളവ് (ക്വിന്റൽ)', pa: 'ਮਾਤਰਾ (ਕਵਿੰਟਲ)', or: 'ପରିମାଣ (କୁଇଣ୍ଟାଲ)' },
        bid: { en: 'Your Bid Price (₹/q)', hi: 'आपकी बोली (₹/q)', bn: 'আপনার বিড মূল্য (₹/q)', te: 'మీ బిడ్ ధర (₹/q)', mr: 'तुमची बोली (₹/q)', ta: 'உங்கள் ஏல விலை (₹/q)', ur: 'آپ کی بولی کی قیمت (₹/q)', gu: 'તમારી બોલી કિંમત (₹/q)', kn: 'ನಿಮ್ಮ ಬಿಡ್ ಬೆಲೆ (₹/q)', ml: 'നിങ്ങളുടെ ബിഡ് വില (₹/q)', pa: 'ਤੁਹਾਡੀ ਬੋਲੀ ਦੀ ਕੀਮਤ (₹/q)', or: 'ଆପଣଙ୍କ ବିଡ୍ ମୂଲ୍ୟ (₹/q)' },
        placeBid: { en: 'Place Bid', hi: 'बोली लगाएँ', bn: 'বিড করুন', te: 'బిడ్ చేయండి', mr: 'बोली लावा', ta: 'ஏலம் இடுங்கள்', ur: 'بولی لگائیں', gu: 'બોલી લગાવો', kn: 'ಬಿಡ್ ಮಾಡಿ', ml: 'ബിഡ് ചെയ്യുക', pa: 'ਬੋਲੀ ਲਗਾਓ', or: 'ବିଡ୍ କରନ୍ତୁ' },
        processing: { en: 'Processing...', hi: 'ਪ੍ਰੋਸੈਸਿੰਗ...', bn: 'প্রক্রিয়াকরণ...', te: 'ప్రాసెసింగ్...', mr: 'प्रक्रिया...', ta: 'செயலாக்குகிறது...', ur: 'پروسیسنگ...', gu: 'પ્રક્રિયા...', kn: 'ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ...', ml: 'പ്രോസസ്സ് ചെയ്യുന്നു...', pa: 'ਪ੍ਰੋਸੈਸਿੰਗ...', or: 'ପ୍ରକ୍ରିୟାକରଣ...' }
    };

    const t = (key) => uiText[key][lang] || uiText[key]['en'];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`${t('trade')} ${commodityName}`}
        >
            <div style={styles.infoRow}>
                <div>
                    <div style={styles.label}>{t('rate')}</div>
                    <div style={styles.value}>₹{commodity?.price}/q</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={styles.label}>{t('location')}</div>
                    <div style={styles.value}>{locationName}</div>
                </div>
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>{t('qty')}</label>
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
                    <label style={styles.label}>{t('bid')}</label>
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
                    {loading ? t('processing') : t('placeBid')}
                </button>
            </form>
        </Modal>
    );
};

export default TradeModal;
