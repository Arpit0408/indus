import React from 'react';
import { FaGavel, FaPassport, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    icon: <FaGavel className="text-2xl text-white" />,
    title: 'Legal Services',
    description: [
      'Inheritance & Succession',
      'Family Disputes',
      'Title Conflicts',
      'Civil/Criminal Litigation',
      'Document Authentication',
      'Court Representation',
    ],
  },
  {
    icon: <FaPassport className="text-2xl text-white" />,
    title: 'NRI Legal Assistance',
    description: [
      'Cross-border Disputes',
      'Title Verification',
      'Remote Court Coordination',
      'Probate & Registration',
      'Fraud or Builder Delay Cases',
    ],
  },
  {
    icon: <FaBriefcase className="text-2xl text-white" />,
    title: 'Business & Corporate Law',
    description: [
      'Company Formation',
      'Franchise Structuring',
      'Contract Drafting',
      'Regulatory Filings',
      'FDI & JV Legal Support',
    ],
  },
];

export default function PracticeAreaSection() {
  return (
   <section className="bg-[#f8f6f2] py-16 pb-24 mb-0">
  <div
    className="mx-auto px-[10px] md:px-[2rem]"
    style={{ maxWidth: '1500px', marginTop: '0px' }}
  >
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h4 className="text-[#d4c291] font-medium text-[1.1rem] mb-0" style={{marginBottom:'0px'}}>Our Services</h4>
    <h2
  className="text-[1.8rem] md:text-[2.25rem] font-[900] text-[#2d2d2d] inline-block relative pb-2"
  style={{ marginTop: '1rem' }}  // Only marginTop here
>
  How Can We Help You
  <span className="absolute left-1/2 -bottom-1 w-14 h-[3px] bg-[#d4c291] transform -translate-x-1/2 rounded"></span>
</h2>

    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full"
        >
          <div className="mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#d4c291]">
              {icon}
            </div>
          </div>
          <h3 className="text-[1.3rem] font-semibold text-[#333] mb-2 relative">
            {title}
            <span className="block w-7 h-[3px] bg-[#d4c291] mt-1 rounded"></span>
          </h3>
<ul className="text-[0.95rem] md:text-[1rem] text-[#666] leading-relaxed list-disc pl-5 space-y-1">
            {description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
