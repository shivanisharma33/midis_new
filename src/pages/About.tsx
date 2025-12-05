import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ServicesSection } from "@/components/ServicesSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------
    TEAM MODAL COMPONENT (FULL VERSION)
------------------------------------------------------------ */

const TeamModal = ({ member, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.85, y: 40, filter: "blur(12px)" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out"
      }
    );
  }, []);

  if (!member) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111] text-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-orange-500/30 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-orange-400 transition"
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-orange-400 font-medium mb-4">{member.role}</p>

            <p className="text-white/80 mb-4">{member.bio}</p>

            {/* SKILLS */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-white/70">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/20 backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SOCIAL LINKS */}
            {member.social && (
              <div className="flex gap-4 mt-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    className="text-white/70 hover:text-orange-400 transition"
                  >
                    LinkedIn
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    className="text-white/70 hover:text-orange-400 transition"
                  >
                    Instagram
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------
    MAIN ABOUT PAGE
------------------------------------------------------------ */

const About = () => {
  const pageRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const [selectedMember, setSelectedMember] = useState(null);

  /* -----------------------------------------------
      AUTOPLAY FOR CAROUSEL
  ----------------------------------------------- */
  const startAutoplay = () => {
    if (!emblaApi) return;
    if (autoplayRef.current) return;
    autoplayRef.current = window.setInterval(
      () => emblaApi.scrollNext(),
      2800
    );
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  /* -----------------------------------------------
      GSAP GLOBAL PAGE ANIMATIONS
  ----------------------------------------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Entry Animation: Whole Page */
      gsap.from(".page-section", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15
      });

      /* 3D Hover Tilt for leadership images */
      const tiltElements = document.querySelectorAll(".tilt-image");
      tiltElements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(el, {
            rotateY: x / 25,
            rotateX: -y / 25,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power3.out"
          });
        });
      });

      /* Parallax Hero Scroll */
      gsap.to(".parallax-up", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  /* -----------------------------------------------
      AUTOPLAY INIT WHEN CAROUSEL READY
  ----------------------------------------------- */
  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi]);

  return (
    <main
      ref={pageRef}
      className="bg-[#0a0a0a] text-white overflow-hidden"
    >
      <Navigation />

      {/* (CONTINUES IN PART 2/4) */}
      {/* HERO SPACER */}
      <div className="h-20"></div>

      {/* ------------------------------------------------------------
          WHAT WE DO
      ------------------------------------------------------------ */}
      <section className="page-section py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          <h3 className="text-4xl font-semibold mb-10 tracking-tight">
            What We Do
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* TEXT */}
            <div className="space-y-5">
              <p className="text-white/80">
                At Midis, we provide end-to-end digital solutions designed to
                help you build, grow, and scale your business with strategic
                clarity and powerful execution.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>
                  <strong>Web Development &amp; Design</strong> — Modern,
                  responsive, SEO-friendly websites built for performance.
                </li>
                <li>
                  <strong>Brand Identity &amp; Graphic Design</strong> —
                  Complete visual identity systems that bring your brand to life.
                </li>
                <li>
                  <strong>Content Creation &amp; SEO</strong> — High-quality
                  written and visual content crafted to rank and convert.
                </li>
                <li>
                  <strong>Video Editing &amp; YouTube Management</strong> —
                  Professional editing and channel growth strategies.
                </li>
                <li>
                  <strong>Digital Marketing &amp; Ads</strong> — Data-driven
                  performance marketing on Google, Meta, LinkedIn, and more.
                </li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="tilt-image w-full max-w-md rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src="https://www.midis.in/image/new.jpg"
                  className="w-full h-72 object-cover"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 text-white/80">
            We handle everything under one roof — strategy, development,
            branding, content, marketing, and automation.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------
          WHY CHOOSE MIDIS
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-[#0b0b0b] why-choose-midis">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          <h3 className="text-4xl font-semibold mb-10 tracking-tight text-white">
            {"Why Choose Midis".split("").map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 bg-[#111] rounded-xl shadow border border-orange-500/20 hover:border-orange-400/40 transition-all p-card">
              <h5 className="font-semibold mb-2 text-white">Dedicated Support</h5>
              <p className="text-white/70 text-sm">
                We guide you with clarity, strategic direction, and reliable
                communication through every stage of your digital journey.
              </p>
            </div>

            <div className="p-6 bg-[#111] rounded-xl shadow border border-orange-500/20 hover:border-orange-400/40 transition-all p-card">
              <h5 className="font-semibold mb-2 text-white">Advanced Tools</h5>
              <p className="text-white/70 text-sm">
                We leverage modern technologies, automation, and data-powered
                systems to deliver growth.
              </p>
            </div>

            <div className="p-6 bg-[#111] rounded-xl shadow border border-orange-500/20 hover:border-orange-400/40 transition-all p-card">
              <h5 className="font-semibold mb-2 text-white">Transparent Process</h5>
              <p className="text-white/70 text-sm">
                No hidden costs or vague deliverables — everything is clear,
                measurable, and accessible.
              </p>
            </div>

            <div className="p-6 bg-[#111] rounded-xl shadow border border-orange-500/20 hover:border-orange-400/40 transition-all p-card">
              <h5 className="font-semibold mb-2 text-white">Custom Solutions</h5>
              <p className="text-white/70 text-sm">
                Every brand is unique. We tailor strategies and executions to
                match your goals and audience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          MISSION & VISION (GLASSMORPHISM)
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-[#0b0b0b] text-white relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h3 className="text-4xl font-semibold mb-10">Our Mission & Vision</h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Mission */}
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-xl border border-white/10 shadow-xl hover:shadow-orange-500/10 transition-all">
              <h5 className="text-xl font-semibold mb-3">Mission</h5>
              <p className="text-white/75 text-sm">
                To empower businesses of all sizes with world-class digital
                solutions that drive real, measurable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-xl border border-white/10 shadow-xl hover:shadow-orange-500/10 transition-all">
              <h5 className="text-xl font-semibold mb-3">Vision</h5>
              <p className="text-white/75 text-sm">
                To create a world where every business has equal opportunity to
                scale digitally with modern, powerful, and sustainable systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          APPROACH (CONTINUES IN PART 3)
------------------------------------------------------------ */}
      {/* ------------------------------------------------------------
          APPROACH
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-black approach">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h3 className="text-4xl font-semibold mb-10 text-white">Our Approach</h3>

          <ol className="space-y-6 text-white/80">
            <li>
              <strong className="text-white">Listen:</strong> We begin by deeply
              understanding your goals, audience, and challenges.
            </li>
            <li>
              <strong className="text-white">Strategize:</strong> We create a
              clear, actionable roadmap tailored to your industry.
            </li>
            <li>
              <strong className="text-white">Execute:</strong> Building,
              designing, creating, refining — we execute with precision.
            </li>
            <li>
              <strong className="text-white">Optimize & Scale:</strong> Data-driven
              insights help us refine and scale what works best.
            </li>
          </ol>

          <p className="mt-6 text-white/80">
            We believe in partnership, not transactions. Your growth is our goal.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------
          LEADERSHIP SECTION (WITH GSAP 3D TILT)
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-[#0b0b0b] text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          {/* Main heading */}
          <h3 className="text-4xl font-semibold mb-3">The people behind the work</h3>
          <p className="text-white/70 mb-12 italic">
            "Together, we are more than a team — we are creators, thinkers, and builders."
          </p>

          {/* -------------------- GAURAV -------------------- */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            {/* Text */}
            <div className="team-lead-card space-y-4">
              <h4 className="text-2xl font-semibold">Gaurav Sharma</h4>
              <p className="text-orange-400 font-medium">CEO & Director</p>

              <p className="text-white/80">
                Gaurav Sharma leads Midis with a vision to merge creativity,
                innovation, and measurable digital growth.
              </p>

              <p className="text-white/80">
                His strategic background spans digital transformation, branding,
                full-stack development, marketing systems, and scalable solutions.
              </p>

              <p className="text-white/80">
                Gaurav also contributes significantly at Mining Discovery,
                guiding content and platform growth across global mining industries.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="tilt-image team-lead-card w-full max-w-md rounded-xl overflow-hidden border border-orange-500/30 shadow-xl">
                <img
                  src="https://www.midis.in/image/Untitled%20design%20(3).png"
                  alt="Gaurav Sharma"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* -------------------- SAGAR -------------------- */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">

            {/* Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="tilt-image team-lead-card w-full max-w-md rounded-xl overflow-hidden border border-orange-500/30 shadow-xl">
                <img
                  src="https://www.midis.in/image/Sagar%20bakshi.jpg"
                  alt="Sagar Bakshi"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="team-lead-card order-1 md:order-2 space-y-4">
              <h4 className="text-2xl font-semibold">Sagar Bakshi</h4>
              <p className="text-orange-400 font-medium">Managing Director</p>

              <p className="text-white/80">
                Sagar specializes in AI-driven systems, automation, and
                end-to-end digital growth strategies.
              </p>

              <p className="text-white/80">
                From ecommerce brands to industry-specific platforms like Mining
                Discovery, Sagar ensures every project has long-term scalability.
              </p>

              <p className="text-white/80">
                Known for transparent leadership and execution excellence, he
                drives Midis toward global innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

     
     
  
     {/* ------------------------------------------------------------
    OUR TEAM HEADER + DESCRIPTION (RESPONSIVE)
------------------------------------------------------------ */}
<section className="page-section py-10 bg-[#0b0b0b] text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
    <div className="team-carousel-heading mb-4">
      <h2
        className="
          text-4xl sm:text-5xl lg:text-[5rem]
          leading-tight sm:leading-none
          font-bold uppercase tracking-tight
        "
      >
        {"OUR TEAM".split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </h2>
    </div>

    <p className="team-carousel-text text-white/80 max-w-3xl text-sm sm:text-base">
     At Midis, we believe great ideas aren’t born by chance — they’re built by people with passion, creativity, and dedication. Our team is more than a group of professionals; we are collaborators, innovators, and problem-solvers who genuinely care about delivering meaningful impact for our clients. Together, we bring diverse skills and perspectives to the table, turning challenges into opportunities and ideas into results. United by a shared vision, we work hand in hand to create solutions that not only meet expectations but inspire growth and lasting success. What sets us apart is our commitment to blending creativity with strategy, ensuring that every project is not only beautifully designed but also practical, purposeful, and aligned with business goals. We believe in listening closely, adapting quickly, and pushing boundaries to create digital experiences that truly make a difference. For us, success is not just about completing a project — it’s about building lasting partnerships and helping our clients grow with confidence in an ever-evolving digital world.
    </p>
  </div>
</section>

{/* ------------------------------------------------------------
    TEAM CAROUSEL (RESPONSIVE)
------------------------------------------------------------ */}
<section className="page-section py-16 bg-[#0b0b0b] text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
    <Carousel
      opts={{ loop: true, align: "center" }}
      setApi={setEmblaApi}
      className="py-4 sm:py-8"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <CarouselContent className="-ml-3">
        {[
          {
            img: "https://www.midis.in/image/Alin.jpg",
            name: "Alin Mishra",
            role: "Shopify Developer",
            bio: "Specialist in Shopify storefronts, custom themes, and ecommerce optimization.",
            skills: ["Shopify", "Liquid", "Frontend", "Speed Optimization"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/member1.jpg",
            name: "Swayam Gandhi",
            role: "Backend Developer",
            bio: "Experienced in Node.js, databases, and API architecture for scalable systems.",
            skills: ["Node.js", "MongoDB", "Express", "API Systems"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/shiviiii.png",
            name: "Shivani Dixit",
            role: "Front-end Developer",
            bio: "Expert in responsive UI, animations, and frontend systems using React.",
            skills: ["React", "GSAP", "UI/UX", "JavaScript"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/member4.jpg",
            name: "Rahul Gehlot",
            role: "Graphic Designer",
            bio: "Creative designer focused on brand identity, ads, and digital graphics.",
            skills: ["Illustrator", "Photoshop", "Brand Identity"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/member6.jpg",
            name: "Navkirat Bhogal",
            role: "SEO Specialist",
            bio: "SEO strategist improving organic visibility, keyword ranking, and authority.",
            skills: ["SEO", "Content Strategy", "Keywords"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/member3.jpg",
            name: "Chanda",
            role: "Graphic Designer",
            bio: "Creates compelling visuals and brand graphics across digital platforms.",
            skills: ["Graphic Design", "Branding"],
            social: { linkedin: "#", instagram: "#" }
          },
          {
            img: "https://www.midis.in/image/member2.jpg",
            name: "Ojaswini Saini",
            role: "Graphic Designer",
            bio: "Focused on creative design, UI graphics, and brand communication.",
            skills: ["Illustrator", "Brand Graphics"],
            social: { linkedin: "#", instagram: "#" }
          }
        ].map((m) => (
          <CarouselItem
            key={m.name}
            className="
              basis-full
              sm:basis-1/2
              md:basis-1/3
              lg:basis-1/4
              pl-3
            "
          >
            <div
              onClick={() => setSelectedMember(m)}
              className="
                w-full max-w-xs sm:max-w-sm mx-auto
                p-5 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]
                rounded-lg shadow-xl text-center team-card
                border border-orange-500/30
                hover:border-orange-400/60
                transition-all duration-300
                hover:shadow-2xl hover:shadow-orange-500/20
              "
            >
              <div
                className="
                  w-full h-64 sm:h-72
                  rounded-md overflow-hidden mb-4
                  bg-black flex items-center justify-center
                  border border-orange-500/20
                  px-3 py-3
                "
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="
                    w-full h-full
                    object-contain
                    grayscale
                    transition-transform duration-300 hover:scale-105
                  "
                />
              </div>
              <div className="font-bold text-white mb-1 text-lg tracking-wide">
                {m.name}
              </div>
              <div className="text-sm text-orange-300 mb-1 font-semibold">
                {m.role}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden sm:flex absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2" />
      <CarouselNext className="hidden sm:flex absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2" />
    </Carousel>

    {selectedMember && (
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    )}
  </div>
</section>


      {/* ------------------------------------------------------------
          STATS / COUNTERS SECTION
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">

          <h3 className="text-4xl font-semibold mb-12">Our Impact</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div>
              <h3 className="text-5xl font-bold text-orange-400 counter" data-target="120">
                100+
              </h3>
              <p className="mt-2 text-white/70">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-orange-400 counter" data-target="15">
                50+
              </h3>
              <p className="mt-2 text-white/70">Countries Served</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-orange-400 counter" data-target="5">
                5+
              </h3>
              <p className="mt-2 text-white/70">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-orange-400 counter" data-target="98">
                100%
              </h3>
              <p className="mt-2 text-white/70">Client Satisfaction (%)</p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          PROMISE (CONTINUES IN PART 4)
------------------------------------------------------------ */}
      {/* ------------------------------------------------------------
          OUR PROMISE
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-black promise">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          <h3 className="text-4xl font-semibold mb-10 text-white">Our Promise</h3>

          <ul className="list-disc pl-5 space-y-3 text-white/80 marker:text-orange-400">
            <li>Transparent communication and honest work</li>
            <li>Quality that matches global standards</li>
            <li>Dedicated support at every step</li>
            <li>A digital presence that reflects and strengthens your brand</li>
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------
          CTA SECTION
      ------------------------------------------------------------ */}
      <CTASection />

      {/* ------------------------------------------------------------
          DIGITAL SERVICES SECTION
      ------------------------------------------------------------ */}
      <ServicesSection />

      {/* ------------------------------------------------------------
          UNIQUE QUALITIES
      ------------------------------------------------------------ */}
      <section className="page-section py-20 bg-[#0b0b0b]">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          <h4 className="text-3xl font-semibold mb-10 text-white">Our Unique Qualities</h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-orange-500/20">
              <div className="font-semibold mb-2 text-white">Global Reach</div>
              <div className="text-sm text-white/80">
                We work with brands across countries, industries and languages.
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-orange-500/20">
              <div className="font-semibold mb-2 text-white">Experienced Team</div>
              <div className="text-sm text-white/80">
                Our team consists of designers, developers, marketers and strategists.
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-orange-500/20">
              <div className="font-semibold mb-2 text-white">Transparent Reporting</div>
              <div className="text-sm text-white/80">
                You always know what’s happening with your work — clearly & honestly.
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-orange-500/20">
              <div className="font-semibold mb-2 text-white">Customized Funnels</div>
              <div className="text-sm text-white/80">
                Tailored marketing funnels designed to convert your audience.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          FOOTER
      ------------------------------------------------------------ */}
      <Footer />

    </main>
  );
};

export default About;