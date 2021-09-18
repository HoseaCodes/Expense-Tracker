import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about/about';
import Plaid from './pages/plaid';
import FAQ from './pages/faq/faq';
import Settings from './pages/settings/settings';
import Access from './pages/acess';
import Profile from './pages/profile/profile';

function App() {
    return (
        <GlobalProvider >
            <Router>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/faq" render={() => <FAQ />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/plaid" render={() => <Plaid />} />
                <Route exact path="/profile" render={() => <Profile />} />
                <Route exact path="/manageacess" render={() => <Access />} />
                <Route exact path="/settings" render={() => <Settings />} />
            </Router>
        </GlobalProvider>
    );
}

export default App;