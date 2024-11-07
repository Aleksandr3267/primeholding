import { useEffect, useState } from 'react';
// eslint-disable-next-line react/prop-types
const DelayedPage = ({ children, location }) => {
    const [showPage, setShowPage] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPage(true);
        }, 30000);
        return () => {
            clearTimeout(timeoutId);
            setShowPage(false);
        };
    }, [location]);
    return <div>{showPage && children}</div>;
};
export default DelayedPage;
