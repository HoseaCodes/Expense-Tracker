import {GlobalProvider} from './context/GlobalState';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <GlobalProvider >
      <Router>
        <Route exact path="/" render={() =><Home/>}/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
