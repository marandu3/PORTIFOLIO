import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("maranduemail2003", "template_sv4hqpp", form.current, {
        publicKey: "ebQFXEEZHSc4oAhyN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 text-white px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg text-center mb-8">
        Have questions, suggestions, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible!
      </p>
      <div className="bg-white text-black rounded-lg shadow-lg p-8 w-full max-w-md">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="user_name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
