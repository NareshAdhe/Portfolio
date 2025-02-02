import React, { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim) {
      toast.error("Please fill out all fields!", {
        autoClose: 2000,
        hideProgressBar: false,
        theme: "black",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=nareshadhe01@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact pt-8 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#ffae00] uppercase">
          Get In Touch
        </h2>
        <p className="mb-12 text-xl text-gray-400">
          Feel free to reach out to me for any opportunities or just to say
          hello!
        </p>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <form onSubmit={handleSubmit} className="space-y-4 text-lg font-bold autofill:disabled:">
          <div>
            <label htmlFor="name" className="block text-lg mb-2 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="backdrop-blur-sm bg-[#22222230] w-full p-4 rounded-lg text-white border-2 border-[#333] focus:outline-none focus:border-[#ffae00]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-2 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 rounded-lg backdrop-blur-sm bg-[#22222230] text-white border-2 border-[#333] focus:outline-none focus:border-[#ffae00]"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="resize-none w-full p-4 rounded-lg backdrop-blur-sm bg-[#22222230] text-white border-2 border-[#333] focus:outline-none focus:border-[#ffae00]"
              rows="6"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 text-lg bg-[#ffae00] text-black font-bold rounded-lg hover:bg-[#e89300] transition duration-300"
          >
            Send Message
          </button>
        </form>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;
