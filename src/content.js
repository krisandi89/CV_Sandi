/**
 * PERSONAL BRANDING & CONTENT CONFIGURATION
 * ==========================================
 * 
 * 📝 HOW TO EDIT THIS FILE:
 * 
 * 1. Find the section you want to edit (profile, skills, projects, etc.)
 * 2. Change the text inside the quotes " "
 * 3. Save the file
 * 4. Refresh your browser
 * 
 * 📌 TO ADD A NEW PROJECT:
 * 1. Scroll down to "experience" array
 * 2. Copy an existing project block { }
 * 3. Paste it at the top of the list (after the [ bracket)
 * 4. Update the "id" number (increment by 1)
 * 5. Fill in your project details
 * 6. Save and refresh browser
 * 
 * ⚠️ IMPORTANT: Don't delete quotes " " or commas ,
 */

window.siteContent = {
    // ====================================
    // PROFILE INFORMATION
    // ====================================
    profile: {
        name: "Hi, I'm Krisandi Saptyanto",
        headline: "Design and Project Manager",
        image: "assets/images/profile.png",
        bio: "Experienced Design and Project Manager with 13+ years in civil and geotechnical engineering, focused on geosynthetics-based solutions (MSE/segmental retaining walls, wraparound systems, and ground stabilization).",
        social: {
            linkedin: "https://www.linkedin.com/in/krisandi-saptyanto-50286276/",
            github: "https://github.com/krisandi",
            email: "mailto:krisandi0305@gmail.com",
            whatsapp: "http://wa.me/6282110128965",
            instagram: "#"
        }
    },

    // ====================================
    // HERO SECTION
    // ====================================
    hero: {
        title: "Design & Project",
        subtitle: "Manager",
        description: "13+ years expertise in Geotechnical Solutions, Geosynthetics & Retaining Wall Systems across Indonesia"
    },

    // ====================================
    // ABOUT SECTION
    // ====================================
    about: {
        title: "About Me",
        text: `Design and Project Manager with 13+ years in civil and geotechnical engineering, focused on geosynthetics-based solutions (MSE/segmental retaining walls, wraparound systems, and ground stabilization). Experienced in translating site constraints into buildable designs, coordinating contractors/subcontractors, and managing multiple projects to schedule, budget, and quality standards.

Core Competencies:
• Geotechnical design and review (retaining walls, slope protection, ground stabilization)
• Geosynthetics solutions: MSE walls, TRIAX geogrid stabilization, wraparound reinforcement systems
• Project planning and delivery: scope, schedule, cost, resources, progress reporting
• Stakeholder management: client coordination, contractor negotiation, multi-disciplinary team leadership
• Design tools and documentation: AutoCAD, technical reports, drawings, and as-built coordination`
    },

    // ====================================
    // SKILLS SECTION
    // ====================================
    skills: [
        { name: "Geotechnical Design", icon: "🏗️", level: 95 },
        { name: "Project Management", icon: "📊", level: 92 },
        { name: "AutoCAD", icon: "📐", level: 88 },
        { name: "Geosynthetics Solutions", icon: "🧱", level: 95 },
        { name: "Technical Reports", icon: "📝", level: 85 },
        { name: "Team Leadership", icon: "👥", level: 90 }
    ],

    // ====================================
    // EDUCATION
    // ====================================
    education: [
        {
            institution: "Binus University",
            degree: "Sarjana Teknik Sipil",
            year: "2012",
            description: "Civil Engineering"
        }
    ],

    // ====================================
    // CERTIFICATIONS
    // ====================================
    certifications: [
        { name: "Insinyur Profesional (Ir.)", issuer: "Persatuan Insinyur Indonesia (PII)", year: "2020" },
        { name: "AutoCAD Certified Professional", issuer: "Autodesk", year: "2015" }
    ],

    // ====================================
    // LANGUAGES
    // ====================================
    languages: [
        { name: "Bahasa Indonesia", level: 100, label: "Native" },
        { name: "English", level: 85, label: "Professional" }
    ],

    // ====================================
    // TOP / FEATURED PROJECTS
    // (Shown in Portfolio section with large cards)
    // ====================================
    topProjects: [
        {
            title: "Amman Mineral Project",
            category: "Retaining Wall",
            year: "2023",
            description: "SierraScape Retaining Wall System implementation at Nusa Tenggara Barat for one of Indonesia's largest mining operations. Complex terrain requiring specialized geosynthetic solutions.",
            image: "",
            link: "#",
            tags: ["Mining", "SierraScape", "Geosynthetics"]
        },
        {
            title: "Dhoho Airport Kediri",
            category: "Infrastructure",
            year: "2023",
            description: "SierraScape Retaining Wall System for AFL Bridge in Jawa Timur. Critical infrastructure project supporting the new international airport development.",
            image: "",
            link: "#",
            tags: ["Airport", "Bridge", "Infrastructure"]
        },
        {
            title: "Cinere-Jagorawi Toll Road",
            category: "Toll Road",
            year: "2022",
            description: "Multiblock Retaining Wall System for major toll road connection in Jawa Barat. Large-scale infrastructure enhancing Jakarta's transportation network.",
            image: "",
            link: "#",
            tags: ["Toll Road", "Multiblock", "Jakarta"]
        }
    ],

    // ====================================
    // PROJECT EXPERIENCE / TIMELINE
    // (All projects shown in timeline format)
    // 
    // 📌 TO ADD NEW PROJECT:
    // 1. Copy a project block below
    // 2. Paste at the TOP of the list (after the [ bracket)
    // 3. Increment the "id" number
    // 4. Fill in your details
    // ====================================
    experience: [
        {
            "id": 1,
            "role": "Fish Pond, Scintia Square Park",
            "company": "CV Java Heritage",
            "period": "2025",
            "description": "Location: Banten | Type: Fish Pond / Landscape Water Feature",
            "image": null
        },
        {
            "id": 2,
            "role": "Access Road, Citragrand Cibubur",
            "company": "PT Citra Garden",
            "period": "2024",
            "description": "Location: Jawa Barat | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 3,
            "role": "Fish Pond",
            "company": "CV Java Heritage",
            "period": "2024",
            "description": "Location: DKI Jakarta | Type: Fish Pond / Landscape Water Feature",
            "image": null
        },
        {
            "id": 4,
            "role": "Fish Pond, Alam Sutera",
            "company": "CV Java Heritage",
            "period": "2024",
            "description": "Location: Banten | Type: Fish Pond / Landscape Water Feature",
            "image": null
        },
        {
            "id": 5,
            "role": "Pond at Angke Heritage Restaurant",
            "company": "Angke Heritage",
            "period": "2024",
            "description": "Location: Banten | Type: Fish Pond / Landscape Water Feature",
            "image": null
        },
        {
            "id": 6,
            "role": "Medan Station Overpass",
            "company": "PT Putera Borneo Sakti",
            "period": "2024",
            "description": "Location: Sumatera Utara | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 7,
            "role": "Amman Mineral Project, Nusa Tenggara",
            "company": "PT AMNT",
            "period": "2023",
            "description": "Location: Nusa Tenggara Barat | Type: SierraScape Retaining Wall System",
            "image": null
        },
        {
            "id": 8,
            "role": "Ciliwung River Trash Rack Retaining Wall, Jakarta",
            "company": "PT PP",
            "period": "2023",
            "description": "Location: DKI Jakarta | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 9,
            "role": "Dhoho Airport Kediri",
            "company": "PT Lancarjaya Mandiri Abadi",
            "period": "2023",
            "description": "Location: Jawa Timur | Type: SierraScape Retaining Wall System",
            "image": null
        },
        {
            "id": 10,
            "role": "Coal Haul Road Access, Lahat Area",
            "company": "PT Golden Great Borneo",
            "period": "2023",
            "description": "Location: Sumatera Selatan | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 11,
            "role": "Coal Haul Road Access, Barong Tongkok",
            "company": "PT Manoor Bulatin Lestari",
            "period": "2023",
            "description": "Location: Kalimantan Timur | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 12,
            "role": "Access Road for Palm Oil Plantation, South Kalimantan",
            "company": "PT Globalindo Agung Lestari",
            "period": "2022",
            "description": "Location: Kalimantan Selatan | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 13,
            "role": "Cinere-Jagorawi Toll Road",
            "company": "PT PP",
            "period": "2022",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 14,
            "role": "Access Road for Palm Oil Plantation, Banjarmasin",
            "company": "PT Kharisma Inti Usaha",
            "period": "2021",
            "description": "Location: Kalimantan Selatan | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 15,
            "role": "Mengger Overpass, Bandung",
            "company": "PT Asri Karya Lestari",
            "period": "2021",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 16,
            "role": "Serang-Panimbang Toll Road (Rangkas)",
            "company": "PT Wika",
            "period": "2020",
            "description": "Location: Banten | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 17,
            "role": "Geofoam Cover, AIS Pejaten",
            "company": "PT Tata Mulia",
            "period": "2020",
            "description": "Location: DKI Jakarta | Type: Geofoam Cover",
            "image": null
        },
        {
            "id": 18,
            "role": "Kulonprogo Airport",
            "company": "PT PP",
            "period": "2019",
            "description": "Location: Jawa Tengah | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 19,
            "role": "Drilling Access Road, Pertamina Asset 2",
            "company": "PT Pertamina Aset 2",
            "period": "2019",
            "description": "Location: Palembang | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 20,
            "role": "Serang-Panimbang Toll Road (Walantaka)",
            "company": "PT Wika",
            "period": "2019",
            "description": "Location: Banten | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 21,
            "role": "Slope Protection for Drilling Area, Pertamina Asset 2",
            "company": "PT Pertamina Aset 2",
            "period": "2019",
            "description": "Location: Palembang | Type: Wraparound System",
            "image": null
        },
        {
            "id": 22,
            "role": "Cibatu-Garut Railway Line Reactivation",
            "company": "PT KAI",
            "period": "2019",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 23,
            "role": "Retaining Wall at Tanah Ara, Pondok Indah",
            "company": "PT Metropolitan Kenjtana",
            "period": "2018",
            "description": "Location: DKI Jakarta | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 24,
            "role": "Solo-Kertosono Toll Road, Nganjuk Section",
            "company": "CV Hemica",
            "period": "2018",
            "description": "Location: Jawa Timur | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 25,
            "role": "Clean Water Reservoir for Palm Oil Mill, Banjarmasin",
            "company": "PT Kharisma Inti Usaha",
            "period": "2018",
            "description": "Location: Kalimantan Selatan | Type: Water Pond / Reservoir",
            "image": null
        },
        {
            "id": 26,
            "role": "Lampung Container Terminal",
            "company": "PT Samudera Rekso Asri",
            "period": "2018",
            "description": "Location: Lampung | Type: Container Yard",
            "image": null
        },
        {
            "id": 27,
            "role": "Semarang Container Terminal",
            "company": "PT Samudera Rekso Asri",
            "period": "2018",
            "description": "Location: Jawa Tengah | Type: Container Yard",
            "image": null
        },
        {
            "id": 28,
            "role": "Sudirman Road Underpass, Purwokerto",
            "company": "CV Satria Buana",
            "period": "2018",
            "description": "Location: Jawa Tengah | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 29,
            "role": "Stone Crusher, Lampung",
            "company": "PT Nopindo Berkat Alam",
            "period": "2017",
            "description": "Location: Lampung | Type: Wraparound System",
            "image": null
        },
        {
            "id": 30,
            "role": "Stormwater Channel Lining, Gresik",
            "company": "PT Hikari Teknologi Indonesia",
            "period": "2017",
            "description": "Location: Jawa Timur | Type: Water Pond / Reservoir",
            "image": null
        },
        {
            "id": 31,
            "role": "Crusher On-Ramp, Lematang Port, Muara Enim",
            "company": "PT Titan Mining",
            "period": "2017",
            "description": "Location: Sumatera Selatan | Type: Wraparound System",
            "image": null
        },
        {
            "id": 32,
            "role": "Batuceper",
            "company": "PT Waskita Karya",
            "period": "2017",
            "description": "Location: Banten | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 33,
            "role": "Mojokerto-Kertosono Toll Road Flyover",
            "company": "PT Hutama Karya",
            "period": "2017",
            "description": "Location: Jawa Timur | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 34,
            "role": "Kedaung Bridge, Tangerang",
            "company": "PT Mawatindo",
            "period": "2016",
            "description": "Location: Banten | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 35,
            "role": "P14 Slag Storage, Indocement Citereup",
            "company": "PT Wika Industri Konstruksi",
            "period": "2016",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 36,
            "role": "Access Road Stabilization for Sosa Palm Oil Plantation, Medan",
            "company": "PT Sumber Tani Agung Group",
            "period": "2016",
            "description": "Location: Sumatera Utara | Type: Road Stabilization",
            "image": null
        },
        {
            "id": 37,
            "role": "Teluk Bayur Container Terminal, Padang",
            "company": "PT Pelindo Sumbar",
            "period": "2016",
            "description": "Location: Sumatera Barat | Type: Container Yard",
            "image": null
        },
        {
            "id": 38,
            "role": "Greges Container Terminal, Surabaya",
            "company": "PT Samudera Rekso Asri",
            "period": "2016",
            "description": "Location: Jawa Timur | Type: Container Yard",
            "image": null
        },
        {
            "id": 39,
            "role": "Lamunti B3 Waterpond, Sriwedadi Village, Banjarmasin",
            "company": "PT Globalindo Agung Lestari",
            "period": "2016",
            "description": "Location: Kalimantan Selatan | Type: Water Pond / Reservoir",
            "image": null
        },
        {
            "id": 40,
            "role": "Retaining Wall at Nortridge Complex",
            "company": "Bapak Robi",
            "period": "2015",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 41,
            "role": "Segoro Madu Stadium, Gresik",
            "company": "PT Hutama Karya Gedung",
            "period": "2015",
            "description": "Location: Jawa Timur | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 42,
            "role": "Cikampek-Palimanan Toll Road, Section VI B",
            "company": "PT PP",
            "period": "2014",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 43,
            "role": "Bogor Outer Ring Road Flyover",
            "company": "PT PP",
            "period": "2013",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 44,
            "role": "STKKP Sentul",
            "company": "PT Bangun Persada Sejahtera",
            "period": "2013",
            "description": "Location: Jawa Barat | Type: Multiblock Retaining Wall System",
            "image": null
        },
        {
            "id": 45,
            "role": "Cocoa Warehouse, Batam",
            "company": "Not specified",
            "period": "2013",
            "description": "Location: Kepulauan Riau | Type: Wraparound System",
            "image": null
        }
    ]
};
