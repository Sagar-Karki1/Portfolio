import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="contact-container w-full max-h-max bg-gradient-to-b from-black via-black to-gray-800 p-4"
      >
        <div className="contact-wrapper max-w-screen-lg h-full  mx-auto">
          <div className="heading text-white pb-8 flex flex-col items-center">
            <h3 className="text-4xl font-bold border-b-2 border-gray-500">
              Contact
            </h3>
            <p className="text-center pt-3">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="form-wrapper flex justify-center">
            <form
              action="https://getform.io/f/c2445357-8e7d-4fc2-bdd2-3162448cd3e8"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border rounded-md text-white focus:outline-none my-5 "
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="7"
                className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
