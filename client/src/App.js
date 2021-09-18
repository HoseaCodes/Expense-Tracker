
import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about/about';
import FAQ from './pages/faq/faq';
import Settings from './pages/settings/settings';
import Access from './pages/acess';
import Profile from './pages/profile/profile';
import Nav from './components/nav/nav';
import Footer from './components/footer';

function App() {
    const [linkToken, setLinkToken] = useState(null);
    const [plaidData, setPlaidData] = useState();
    console.log(plaidData)
    return (
        <GlobalProvider >
            <Nav linkToken={linkToken} setLinkToken={setLinkToken} plaidData={plaidData} setPlaidData={setPlaidData} />
            <Router>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/faq" render={() => <FAQ />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/profile" render={() => <Profile />} />
                <Route exact path="/manageacess" render={() => <Access />} />
                <Route exact path="/settings" render={() => <Settings />} />
            </Router>
            <Footer />
        </GlobalProvider>
    );
}

export default App;