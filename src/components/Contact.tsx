import React from "react";

const Contact: React.FC = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="p-2 border rounded"
        rows={4}
      ></textarea>
      <button className="p-2 bg-blue-600 text-white rounded">Send</button>
    </form>
  </section>
);

export default Contact;
