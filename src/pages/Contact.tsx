import { useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob-1 absolute -top-40 -left-40 w-80 h-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="blob-2 absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="blob-3 absolute bottom-[-6rem] left-20 w-72 h-72 rounded-full bg-pink-500/25 blur-3xl" />
      </div>

      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 lg:pb-24 bg-gradient-to-b from-black/90 via-[#050505] to-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-4 py-1 text-[11px] uppercase tracking-[0.16em] text-orange-200">
              <span className="text-lg">💬</span>
              <span>Get In Touch</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Let's Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                  Amazing Together
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/75 max-w-2xl">
                Have a project in mind? We'd love to hear from you. Get in touch and let's create something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CONTACT FORM */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold mb-3">Send us a Message</h2>
                <p className="text-white/60 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent border border-green-500/30 p-8 text-center space-y-3">
                  <h3 className="text-2xl font-semibold text-green-400">Thank You!</h3>
                  <p className="text-green-300/80 text-sm">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-orange-400/60 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-orange-400/60 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Phone Number (Optional)
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+1 (862) 295-0117"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-orange-400/60 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Project Discussion"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-orange-400/60 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-orange-400/60 focus:outline-none transition-all duration-300 min-h-[200px] resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Other Ways to Connect</h2>
                <p className="text-white/60 text-sm">Prefer to reach out directly? Use any of these methods.</p>
              </div>

              {/* EMAIL */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 p-6 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-xl">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a
                      href="mailto:hello@crearist.com"
                      className="text-orange-400/80 hover:text-orange-300 transition text-sm"
                    >
                      Hello@midis.in
                    </a>
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 p-6 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <a
                      href="+1 (862) 295-0117"
                      className="text-orange-400/80 hover:text-orange-300 transition text-sm"
                    >
                      +1 (862) 295-0117
                    </a>
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 p-6 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Address</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      1st Floor, E 279,<br />
                      Industrial Area, Sector 75, S.A.S Nagar<br />
                      Punjab 16005
                    </p>
                  </div>
                </div>
              </div>

              {/* HOURS */}
              <div className="rounded-2xl bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 p-6 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-xl">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500/20 hover:border-orange-400/60 flex items-center justify-center transition-all duration-300 text-sm">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500/20 hover:border-orange-400/60 flex items-center justify-center transition-all duration-300 text-sm">
                    𝕏
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500/20 hover:border-orange-400/60 flex items-center justify-center transition-all duration-300 text-sm">
                    in
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500/20 hover:border-orange-400/60 flex items-center justify-center transition-all duration-300 text-sm">
                    📷
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}