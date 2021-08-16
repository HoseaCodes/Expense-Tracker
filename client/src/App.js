import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Plaid from './pages/plaid';

function App() {
    return (
        <GlobalProvider >
            <Router>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/plaid" render={() => <Plaid />} />
            </Router>
        </GlobalProvider>
    );
}

export default App;