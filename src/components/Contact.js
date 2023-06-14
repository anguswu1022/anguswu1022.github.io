import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    e.target.setCustomValidity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3y0qc5i",
        "template_340p8ff",
        {
          from_name: form.name,
          to_name: "Angus",
          from_email: form.email,
          to_email: "anguswu19@gmail.com",
          message: form.message,
        },
        "Hoo-6GEblrRJtFpV8"
      )
      .then(() => {
        toast.success("Submitted! I'll get back to you soon! 😀");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Something went wrong while submitting the form.");
      });
  };

  return (
    <div className="w-full h-screen bg-cream p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-8 text-center max-w-2xl">
            I'm currently looking for software engineering opportunities, so
            please reach out if you are looking for an enthusiastic developer!
          </p>
        </div>
        <div className="flex justify-center items-center my-[-12px]">
          <form
            className="flex flex-col w-full md:w-1/2"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter your name");
              }}
              value={form.name}
              placeholder="What's your name?"
              className="p-2 bg-white border-b-4 border-black rounded-md text-black focus:outline-none "
              onChange={handleChange}
            ></input>
            <label className="pt-6">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter your email");
              }}
              className="p-2 bg-white border-b-4 border-black rounded-md text-black focus:outline-none"
            ></input>
            <label className="pt-6">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="What do you want to say?"
              rows="10"
              required
              value={form.message}
              onChange={handleChange}
              onInvalid={(e) => {
                e.target.setCustomValidity("Please enter your message");
              }}
              className="p-2 bg-white border-b-4 border-black rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="text-white bg-gray-300 px-6 py-3 my-8 mx-auto border-b-4 border-black flex items-center rounded-md hover:scale-110 hover:bg-gray-500 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
