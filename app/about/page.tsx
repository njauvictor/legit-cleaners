"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { initialData } from "@/lib/db-data"
import { CheckCircle, Award, Users, Target } from "lucide-react"
import CTA from "@/components/CTA"
import Image from "next/image"

export default function About() {
  const { about, company } = initialData

  return (
    <>
      <Header />
      <main>
      {/* Hero Section - Full Screen with Background Image */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/about-pic.jpg")',
        /* Alternative cleaner image URLs:
           - 'https://images.unsplash.com/photo-1563453392212-326f5e854473' (modern office cleaning)
           - 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70' (professional cleaner)
           - 'https://images.unsplash.com/photo-1576671417486-6f6e60a8c5d7' (sparkling clean)
        */
      }}
    />
    
    {/* Overlay - Dark gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-primay/10 via-seondary/20 to-secondary/10"></div>
    
    {/* Additional subtle overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
  </div>

  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
    
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03] bg-[size:50px_50px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
    {/* Badge/Years in business */}
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
      <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
      <span className="text-sm font-medium text-primary">Serving since 2018</span>
    </div>

    {/* Main heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-balance">
      
      <span className="relative">
        <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
          About Legit Cleaners
        </span>
       
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-balance mb-10">
      Excellence in cleaning and fumigation services with over a decade of trusted service
    </p>

    {/* Stats or key points */}
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
        <div className="text-sm text-gray-300">Years Experience</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary">5,000+</div>
        <div className="text-sm text-gray-300">Happy Clients</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
        <div className="text-sm text-gray-300">Emergency Service</div>
      </div>
    </div>

    {/* CTA Button */}
    <div className="mt-12">
      <button className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30">
        <span className="relative z-10 text-white">Get Your Free Quote</span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      </button>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
      </div>
    </div>
  </div>
</section>

     {/* About Content - Main Story */}
<section className="py-20 md:py-32 bg-white dark:bg-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="space-y-20">
      {about.sections.map((section, idx) => (
        <div
          key={idx}
          className={`
            flex flex-col gap-10 items-center
            md:flex-row md:items-start
            ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* Text */}
          <div className="w-full md:w-1/2 mt-0 md:mt-12">
            <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-bold text-sm">
                Step {idx + 1}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-balance">
              {section.heading}
            </h2>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-xl overflow-hidden rounded-xl">
              <Image
                src={section.image}
                alt={section.heading}
                width={600}
                height={350}
                className="w-full h-auto object-cover rounded-xl"
                priority={idx === 0}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Core Values */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                The principles that guide every decision and action we take
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {about.values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-600"
                >
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {idx === 0 && <Award className="text-primary" size={32} />}
                    {idx === 1 && <Target className="text-primary" size={32} />}
                    {idx === 2 && <Users className="text-primary" size={32} />}
                    {idx === 3 && <CheckCircle className="text-primary" size={32} />}
                  </div>
                  <h3 className="font-black text-base mb-3 text-primary">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-yellow-400">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <p className="text-slate-800 font-bold text-lg">Happy Clients</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <p className="text-slate-800 font-bold text-lg">Projects Completed</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform">
                  5+
                </div>
                <p className="text-slate-800 font-bold text-lg">Years Experience</p>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 group-hover:scale-110 transition-transform">
                  12+
                </div>
                <p className="text-slate-800 font-bold text-lg">Service Types</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Our Commitment</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
                We're committed to delivering excellence with every service, every time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="font-black text-xl mb-3">Professional Team</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Trained, certified, and dedicated cleaning specialists with years of industry experience
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-black text-xl mb-3">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Using safe, environmentally friendly products that protect your family and the planet
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-black text-xl mb-3">Quick Response</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fast service delivery with 24/7 availability for emergency cleaning needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
       <CTA />
      </main>
      <Footer />
    </>
  )
}
