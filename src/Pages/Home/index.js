import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';


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
