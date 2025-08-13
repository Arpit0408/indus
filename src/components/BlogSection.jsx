import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://blog-backend-1-p3yg.onrender.com";
const API_BLOGS_URL = `${API_BASE}/api/blogs`;

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(API_BLOGS_URL);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="bg-[#f5f5f5] pt-[94px] pb-[70px]">
      <div className="wraper">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h4 className="text-[#d4c291] font-medium text-[1.1rem] mb-0">
            Our Blogs
          </h4>
          <h2
            className="text-[1.8rem] md:text-[2.25rem] font-[900] text-[#2d2d2d] inline-block relative pb-2"
            style={{ marginTop: "1rem" }}
          >
            Latest Blogs{" "}
            <span className="absolute left-1/2 -bottom-1 w-14 h-[3px] bg-[#d4c291] transform -translate-x-1/2 rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {blogs.map((item) => (
            <div key={item._id} className="col-span-12 md:col-span-4">
              <div className="mb-[30px] group">
                {/* Image with rounded corners */}
                <div className="overflow-hidden rounded-t-[10px] transition duration-300">
                  <img
                    className="w-full transition duration-300 group-hover:grayscale"
                    src={
                      item.image
                        ? `${API_BASE}${item.image}`
                        : "https://via.placeholder.com/600x400?text=No+Image"
                    }
                    alt={item.title || "blog"}
                  />
                </div>

                {/* Card content */}
                <div className="bg-white pt-[20px] px-[20px] pb-[30px] rounded-b-[10px]">
                  <h3 className="text-[0.95rem] md:text-base leading-[1.6] font-medium mb-[20px]">
                    <Link
                      to={`/blog/${item.slug || item._id}`}
                      className="text-[#000] hover:text-[#c0b596] transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  {/* Author & Date Info */}
                  <ul className="flex items-center text-[#c0b596] text-[0.95rem] md:text-base">
                    {/* If authorImage exists */}
                    {item.authorImage && (
                      <li>
                        <img
                          className="w-[40px] h-[40px] rounded-full"
                          src={item.authorImage}
                          alt={item.author}
                        />
                      </li>
                    )}
                    <li className="px-[10px] text-[#666]">
                      {item.author || "Anonymous"}
                    </li>
                    <li className="relative px-[10px] text-[#666] before:absolute before:content-[''] before:left-0 before:top-1/2 before:w-[2px] before:h-[15px] before:bg-[#ccc] before:transform before:-translate-y-1/2">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <div className="col-span-12 text-center py-10">
              No blogs found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
