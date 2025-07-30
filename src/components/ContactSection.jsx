import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaClock,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill all required fields!");
      return;
    }

    toast.info("Sending email...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending email. Please try later.");
      console.error(error);
    }
  };

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat bg-fixed py-24 px-4 md:py-20 z-10 before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10"
      style={{ backgroundImage: "url(../images/contact/1.jpg)" }}
    >
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-5 w-full">
            {/* Your existing left section code */}
            <div className="text-white space-y-6">
              <h2 className="text-[1.8rem] md:text-[2.25rem] font-[600] text-white leading-snug relative pb-2 before:absolute before:content-[''] before:w-16 before:h-[2px] before:bg-[#c0b596] before:-left-20 before:top-4 before:hidden md:before:hidden lg:before:block">
                Let’s Talk. The First Consultation is on Us.
              </h2>

              <ul className="space-y-4 text-[#ddd] text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <FaEnvelope className="text-[#c0b596] mt-1" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:indusynergypartners@gmail.com"
                      className="text-[#c0b596] hover:underline"
                    >
                      indusynergypartners@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaPhoneAlt className="text-[#c0b596] mt-1" />
                  <span>
                    Phone:{" "}
                    <a href="tel:+13619105313" className="text-[#c0b596] hover:underline">
                      +1 (361) 910-5313
                    </a>{" "}
                    |{" "}
                    <a href="tel:+13619103199" className="text-[#c0b596] hover:underline">
                      +1 (361) 910-3199
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-[#c0b596] mt-1" />
                  <span>
                    Based in: <span className="text-[#c0b596]">DFW, Texas</span> | Representing Clients Across India
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaLinkedin className="text-[#c0b596] mt-1" />
                  <span>
                    Connect on: <span className="text-[#c0b596]">LinkedIn</span> | Chamber Directories | Partner Boards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaClock className="text-[#c0b596] mt-1" />
                  <span>
                    Office Hours: Monday–Friday | 9 AM–6 PM CST
                    <br />
                    <span className="text-[#c0b596]">Appointments available by request</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 w-full">
            <form className="space-y-6" onSubmit={handleSubmit} id="contact-form-main">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[rgba(192,181,150,0.2)] border border-[rgba(192,181,150,0.5)] text-[#c0b596] h-12 px-4 w-full focus:outline-none focus:bg-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[rgba(192,181,150,0.2)] border border-[rgba(192,181,150,0.5)] text-[#c0b596] h-12 px-4 w-full focus:outline-none focus:bg-white"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[rgba(192,181,150,0.2)] border border-[rgba(192,181,150,0.5)] text-[#c0b596] h-12 px-4 w-full focus:outline-none focus:bg-white"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-[rgba(192,181,150,0.2)] border border-[rgba(192,181,150,0.5)] text-[#c0b596] h-12 px-4 w-full focus:outline-none focus:bg-white"
                  required
                >
                  <option disabled value="">
                    Select Service
                  </option>
                  <option>Family & Inheritance</option>
                  <option>Property & Title</option>
                  <option>Litigation & Court Representation</option>
                  <option>NRI & Cross-border Legal Help</option>
                  <option>Business & Corporate Law</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Case Description..."
                value={formData.message}
                onChange={handleChange}
                className="bg-[rgba(192,181,150,0.2)] border border-[rgba(192,181,150,0.5)] text-[#c0b596] w-full h-36 p-4 focus:outline-none focus:bg-white resize-none"
                required
              />

              <div>
                <button
                  type="submit"
                  className="bg-[#d4c291] hover:bg-[#d4c291] text-white font-semibold text-base px-8 py-3 transition duration-300"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
