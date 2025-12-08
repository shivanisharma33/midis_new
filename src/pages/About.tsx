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
  type CarouselApi,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------
    TYPES
------------------------------------------------------------ */

type TeamMember = {
  img: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  social?: {
    linkedin?: string;
    instagram?: string;
  };
};

type TeamModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

/* ------------------------------------------------------------
    TEAM MODAL COMPONENT (FULL VERSION)
------------------------------------------------------------ */

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
        ease: "power3.out",
      }
    );
  }, []);

  if (!member) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-orange-500/30 bg-[#050505] text-white shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-white hover:text-orange-400 transition-colors"
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg">
            <img
              src={member.img}
              alt={member.name}
              className="h-[420px] w-full object-cover"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-2xl font-semibold">{member.name}</h3>
            <p className="mb-4 font-medium text-orange-400">{member.role}</p>

            <p className="mb-4 text-sm text-white/80">{member.bio}</p>

            {/* SKILLS */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-white/70">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SOCIAL LINKS */}
            {member.social && (
              <div className="mt-4 flex gap-4 text-sm">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-orange-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-orange-400 transition-colors"
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

const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  /* -----------------------------------------------
      AUTOPLAY FOR CAROUSEL
  ----------------------------------------------- */
  const startAutoplay = () => {
    if (!emblaApi) return;
    if (autoplayRef.current) return;
    autoplayRef.current = window.setInterval(() => emblaApi.scrollNext(), 2800);
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
      gsap.from(".page-section", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
      });

      /* 3D Hover Tilt for leadership images */
      const tiltElements = document.querySelectorAll(".tilt-image");
      tiltElements.forEach((el) => {
        el.addEventListener("mousemove", (e: any) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(el, {
            rotateY: x / 25,
            rotateX: -y / 25,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      });

      /* Parallax Hero Scroll (kept for consistency if hero exists) */
      gsap.to(".parallax-up", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* -----------------------------------------------
      AUTOPLAY INIT WHEN CAROUSEL READY
  ----------------------------------------------- */
  useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);

  return (
    <>
      <Navigation />

      <main
        ref={pageRef}
        className="min-h-screen overflow-hidden bg-black text-white"
      >
        {/* HERO SPACER */}
        <div className="h-20" />

        {/* ------------------------------------------------------------
            WHAT WE DO
        ------------------------------------------------------------ */}
        <section className="page-section py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h3 className="mb-10 text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                What We Do
              </span>
            </h3>

            <div className="grid gap-12 md:grid-cols-2">
              {/* TEXT */}
              <div className="space-y-5 text-sm sm:text-base text-neutral-200">
                <p className="text-neutral-200">
                  At Midis, we provide end-to-end digital solutions designed to
                  help you build, grow, and scale your business with strategic
                  clarity and powerful execution.
                </p>

                <ul className="list-disc space-y-2 pl-6 text-neutral-200">
                  <li>
                    <strong>Web Development &amp; Design</strong> — Modern,
                    responsive, SEO-friendly websites built for performance.
                  </li>
                  <li>
                    <strong>Brand Identity &amp; Graphic Design</strong> —
                    Complete visual identity systems that bring your brand to
                    life.
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
                <div className="tilt-image w-full max-w-md overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 via-black to-black shadow-2xl">
                  <img
                    src="https://www.midis.in/image/new.jpg"
                    className="h-72 w-full object-cover"
                    alt="What We Do"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-neutral-300">
              We handle everything under one roof — strategy, development,
              branding, content, marketing, and automation.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------
            WHY CHOOSE MIDIS
        ------------------------------------------------------------ */}
        <section className="page-section bg-neutral-950 py-20 why-choose-midis">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h3 className="mb-10 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {"Why Choose Midis".split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Dedicated Support",
                  text: "We guide you with clarity, strategic direction, and reliable communication through every stage of your digital journey.",
                },
                {
                  title: "Advanced Tools",
                  text: "We leverage modern technologies, automation, and data-powered systems to deliver growth.",
                },
                {
                  title: "Transparent Process",
                  text: "No hidden costs or vague deliverables — everything is clear, measurable, and accessible.",
                },
                {
                  title: "Custom Solutions",
                  text: "Every brand is unique. We tailor strategies and executions to match your goals and audience.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-card group rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70 hover:bg-neutral-900/80 hover:shadow-orange-500/20"
                >
                  <h5 className="mb-2 font-semibold text-white">
                    {card.title}
                  </h5>
                  <p className="text-sm text-neutral-300">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            MISSION & VISION (GLASSMORPHISM)
        ------------------------------------------------------------ */}
        <section className="page-section relative bg-black py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h3 className="mb-10 text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Mission &amp; Vision
              </span>
            </h3>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Mission */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl transition-all hover:shadow-orange-500/10">
                <h5 className="mb-3 text-xl font-semibold">Mission</h5>
                <p className="text-sm text-white/75">
                  To empower businesses of all sizes with world-class digital
                  solutions that drive real, measurable growth.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl transition-all hover:shadow-orange-500/10">
                <h5 className="mb-3 text-xl font-semibold">Vision</h5>
                <p className="text-sm text-white/75">
                  To create a world where every business has equal opportunity
                  to scale digitally with modern, powerful, and sustainable
                  systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            APPROACH
        ------------------------------------------------------------ */}
        <section className="page-section bg-black py-20 approach">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h3 className="mb-10 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Our Approach
            </h3>

            <ol className="space-y-4 text-sm sm:text-base text-neutral-200">
              <li>
                <strong className="text-white">Listen:</strong> We begin by
                deeply understanding your goals, audience, and challenges.
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
                <strong className="text-white">Optimize &amp; Scale:</strong>{" "}
                Data-driven insights help us refine and scale what works best.
              </li>
            </ol>

            <p className="mt-6 text-sm sm:text-base text-neutral-300">
              We believe in partnership, not transactions. Your growth is our
              goal.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------
            LEADERSHIP SECTION (WITH GSAP 3D TILT)
        ------------------------------------------------------------ */}
        <section className="page-section bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            {/* Main heading */}
            <h3 className="mb-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              The people behind the work
            </h3>
            <p className="mb-12 text-sm italic text-neutral-400">
              "Together, we are more than a team — we are creators, thinkers,
              and builders."
            </p>

            {/* Gaurav */}
            <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
              {/* Text */}
              <div className="team-lead-card space-y-4 text-sm sm:text-base text-neutral-200">
                <h4 className="text-2xl font-semibold">Gaurav Sharma</h4>
                <p className="font-medium text-orange-400">CEO &amp; Director</p>

                <p>
                  Gaurav Sharma leads Midis with a vision to merge creativity,
                  innovation, and measurable digital growth.
                </p>

                <p>
                  His strategic background spans digital transformation,
                  branding, full-stack development, marketing systems, and
                  scalable solutions.
                </p>

                <p>
                  Gaurav also contributes significantly at Mining Discovery,
                  guiding content and platform growth across global mining
                  industries.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="tilt-image team-lead-card w-full max-w-md overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-neutral-900 via-black to-black shadow-2xl">
                  <img
                    src="https://www.midis.in/image/Untitled%20design%20(3).png"
                    alt="Gaurav Sharma"
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Sagar */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Image */}
              <div className="order-2 flex justify-center md:order-1">
                <div className="tilt-image team-lead-card w-full max-w-md overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-neutral-900 via-black to-black shadow-2xl">
                  <img
                    src="https://www.midis.in/image/Sagar%20bakshi.jpg"
                    alt="Sagar Bakshi"
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="team-lead-card order-1 space-y-4 text-sm sm:text-base text-neutral-200 md:order-2">
                <h4 className="text-2xl font-semibold">Sagar Bakshi</h4>
                <p className="font-medium text-orange-400">
                  Managing Director
                </p>

                <p>
                  Sagar specializes in AI-driven systems, automation, and
                  end-to-end digital growth strategies.
                </p>

                <p>
                  From ecommerce brands to industry-specific platforms like
                  Mining Discovery, Sagar ensures every project has long-term
                  scalability.
                </p>

                <p>
                  Known for transparent leadership and execution excellence, he
                  drives Midis toward global innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            OUR TEAM HEADER + DESCRIPTION
        ------------------------------------------------------------ */}
        <section className="page-section bg-neutral-950 py-10 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
            <div className="team-carousel-heading mb-4">
              <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-[5rem] leading-tight sm:leading-none">
                {"OUR TEAM".split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </h2>
            </div>

            <p className="team-carousel-text max-w-3xl text-sm text-neutral-300 sm:text-base">
              At Midis, we believe great ideas aren’t born by chance — they’re
              built by people with passion, creativity, and dedication. Our team
              is more than a group of professionals; we are collaborators,
              innovators, and problem-solvers who genuinely care about
              delivering meaningful impact for our clients. Together, we bring
              diverse skills and perspectives to the table, turning challenges
              into opportunities and ideas into results. United by a shared
              vision, we work hand in hand to create solutions that not only
              meet expectations but inspire growth and lasting success. What
              sets us apart is our commitment to blending creativity with
              strategy, ensuring that every project is not only beautifully
              designed but also practical, purposeful, and aligned with business
              goals. We believe in listening closely, adapting quickly, and
              pushing boundaries to create digital experiences that truly make a
              difference. For us, success is not just about completing a
              project — it’s about building lasting partnerships and helping our
              clients grow with confidence in an ever-evolving digital world.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------
            TEAM CAROUSEL
        ------------------------------------------------------------ */}
        <section className="page-section bg-neutral-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
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
                    skills: [
                      "Shopify",
                      "Liquid",
                      "Frontend",
                      "Speed Optimization",
                    ],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/member1.jpg",
                    name: "Swayam Gandhi",
                    role: "Backend Developer",
                    bio: "Experienced in Node.js, databases, and API architecture for scalable systems.",
                    skills: ["Node.js", "MongoDB", "Express", "API Systems"],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/shiviiii.png",
                    name: "Shivani Dixit",
                    role: "Front-end Developer",
                    bio: "Expert in responsive UI, animations, and frontend systems using React.",
                    skills: ["React", "GSAP", "UI/UX", "JavaScript"],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/member4.jpg",
                    name: "Rahul Gehlot",
                    role: "Graphic Designer",
                    bio: "Creative designer focused on brand identity, ads, and digital graphics.",
                    skills: [
                      "Illustrator",
                      "Photoshop",
                      "Brand Identity",
                    ],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/member6.jpg",
                    name: "Navkirat Bhogal",
                    role: "SEO Specialist",
                    bio: "SEO strategist improving organic visibility, keyword ranking, and authority.",
                    skills: ["SEO", "Content Strategy", "Keywords"],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/member3.jpg",
                    name: "Chanda",
                    role: "Graphic Designer",
                    bio: "Creates compelling visuals and brand graphics across digital platforms.",
                    skills: ["Graphic Design", "Branding"],
                    social: { linkedin: "#", instagram: "#" },
                  },
                  {
                    img: "https://www.midis.in/image/member2.jpg",
                    name: "Ojaswini Saini",
                    role: "Graphic Designer",
                    bio: "Focused on creative design, UI graphics, and brand communication.",
                    skills: ["Illustrator", "Brand Graphics"],
                    social: { linkedin: "#", instagram: "#" },
                  },
                ].map((m) => (
                  <CarouselItem
                    key={m.name}
                    className="basis-full pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div
                      onClick={() => setSelectedMember(m)}
                      className="team-card mx-auto w-full max-w-xs rounded-2xl border border-orange-500/30 bg-gradient-to-b from-[#2a2a2a] to-[#141414] p-5 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-500/20 sm:max-w-sm"
                    >
                      <div className="mb-4 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-orange-500/20 bg-black px-3 py-3 sm:h-72">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="h-full w-full scale-100 object-contain grayscale transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="mb-1 text-lg font-bold tracking-wide text-white">
                        {m.name}
                      </div>
                      <div className="mb-1 text-sm font-semibold text-orange-300">
                        {m.role}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute -left-6 top-1/2 hidden -translate-y-1/2 sm:-left-10 sm:flex" />
              <CarouselNext className="absolute -right-6 top-1/2 hidden -translate-y-1/2 sm:-right-10 sm:flex" />
            </Carousel>

            {selectedMember && (
              <TeamModal
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
              />
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------
            STATS / COUNTERS SECTION
        ------------------------------------------------------------ */}
        <section className="page-section bg-black py-20">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
            <h3 className="mb-12 text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Impact
              </span>
            </h3>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3
                  className="counter text-5xl font-bold text-orange-400"
                  data-target="120"
                >
                  100+
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3
                  className="counter text-5xl font-bold text-orange-400"
                  data-target="15"
                >
                  50+
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Countries Served
                </p>
              </div>

              <div>
                <h3
                  className="counter text-5xl font-bold text-orange-400"
                  data-target="5"
                >
                  5+
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3
                  className="counter text-5xl font-bold text-orange-400"
                  data-target="98"
                >
                  100%
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Client Satisfaction (%)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            OUR PROMISE
        ------------------------------------------------------------ */}
        <section className="page-section bg-black py-20 promise">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h3 className="mb-10 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Our Promise
            </h3>

            <ul className="list-disc space-y-3 pl-5 text-sm sm:text-base text-neutral-200 marker:text-orange-400">
              <li>Transparent communication and honest work</li>
              <li>Quality that matches global standards</li>
              <li>Dedicated support at every step</li>
              <li>
                A digital presence that reflects and strengthens your brand
              </li>
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
        <section className="page-section bg-neutral-950 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <h4 className="mb-10 text-3xl font-semibold tracking-tight text-white">
              Our Unique Qualities
            </h4>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Global Reach",
                  text: "We work with brands across countries, industries and languages.",
                },
                {
                  title: "Experienced Team",
                  text: "Our team consists of designers, developers, marketers and strategists.",
                },
                {
                  title: "Transparent Reporting",
                  text: "You always know what’s happening with your work — clearly & honestly.",
                },
                {
                  title: "Customized Funnels",
                  text: "Tailored marketing funnels designed to convert your audience.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70 hover:bg-neutral-900/80"
                >
                  <div className="mb-2 font-semibold text-white">
                    {card.title}
                  </div>
                  <div className="text-sm text-neutral-300">{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------
          FOOTER
      ------------------------------------------------------------ */}
      <Footer />
    </>
  );
};

export default About;