import React from "react";
import { motion } from "framer-motion";
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Blog = () => {
  return (
    <>
      <Navigation />

      {/* ================= HERO BLOG SECTION - MOBILE FIRST ================= */}
      <section className="w-full bg-white overflow-hidden">
        {/* Mobile-first container with responsive padding */}
        <div className="container-responsive section-spacing-lg">
          {/* Grid: Stack on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">

            {/* LEFT CONTENT - Always shows first on mobile */}
            <div className="order-1">
              {/* Responsive heading: Mobile-first scaling */}
              <motion.h1
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="text-heading-lg text-black"
              >
                Global Stories <br className="hidden sm:block" /> & Articles
              </motion.h1>

              {/* Responsive paragraph */}
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="mt-4 sm:mt-6 md:mt-8 text-body text-gray-600 max-w-lg"
              >
                A place to read, write, and deepen your understanding
              </motion.p>
            </div>

            {/* RIGHT STACKED CARDS - Shows second on mobile */}
            <div className="order-2 relative flex justify-center lg:justify-end">
              {/* Background cards - Hidden on mobile, visible on tablet+ */}
              <div className="hidden sm:block absolute top-8 right-8 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-[5/6] rounded-2xl md:rounded-3xl bg-white shadow-xl rotate-[6deg]" />
              <div className="hidden sm:block absolute top-4 right-4 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-[5/6] rounded-2xl md:rounded-3xl bg-white shadow-xl rotate-[3deg]" />

              {/* Main card - Responsive sizing */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[440px] bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-5 md:p-6">
                <div className="relative">
                  <img
                    src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/6731ad04586bcad28450e232_card-thumb-1-p-500.jpg"
                    className="w-full aspect-[4/3] object-cover rounded-xl md:rounded-2xl"
                    alt="Featured blog article"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white text-black text-xs sm:text-sm font-semibold px-3 py-1 md:px-4 rounded-full shadow">
                    Social Issues
                  </span>
                </div>

                <div className="mt-4 md:mt-5">
                  <h3 className="text-heading-sm text-black">
                    The importance of A/B testing your website for optimal results
                  </h3>

                  <div className="flex flex-wrap gap-3 sm:gap-5 mt-3 md:mt-4 text-caption text-gray-500">
                    <span>📅 November 11, 2024</span>
                    <span>⏱ 8 mins</span>
                  </div>

                  <button className="mt-4 md:mt-6 bg-black text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RECENT BLOGS - MOBILE FIRST ================= */}
      <section className="w-full bg-black">
        <div className="container-responsive section-spacing-lg">

          {/* Section heading */}
          <h2 className="text-heading-md text-white mb-8 sm:mb-10 md:mb-14">
            Recent Blogs
          </h2>

          {/* Blog grid - Mobile first: 1 col → 2 cols (tablet) → 3 cols (desktop) */}
          <div className="grid-3-col">

            {/* Blog Card 1 */}
            <article className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#1A1A1A] hover:bg-[#222] transition-colors">
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a182c39026fe235e8e2_blog-thumb-1-p-800.jpg"
                  className="w-full aspect-[16/10] object-cover"
                  alt="Blog thumbnail"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                  Design
                </span>
              </div>

              <div className="element-padding-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                  How to create stunning visual designs
                </h3>
                <p className="text-caption text-gray-400 mb-3 md:mb-4 line-clamp-2">
                  Learn the essential principles of visual design that will elevate your creative work.
                </p>

                <div className="flex items-center justify-between text-caption text-gray-500">
                  <span>📅 Nov 10, 2024</span>
                  <span>⏱ 5 mins</span>
                </div>

                <button className="mt-4 md:mt-5 w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 md:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                  Read Article
                </button>
              </div>
            </article>

            {/* Blog Card 2 */}
            <article className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#1A1A1A] hover:bg-[#222] transition-colors">
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a18f359e3de76889259_blog-thumb-2-p-800.jpg"
                  className="w-full aspect-[16/10] object-cover"
                  alt="Blog thumbnail"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                  Development
                </span>
              </div>

              <div className="element-padding-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                  Modern web development practices
                </h3>
                <p className="text-caption text-gray-400 mb-3 md:mb-4 line-clamp-2">
                  Explore the latest tools and techniques shaping the future of web development.
                </p>

                <div className="flex items-center justify-between text-caption text-gray-500">
                  <span>📅 Nov 9, 2024</span>
                  <span>⏱ 7 mins</span>
                </div>

                <button className="mt-4 md:mt-5 w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 md:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                  Read Article
                </button>
              </div>
            </article>

            {/* Blog Card 3 */}
            <article className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#1A1A1A] hover:bg-[#222] transition-colors">
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/6730614b3d201ddcf88f344b/67308a18e8d7e1c06df02cb6_blog-thumb-3-p-800.jpg"
                  className="w-full aspect-[16/10] object-cover"
                  alt="Blog thumbnail"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                  Marketing
                </span>
              </div>

              <div className="element-padding-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                  Digital marketing strategies that work
                </h3>
                <p className="text-caption text-gray-400 mb-3 md:mb-4 line-clamp-2">
                  Discover proven marketing tactics to grow your online presence and reach.
                </p>

                <div className="flex items-center justify-between text-caption text-gray-500">
                  <span>📅 Nov 8, 2024</span>
                  <span>⏱ 6 mins</span>
                </div>

                <button className="mt-4 md:mt-5 w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 md:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                  Read Article
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ================= ALL BLOGS - MOBILE FIRST ================= */}
      <section className="w-full bg-white">
        <div className="container-responsive section-spacing-lg">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-heading-md text-black">
              All Blog Posts
            </h2>

            {/* Filter buttons - Stack on mobile, row on tablet+ */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button className="px-4 py-2 text-xs sm:text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                All
              </button>
              <button className="px-4 py-2 text-xs sm:text-sm font-medium bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-colors">
                Design
              </button>
              <button className="px-4 py-2 text-xs sm:text-sm font-medium bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-colors">
                Development
              </button>
              <button className="px-4 py-2 text-xs sm:text-sm font-medium bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-colors">
                Marketing
              </button>
            </div>
          </div>

          {/* Blog grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
          <div className="grid-3-col">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1600000000000 + i * 1000000}?auto=format&fit=crop&w=800&q=80`}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={`Blog post ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="element-padding-sm">
                  <span className="inline-block text-xs sm:text-sm font-medium text-orange-500 mb-2">
                    {i % 3 === 0 ? 'Design' : i % 3 === 1 ? 'Development' : 'Marketing'}
                  </span>

                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 group-hover:text-orange-500 transition-colors">
                    Blog Post Title {i + 1}
                  </h3>

                  <p className="text-caption text-gray-600 mb-4 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>

                  <div className="flex items-center justify-between text-caption text-gray-500">
                    <span>📅 Nov {7 - i}, 2024</span>
                    <span>⏱ {4 + i} mins</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more button */}
          <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
            <button className="btn-responsive-lg bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Load More Articles
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
