// import {
//   Heading,
//   Locate,
//   Mail,
//   Map,
//   MapIcon,
//   MapPin,
//   MessageCircle,
//   Notebook,
//   Phone,
//   User,
// } from "lucide-react";
// import React, { useState } from "react";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "476eb1bc-ef7c-4abf-8ca9-466ce89bdc95");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       toast.success("Thank you..!");
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMsg("")
//     }
//   };

//   return (
//     <>
//       <div
//         className="min-h-[700px] mb-16 flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-6 lg:px-10 gap-10"
//         id="contact"
//         data-aos="flip-left"
//       >
//         {/* Left Section */}
//         <div className="left flex flex-col gap-6 bg-[#111111] border border-[#1f1f1f] p-8 rounded-xl shadow-lg shadow-black w-full md:w-[350px] transition duration-300 hover:border-[#c1ff72] hover:shadow-[#c1ff72]/20">
//           <h2 className="text-2xl font-semibold text-[#c1ff72] mb-4">
//             Get in Touch
//           </h2>

//           <div className="flex items-center gap-4">
//             <Mail className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
//             <p className="text-sm sm:text-base break-words">
//               devparth63@gmail.com
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <Phone className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
//             <p className="text-sm sm:text-base break-words">
//               +91 8490056689 (WhatsApp Only)
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <MapPin className="text-[#c1ff72] border border-[#c1ff72] rounded-full h-9 w-9 p-2" />
//             <p className="text-sm sm:text-base break-words">
//               Gandhinagar, Gujarat, India
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="right w-full md:w-[500px] bg-[#111111] border border-[#1f1f1f] p-8 rounded-xl shadow-lg shadow-black transition duration-300 hover:border-[#c1ff72] hover:shadow-[#c1ff72]/20">
//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//             {/* Name */}
//             <div className="relative">
//               <label className="text-sm text-gray-300">Name</label>
//               <User
//                 className="absolute top-9 left-3 text-[#c1ff72]"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 name="name"
//                 placeholder="Your Name"
//                 className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="text-sm text-gray-300">Email</label>
//               <Mail
//                 className="absolute top-9 left-3 text-[#c1ff72]"
//                 size={18}
//               />
//               <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 name="email"
//                 placeholder="Your Email"
//                 className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
//                 required
//               />
//             </div>

//             {/* Subject */}
//             <div className="relative">
//               <label className="text-sm text-gray-300">Subject</label>
//               <Notebook
//                 className="absolute top-9 left-3 text-[#c1ff72]"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 onChange={(e) => setSubject(e.target.value)}
//                 value={subject}
//                 name="subject"
//                 placeholder="Your Subject"
//                 className="w-full h-11 text-sm pl-10 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="relative">
//               <label className="text-sm text-gray-300">Message</label>
//               <MessageCircle
//                 className="absolute top-9 left-3 text-[#c1ff72]"
//                 size={18}
//               />
//               <textarea
//                 placeholder="Your Message"
//                 name="message"
//                 onChange={(e) => setMsg(e.target.value)}
//                 value={msg}
//                 className="w-full h-28 text-sm pl-10 pt-3 rounded-md bg-black border border-[#2a2a2a] focus:border-[#c1ff72] outline-none transition resize-none"
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 type="submit"
//                 className="bg-[#c1ff72] text-black font-semibold px-8 py-2 rounded-full transition duration-300 hover:scale-105 hover:shadow-[0_0_15px_#c1ff72]"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import { useState } from "react";
import useReveal from "../hooks/useReveal";

// Replace with your own Web3Forms access key: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
  const [headRef, headVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "07ca9c25-2c1a-4b42-9d25-b4a3f5ffa5fb",
          subject: `New portfolio message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Network error — please check your connection and try again.",
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-ink-soft/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className={`reveal ${headVisible ? "in-view" : ""} mb-12 text-center`}
        >
          <p className="font-mono text-sm text-amber mb-3">// contact.send()</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
            Let's Build Something
          </h2>
          <p className="font-body text-muted mt-4 max-w-lg mx-auto">
            Have a project in mind, an opportunity, or just want to talk shop?
            My inbox is always open.
          </p>
        </div>

        <div
          ref={formRef}
          className={`reveal ${formVisible ? "in-view" : ""} rounded-xl border border-ink-border bg-ink-panel overflow-hidden`}
        >
          {/* tab bar to match the design system */}
          <div className="flex items-center gap-2 bg-ink-soft border-b border-ink-border px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">
              send-message.jsx
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-muted mb-2"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-md bg-ink border border-ink-border px-4 py-3 text-paper placeholder:text-muted/50 font-body text-sm focus:border-amber/60 transition-colors outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-muted mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full rounded-md bg-ink border border-ink-border px-4 py-3 text-paper placeholder:text-muted/50 font-body text-sm focus:border-amber/60 transition-colors outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project or idea..."
                className="w-full rounded-md bg-ink border border-ink-border px-4 py-3 text-paper placeholder:text-muted/50 font-body text-sm focus:border-amber/60 transition-colors outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-amber px-8 py-3 font-mono text-sm font-medium text-ink hover:bg-amber-dim transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-ink/40 border-t-ink animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            {status === "success" && (
              <p className="font-mono text-sm text-teal flex items-center gap-2">
                <span aria-hidden="true">✓</span> Message sent successfully —
                I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-sm text-[#F87171] flex items-center gap-2">
                <span aria-hidden="true">✕</span> {errorMsg}
              </p>
            )}
          </form>
        </div>

        {/* <p className="text-center font-mono text-xs text-muted mt-6">
          Powered by{" "}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline"
          >
            Web3Forms
          </a>{" "}
          — no backend required.
        </p> */}
      </div>
    </section>
  );
}
