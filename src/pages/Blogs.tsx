import React from "react";
import { motion } from "framer-motion";
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
const Blog = () => {
  return (
    <>
      <Navigation />
      {/* ================= HERO BLOG SECTION ================= */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-20 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT CONTENT */}
          

{/* ================= LEFT CONTENT ================= */}
<div>
  {/* HEADING: TOP → BOTTOM */}
  <motion.h1
    initial={{ opacity: 0, y: -80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      ease: "easeOut",
    }}
    className="text-[110px] leading-[1.05] font-extrabold text-black"
  >
    Global Stories <br /> & Articles
  </motion.h1>

  {/* PARAGRAPH: LEFT → RIGHT */}
  <motion.p
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    }}
    className="mt-8 text-[20px] text-gray-600 max-w-lg"
  >
    A place to read, write, and deepen your understanding
  </motion.p>
</div>
            {/* RIGHT STACKED CARDS */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-8 right-8 w-[400px] h-[480px] rounded-3xl bg-white shadow-xl rotate-[6deg]" />
              <div className="absolute top-4 right-4 w-[400px] h-[480px] rounded-3xl bg-white shadow-xl rotate-[3deg]" />

              <div className="relative z-10 w-[440px] bg-white rounded-3xl shadow-2xl p-6">
                <div className="relative">
                  <img
                    src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6731ad04586bcad28450e232_card-thumb-1-p-500.jpg"
                    className="w-full h-[240px] object-cover rounded-2xl"
                    alt=""
                  />
                  <span className="absolute top-4 left-4 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow">
                    Social Issues
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-[20px] font-bold text-black">
                    The importance of A/B testing your website for optimal results
                  </h3>

                  <div className="flex gap-5 mt-4 text-sm text-gray-500">
                    <span>📅 November 11, 2024</span>
                    <span>⏱ 8 mins</span>
                  </div>

                  <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm">
                    Read more →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RECENT BLOGS (BLACK) ================= */}
      <section className="w-full bg-black">
        <div className="max-w-[1400px] mx-auto px-20 pb-36">

          <h2 className="text-[26px] font-semibold text-white mb-14">
            Recent Blogs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            {/* LEFT LARGE CARD */}
            <div className="rounded-3xl overflow-hidden bg-[#1A1A1A]">
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a182c39026fe235e8e2_blog-thumb-1-p-800.jpg"
                  className="w-full h-[320px] object-cover"
                  alt=""
                />
                <span className="absolute top-5 left-5 bg-white text-black text-sm px-4 py-1 rounded-full">
                  Technology
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-[22px] text-white font-semibold">
                  Boost your online sales with these top conversion strategies
                </h3>

                <p className="text-sm text-gray-400 mt-4">
                  Courtney Henry · November 10, 2024 · 2 min read
                </p>

                <button className="mt-7 bg-white text-black px-6 py-3 rounded-full text-sm">
                  Read more →
                </button>
              </div>
            </div>

            {/* RIGHT LIST */}
            <div className="lg:col-span-2 flex flex-col gap-14">
              {[
                {
                  tag: "Lifestyle",
                  title:
                    "The ultimate guide to creating a standout portfolio in 2024",
                  img:
                    "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309e63cdf19828e75269ab_blog-thumb-2-p-500.jpg",
                  read: "7 min read",
                },
                {
                  tag: "Science",
                  title:
                    "How to optimize your website for faster loading times",
                  img:
                    "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ed67742ac6d01e2b35e_blog-thumb-3-p-500.jpg",
                  read: "4 min read",
                },
                {
                  tag: "Hobbies",
                  title:
                    "5 design trends shaping the future of digital experiences",
                  img:
                    "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
                  read: "5 min read",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="relative shrink-0">
                    <img
                      src={item.img}
                      className="w-[150px] h-[150px] rounded-2xl object-cover"
                      alt=""
                    />
                    <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-white text-[18px] font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-3">
                      November 10, 2024 · {item.read}
                    </p>
                    <button className="mt-4 border border-gray-600 text-white px-5 py-2 rounded-full text-sm">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG CATEGORIES ================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-20 py-32 text-center">

          <h2 className="text-[22px] font-semibold mb-8  text-black">
            Blog Categories
          </h2>

         <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
  {[
    "Hobbies","Gaming","Automotive","Pet Care","Science","Work Life",
    "Social Issues","Entertainment","Travel & Culture","Technology","Lifestyle"
  ].map((cat, i) => (
    <button
      key={i}
      className="
        px-4 py-2
        text-sm
        text-black
        border border-gray-300
        rounded-full
        hover:bg-black hover:text-white
        transition
      "
    >
      {cat}
    </button>
  ))}
</div>


          {/* ================= FEATURED BLOGS ================= */}
         <div className="mt-32 text-left text-black">
  <div className="flex justify-between mb-10">
    <h3 className="text-[24px] font-semibold">Featured Blogs</h3>
    <button className="border px-4 py-2 rounded-full text-sm">
      View All →
    </button>
  </div>

  {/* IMAGES ARRAY */}
  {(() => {
    const images = [
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a182c39026fe235e8e2_blog-thumb-1-p-800.jpg",
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309e63cdf19828e75269ab_blog-thumb-2-p-500.jpg",
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ed67742ac6d01e2b35e_blog-thumb-3-p-500.jpg",
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309ef95d1f44a4dacde997_blog-thumb-4-p-500.jpg",
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309f2095a42e42d087b84a_blog-thumb-5-p-500.jpg",
      "https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67309fe4f40f98fed8fa93aa_blog-thumb-10-p-500.jpg",
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, i) => (
          <div key={i} className="rounded-3xl bg-[#F3EEE9] overflow-hidden">
            <img
              src={img}
              className="w-full h-[260px] object-cover"
              alt=""
            />
            <div className="p-6">
              <h4 className="text-[18px] font-semibold">
                How to balance creativity and functionality in web design
              </h4>
              <p className="text-sm text-gray-500 mt-3">
                November 10, 2024 · 6 min read
              </p>
              <button className="mt-5 border px-4 py-2 rounded-full text-sm">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  })()}
</div>

        </div>
      </section>
       <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-20 py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team discussion"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* HEADING */}
            <h2 className="text-[32px] font-semibold text-black leading-tight max-w-md">
              About us and why we write for you?
            </h2>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6 mt-8 max-w-sm">

              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt=""
                  className="w-full h-[140px] object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                  alt=""
                  className="w-full h-[140px] object-cover"
                />
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-gray-500 leading-relaxed mt-6 max-w-md">
              Where technology meets lifestyle and business insights.
              Our blog is dedicated to delivering the latest trends,
              informative articles, and expert opinions on a diverse
              range of topics.
            </p>

            {/* BUTTON */}
            <button className="mt-8 inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition">
              Read more →
            </button>

          </div>
        </div>

      </div>
    </section>
       <Footer />
    </>
  );
};

export default Blog;
