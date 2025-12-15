import { da, id } from "date-fns/locale"

// Complete database structure for Legit Cleaners website
export const initialData = {
  company: {
    name: "Legit Cleaners",
    tagline: "Premium Cleaning Services for Modern Living",
    phone: "0740 479 221",
    email: "Legitcleaning001@gmail.com",
    location: "Nairobi, Kenya",
    logo: "/logo-legit .svg",
    description: "Professional cleaning services delivering pristine spaces and exceptional results",
    startingPrice: "KSh 2,500",
    socialLinks: {
      facebook: "https://www.facebook.com/legitcleaningkenya",
      whatsapp: "https://wa.me/254740479221",
      instagram: "https://www.instagram.com/legitcleaning/?hl=en",
      tiktok: "https://www.tiktok.com/@www.legitcleaning?lang=en",
    },
  },

  home: {
    hero: {
      title: "Nairobi's Leading Cleaning and Fumigation Service Provider ",
      subtitle: "Professional cleaning services for homes and businesses. Pristine results, every time.",
      cta: "Book a Service",
      backgroundImage: "/modern-clean-space.jpg",
    },
    featuredServices: [
      {
        id: 1,
        name: "Residential Cleaning",
        description: "Comprehensive home cleaning tailored to your needs",
        icon: "🏡",
      },
      {
        id: 2,
        name: "Commercial Cleaning",
        description: "Professional office and business cleaning services",
        icon: "💼",
      },
      {
        id: 3,
        name: "Carpet Cleaning",
        description: "Deep cleaning and restoration of carpets and upholstery",
        icon: "🧹",
      },
      {
        id: 4,
        name: "Specialized Services",
        description: "Move-in/out, post-construction, deep sanitization",
        icon: "✨",
      },
    ],
  },

 about: {
  title: "About Legit Cleaners",

  sections: [
    {
      heading: "Who We Are",
      content:
        "Legit Cleaners is a trusted professional cleaning and pest control company established in 2019. We provide premium cleaning, fumigation, landscaping, and gardening solutions to residential, commercial, and institutional clients. Our services are designed to create clean, safe, and healthy environments that enhance comfort, productivity, and peace of mind.",
      image: "/about-pic.jpg",
    },
    {
      heading: "Our Strength",
      content:
        "We are powered by a dedicated team of over 100 skilled and enthusiastic professionals. With years of hands-on experience and continuous training, our team brings expertise, reliability, and attention to detail to every project, ensuring we consistently meet and exceed client expectations.",
    
      image: "/about2.jpg",
    },
    {
      heading: "Our Corporate Approach",
      content:
        "The Legit Way is built on enhancing our clients’ professional image while delivering safe and healthy working environments. Through structured service delivery, customized schedules, and measurable results, we help organizations maximize value and return on investment without compromising on quality.",
    
      image: "/about3.jpg",
    },
    {
      heading: "Our Commitment",
      content:
        "Legit Cleaners is your one-stop solution for cleaning, pest control, landscaping, and gardening services. We are committed to guaranteed satisfaction, responsive client support, and customized solutions tailored to each client’s unique needs and premises.",
    
      image: "/about4.jpg",
    },
  ],

  values: [
    {
      title: "Professional Excellence",
      description:
        "Highly trained and experienced personnel delivering consistent, high-quality services with proven results.",
    },
    {
      title: "Reliable & Responsive",
      description:
        "Prompt, client-oriented service delivery with quick response times and dependable support.",
    },
    {
      title: "Eco-Friendly & Safe",
      description:
        "Use of green cleaning and pest control solutions, hospital-grade disinfectants, and products that promote better indoor air quality.",
    },
    {
      title: "Guaranteed Satisfaction",
      description:
        "Quality assurance processes that prioritize the client’s perspective and ensure services go above and beyond expectations.",
    },
  ],
},


 
  services: [
    {
      "id": 1,
      "name": "Residential Cleaning",
      "description": "Complete home cleaning and maintenance",
      "details": "From everyday tidying to thorough deep cleans, we handle all aspects of home care with attention to detail and professionalism. Includes general house cleaning, kitchen cleaning, and toilet sanitization.",
      "detailedServiceContent": "At Legit Cleaners, our residential cleaning service is designed to transform your home into a sanctuary of cleanliness and comfort. We begin with a comprehensive assessment of your living space, then systematically address every area using hospital-grade disinfectants, microfiber technology, and eco-friendly cleaning solutions. Our team pays special attention to high-traffic zones, thoroughly cleaning and sanitizing kitchens (including appliances, countertops, and cabinets), bathrooms (with bowl and sink destaining), living areas, bedrooms, and even overlooked spaces like baseboards, light fixtures, and window sills. We utilize HEPA-filter vacuums to capture 99.97% of allergens, steam cleaners for deep sanitization, and specialized tools for different surfaces. Beyond surface cleaning, we perform routine maintenance that includes curtain steaming, sanitary bins disposal, and Terrazzo/tile/Cabro cleaning when needed. Our goal is not just to clean, but to create a healthier living environment where you and your family can thrive. We understand that your home is your personal retreat, which is why we treat every cleaning session with the utmost respect and attention to detail.",
      "image": "/residential.jpg"
    },
    {
      "id": 2,
      "name": "Commercial Cleaning",
      "description": "Professional cleaning for workplaces",
      "details": "Maintain a clean, healthy, and welcoming environment for your business. Customized schedules for offices, retail spaces, churches, mosques, and other commercial facilities. Daily office cleaning to boost productivity and client impressions.",
      "detailedServiceContent": "Legit Cleaners provides comprehensive commercial cleaning services that go beyond mere appearance—we create environments that foster productivity, health, and positive first impressions. We know that a clean office directly influences staff recruitment, retention, and customer satisfaction. Our team arrives equipped with industrial-grade backpack vacuums, floor scrubbers, electrostatic sprayers for disinfection, and color-coded microfiber systems to prevent cross-contamination. We handle everything from daily trash removal and surface sanitization to deep cleaning of carpets, upholstery, and hard floors. Special attention is given to high-touch areas like door handles, elevator buttons, and shared equipment. For churches and mosques, we perform respectful, thorough cleaning of worship areas, including specialized carpet care. We offer flexible scheduling—daily, weekly, or monthly—tailored to your operational hours. Our process includes a detailed checklist, quality inspections, and eco-friendly products that are safe for employees and visitors. With Legit Cleaners, your commercial space isn't just clean—it's an asset that speaks volumes about your professionalism and care.",
      "image": "/commercial.jpg"
    },
    {
      "id": 3,
      "name": "Post-Construction Cleaning",
      "description": "Construction site and renovation cleanup",
      "details": "Professional dust and debris removal, surface cleaning, deep sanitization, and final inspection. Ensures your residential or commercial property is ready for use immediately after construction.",
      "detailedServiceContent": "After the builders leave, Legit Cleaners steps in to perform a meticulous post-construction cleanup that transforms chaotic worksites into move-in-ready spaces. We start with heavy-duty debris removal using industrial vacuums and HEPA filtration systems to capture fine construction dust that settles everywhere—inside cabinets, ducts, and even between floorboards. Our team systematically cleans all surfaces: windows are polished to clarity, walls are wiped down, and flooring undergoes deep extraction to remove grout haze, paint splatters, and adhesive residues. We use specialized tools like pressure washers for exterior surfaces, grout cleaners for tiles, and chemical-safe solutions to remove stickers and protective films. Every corner, from light fixtures to air vents, is addressed. Our deep cleaning phase involves sanitizing bathrooms and kitchens, ensuring appliances are operational and spotless. Finally, we conduct a white-glove inspection to guarantee the property is not only visually pristine but also hygienically safe. We work around your timeline and ensure flexible scheduling so you can occupy your new or renovated space without delay.",
      "image": "/Post-Construction.jpg"
    },
    {
      "id": 4,
      "name": "Carpet Cleaning",
      "description": "Expert care for carpets and mats",
      "details": "Steam cleaning and restoration for carpets and mats. Removes stains, allergens, and odors using eco-friendly products. Includes office, church, and mosque carpet cleaning.",
      "detailedServiceContent": "Legit Cleaners offers professional carpet and mat cleaning services that restore beauty, extend lifespan, and promote a healthier indoor environment. Using advanced truck-mounted steam cleaning systems, we inject hot water and eco-friendly cleaning agents deep into carpet fibers, then powerfully extract dirt, allergens, bacteria, and stubborn stains. Our process begins with a thorough pre-inspection and vacuuming, followed by pre-treatment of high-traffic areas and spots. We pay special attention to office, church, and mosque carpets—spaces where cleanliness reflects respect and professionalism. Our equipment removes up to 98% of moisture, ensuring quick drying times and preventing mold growth. For delicate or antique rugs, we use gentle rotary brush systems. We also apply a protective treatment to repel future stains and soil. Beyond aesthetics, our service eliminates dust mites, pet dander, and odors, making your space safer for allergy sufferers. Whether it's commercial broadloom, residential wall-to-wall carpeting, or entrance mats, we treat each surface with expertise and care, leaving it fresh, vibrant, and deeply sanitized.",
      "image": "/carpet1.jpg"
    },
    {
      "id": 5,
      "name": "Mattress Cleaning",
      "description": "Deep cleaning for healthier sleep",
      "details": "Non-toxic, eco-friendly mattress cleaning services that eliminate dust mites, allergens, bacteria, and stains. Ensures a clean and healthy sleeping environment.",
      "detailedServiceContent": "Your mattress is a haven for dust mites, dead skin cells, and allergens—Legit Cleaners transforms it into a clean, hygienic sleep sanctuary. We begin by thoroughly vacuuming the mattress with a high-powered HEPA-filter system to remove surface debris. Next, we apply our specially formulated, non-toxic, eco-friendly cleaning solution that breaks down stains, odors, and biological contaminants without harsh chemicals. Using a combination of steam cleaning and gentle agitation, we penetrate deep into the mattress layers to eliminate dust mites, bacteria, and allergens. Stains from spills, sweat, or accidents are treated with targeted enzymatic cleaners. We then use industrial air movers to ensure complete drying, preventing mold and mildew. This service not only refreshes your mattress but also extends its life and improves your sleep quality. For added protection, we can apply an allergen-resistant barrier treatment. Ideal for homes, hotels, and healthcare facilities, our mattress cleaning is a cornerstone of a truly healthy bedroom environment.",
      "image": "/mattress.jpg"
    },
    {
      "id": 6,
      "name": "Fumigation & Pest Control",
      "description": "Proactive pest elimination and prevention",
      "details": "Comprehensive pest control for bed bugs, cockroaches, termites, ants, rodents, mosquitoes, snakes, and bees. Uses advanced, eco-friendly techniques for safe, long-term protection.",
      "detailedServiceContent": "Legit Cleaners provides more than just pest elimination—we create sustainable, pest-free environments where health and safety come first. Our comprehensive approach begins with a detailed inspection to identify pests (bed bugs, cockroaches, termites, ants, rodents, mosquitoes, snakes, and bees) and their entry points. We then implement targeted treatments using advanced, eco-friendly techniques that are safe for people, pets, and the environment. For indoor spaces, we use gel baits, insect growth regulators, and residual sprays. For termites and larger infestations, we employ localized fumigation with careful containment. Our preventative strategies include sealing entry points, advising on sanitation improvements, and scheduling follow-up visits. We believe in solving the root cause, not just the visible symptoms. Our team is trained in humane bee rehoming and snake relocation when possible. With Legit Cleaners, you receive a customized pest management plan that ensures long-term protection, giving you peace of mind in a truly secure and welcoming space.",
      "image": "/pests.jpg"
    },
    {
      "id": 7,
      "name": "Deep Cleaning & Sanitization",
      "description": "Intensive cleaning for homes and offices",
      "details": "Complete deep cleaning of all surfaces, hard-to-reach areas, baseboards, vents, and more. Ideal for post-construction, move-in/move-out, or periodic intensive cleans.",
      "detailedServiceContent": "Legit Cleaners' Deep Cleaning & Sanitization service is a thorough, top-to-bottom restoration designed for homes and offices that need more than routine maintenance. We tackle areas often overlooked: inside appliances, behind furniture, within air vents, on ceiling fans, and along baseboards. Using hospital-grade disinfectants, steam cleaners, and microfiber tools, we sanitize every surface, eliminating germs, grime, and hidden dirt. In kitchens, we deep-clean ovens, degrease range hoods, and descale faucets. In bathrooms, we remove limescale, disinfect showers and toilets, and polish fixtures. For floors, we perform grout cleaning, sealing, and polishing for Terrazzo, tile, and Cabro surfaces. We also clean interior windows, blinds, and light covers. This service is perfect for seasonal refreshes, post-construction cleanup, pre-move preparations, or simply reclaiming a space that hasn't had detailed attention in a while. Our team follows a systematic checklist to ensure no corner is missed, leaving your environment not just clean, but truly revitalized.",
      "image": "/deep-clean.jpg"
    },
    {
      "id": 8,
      "name": "Surface Cleaning",
      "description": "Targeted cleaning for specific surfaces",
      "details": "Includes window and glass cleaning, Terrazzo/tile/Cabro cleaning, car interior cleaning, toilet bowl and sink destaining, sanitary bins disposal, and routine maintenance cleaning.",
      "detailedServiceContent": "Our Surface Cleaning service at Legit Cleaners is designed for precision—targeting specific areas and materials with the right tools and expertise. For windows and glass facades, we use squeegees, purified water systems, and streak-free solutions for crystal-clear results. Terrazzo, tile, and Cabro floors receive specialized cleaning, sealing, and polishing to restore their natural shine and protect against wear. Car interiors are meticulously vacuumed, shampooed, and sanitized, with attention to upholstery, carpets, and dashboards. In restrooms, we perform thorough toilet bowl and sink destaining using descaling agents and disinfectants, followed by proper sanitary bins disposal. We also handle curtain steaming to remove wrinkles and refresh fabrics. Our routine maintenance option keeps these surfaces consistently pristine. Every task is performed with an eye for detail and a commitment to using appropriate, safe products for each surface type. Whether it's a one-time refresh or ongoing care, Legit Cleaners ensures every surface not only looks impeccable but is also hygienically maintained.",
      "image": "/toilet.jpg"
    },
    {
      "id": 9,
      "name": "Move-In / Move-Out Cleaning",
      "description": "End-of-lease or pre-occupancy cleaning",
      "details": "Leave your old space spotless or move into a pristine property. Comprehensive cleaning for homes and offices before or after moving.",
      "detailedServiceContent": "Moving is stressful—let Legit Cleaners handle the cleaning so you can focus on the transition. Our Move-In/Move-Out service ensures every inch of your property meets the highest standards, whether you're leaving a rental or settling into a new home or office. For move-out, we perform a comprehensive clean that includes deep sanitization of kitchens and bathrooms, carpet extraction, interior window washing, appliance cleaning, wall wiping, and fixture polishing. We ensure you leave with confidence, often exceeding landlord expectations. For move-in, we transform the space into a fresh, welcoming environment: we remove any residual dust or debris, disinfect all surfaces, clean inside cabinets and closets, and ensure floors shine. We pay special attention to areas previous occupants may have missed: light fixtures, vents, baseboards, and behind appliances. Our checklist-based approach guarantees nothing is overlooked. Flexible scheduling lets us clean around your moving timeline, providing you with peace of mind and a spotless start or finish.",
      "image": "/moving.jpg"
    },
    {
      "id": 10,
      "name": "Sofa Cleaning",
      "description": "Professional care for sofas and couches",
      "details": "Steam cleaning and restoration for sofas and couches. Removes stains, allergens, and odors using eco-friendly products.",
      "detailedServiceContent": "Legit Cleaners revitalizes your sofas and couches with professional steam cleaning that removes deep-seated dirt, allergens, and stains while preserving fabric integrity. We start with a detailed inspection to identify material type and specific problem areas. Using advanced hot water extraction systems, we inject eco-friendly cleaning solutions deep into upholstery fibers, then powerfully extract dirt, dust mites, pet dander, and bacteria. Stains from food, drinks, or daily use are pre-treated with specialized, color-safe solutions. Our gentle yet effective process is safe for most fabrics, including delicate materials like silk or velvet when handled with care. We pay extra attention to crevices, cushions, and armrests—areas where grime accumulates. After cleaning, we use high-speed air movers to expedite drying. The result is a fresher, healthier, and more vibrant sofa free of odors and allergens. Ideal for homes, offices, waiting areas, and hospitality settings, our sofa cleaning service extends furniture life and enhances your space's comfort and appeal.",
      "image": "/sofa1.jpg"
    }
  ],


  projects: [

    {
    id: 1,
    title: "Modern Office Building",
    description: "Complete office complex cleaning and maintenance",
    image: "/office-building-clean.jpg",
    category: "Commercial",
    date: "2024",
  },
  {
    id: 2,
    title: "Church Carpet Cleaning",
    description: "Professional carpet cleaning and restoration",
    image: "/carpet-clean-church.jpg",
    category: "Commercial",
    date: "2024",
  },
  {
    id: 3,
    title: "Mats Cleaning",
    description: "Professional mats cleaning and restoration",
    image: "/mat-clean.jpg",
    category: "Carpet",
    date: "2024",
  },
  {
    id: 4,
    title: "Fabric Chairs Cleaning",
    description: "Professional fabric chairs cleaning and restoration",
    image: "/fabric-chairs-clean.jpg",
    category: "Residential",
    date: "2025",
  },

  {
    id: 6,
    title: "Sofa Cleaning",
    description: "Professional care for sofas and couches",
    image: "/sofa2-clean.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 7,
    title: "Commercial Carpet Cleaning",
    description: "Expert care for carpets and mats",
    image: "/carpet-commercial.jpg",
    category: "Commercial",
    date: "2024",
  },
  {
    id: 8,
    title: "Fumigation Services",
    description: "Proactive pest elimination and prevention",
    image: "/fumigation1.jpg",
    category: "Fumigation",
    date: "2024",
  },
  {
    id: 9,
    title: "Carpet Cleaning",
    description: "Expert care for carpets and mats",
    image: "/carpet3.jpg",
    category: "Carpet",
    date: "2025",
  },
  {
    id: 10,
    title: "Residential Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/residential2.jpg",
    category: "Residential",
    date: "2025",
  },
  {
    id: 11,
    title: "Sofa Cleaning",
    description: "Professional care for sofas and couches",
    image: "/sofa3.jpg",
    category: "Residential",
    date: "2025",
  },
  {
    id: 12,
    title: "Church Cleaning",
    description: "Professional church cleaning and restoration",
    image: "/kanisa1.jpg",
    category: "Commercial",
    date: "2025",
  },
  {
    id: 13,
    title: "Home Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/home1.jpg",
    category: "Residential",
    date: "2023",
  },
  {
    id: 14,
    title: "Residential Fumigation",
    description: "Effective home pest elimination",
    image: "/fumigation-home1.jpg",
    category: "Fumigation",
    date: "2023",
  },
  {
    id: 15,
    title: "Home Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/home2.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 16,
    title: "Sofa Cleaning",
    description: "Professional care for sofas and couches",
    image: "/sofa4.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 17,
    title: "Home Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/home4.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 18,
    title: "Sofa Cleaning",
    description: "Professional care for sofas and couches",
    image: "/sofa6.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 19,
    title: "Home Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/home6.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 20,
    title: "Home Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/home7.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 21,
    title: "Window Cleaning",
    description: "Professional care for windows and doors",
    image: "/window.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 22,
    title: "Apartment Exterior Cleaning",
    description: "Professional apartment exterior cleaning",
    image: "/apartment-outside.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 23,
    title: "Post-Construction Cleaning",
    description: "Final cleanup after construction works",
    image: "/post-construction1.jpg",
    category: "Post-Construction",
    date: "2024",
  },
  {
    id: 24,
    title: "Post-Construction Interior Cleaning",
    description: "Detailed interior post-construction cleanup",
    image: "/post-construction-interior.jpg",
    category: "Post-Construction",
    date: "2024",
  },
  {
    id: 25,
    title: "Residential Deep Clean",
    description: "Full home transformation and sanitization",
    image: "/residential4.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 26,
    title: "Mattress Cleaning",
    description: "Deep mattress cleaning for healthier sleep",
    image: "/mattress3.jpg",
    category: "Residential",
    date: "2024",
  },
  {
    id: 27,
    title: "Toilet Cleaning",
    description: "Professional toilet cleaning and sanitation",
    image: "/toilet1.jpg",
    category: "Residential",
    date: "2024",
  },
    
  ],



  footer: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Residential Cleaning", href: "/services#residential" },
      { label: "Commercial Cleaning", href: "/services#commercial" },
      { label: "Carpet Cleaning", href: "/services#carpet" },
      { label: "Deep Cleaning", href: "/services#deep" },
    ],
    contact: {
      phone: "0740 479 221",
      email: "Legitcleaning001@gmail.com",
      address: "Nairobi, Kenya",
    },
    copyrightText: "© 2025 Legit Cleaners. All rights reserved. Premium Cleaning Services.",
  },
}

export type WebsiteData = typeof initialData
