import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items, title }) => {
  return (
    <section
      className="page-title min-h-[250px] relative flex justify-start items-center z-30
                 bg-[url('../images/breadcumb/1.html')] bg-no-repeat bg-center bg-cover text-left"
    >
      <div className="wraper">
        <div className="w-[1200px] ml-auto text-left pt-[50px] ">
          <h2 className="text-[2.5rem] sm:text-[2rem] text-white leading-[60px] mt-[-10px] mb-[20px] font-black sm:text-[30px] sm:leading-[35px] sm:mb-[10px]">
            {title}
          </h2>
          <ol className="pl-0 mb-0 text-left flex flex-wrap">
            {items.map((item, index) => (
              <li
                key={index}
                className={`inline-block py-0 px-[5px] text-[18px] font-base-font md:text-[18px] ${
                  index === items.length - 1
                    ? 'text-[#cbbc99]'
                    : 'text-white relative after:content-[\'/\'] after:absolute after:right-[-5px]'
                }`}
              >
                {index !== items.length - 1 ? (
                  <a
                    href={item.href}
                    className="text-white transition-all hover:text-[#cbbc99]"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
