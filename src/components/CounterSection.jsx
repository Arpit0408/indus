import React, { useEffect, useState } from 'react';

const countersData = [
  { label: 'Cases Won', value: 95, suffix: '%', delay: 10 },
  { label: 'Trusted Client', value: 863, suffix: '', delay: 5 },
  { label: 'Dedicated Lawyer', value: 126, suffix: '+', delay: 15 },
  { label: 'Case Dismissed', value: 25, suffix: '%', delay: 20 },
];

const CounterSection = () => {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const intervals = countersData.map((counter, i) => {
      const increment = Math.ceil(counter.value / 60);
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[i] < counter.value) {
            updated[i] = Math.min(updated[i] + increment, counter.value);
          }
          return updated;
        });
      }, counter.delay);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative bg-center bg-cover bg-no-repeat bg-fixed pt-[100px] pb-[95px] z-10 
      before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0">
      <div className="wraper px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countersData.map((counter, index) => (
            <div
              key={index}
              className="bg-[#c0b59633] text-center py-8 px-4 rounded shadow-md"
            >
              <h2 className="text-[50px] sm:text-[40px] text-white font-bold">
                {counts[index]}
                {counter.suffix}
              </h2>
              <p className="text-[18px] font-normal pt-2 text-[#c0b596]">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
