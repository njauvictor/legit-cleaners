import { initialData } from "@/lib/db-data";
import { ArrowRight, Award, Clock, Link as LinkIcon, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Happy Clients", icon: <Sparkles className="w-5 h-5" /> },
    { value: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { value: "5+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
    { value: "24/7", label: "Customer Support", icon: <Zap className="w-5 h-5" /> },
  ];  

  const { home, company } = initialData;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div 
          className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"
          style={{
            animation: "pulse 4s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-10"
          style={{
            animation: "float 6s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-10"
          style={{
            animation: "float 8s ease-in-out infinite 2s"
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        ></div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(5px) translateX(-10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6"
              style={{ animation: "fadeIn 1s ease-out" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm ">
                ✨ Professional Cleaning & Fumigation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl  font-bold leading-tight ">
              The Best <span className="text-primary">Cleaning & Fumigation</span> Service Provider in Nairobi          
                 
            </h1>

            {/* Description */}
            <p className="text-sm text-gray-300 max-w-xl ">
              {home.hero.subtitle} Trusted by over 500+ satisfied clients across Nairobi and beyond. 
              We deliver exceptional results with eco-friendly solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 md:gap-6">
           <Link href='/contact'>
           <Button size="lg" variant="default" className="text-sm py-4">

            Get Free Quote
           </Button>
           </Link>

           <Link href='/portfolio'>
           <Button size="lg" variant="ghost" className="text-sm border border-accent py-4 text-accent bg:transparent">

            Our Projects
           </Button>
           </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Professional Team
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Award Winning
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Quality Service
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image/Media */}
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-[5/5] rounded-3xl overflow-hidden group">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 shadow-2xl"
                style={{
                  boxShadow: "0 0 60px rgba(251, 191, 36, 0.2)"
                }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
              <Image
                src="/hero-clean.jpg"
                width={200}
                height={300}
                alt="Professional cleaning in progress"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div 
                className="absolute top-6 right-6 bg-secondary/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl"
                style={{
                  animation: "float 6s ease-in-out infinite"
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">100%</div>
                  <div className="text-xs text-white">Satisfaction Score</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-24 pt-12 border-t border-gray-700/50">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-primary opacity-70 group-hover:opacity-100 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-primary mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}