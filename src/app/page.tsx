"use client";

import { useState } from "react";

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);
  return (
    <>

        <nav className="w-full fixed top-0 left-0 z-50 bg-[#ffffff5d] bg-opacity-60 font-serif italic backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-1xl font-serif italic text-[#ff00ae]">G & A</h1>

        {/* Links (always visible on all screens) */}
        <div className="space-x-5 flex " style={{
    textShadow: `
      2px 2px 5px #000
    `,
  }}>
          <a href="#home" className="text-white hover:text-pink-400 transition">
          Home
          </a>
          <a href="#detail" className="text-white hover:text-pink-400 transition">
          About
          </a>
          <a
            href="#Memories"
            className="text-white hover:text-pink-400 transition"
          >
            Memories
          </a>
          <a
            href="#RSVP"
            className="text-white hover:text-pink-400 transition"
          >
            RSVP
          </a>
        </div>
      </div>
    </nav>
    
    <section id="home" className="flex items-center justify-center min-h-screen bg-black">
      <div
        className="relative flex items-center justify-center"
        style={{ width: "100%", height: "100vh" }}
      >
        {/* Background video */}
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="./vid/main.mp4"
          loop
          autoPlay
          muted
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-serif italic text-white"
            style={{
              textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            Guru{" "}
            <span
              className="text-[#ff00ae] font-serif italic"
              style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
            >
              <br /> & <br />
            </span>{" "}
            Ananya
          </h1>

          <p
            className="mt-6 text-lg md:text-2xl font-serif italic text-white"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            💖 A Royal Beginning of Forever 💖
          </p>

          <p
            className="mt-2 text-md md:text-lg font-serif italic text-white"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
          >
            30th July 2025
          </p>

          {/* Invitation Button */}
          <button
            onClick={() => setShowInvitation(true)}
            className="mt-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            View Invitation
          </button>
        </div>
      </div>

      {/* Modal */}
      {showInvitation && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="relative transform transition-transform duration-700 [transform-style:preserve-3d] animate-[flip_1s_ease]"
            style={{ width: "80%", maxWidth: "600px" }}
          >
            <img
              src="./img/img.webp"
              alt="Invitation"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {/* Close button */}
            <button
              onClick={() => setShowInvitation(false)}
              className="absolute top-4 right-4 bg-black text-white h-10 rounded-full px-3 py-1 shadow-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Flip animation */}
      <style>{`
        @keyframes flip {
          from { transform: rotateY(90deg); opacity: 0; }
          to { transform: rotateY(0deg); opacity: 1; }
        }
      `}</style>
    </section>



<section className="py-16 bg-gradient-to-br from-white to-pink-50">
  <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-10">
    
    {/* Left decorative side */}
    <div className="md:w-1/3 flex flex-col items-center md:items-start">
      <h2 className="text-4xl font-[Parisienne] text-pink-900 mb-4">
        Our Story
      </h2>
      <div className="h-1 w-20 bg-pink-300 rounded-full mb-6"></div>
    </div>

    {/* Right text content */}
    <div className="md:w-2/3">
      <p className="text-lg leading-relaxed text-gray-700 font-serif italic">
        Once upon a time, in the bustling city of <span className="text-pink-600 font-semibold"> Chennai </span>, 
        two souls crossed paths in the most unexpected way. 
        <span className="text-pink-600 font-semibold"> Guru</span>, a passionate coder with a love for technology, 
        and <span className="text-pink-600 font-semibold">Ananya</span>, a creative spirit with a heart full of dreams, 
        found themselves drawn to each other amidst the chaos of everyday life.
      </p>
    </div>
  </div>
</section>

      <br />

<section id="detail">
  <div>
    <h2 className="text-3xl font-bold mb-8 text-center text-pink-900 font-serif italic">
      Wedding Details
    </h2>
  </div>
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      {[
        {
          title: "Mehndi Ceremony",
          details: "Monday, 10:00 AM – 8:00 PM",
          desc: "Join us for beautiful henna art, music, and fun!",
          icon: "🌿",
          gradient: "from-[#FFF5F7] to-[#FDE2E4]",
        },
        {
          title: "Sangeet Night",
          details: "Tuesday, 7:00 PM – 11:00 PM",
          desc: "A night of dance, music, and celebration with family and friends.",
          icon: "🎶",
          gradient: "from-[#FDE2E4] to-[#E9C5CB]",
        },
        {
          title: "Wedding Ceremony",
          details: "Wednesday, 9:00 AM – 2:00 PM",
          desc: "Traditional rituals and vows as Guru & Ananya begin their new journey.",
          icon: "💍",
          gradient: "from-[#FFF8E7] to-[#FBF3D5]",
        },
        {
          title: "Reception & Dinner",
          details: "Wednesday, 7:00 PM onwards",
          desc: "Celebrate with a grand feast, music, and joy!",
          icon: "🍽️",
          gradient: "from-[#FBF3D5] to-[#FDE2E4]",
        },
      ].map((event) => (
        <div
          key={event.title}
          className={`bg-gradient-to-br ${event.gradient} 
            w-[90vw] md:w-80 lg:w-96
            h-64 md:h-60 lg:h-72 
            rounded-2xl shadow-lg flex flex-col items-center justify-center 
            text-base md:text-lg font-medium text-gray-800 
            mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl 
            p-6 text-center border-2 border-[#E6CBA8]`}
          style={{ maxWidth: "500px" }}
        >
          {/* Icon */}
          <div className="text-4xl mb-3">{event.icon}</div>

          {/* Title */}
          <div className="font-serif italic font-bold text-xl md:text-2xl mb-2 text-pink-900 drop-shadow-sm">
            {event.title}
          </div>

          {/* Time */}
          <div className="text-sm md:text-base mb-1 text-gray-700">
            {event.details}
          </div>

          {/* Description */}
          <div className="text-xs md:text-sm text-gray-600 italic">
            {event.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-16 bg-gradient-to-br from-white to-pink-50" id="Memories">
        <div>
          
          <h2 className="text-3xl font-bold mb-4 text-center  text-pink-900 font-serif italic ">Memories</h2>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {[
              {
                src: "https://artizstudio.sg/wp-content/uploads/2024/05/20240506064609369314.webp",
              },
              {
                src: "https://artizstudio.sg/wp-content/uploads/2024/05/20240506064603414344.webp",
              },
              {
                src: "https://artizstudio.sg/wp-content/uploads/2024/05/20240506064620316358.webp",
              },
              {
                src: "https://artizstudio.sg/wp-content/uploads/2024/05/20240506064612209985.webp",
              },
            ].map((mem, idx) => (
              <div
                key={idx}
                className="h-64 w-[90vw] md:h-72 md:w-80 lg:h-80 lg:w-96 flex flex-col items-center justify-center mb-8 transition-all duration-300 p-4 text-center"
              >
                <img
                  src={mem.src}
                  className="h-40 w-full object-cover shadow-lg rounded-lg mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 mb-8" id="RSVP" >
        <div className="max-w-xl mx-auto rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center  text-pink-900 font-serif italic ">RSVP</h2>
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 font-serif italic"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBF3D5] bg-white text-gray-800"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 font-serif italic"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBF3D5] bg-white text-gray-800"
                required
              />
            </div>

            {/* Dropdown */}
            <div>
              <label
                htmlFor="attendance"
                className="block text-lg font-semibold mb-2 font-serif italic"
              >
                Will you attend?
              </label>
              <select
                id="attendance"
                name="attendance"
                className="w-full p-3 font-serif italic rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBF3D5] bg-white text-gray-800"
                required
              >
                <option value="yes" className="font-serif italic">Yes, I will</option>
                <option value="maybe"className="font-serif italic">Maybe</option>
                <option value="no" className="font-serif italic">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#eeb765] hover:bg-[#e9aa4c] shadow-2xs text-white text-shadow-2xs font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </section>

<footer className="bg-gradient-to-r from-pink-200 via-[#FBF3D5] to-pink-200 py-8 mt-16 shadow-inner">
  <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4">
    {/* Logo + Names */}
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-3xl">💍</span>
      <span className="font-serif italic text-2xl text-pink-800 drop-shadow-md">
        Guru & Ananya
      </span>
    </div>

    {/* Divider with hearts */}
    <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
      <span className="w-10 h-[1px] bg-pink-400"></span>
      <span>💘</span>
      <span className="w-10 h-[1px] bg-pink-400"></span>
    </div>

    {/* Copyright */}
    <div className="text-sm text-gray-700 italic">
      © {new Date().getFullYear()} Guru & Ananya | With Love ❤️
    </div>
  </div>
</footer>


    </>
  );
}
