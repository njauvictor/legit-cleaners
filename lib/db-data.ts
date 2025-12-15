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
        "Legit Cleaners is a trusted professional cleaning and pest control company established in 2018. We provide premium cleaning, fumigation, landscaping, and gardening solutions to residential, commercial, and institutional clients. Our services are designed to create clean, safe, and healthy environments that enhance comfort, productivity, and peace of mind.",
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
    "name": "Post-Construction Cleaning",
    "description": "Complete construction site and renovation debris removal and sanitization",
    "details": "Professional, multi-phase cleanup to remove all dust, debris, paint splatters, and construction residues. Our service ensures your newly built or renovated residential or commercial property is immaculate, hygienic, and ready for immediate occupancy or use.",
    "detailedServiceContent": "We offer professional post construction cleaning services in Nairobi to help you get your property looking its best after a construction project. Our team of experienced technicians has the knowledge and equipment necessary to thoroughly clean a wide range of construction sites, including residential and commercial properties. We understand that construction projects can be messy and that it’s important to get the property cleaned as soon as possible. That’s why we offer flexible scheduling options to ensure that your property is cleaned on your timeline. Our team is available to schedule appointments at a time that is convenient for you, and we guarantee that we’ll have your property looking its best in no time. Our post construction cleaning services include the following: Dust and Debris Removal: Our team will thoroughly remove any dust, debris, and other contaminants from the property, ensuring that it’s ready for use as soon as possible. Surface Cleaning: All surfaces, including windows, walls, and flooring, will be cleaned to remove any remaining dirt, dust, or residue.",
    "image": "/Post-Construction.jpg"
  },
  {
    "id": 2,
    "name": "Residential/House Cleaning",
    "description": "Complete and thorough cleaning of all living areas in your home",
    "details": "A comprehensive cleaning service for your entire house, covering all rooms and common areas. This service focuses on maintaining a high standard of cleanliness, addressing floors, surfaces, and fixtures to keep your home consistently tidy and welcoming.",
    "detailedServiceContent": "Our Residential/House Cleaning services is the cornerstone of a well-maintained home, providing a consistent and thorough clean that covers every essential area. Our trained team follows a systematic checklist to ensure no space is overlooked. We begin by dusting and wiping all surfaces, including furniture, shelves, electronics, and decor. Floors are carefully swept and mopped, with careful attention to corners and under furniture edges. We clean and sanitize all kitchen and bathroom surfaces, including countertops, sinks, and exterior appliance surfaces. Mirrors and glass surfaces are polished to a streak-free shine. We empty trash bins and replace liners. This service is designed for regular maintenance, providing a deep level of clean that goes beyond a simple tidy-up. We use eco-friendly cleaning solutions and quality microfiber cloths to effectively remove dirt and grime while being safe for your family and pets. Whether performed weekly, bi-weekly, or monthly, our General House Cleaning ensures your home remains a clean, comfortable, and healthy environment for daily living, providing you with peace of mind and more free time to enjoy your space.",
    "image": "/residential-final.jpg"
  },
  {
    "id": 3,
    "name": "Office Cleaning Services",
    "description": "Professional, daily or scheduled cleaning for business environments",
    "details": "Maintain a pristine, healthy, and productive workspace for your team and clients. Our office cleaning includes trash removal, surface disinfection, floor care, and restroom servicing, tailored to your business hours and needs.",
    "detailedServiceContent": "Legit Cleaners provides dedicated Office Cleaning Services that are fundamental to operational excellence, employee well-being, and a professional brand image. We go beyond emptying wastebaskets to create an environment that actively fosters productivity and makes a positive first impression on clients. Our teams are equipped with commercial-grade equipment like backpack vacuums for efficiency, microfiber cleaning systems, and electrostatic sprayers for rapid, thorough disinfection of high-touch surfaces. Our comprehensive service includes: thorough trash and recycling removal from all desks and common areas; detailed dusting and sanitization of all work surfaces, desks, phones, and keyboards; vacuuming and mopping of all floor types; and complete restroom cleaning and restocking, including thorough sanitization of fixtures and floors. We give special attention to communal spaces like kitchens and break rooms, cleaning appliances, countertops, and sinks. We also focus on entryways, lobbies, and glass doors to ensure a welcoming facade. We offer ultimate flexibility with scheduling—daily, nightly, weekly, or monthly—to work around your business operations with minimal disruption. Our process is backed by detailed checklists and quality control inspections, ensuring a consistently high standard. With Legit Cleaners, your office isn't just cleaned; it's maintained as a valuable asset that supports your business success.",
    "image": "/office-building-clean.jpg"
  },
  {
    "id": 4,
    "name": "Sofa Cleaning and Steaming",
    "description": "Deep steam cleaning and sanitization for sofas, couches, and upholstered chairs",
    "details": "Professional hot water extraction (steam cleaning) to remove deep-seated dirt, stains, allergens, and odors from your upholstery. This service restores the fabric's vibrancy and creates a healthier living environment.",
    "detailedServiceContent": "Legit Cleaners revitalizes your living space with professional Sofa Cleaning and Steaming. Over time, upholstery absorbs dust, skin cells, food particles, and allergens, which can affect your home's air quality and comfort. Our service begins with a detailed inspection to identify the fabric type and any specific stains or areas of concern. We then perform a thorough pre-vacuuming with a HEPA-filter system to remove surface debris. Next, we pre-treat stains with specialized, fabric-safe solutions. Using advanced hot water extraction equipment, we inject hot water and eco-friendly cleaning agents deep into the upholstery fibers. This powerful process, often called steam cleaning, lifts and extracts a slurry of dirt, dust mites, pet dander, bacteria, and old stains. We pay meticulous attention to crevices, cushion seams, armrests, and headrests. After extraction, we use high-speed air movers to expedite drying, which typically takes just a few hours. The result is a sofa that is not only visibly cleaner and brighter but also hygienically sanitized and free of lingering odors. This process can extend the life of your furniture and is especially beneficial for households with children, pets, or allergy sufferers. We treat your furniture with the utmost care, ensuring a fantastic result that enhances the comfort and appeal of your home.",
    "image": "/sofa6.jpg"
  },
  {
    "id": 5,
    "name": "Fumigation and Pest Control",
    "description": "Professional pest elimination, prevention, and management strategies",
    "details": "A pest-free environment is essential for health, safety, and peace of mind. Our targeted treatments eliminate insects, rodents, and other pests, while our preventative strategies protect your property from future infestations.",
    "detailedServiceContent": "Comprehensive Pest Control Solutions Targeted Treatments: For a wide range of pests, including bed bugs, cockroaches, termites, ants, rodents, mosquitoes, snakes, and rehoming bees. Advanced, Eco-Friendly Techniques: Designed to be safe for your environment, people, and pets while being highly effective in eliminating pests. Preventative Approach: Ensures long-term protection with treatments that go beyond immediate solutions to prevent future infestations. Our pest control strategy is about more than just eliminating pests, it’s about creating a sustainable, safe environment for everyone who uses the space.",
    "image": "/fumigation1.jpg"
  },
  {
    "id": 6,
    "name": "Office/Church/Mosque Carpet Cleaning",
    "description": "Specialized deep cleaning for carpets in commercial and communal worship spaces",
    "details": "Expert steam cleaning and stain removal tailored for the high-traffic carpets found in offices, churches, and mosques. This service removes deep dirt, restores appearance, and promotes a respectful, hygienic environment.",
    "detailedServiceContent": "Carpets in offices, churches, and mosques endure significant foot traffic, accumulating dirt, allergens, and stains that regular vacuuming cannot remove. Legit Cleaners offers a specialized carpet cleaning service designed for these important spaces. We understand that cleanliness in a place of worship reflects reverence, and in an office, it reflects professionalism. Our process starts with a pre-inspection to assess fiber type and soiling levels. We then perform a thorough dry vacuuming to remove loose soil. Using our powerful truck-mounted hot water extraction system, we inject hot water and eco-friendly cleaning solutions deep into the carpet pile. This method powerfully flushes out embedded grit, allergens, bacteria, and stubborn stains like coffee or mud. We pay special attention to entryways, aisles, and other high-traffic areas. Our equipment extracts over 95% of the moisture, ensuring rapid drying (often within a few hours) to minimize disruption and prevent mold growth. For delicate or antique carpets sometimes found in these settings, we use gentler methods like rotary bonnet cleaning. We also offer protective fabric guard applications to help repel future stains. The result is a carpet that is not only visually revitalized—with colors brightened and patterns clearer—but also deeply sanitized, contributing to better indoor air quality and a more welcoming, dignified atmosphere for work, prayer, and community gathering.",
    "image": "/kanisa1.jpg"
  },
  {
    "id": 7,
    "name": "Mattress Cleaning and Steaming",
    "description": "Deep sanitization and refresh for your mattress",
    "details": "Professional steam cleaning to eliminate dust mites, dead skin cells, allergens, bacteria, and stains from your mattress. This service ensures a cleaner, healthier sleep environment and can extend the life of your mattress.",
    "detailedServiceContent": "Your mattress is one of the most used items in your home, and over time it becomes a reservoir for dust mites, their droppings, dead skin cells, sweat, and other allergens. Legit Cleaners' Mattress Cleaning and Steaming service is designed to tackle this hidden contamination. We begin by thoroughly vacuuming the entire mattress surface, sides, and edges with a high-powered vacuum featuring a HEPA filter to capture fine particulate matter. Next, we use a professional-grade steam cleaning machine. The combination of hot steam and gentle agitation penetrates deep into the mattress layers, killing dust mites and bacteria, and breaking down organic stains and odors. We pre-treat any visible stains, such as those from spills or bodily fluids, with enzymatic cleaners that break down the proteins without damaging the fabric. The steam process uses only hot water vapor, making it a chemical-free, eco-friendly sanitization method. After cleaning, we use industrial air movers to circulate air and ensure the mattress dries completely from the inside out, which is crucial to prevent mold growth. This deep cleaning not only refreshes your sleep surface, removing unpleasant odors, but also significantly reduces allergen load, which can lead to better sleep quality, especially for those with allergies or asthma. It's a vital service for maintaining a truly healthy bedroom.",
    "image": "/Mattress3.jpg"
  },
  {
    "id": 8,
    "name": "Toilet Cleaning (Bowl and Sink Destaining)",
    "description": "Intensive descaling and stain removal for toilet bowls and sinks",
    "details": "Targeted cleaning to remove tough limescale, mineral deposits, rust stains, and hard water marks from porcelain surfaces. This service restores the bright, white appearance of your bathroom fixtures.",
    "detailedServiceContent": "Hard water and mineral deposits can leave unsightly, stubborn stains in toilet bowls and on sink surfaces that regular cleaning products cannot tackle. Legit Cleaners' specialized Toilet Cleaning service focuses on destaining and descaling these fixtures to restore their original shine. Our technicians are trained in using professional-grade, acidic descaling agents that safely and effectively dissolve limescale, rust, and mineral buildup without damaging the porcelain or ceramic. For toilet bowls, we apply the solution under the rim and let it dwell to break down stains below the water line before scrubbing with specialized brushes. For sinks and basins, we treat the stains directly, often using pumice stones or non-scratch pads for persistent marks, always with care to avoid scratching the surface. We also thoroughly clean and disinfect the entire exterior of the toilet, including the base, seat, lid, and tank handle, and polish the sink faucet and drain. This service goes far beyond a surface wipe; it addresses the underlying discoloration, leaving your bathroom fixtures looking like new. This is an essential service for rental property turnarounds, homes with hard water, or simply for maintaining a hygienic and visually appealing bathroom.",
    "image": "/toilet1.jpg"
  },
  {
    "id": 9,
    "name": "Terrazzo, Tile and Cabro Cleaning Services",
    "description": "Specialized cleaning, sealing, and polishing for hard floor surfaces",
    "details": "Expert restoration and maintenance for Terrazzo, ceramic/porcelain tile, and Cabro (interlocking paving) floors. Our service removes grime from grout, restores shine, and applies protective sealants.",
    "detailedServiceContent": "Terrazzo, Tile, and Cabro floors are durable and beautiful, but they require specialized care to maintain their appearance and longevity. Dirt becomes trapped in grout lines, and surfaces can become dull from wear and improper cleaning. Legit Cleaners offers a comprehensive service for these hard floors. We start with a deep clean using appropriate pH-balanced cleaners and mechanical scrubbers to lift ingrained dirt from the surface and grout lines. For tile and Terrazzo, we pay special attention to the grout, using steam cleaners or specialized grout cleaning tools to restore its original color. For Cabro (exposed aggregate paving), we use pressure washing techniques to remove dirt from the textured surface and joints. After a thorough rinse and dry, the next crucial step is sealing. We apply a high-quality penetrating sealant to grout lines and, if needed, a topical sealant or polish to the tile/Terrazzo surface. This sealant protects against future stains, makes daily mopping more effective, and enhances the floor's natural color and sheen. For polished Terrazzo, we may perform a light honing or polishing step to restore its glossy finish. This service is ideal for both interior and exterior floors, transforming dull, dirty floors into stunning, protected surfaces that are easier to maintain.",
    "image": "/terazzo.jpg"
  },
  {
    "id": 10,
    "name": "Car Interior Cleaning Services",
    "description": "Complete deep cleaning and detailing for vehicle interiors",
    "details": "Thorough vacuuming, shampooing, and sanitization of your car's interior. We clean carpets, upholstery, dashboard, console, doors, and windows, leaving your vehicle fresh, tidy, and hygienic.",
    "detailedServiceContent": "Your vehicle's interior is a compact living space that accumulates dirt, crumbs, stains, and odors. Legit Cleaners' Car Interior Cleaning Service provides a level of detail that goes far beyond a simple car wash. We treat your car like a small, mobile room. Our process begins with a complete removal of trash and personal items. Next, we perform an intensive vacuuming of the entire interior: seats, carpets, floor mats, trunk, and even air vents and crevices using specialized attachments. We then focus on fabric surfaces. Carpet and cloth seats are pre-treated for stains and then cleaned using hot water extraction or foam shampooing methods to lift deep dirt and spills. For leather or vinyl seats and surfaces, we use appropriate cleaners and conditioners to clean and protect the material. Every hard surface—the dashboard, center console, steering wheel, door panels, and cup holders—is meticulously wiped down and sanitized. Windows and mirrors are cleaned to a streak-free finish. We also deodorize the interior using eco-friendly sprays or ozone treatment for persistent odors. Finally, we replace floor mats after cleaning them separately. This service not only restores the 'like-new' appearance of your car's cabin but also creates a cleaner, healthier environment for you and your passengers, and can even help maintain the vehicle's resale value.",
    "image": "/car-cleaning-tools.webp"
  },
  {
    "id": 11,
    "name": "Sanitary Bins Disposal",
    "description": "Safe, hygienic, and discreet collection and disposal of feminine hygiene waste",
    "details": "A professional service for the regular emptying, cleaning, and resupplying of sanitary disposal bins in workplace, commercial, and public restrooms. Ensures hygiene, compliance, and dignity.",
    "detailedServiceContent": "Proper management of feminine hygiene waste is a critical aspect of restroom maintenance, impacting hygiene, odor control, and user comfort. Legit Cleaners provides a reliable and discreet Sanitary Bins Disposal service for offices, retail stores, clinics, schools, and other public facilities. Our service involves a scheduled visit by our trained personnel. They will discreetly remove the sealed liner containing waste from the sanitary bin, securely tie and bag it for disposal in accordance with local regulations. The interior and exterior of the empty bin is then thoroughly cleaned and disinfected to prevent odors and bacterial growth. A fresh, scented liner is installed, and the bin is restocked as needed. We also supply and refill air fresheners if they are part of the unit. This scheduled service ensures bins are never overfull, maintaining a clean and respectful environment in your restrooms. It relieves your staff from an unpleasant task and ensures compliance with health and safety standards regarding biological waste. We provide a service record for each visit, giving you peace of mind that this important detail is handled professionally and consistently.",
    "image": "/dustbins.webp"
  },
  {
    "id": 12,
    "name": "Curtains Steaming",
    "description": "Professional wrinkle removal, freshening, and light cleaning for curtains and drapes",
    "details": "Using commercial garment steamers, we refresh your hanging curtains, removing wrinkles, odors, and light dust without the need for take-down and washing. This revitalizes the appearance of your windows and rooms.",
    "detailedServiceContent": "Taking down, washing, ironing, and re-hanging curtains is a cumbersome task that can also risk damaging delicate fabrics. Legit Cleaners' Curtains Steaming service offers a brilliant alternative. Our technicians use powerful commercial-grade steamers that produce a hot, dry vapor. We systematically steam the curtains while they are hanging in place. The high-temperature steam penetrates the fabric, relaxing the fibers and causing wrinkles to fall out effortlessly, leaving curtains looking crisp and tailored. The steam also effectively freshens the fabric, eliminating odors from cooking, smoke, or dust mites. It can even help reduce allergens like dust and pet dander on the curtain surface. For light soiling, steaming can provide a noticeable refresh. This process is safe for most fabrics, including silk, linen, and synthetic blends, as it uses no harsh chemicals and involves no aggressive agitation. It's a quick, efficient service that can transform the look of a room by making windows appear more finished and elegant, and it's ideal for regular maintenance between less frequent deep cleanings or before special events at home or in commercial spaces like hotels and event venues.",
    "image": "/curtain.webp"
  },
  {
    "id": 13,
    "name": "Commercial Cleaning Services",
    "description": "Broad-spectrum cleaning and maintenance for all types of non-residential properties",
    "details": "Customized cleaning solutions for retail stores, warehouses, clinics, schools, restaurants, and other commercial facilities beyond standard offices. Includes floor care, high-dusting, and specialized area cleaning.",
    "detailedServiceContent": "Legit Cleaners' Commercial Cleaning Services encompass the wide-ranging needs of any business or public facility. We understand that a retail store, a medical clinic, a school, and a warehouse have vastly different cleaning requirements. We begin with a consultation and site walk-through to develop a customized cleaning plan. Our services are scalable and can include: nightly floor maintenance (auto-scrubbing, buffing, and burnishing for hard floors; deep vacuuming for carpets); high-dusting of ceilings, lights, and duct vents; detailed cleaning of glass doors and display cases; sanitization of high-touch points like handrails, elevator buttons, and shopping carts; restroom deep cleaning and restocking; and kitchen or break room sanitation for restaurants and staff areas. For medical facilities, we adhere to stricter disinfection protocols. For schools, we focus on classrooms, cafeterias, and gyms. We provide all necessary equipment, supplies, and trained uniformed staff. We offer flexible scheduling—after-hours, during low-traffic periods, or 24/7 for some facilities—to ensure zero disruption to your core business. Our management team provides consistent quality control and is always available to adjust the plan as your needs evolve. With this service, you outsource a complex operational challenge to a trusted partner, ensuring your facility always presents a safe, clean, and professional face to the world.",
    "image": "/commercial.jpg"
  },
  {
    "id": 14,
    "name": "Kitchen Cleaning",
    "description": "Deep cleaning and degreasing for residential and commercial kitchens",
    "details": "Intensive cleaning of all kitchen surfaces, appliances, and fixtures. This service tackles baked-on grease, food splatters, and grime inside ovens, on hoods, and in microwaves and refrigerators.",
    "detailedServiceContent": "The kitchen is the heart of the home and the engine of a restaurant, and it is also the room where grease and grime accumulate most aggressively. Legit Cleaners' Kitchen Cleaning service is a deep, thorough assault on this buildup. Our team doesn't just wipe counters; we tackle the tough jobs. We deep-clean the oven interior (and exterior), using appropriate degreasers and tools to remove baked-on carbon and grease from racks and walls. We degrease the range hood, filter, and backsplash, where oily residue is constant. The refrigerator and freezer are emptied (client to remove items), cleaned inside and out, with shelves and drawers washed. The microwave is cleaned inside and out. All cabinet exteriors and, upon request, interiors are wiped down. Sinks are scrubbed and disinfected, and faucets are polished. Countertops are sanitized, and small appliances like toasters are cleaned. For floors, we move light appliances if safe to do so, to clean underneath, and then mop thoroughly. We use degreasing agents that cut through tough residue but are safe for surfaces when used correctly. This service is essential for maintaining kitchen hygiene, preventing pest attraction, and ensuring appliances operate efficiently. It's perfect for seasonal deep cleans, pre-holiday preparation, post-renovation cleanup, or as part of a move-in/move-out clean.",
    "image": "/clean-commercial-kitchen-after.jpg"
  },
  {
    "id": 15,
    "name": "Routine Cleaning",
    "description": "Regular, scheduled maintenance cleaning for homes and businesses",
    "details": "A recurring service to keep your space consistently clean and tidy. This includes the essential tasks of dusting, vacuuming, mopping, surface wiping, and bathroom/kitchen tidying on a set schedule.",
    "detailedServiceContent": "Routine Cleaning is the backbone of a clean and manageable space, preventing dirt and clutter from accumulating to unmanageable levels. Legit Cleaners' Routine Cleaning service is designed for clients who want reliable, consistent maintenance without the need to schedule one-off services repeatedly. We work with you to establish a schedule—weekly, bi-weekly, or monthly—and a customized checklist of tasks. A typical routine clean includes: dusting all furniture, shelves, and surfaces; vacuuming all carpets and rugs; mopping hard floor areas; cleaning and sanitizing bathroom mirrors, counters, sinks, and toilet exteriors; tidying and wiping down kitchen counters and appliances; taking out trash; and making beds (if linens are left out). We bring all necessary supplies and equipment. The focus is on maintaining the general cleanliness and order of your home or office, providing you with a reliably fresh environment. This service frees up your valuable time, reduces stress, and ensures your space is always presentable for unexpected guests or clients. It's the perfect solution for busy professionals, families, or business owners who understand that consistent upkeep is more effective and economical than dealing with deeply soiled spaces periodically.",
    "image": "/home2.jpg"
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
