import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const FromTheirDesk = () => {
  return (
    <section className="bg-[#f9f9f6] py-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[1.8rem] md:text-[2.25rem] font-semibold text-gray-800 mb-10 text-center">
          From Their Desk
        </h2>

        {/* Quote 1 */}
        <div className="mb-10">
          <div className="flex items-start gap-3 mb-4 text-gray-700">
            <FaQuoteLeft className="text-[#c0b596] text-2xl mt-1" />
            <p className="text-[0.95rem] md:text-base leading-relaxed">
              “The law must work for you, not against you. It’s not about knowing
              the system. It’s about having someone inside it who protects your
              truth.”
            </p>
          </div>
          <p className="text-right text-[#c0b596] font-semibold text-base md:text-lg">
            – Sr. Advocate Gaanesh R. Daalvi
          </p>
        </div>

        {/* Quote 2 */}
        <div className="mb-10">
          <div className="flex items-start gap-3 mb-4 text-gray-700">
            <FaQuoteLeft className="text-[#c0b596] text-2xl mt-1" />
            <p className="text-[0.95rem] md:text-base leading-relaxed">
              “We know what you’ve been through. The calls. The silence. The
              property no one claimed. The years lost in litigation. You’re not
              alone. That’s why we exist.”
            </p>
          </div>
          <p className="text-right text-[#c0b596] font-semibold text-base md:text-lg">
            – Kaanti Suresh Shetty
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white border-l-4 border-[#c0b596] p-6 shadow-sm rounded-md text-gray-800 space-y-3">
          <p className="text-[0.95rem] md:text-base">
            At <span className="font-semibold text-[#c0b596]">IndUS Synergy Partners Partners</span>, we bring you the best of both worlds:
          </p>
          <ul className="list-disc pl-5 text-[0.95rem] md:text-base">
            <li>Legal authority grounded in India</li>
            <li>Client-first coordination anchored in the U.S.</li>
          </ul>
          <p className="mt-4 text-[0.95rem] md:text-base font-medium">
            If it matters to you, it’s already a priority for us.
          </p>
          <p className="text-[#c0b596] font-bold text-[0.95rem] md:text-base">Let’s begin!</p>
        </div>
      </div>
    </section>
  );
};

export default FromTheirDesk;
