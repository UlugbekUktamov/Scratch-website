import React from 'react'
import Forms from '../components/Forms'
import Navbar from '../components/Navbar'
import Herolmage from '../components/Herolmage'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div>
            <Navbar />
            <Herolmage heading="CONTACT." text="Contact GLX Travel" />
            <Forms />
            <Footer />
        </div>
    )
}

export default Contact
