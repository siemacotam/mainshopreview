import 'bootstrap/dist/js/bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../sass/style.sass'

import { BrowserRouter as Router } from 'react-router-dom' 
import { createBrowserHistory } from "history";

import StoreProvider from '../store/StoreProvider';
import MainNav from './MainNav';
import Main from './Main'
import Footer from './Footer'
import ToastContainer from '../components/ToastContainer/ToastContainer';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router basename={process.env.PUBLIC_URL} history={history}>
          <MainNav />
          <Main />
          <Footer />
          <ToastContainer />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
