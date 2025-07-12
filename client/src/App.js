import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/pages/LandingPage.jsx';
import DashBoard from './components/pages/DashBoard.jsx';
import ItemDetail from './components/pages/ItemDetail.jsx';
import AddItem from './components/pages/AddItem.jsx';



// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

// Your Functional Component
const YourComponent = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('Component mounted or count changed:', count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <input ref={inputRef} type="text" placeholder="Focus me on button click" />
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
};


const App = () => {
    return (
        <Router>
            <Header />
            <ErrorBoundary>
                <YourComponent />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/item/:id" element={<ItemDetail />} />
                    <Route path="/add-item" element={<AddItem />} />
                    
                </Routes>
            </ErrorBoundary>
            <Footer />
        </Router>
    );
};

export default App;
