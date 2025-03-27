import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import phone from "../assets/phone.png";
import { IoMdSend, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUser, FaEnvelope, FaCommentAlt, FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Footer from "./Footer";

function Contacts() {
  const form = useRef();
  const { darkMode } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm("maranduemail2003", "template_d9acnxj", form.current, {
        publicKey: "ebQFXEEZHSc4oAhyN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSending(false);
          setSent(true);
          // Reset form
          setFormState({
            name: "",
            email: "",
            message: ""
          });
          // Show success for 3 seconds
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSending(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      );
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300`}>
      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
            darkMode ? 'bg-primary-700/20' : 'bg-primary-500/10'
          } blur-3xl`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
            darkMode ? 'bg-secondary-700/20' : 'bg-secondary-500/10'
          } blur-3xl`}></div>
        </div>
        
        <div className="relative z-10 text-center mb-8">
          <h1 className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
            darkMode 
              ? 'from-primary-400 to-secondary-400 text-transparent' 
              : 'from-primary-600 to-secondary-600 text-transparent'
          } bg-clip-text`}>
            Get In Touch
          </h1>
          <p className={`text-lg max-w-2xl ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            Have questions, suggestions, or want to work together? Drop me a message,
            and I'll get back to you as soon as possible!
          </p>
        </div>
        
        <div className={`w-full max-w-xl rounded-2xl shadow-2xl transition-all duration-300 transform ${
          darkMode 
            ? 'bg-gradient-to-br from-dark-100 to-dark-200 shadow-primary-900/20' 
            : 'bg-gradient-to-br from-white to-light-200 shadow-gray-400/30'
        }`}>
          {/* Card header with decorative accent */}
          <div className="h-2 w-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-t-2xl"></div>
          
          <div className="p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
              <div className="relative">
                <label 
                  htmlFor="user_name" 
                  className={`block font-medium mb-2 transition-colors ${
                    focused === 'name' 
                      ? (darkMode ? 'text-primary-400' : 'text-primary-600') 
                      : (darkMode ? 'text-light-200' : 'text-gray-700')
                  }`}
                >
                  <FaUser className="inline-block mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-dark-300 border-dark-100 text-light-100' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none ${
                    focused === 'name' 
                      ? 'ring-2 ring-primary-500 border-transparent' 
                      : ''
                  } transition-all`}
                  required
                />
                <div className={`absolute bottom-2 right-3 transition-all ${
                  focused === 'name' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`h-1 w-8 rounded-full ${
                    darkMode ? 'bg-primary-500' : 'bg-primary-600'
                  }`}></div>
                </div>
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="user_email" 
                  className={`block font-medium mb-2 transition-colors ${
                    focused === 'email' 
                      ? (darkMode ? 'text-primary-400' : 'text-primary-600') 
                      : (darkMode ? 'text-light-200' : 'text-gray-700')
                  }`}
                >
                  <FaEnvelope className="inline-block mr-2" />
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="email@example.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-dark-300 border-dark-100 text-light-100' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none ${
                    focused === 'email' 
                      ? 'ring-2 ring-primary-500 border-transparent' 
                      : ''
                  } transition-all`}
                  required
                />
                <div className={`absolute bottom-2 right-3 transition-all ${
                  focused === 'email' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`h-1 w-8 rounded-full ${
                    darkMode ? 'bg-primary-500' : 'bg-primary-600'
                  }`}></div>
                </div>
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="message" 
                  className={`block font-medium mb-2 transition-colors ${
                    focused === 'message' 
                      ? (darkMode ? 'text-primary-400' : 'text-primary-600') 
                      : (darkMode ? 'text-light-200' : 'text-gray-700')
                  }`}
                >
                  <FaCommentAlt className="inline-block mr-2" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="What would you like to say?"
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-dark-300 border-dark-100 text-light-100' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none ${
                    focused === 'message' 
                      ? 'ring-2 ring-primary-500 border-transparent' 
                      : ''
                  } transition-all resize-none`}
                  required
                ></textarea>
                <div className={`absolute bottom-2 right-3 transition-all ${
                  focused === 'message' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`h-1 w-8 rounded-full ${
                    darkMode ? 'bg-primary-500' : 'bg-primary-600'
                  }`}></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={sending || sent}
                  className={`relative px-8 py-3 rounded-full font-medium overflow-hidden transition-all transform hover:scale-105 
                  ${
                    sending 
                      ? (darkMode ? 'bg-gray-700 text-light-300' : 'bg-gray-400 text-white') 
                      : sent 
                        ? (darkMode ? 'bg-green-700 text-white' : 'bg-green-500 text-white')
                        : error
                          ? (darkMode ? 'bg-red-700 text-white' : 'bg-red-500 text-white')
                          : (darkMode 
                            ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                            : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400')
                  }
                  ${sending || sent ? 'cursor-default' : 'hover:shadow-lg'}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : sent ? (
                      <>
                        <IoMdCheckmarkCircleOutline size={20} />
                        Message Sent!
                      </>
                    ) : error ? (
                      'Failed to Send. Try Again!'
                    ) : (
                      <>
                        <IoMdSend size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
            
            <div className={`flex items-center justify-center mt-8 pt-5 border-t ${
              darkMode ? 'border-dark-300 text-light-200' : 'border-gray-200 text-gray-700'
            }`}>
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-dark-300 text-primary-400' : 'bg-light-200 text-primary-600'
              }`}>
                <FaPhoneAlt size={16} />
              </div>
              <span className="ml-3 font-medium">+255 757129449</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
