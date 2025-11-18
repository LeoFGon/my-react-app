import React from 'react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Container from './components/Container';
import Cards from './components/Cards';

function Home() {
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

export default Home;
