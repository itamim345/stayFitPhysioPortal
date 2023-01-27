import React from 'react';
import AboutUs from './FrontPageComponents/AboutUs';
import ContactUs from './FrontPageComponents/ContactUs';
import Footer from './FrontPageComponents/Footer';
import FooterDetail from './FrontPageComponents/FooterDetail';
import Header from './FrontPageComponents/Header';
import HowItWorks from './FrontPageComponents/HowItWorks';
import Testimonials from './FrontPageComponents/Testimonials';
import WelcomeArea from './FrontPageComponents/WelcomeArea';
import WhyPhysio from './FrontPageComponents/WhyPhysio';
export default function FrontPage() {
  return (
    <div className='fronpage_container'>
      <Header/>
      <WelcomeArea/>
      <WhyPhysio/>
      <HowItWorks/>
      <AboutUs/>
      <Testimonials/>
      <ContactUs/>
      <FooterDetail/>
      <Footer/>
    </div>
  );
}
