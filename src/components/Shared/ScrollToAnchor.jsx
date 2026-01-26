import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { hash } = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (hash) {
            lastHash.current = hash;
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    return null;
};

export default ScrollToAnchor;
