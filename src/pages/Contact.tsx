import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "Consulting",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    /* ================= CONVERSION TRACKING ================= */
    if (window.gtag) {
      window.gtag("event", "contact_submit", {
        event_category: "Contact",
        event_label: form.inquiry,
      });
    }

    if (window.plausible) {
      window.plausible("ContactSubmit", {
        props: { inquiry: form.inquiry },
      });
    }

    /* ================= WHATSAPP REDIRECT ================= */
    const whatsappNumber = "919042404476"; // 🔁 replace with real number

    const text = `
New Inquiry – ${form.inquiry}

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}

-----------------------
AI Auto-Response Draft:
${generateAIReply()}
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="container mx-auto px-6 py-20 max-w-6xl">

      {/* ================= HEADER ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Contact Aksamatrix
      </motion.h1>

      <p className="text-gray-300 mb-12 max-w-3xl">
        Consulting, speaking engagements, or research collaboration —
        let’s discuss how we can build secure, scalable AI systems together.
      </p>

      <div className="grid md:grid-cols-2 gap-12">

        {/* ================= CONTACT FORM ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-8 rounded-xl space-y-6"
        >
          <h2 className="text-2xl font-semibold">Send an Inquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full bg-gray-700 p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full bg-gray-700 p-3 rounded-lg outline-none"
          />

          {/* Inquiry Selector */}
          <select
            name="inquiry"
            onChange={handleChange}
            className="w-full bg-gray-700 p-3 rounded-lg outline-none"
          >
            <option>Consulting</option>
            <option>Speaking</option>
            <option>Research</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Briefly describe your requirement"
            required
            onChange={handleChange}
            className="w-full bg-gray-700 p-3 rounded-lg outline-none"
          />

         

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            <Send className="w-4 h-4" />
            Send via WhatsApp
          </button>
        </motion.form>

        {/* ================= MAP + LINKS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {/* Map */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              Our Location
            </h3>

            <iframe
              title="Aksamatrix Location"
              src="https://www.google.com/maps?q=Vaniyambadi,Tamil Nadu,India&output=embed"
              className="w-full h-72 rounded-lg border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick Contact Links */}
          <div className="bg-gray-800 p-6 rounded-xl space-y-4">
            <a href="mailto:mdaksamvk@gmail.com" className="flex gap-3 items-center">
              <Mail /> Email
            </a>
            <a href="https://github.com/mdaksamvk" className="flex gap-3 items-center">
              <Github /> GitHub
            </a>
            <a href="https://linkedin.com/in/mdaksamvk" className="flex gap-3 items-center">
              <Linkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}