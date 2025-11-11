import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Container from './components/Container';
import Cards from './components/Cards';

function App() {
    return (
            <>
            < Header />
            < Banner />
            < Container>
                < Cards />
            </ Container>
            < Footer />
            </>
    );
}

export default App;
