import Header from './Header';
import Footer from './Footer';
import { Children } from 'react';

function DefaultLayoutUser({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayoutUser;
