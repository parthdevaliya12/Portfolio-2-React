// import { Heading, Locate, Mail, MessageCircle, Notebook, Phone ,Text,User} from "lucide-react";
// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div
//         className="min-h-[600px] mb-10  flex justify-around items-center"
//         id="contact"
//         data-aos="fade-up"
//       >
//         <div className="left flex flex-col gap-5">
//           <div className=""> 
//             <h2 className="text-3xl -mt-20 text-[#c1ff72]">Get in touch !</h2>
//           </div>
//           <div className="">
//             <Mail className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-auto w-auto p-2" />
//             <p className="text-md">parthdevaliya062@gmail.com</p>
//           </div>
//           <div className="">
//             <Phone className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-auto w-auto p-2" />
//             <p className="text-md">+91 8490056689 (WhatsApp Only)</p>
//           </div>
//           <div className="">
//             <Locate className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-auto w-auto p-2" />
//             <p className="text-md">Gandhinagar, Gujarat, India</p>
//           </div>
//         </div>
//         <div className="right">
//           <div className="flex flex-col gap-3">
//             <div className="input-data relative flex flex-col gap-1">
//               <label htmlFor="">
//                 Name
//               </label>
//               <User className="absolute top-9 left-2 text-[#c1ff72]"/>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-100 h-10 text-sm shadow shadow-white pl-10 border-none outline-none bg-transparent"
//                 required
//               />
//             </div>
//             <div className="input-data relative flex flex-col gap-1">
//               <label htmlFor="">
//                 Email
//               </label>
//               <Mail className="absolute top-9 left-2 text-[#c1ff72] "/>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-100 h-10 text-sm shadow shadow-white pl-10 border-none outline-none bg-transparent"
//                 required
//               />
//             </div>
//             <div className="input-data relative flex flex-col gap-1">
//               <label htmlFor="">
//                 Subject
//               </label>
//               <Notebook className="absolute top-9 left-2 text-[#c1ff72]"/>
//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 className="w-100 h-10 shadow text-sm shadow-white pl-10 border-none outline-none bg-transparent"
//                 required
//               />
//             </div>
//             <div className="input-data relative flex flex-col gap-1">
//               <label htmlFor="">
//                 Message
//               </label>
//               <MessageCircle className="absolute top-9 left-2 text-[#c1ff72]"/>
//               <textarea
//                 placeholder="Your Messages"
//                 className="w-100 h-20 shadow text-sm shadow-white pl-10 pt-2 border-none outline-none bg-transparent"
//                 required
//               ></textarea>
//             </div>
//             <div className="input-data relative flex justify-center items-center mt-5">
//               <button className="btn bg-[#c1ff72] text-black p-2 w-50 text-xl rounded-full transition  ">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import { Heading, Locate, Mail, Map, MapIcon, MapPin, MessageCircle, Notebook, Phone, User } from "lucide-react";
import React from "react";
import {toast} from "react-toastify"


const Contact = () => {

  
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
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      
      toast.success("Message send successfully",res);
    }
  };



  return (
    <>
      <div
        className="min-h-[600px] mb-10  flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center px-4 sm:px-6"
        id="contact"
        data-aos="flip-left"
      >
        {/* Left section */}
        <div className="left flex flex-col gap-5 mb-10 md:mb-0">
          {/* <h2 className="text-3xl mt-15 text-center text-[#c1ff72]">Get in touch!</h2> */}
          
          <div className="flex items-center gap-3 ">
            <Mail className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-8 w-8 p-2" />
            <p className="text-md break-words">devparth63@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-8 w-8 p-2" />
            <p className="text-md break-words">+91 8490056689 (WhatsApp Only)</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#c1ff72] border-2 border-[#c1ff72] rounded-full h-8 w-8 p-2" />
            <p className="text-md break-words">Gandhinagar, Gujarat, India</p>
          </div>
        </div>

        {/* Right section */}
        <div className="right w-full md:w-[500px]">
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
            <div className="input-data relative flex flex-col gap-1">
              <label>Name</label>
              <User className="absolute top-9 left-2 text-[#c1ff72]" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full h-10 text-sm shadow shadow-white pl-10 border-none outline-none bg-transparent mb-3"
                required
              />
            </div>

            <div className="input-data relative flex flex-col gap-1">
              <label>Email</label>
              <Mail className="absolute top-9 left-2 text-[#c1ff72]" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full h-10 text-sm shadow shadow-white pl-10 border-none outline-none bg-transparent mb-3"
                required
              />
            </div>

            <div className="input-data relative flex flex-col gap-1">
              <label>Subject</label>
              <Notebook className="absolute top-9 left-2 text-[#c1ff72]" />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="w-full h-10 shadow text-sm shadow-white pl-10 border-none outline-none bg-transparent mb-3"
                required
              />
            </div>

            <div className="input-data relative flex flex-col gap-1">
              <label>Message</label>
              <MessageCircle className="absolute top-9 left-2 text-[#c1ff72]" />
              <textarea
                placeholder="Your Messages"
                name="message"
                className="w-full h-24 shadow text-sm shadow-white pl-10 pt-2 border-none outline-none bg-transparent resize-none mb-3"
                required
              ></textarea>
            </div>

            <div className="input-data flex justify-center mt-5 mb-15">
              <button type="submit" className="btn bg-[#c1ff72] text-black p-2 w-40 sm:w-50 text-xl rounded-full transition hover:scale-105 hover:shadow-[0_0_10px_#c1ff72]">
                Submit
              </button>
            </div>
</form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
