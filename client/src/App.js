// client/src/App.js
import React from 'react';
import styled from 'styled-components';

// Import Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import MissionVision from './components/sections/MissionVision';
import CoreValues from './components/sections/CoreValues';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';

const MainContent = styled.main`
    
`;

function App() {
    return (
        <div id="top"> 
            <Navbar />
            <MainContent>
                <Hero />
                <About />
                <MissionVision />
                <CoreValues />
                <ServicesSection />
                <ContactSection />
            </MainContent>
            <Footer />
        </div>
    );
}

export default App;
