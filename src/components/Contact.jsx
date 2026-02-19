import {
  Heading,
  Locate,
  Mail,
  Map,
  MapIcon,
  MapPin,
  MessageCircle,
  Notebook,
  Phone,
  User,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "476eb1bc-ef7c-4abf-8ca9-466ce89bdc95");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thank you..!");
      setName("");
      setEmail("");
      setSubject("");
      setMsg("")
    }
  };

  return (
    <>
      <div
        className="min-h-[700px] mb-16 flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-6 lg:px-10 gap-10"
        id="contact"
        data-aos="flip-left"
      >
        {/* Left Section */}
        <div className="left flex flex-col gap-6 bg-[#111111] border border-[#1f1f1f] p-8 rounded-xl shadow-lg shadow-black w-full md:w-[350px] transition duration-300 hover:border-[#c1ff72] hover:shadow-[#c1ff72]/20">
          <h2 className="text-2xl font-semibold text-[#c1ff72] mb-4">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4">
            <Mail className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
            <p className="text-sm sm:text-base break-words">
              devparth63@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
            <p className="text-sm sm:text-base break-words">
              +91 8490056689 (WhatsApp Only)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
            <p className="text-sm sm:text-base break-words">
              Gandhinagar, Gujarat, India
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-[500px] bg-[#111111] border border-[#1f1f1f] p-8 rounded-xl shadow-lg shadow-black transition duration-300 hover:border-[#c1ff72] hover:shadow-[#c1ff72]/20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="relative">
              <label className="text-sm text-gray-300">Name</label>
              <User
                className="absolute top-9 left-3 text-[#c1ff72]"
                size={18}
              />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                placeholder="Your Name"
                className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="text-sm text-gray-300">Email</label>
              <Mail
                className="absolute top-9 left-3 text-[#c1ff72]"
                size={18}
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                placeholder="Your Email"
                className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
                required
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <label className="text-sm text-gray-300">Subject</label>
              <Notebook
                className="absolute top-9 left-3 text-[#c1ff72]"
                size={18}
              />
              <input
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                name="subject"
                placeholder="Your Subject"
                className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label className="text-sm text-gray-300">Message</label>
              <MessageCircle
                className="absolute top-9 left-3 text-[#c1ff72]"
                size={18}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
                className="w-full h-28 text-sm pl-10 pt-3 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#c1ff72] text-black font-semibold px-8 py-2 rounded-full transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_#c1ff72]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
