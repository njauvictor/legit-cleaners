import Header from "@/components/header"
import Footer from "@/components/footer"
import Portfolio from "@/components/Portfolio"

export default function PortfolioPage() {


  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Full Screen */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center justify-center overflow-hidden">
         {/* Background Image with Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/40 to-accent/10">
    {/* Replace this with your actual image */}
    <div 
      className="absolute inset-0 bg-[url('/clean-commercial-kitchen-after.jpg')] bg-cover bg-center bg-no-repeat opacity-80"
      style={{
        backgroundImage: "url('/clean-commercial-kitchen-after.jpg')", // Replace with your image path
      }}
    />
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
  </div>
         
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-balance">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance">
              See the transformation we've delivered for hundreds of satisfied clients
            </p>
          </div>
        </section>


        {/* Portfolio Grid */}
    <Portfolio />


        {/* CTA */}
        <section className="bg-secondary text-slate-800 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">Ready for Your Transformation?</h2>
            <p className="text-lg text-accent mb-8 text-balance">Let's discuss how we can make your space spotless</p>
            <a
              href="/contact"
              className="inline-block bg-accent text-slate-900 font-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
