import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from "../components/Herolmage"
import Footer from "../components/Footer";
import TrainingSection from '../components/Training';

function Training() {
    return (
        <div>
            <Navbar />
            <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training." />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training
