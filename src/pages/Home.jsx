import React from 'react'
import Hero from '../components/Hero'
import About from '../components/Homeabout'
import PracticeAreaSection from '../components/Homeservice'
import Founders from '../components/Founders'
import ContactSection from '../components/ContactSection'
import Faq from '../components/Faq'
import FromTheirDesk from '../components/FromTheirDesk'
import BlogSection from '../components/BlogSection'
import ReviewSlider from '../components/Review'
export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <PracticeAreaSection />
    <section className="bg-white text-gray-800">
  {/* Wrapper with max-width and responsive padding */}
  <div className="mx-auto px-[10px] md:px-[2rem]" style={{ maxWidth: '1500px' }}>
    
    {/* Hero Section */}
    <div className="text-center mb-4 mt-0 pt-16">
      <h4 className="text-[#d4c291] font-medium text-[1.1rem] mb-0" style={{marginBottom:'0px', marginTop: '0px'}}>
        Strategic. Secure. Cross-Border Compliant.
      </h4>
         <h2
  className="text-[1.8rem] md:text-[2.25rem] font-[900] text-[#2d2d2d] inline-block relative pb-0"
  style={{ marginTop: '1rem' }}  // Only marginTop here
>
        Wealth & Legacy Management
      </h2>
    </div>

    {/* Introduction */}
    <div className="max-w-5xl mx-auto py-0 text-center">
      <p className="text-[0.95rem] md:text-[1rem] mb-4">
        Your wealth isn’t just about what you’ve earned, it’s about what you protect, how you
        transition it, and who benefits from it after you.
 
        Our wealth and legacy team brings legal clarity, financial security, and emotional peace of
        mind to NRI families, high-net-worth individuals, and U.S.-India legacy holders.
      </p>
    </div>

    {/* Services Section */}
    <div className="py-12">
      <div className="w-full text-center">
 <h2
    className="text-[1.8rem] md:text-[2.25rem] font-[900] text-[#2d2d2d] inline-block relative pb-0"
    style={{ marginTop: '1rem' }}
  >Our Wealth Solutions Include:</h2>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Succession Planning & Will Drafting',
            desc: 'Legally sound wills tailored for global families',
          },
          {
            title: 'Probate Assistance Across Indian Courts',
            desc: 'Seamless execution support for U.S.-India assets',
          },
          {
            title: 'Real Estate Title Transfer & Ownership Clarity',
            desc: 'Secure rightful ownership across generations',
          },
          {
            title: 'Trust Structuring for Families & Founders',
            desc: 'Protect assets with custom family trusts',
          },
          {
            title: 'Legacy Risk Mitigation for Inherited Assets',
            desc: 'Avoid future disputes and safeguard value',
          },
          {
            title: 'Multi-generational Wealth Mapping',
            desc: 'Create a clear lineage of legacy assets',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-[1.3rem] font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Quote Section */}
    <div className="py-8 text-center">
      <blockquote className="text-[1.5rem] italic font-light text-gray-800 max-w-3xl mx-auto">
        “We don’t just preserve what you’ve built. We help structure how it’s remembered.”
      </blockquote>
    </div>

  </div>
</section>

    <Founders />
    <ReviewSlider />
    <ContactSection />
    <FromTheirDesk />
    <BlogSection />
    <Faq />
  </>
  )
}
