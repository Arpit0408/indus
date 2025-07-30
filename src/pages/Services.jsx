import React from 'react';
import Breadcrumb from '../components/Breadcrumb'; // make sure path is correct
import PracticeAreaSection from '../components/Homeservice'
import ReviewSlider from '../components/Review'
import Counter from '../components/CounterSection';
import BlogSection from '../components/BlogSection'
export default function Services() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ];

  return (
    <>
      <Breadcrumb title="Services" items={breadcrumbItems} />
       <PracticeAreaSection />
           <div className="bg-[#fff] mt-10 py-10">
           <ReviewSlider />
           </div>
           <Counter/>
           <BlogSection />
    </>
  );
}
