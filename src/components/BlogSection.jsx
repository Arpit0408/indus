import React from "react";
import { Link } from "react-router-dom"; // Import Link

const blogData = [
  {
    id: 1,
    title: "Justice May For You If You Are Innocent",
    image: "src/assets/images/blog/1.jpg",
    authorImage: "src/assets/images/blog-page/6.jpg",
    author: "Aliza",
    date: "Oct 12, 2018",
  },
  {
    id: 2,
    title: "Justice May For You If You Are Innocent",
    image: "src/assets/images/blog/2.jpg",
    authorImage: "src/assets/images/blog-page/6.jpg",
    author: "Aliza",
    date: "Oct 12, 2018",
  },
  {
    id: 3,
    title: "Justice May For You If You Are Innocent",
    image: "src/assets/images/blog/3.jpg",
    authorImage: "src/assets/images/blog-page/6.jpg",
    author: "Aliza",
    date: "Oct 12, 2018",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f5f5f5] pt-[94px] pb-[70px]">
      <div className="wraper">
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

      <div className="grid grid-cols-12 gap-4">
  {blogData.map((item) => (
    <div key={item.id} className="col-span-12 md:col-span-4">
      <div className="mb-[30px] group">
        {/* Image with rounded corners */}
        <div className="transition duration-300 border-top-left-radius: 10px;
border-top-right-radius: 10px; overflow-hidden">
          <img
            className="w-full transition duration-300 group-hover:grayscale border-top-left-radius: 10px;
border-top-right-radius: 10px;"
            src={item.image}
            alt="blog"
          />
        </div>

        {/* Card content with rounded corners */}
        <div className="bg-white pt-[20px] px-[20px] pb-[30px] ">
          <h3 className="text-[0.95rem] md:text-base leading-[1.6] font-medium mb-[20px]">
            <Link
              to="#"
              className="text-[#000] hover:text-[#c0b596] transition duration-300"
            >
              {item.title}
            </Link>
          </h3>

          {/* Author & Date Info */}
          <ul className="flex items-center text-[#c0b596] text-[0.95rem] md:text-base">
            <li>
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={item.authorImage}
                alt="author"
              />
            </li>
            <li className="px-[10px] text-[#666]">
              <Link to="#">{item.author}</Link>
            </li>
            <li className="relative px-[10px] text-[#666] before:absolute before:content-[''] before:left-0 before:top-1/2 before:w-[2px] before:h-[15px] before:bg-[#ccc] before:transform before:-translate-y-1/2">
              {item.date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default BlogSection;
