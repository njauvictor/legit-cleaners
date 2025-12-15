import { initialData } from "@/lib/db-data";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {  } from "./ScrollAnimationWrapper";

export default function Services() {
  const { services } = initialData;

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star size={14} /> PREMIUM SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              Comprehensive cleaning and fumigation services tailored to your specific needs
            </p>
          </div>

          {/* Service Cards Grid */}
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Image Container */}
                <div className="relative h-96 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-4">
                  <Image 
                    src={service.image} 
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
            
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Details Preview */}
                  <div className="mb-6">
                   
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                      {service.details}
                    </p>
                  </div>
                  <Link href='/services'>
                    <Button className="mt-6 cursor-pointer" >
                      Learn More
                           </Button>
                  </Link>
                 
               

                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
              </div>
              ))}
            </div>
          </>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Can't find what you're looking for? We offer custom solutions!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-slate-700 dark:to-slate-900 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
