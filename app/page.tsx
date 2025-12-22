"use client"
import Footer from "@/components/footer"
import Link from "next/link"
import { initialData } from "@/lib/db-data"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/Hero"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import BeforeAndAfter from "@/components/BeforeAndAfter"
import Portfolio from "@/components/Portfolio"

export default function Home() {
  const { company } = initialData


 

 
  return (
    <>
   
      <main>

        <Hero />

          <WhyChooseUs />
        

        
          <Services />
        
          <BeforeAndAfter />
          <Portfolio />
        
      

        {/* CTA SECTION */}
        
          <section className="bg-accent/90 py-20 text-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12 xl:px-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">Ready for a Spotless Space?</h2>
            <p className="text-lg md:text-xl mb-8 text-balance opacity-90">
              Get professional cleaning services starting from {company.startingPrice}. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${company.phone}`}
                className="bg-slate-900 text-primary font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Call {company.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-slate-900 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-slate-900 hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  )
}
