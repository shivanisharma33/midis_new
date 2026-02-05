import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* TOP HEADER SECTION */}
      <section className="bg-[#0f1115] pt-32 pb-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight flex items-center justify-center gap-4">
            CONNECT WITH US
            <motion.span
              animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white stroke-[3px]" />
            </motion.span>
          </h1>
        </motion.div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="relative -mt-10 mb-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl bg-white shadow-2xl rounded-none flex flex-col lg:flex-row overflow-hidden border border-gray-100">

          {/* LEFT SIDE: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] h-[400px] lg:h-auto min-h-[500px] relative group overflow-hidden bg-gray-100"
          >
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680a229696bf68deb3e88d34_Banner%20(3)-p-500.webp"
              alt="Modern Architectural Building"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

            {/* Red dot aesthetic element like in the image */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-1/2 left-[-10px] w-4 h-4 bg-red-500 rounded-full blur-[2px]"
            />
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-[55%] p-8 md:p-16 flex flex-col justify-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-[#0f1115] mb-12"
            >
              TALK TO US NOW
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* YOUR NAME */}
                <motion.div variants={fadeInUp} className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    YOUR NAME*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-red-500 outline-none transition-colors text-gray-800"
                    />
                    <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </div>
                </motion.div>

                {/* EMAIL */}
                <motion.div variants={fadeInUp} className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-red-500 outline-none transition-colors text-gray-800"
                  />
                </motion.div>

                {/* PHONE */}
                <motion.div variants={fadeInUp} className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    PHONE*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-red-500 outline-none transition-colors text-gray-800"
                  />
                </motion.div>

                {/* SUBJECT */}
                <motion.div variants={fadeInUp} className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    SUBJECT*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-red-500 outline-none transition-colors text-gray-800"
                  />
                </motion.div>
              </div>

              {/* MESSAGE */}
              <motion.div variants={fadeInUp} className="relative group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  MESSAGE
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-red-500 outline-none transition-colors text-gray-800 min-h-[100px] resize-none"
                  />
                  <div className="absolute left-[-15px] top-4 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </div>
              </motion.div>

              {/* TERMS */}
              <motion.div variants={fadeInUp} className="flex items-center space-x-3">
                <Checkbox id="terms" className="rounded-none border-gray-300" />
                <label htmlFor="terms" className="text-xs text-gray-600 font-medium">
                  I Agree To The Terms And Conditions
                </label>
              </motion.div>

              {/* SUBMIT BUTTON */}
              <motion.div variants={fadeInUp}>
                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-[#0f1115] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-4 hover:bg-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
                >
                  {submitted ? "SENT" : "SUBMIT MESSAGE"}
                  <motion.span
                    animate={submitted ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {submitted ? <Send className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </motion.span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}