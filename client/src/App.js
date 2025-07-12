import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ItemDetail from './pages/ItemDetail';
import AddItem from './pages/AddItem';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/item/:id" component={ItemDetail} />
                <Route path="/add-item" component={AddItem} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
