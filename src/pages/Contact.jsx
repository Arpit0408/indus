import React from 'react';
import Breadcrumb from '../components/Breadcrumb'; // path adjust karein apke project ke hisaab se
import ContactFormm from '../components/ContactSection'
const ContactUs = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us' },
  ];

  return (
    <div>
      <Breadcrumb title="Contact Us" items={breadcrumbItems} />
      <ContactFormm />
      {/* Baaki Contact Us page content */}
    </div>
  );
};

export default ContactUs;
