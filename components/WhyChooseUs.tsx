import { initialData } from "@/lib/db-data";
import { Star, Zap, Shield, Award } from "lucide-react";

export default function WhyChooseUs() {


const { company } = initialData





  return (
    <>
      
    
            {/* WHY CHOOSE US - Trust Section */}
            <section className="py-20 md:py-24 bg-gray-100 dark:bg-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12  py-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance ">Why Choose <span className="text-primary">Legit </span> Cleaners?</h2>
                  <p className="text-xl text-gray-400 dark:text-gray-300 max-w-3xl mx-auto text-balance mt-2 ">
                    We deliver excellence in every detail with unmatched professionalism
                  </p>
                </div>
    
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="bg-secondary/10 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Star className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Professional Team</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm ">
                      Trained and certified specialists with years of industry experience
                    </p>
                  </div>
    
                  <div className="bg-secondary/10 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Zap className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Quick & Efficient</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Fast service without compromising quality or attention to detail
                    </p>
                  </div>
    
                  <div className="bg-secondary/10 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Shield className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Safe & Eco-Friendly</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Using safe and environmentally friendly products for peace of mind
                    </p>
                  </div>
    
                  <div className="bg-secondary/10 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Award className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Affordable Pricing</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Premium service at competitive prices, starting from {company.startingPrice}
                    </p>
                  </div>
                  </div>
              </div>
            </section>
            </>
  )
  }
