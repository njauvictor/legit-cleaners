import { StaggerAnimationWrapper } from "./ScrollAnimationWrapper";

export default function BeforeAndAfter()  {


    return (
        <>
        
        {/* BEFORE & AFTER GALLERY */}
        <section className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12 xl:px-20 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">See The Difference</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                Stunning before and after transformations from our recent projects
              </p>
            </div>

            <StaggerAnimationWrapper>
              <div className="grid md:grid-cols-2 gap-8">
                {[
            
                {
                  before: "/messy-home-before-cleaning.jpg",
                  after: "/spotless-home-after-cleaning.jpg",
                  title: "Home Deep Clean",
                },
                {
                  before: "/dirty-carpet-before-shampooing.jpg",
                  after: "/clean-carpet-after-shampooing.jpg",
                  title: "Carpet Restoration",
                },
                {
                  before: "/dirty-restaurant-kitchen-before.jpg",
                  after: "/clean-commercial-kitchen-after.jpg",
                  title: "Kitchen Cleaning",
                },
           
                {
                  before: "/dirty-sofa-upholstery-before.jpg",
                  after: "/clean-sofa-upholstery-after.jpg",
                  title: "Upholstery Cleaning",
                },

                {
                    before: "/before-toilet.jpg",
                    after: "/after-toilet.jpg",
                    title: "Toilet Cleaning",
                },

                //sink

                {
                    before: "/before-sink.jpg",
                    after: "/after-sink.jpg",
                    title: "Sink Cleaning",

                  }
                ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-slate-700">
                    <div className="absolute inset-0 flex">
                      {/* Before */}
                      <div className="flex-1 relative">
                        <img
                          src={item.before || "/placeholder.svg"}
                          alt={`${item.title} Before`}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Before
                        </span>
                      </div>
                      {/* After */}
                      <div className="flex-1 relative transition-opacity duration-500">
                        <img
                          src={item.after || "/placeholder.svg"}
                          alt={`${item.title} After`}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-primary text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                          After
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </StaggerAnimationWrapper>
          </div>
        </section>
        
        
        </>
    )
}
