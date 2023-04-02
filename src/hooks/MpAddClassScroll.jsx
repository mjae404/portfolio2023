import { useEffect, useState } from 'react';

const MpAddClassScroll = (targetRef, offset = 0) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { current: target } = targetRef;
            if (!target) return;

            const { top, bottom } = target.getBoundingClientRect();
            const { innerHeight } = window;

            if (top < innerHeight - offset && bottom > offset) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [targetRef, offset]);

    return isActive;
};

export default MpAddClassScroll;
