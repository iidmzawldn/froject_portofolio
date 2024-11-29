import React from "react";

const Hero: React.FC = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-10">
    <h2 className="text-5xl font-bold mb-4">Hi, I'm a Frontend Developer</h2>
    <p className="text-lg text-gray-700 max-w-xl">
      I create modern, responsive web applications.
    </p>
  </section>
);

export default Hero;
