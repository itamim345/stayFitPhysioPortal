import React from 'react';
import Header from './FrontPageComponents/Header';
import WelcomeArea from './FrontPageComponents/WelcomeArea';
import WhyPhysio from './FrontPageComponents/WhyPhysio';
export default function FrontPage() {
  return (
    <div>
      <Header/>
      <WelcomeArea/>
      <WhyPhysio/>
    </div>
  );
}
