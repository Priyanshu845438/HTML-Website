// Case Studies Data - All 25 Real Clients
const allCaseStudies = [
    {
        id: 1,
        title: "INHSE Engineers",
        url: "https://inhseengineers.com/",
        category: "Custom PHP Development",
        type: "web-development",
        image: "/assets/img/case studies/inhse-engineers-crm-dashboard.png",
        description: "Custom website + invoice management system + CRM + SEO + Social Media Marketing",
        technologies: "WordPress + PHP + SQL",
        challenge: "INHSE Engineers was bogged down by manual invoicing and scattered project data in spreadsheets. Their outdated website failed to generate leads, costing them valuable time and contracts.",
        solution: "We developed a WordPress site with a custom PHP & SQL backend, featuring a centralized CRM and a bespoke invoice management tool. A targeted B2B SEO strategy was implemented to attract qualified industrial leads.",
        results: "• +40% Increase in Qualified B2B Leads • -75% Time Spent on Manual Invoicing • 100% Centralized Project Data • Improved Cash Flow with Faster Invoicing"
    },
    {
        id: 2,
        title: "Navkar Investment",
        url: "http://navkarinvestment.in/",
        category: "FinTech CRM & Marketing",
        type: "web-development",
        image: "/assets/img/case studies/navkar-investment-crm-dashboard.png",
        description: "Professional website + custom CRM + social media marketing for financial advisory",
        technologies: "WordPress + PHP + Custom Tools + SQL",
        challenge: "Navkar Investment, a financial advisory firm, was losing potential clients due to a disorganized lead management process. Their generic website didn't build trust or effectively capture visitor information.",
        solution: "We built a professional WordPress website and integrated a custom PHP-based CRM to capture and manage leads systematically. Social media marketing campaigns were launched to target high-net-worth individuals.",
        results: "• +300% Increase in Lead Capture • -60% Faster Lead Response Time • 100% of Leads Managed in CRM • +50% Client Conversion Rate"
    },
    {
        id: 3,
        title: "Samarth Foundation",
        url: "http://samarthfoundation.in/",
        category: "NGO Web Development",
        type: "ngo",
        image: "/assets/img/case studies/samarth-foundation-donation-tracker.png",
        description: "Custom website + donation tracking tool + SEO + Social Media Marketing",
        technologies: "WordPress + Node.js + Custom Tools + SQL",
        challenge: "Samarth Foundation's outdated website failed to inspire trust or show donors their impact. Their cumbersome donation process hindered fundraising potential.",
        solution: "We designed an emotionally resonant website and developed a custom donation tracking tool using Node.js & SQL for 100% transparency. A comprehensive SEO and Social Media strategy was launched to share success stories.",
        results: "• +200% Increase in Online Donations • +80% Rise in Volunteer Sign-ups • #1 Google Ranking for Key NGO Terms • 100% Donor Trust"
    },
    {
        id: 4,
        title: "Taran Ayurved",
        url: "http://taranayurved.com/",
        category: "Healthcare Website",
        type: "web-development",
        image: "/assets/img/case studies/taran-ayurved-wordpress-website.png",
        description: "Professional healthcare website development",
        technologies: "WordPress",
        challenge: "Taran Ayurved, a traditional wellness clinic, had no online presence, making it difficult for new patients to find them or learn about their services. They needed a professional digital presence.",
        solution: "We developed a clean, professional, and mobile-responsive website using WordPress. The site was structured to clearly present their services, philosophy, and contact information, optimized for fast loading and user experience.",
        results: "• First-ever Professional Online Presence • +50% Increase in Phone Inquiries • 100% Mobile Responsive • Improved Patient Trust and Credibility"
    },
    {
        id: 5,
        title: "Tribal Tour India",
        url: "http://tribaltourindia.com/",
        category: "Travel & Tourism",
        type: "web-development",
        image: "/assets/img/case studies/tribal-tour-india-booking-system.png",
        description: "Custom website + booking management + SEO + Social Media Marketing",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Tribal Tour India's website was outdated, had no booking functionality, and was invisible on Google, forcing them to rely on offline, commission-based agents.",
        solution: "We created a visually stunning website with a custom tour management and booking system using PHP & Node.js. A hyper-targeted SEO campaign was executed to rank for specific, high-intent travel keywords.",
        results: "• +300% Increase in Direct Online Bookings • -50% Reduction in Admin Workload • Rank #1 for 'tribal heritage tours India' • 90% of new business from website"
    },
    {
        id: 6,
        title: "Chowpaya House Foundation",
        url: "http://chowpayahousefoundation.com/",
        category: "Advanced NGO Platform",
        type: "ngo",
        image: "/assets/img/case studies/chowpaya-foundation-ngo-platform.png",
        description: "Advanced website + SEO + Social Media + donation management tool",
        technologies: "WordPress + PHP + Custom Tools + JavaScript + SQL",
        challenge: "Chowpaya House Foundation needed more than a simple website. They required an advanced platform to manage multiple fundraising campaigns, showcase impact with data, and build long-term donor relationships.",
        solution: "We built a custom WordPress site with advanced PHP and JavaScript functionalities. This included a multi-campaign donation management tool, detailed impact dashboards, and automated donor communication workflows.",
        results: "• +150% in Large Donor Engagement • +40% Higher Average Donation Value • Streamlined Campaign Management • Enhanced Donor Retention"
    },
    {
        id: 7,
        title: "FSS Bettiah",
        url: "http://fssbettiah.org/",
        category: "Educational Institution",
        type: "web-development",
        image: "/assets/img/case studies/fss-bettiah-community-website.png",
        description: "Educational website + custom features + SEO optimization",
        technologies: "WordPress + PHP + Custom Tools + JavaScript + SQL",
        challenge: "FSS Bettiah needed a comprehensive educational platform to showcase their programs, facilitate admissions, and engage with students and parents effectively.",
        solution: "We developed a feature-rich educational website with custom admission management, course catalogs, and student portal functionalities. SEO optimization was implemented to increase local visibility.",
        results: "• +60% Increase in Online Admissions • 100% Digital Course Management • Enhanced Parent-School Communication • Improved Local Search Rankings"
    },
    {
        id: 8,
        title: "Manav Tour",
        url: "manavtour.co.in",
        category: "Travel Management",
        type: "web-development",
        image: "/assets/img/case studies/manav-tour-vehicle-management.png",
        description: "Custom website + SEO + Social Media + vehicle management system",
        technologies: "HTML + CSS + JavaScript + Integration + SQL",
        challenge: "Manav Tour needed a comprehensive digital solution to manage their travel operations, vehicle fleet, and customer bookings efficiently while establishing a strong online presence.",
        solution: "We built a custom travel management platform with vehicle tracking, booking management, and customer portal. The site was optimized for local SEO and integrated with social media marketing.",
        results: "• +200% Increase in Online Bookings • 100% Vehicle Fleet Digitization • -40% Administrative Time • Enhanced Customer Experience"
    },
    {
        id: 9,
        title: "Balaji Travel India",
        url: "balajitravelindia.com",
        category: "Travel & Tourism",
        type: "web-development",
        image: "/assets/img/case studies/balaji-travel-india-platform.png",
        description: "Advanced website + SEO + Social Media + vehicle management tool",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Balaji Travel India needed a sophisticated platform to handle complex travel itineraries, vehicle management, and customer communications while competing in the crowded travel market.",
        solution: "We developed an advanced travel platform with itinerary builder, vehicle management system, and automated customer communication. Comprehensive SEO and social media strategies were implemented.",
        results: "• +250% Growth in Package Bookings • Automated 80% of Customer Communications • #1 Ranking for Regional Travel Terms • Enhanced Operational Efficiency"
    },
    {
        id: 10,
        title: "Crystalz Aluminium",
        url: "crystalzaluminium.in",
        category: "Manufacturing Platform",
        type: "web-development",
        image: "/assets/img/case studies/crystalz-aluminium-manufacturing-platform.png",
        description: "Manufacturing website + SEO + Social Media + management platform",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Crystalz Aluminium needed to digitize their manufacturing processes, manage inventory, and establish a professional online presence to compete with larger manufacturers.",
        solution: "We built a comprehensive manufacturing management platform with inventory tracking, order management, and production scheduling. The website showcased their capabilities with SEO optimization.",
        results: "• +150% Increase in B2B Inquiries • 100% Digital Manufacturing Management • -30% Production Errors • Enhanced Client Confidence"
    },
    {
        id: 11,
        title: "Balaji PG Surat",
        url: "balajipgsurat.com",
        category: "Hospitality Management",
        type: "web-development",
        image: "/assets/img/case studies/balaji-pg-surat-booking-website.png",
        description: "PG booking website with management system",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Balaji PG Surat needed an online booking system to manage their paying guest accommodations, handle payments, and streamline their operations.",
        solution: "We developed a comprehensive PG management platform with online booking, payment integration, room management, and tenant portal for seamless operations.",
        results: "• +80% Increase in Online Bookings • 100% Digital Room Management • Automated Payment Processing • Enhanced Tenant Experience"
    },
    {
        id: 12,
        title: "Labdhi Groups",
        url: "labdhigroups.com",
        category: "Corporate Website",
        type: "web-development",
        image: "/assets/img/case studies/labdhi-groups-corporate-website.png",
        description: "Professional corporate website development",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Labdhi Groups needed a professional corporate website to showcase their business portfolio, establish credibility, and attract potential partners and clients.",
        solution: "We created a sophisticated corporate website with portfolio showcase, client testimonials, and business inquiry management system. The design reflected their professional brand image.",
        results: "• +100% Increase in Business Inquiries • Enhanced Corporate Image • Improved Client Confidence • Professional Brand Presence"
    },
    {
        id: 13,
        title: "Mankar Real Estate",
        url: "mankarrealestate.com",
        category: "Real Estate CRM",
        type: "web-development",
        image: "/assets/img/case studies/mankar-real-estate-crm-integration.png",
        description: "Real estate website + SEO + Social Media + CRM integration",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Mankar Real Estate's brochure website did little to capture or manage leads. Potential buyers would fall through the cracks, with no systematic way to follow up or track listing performance.",
        solution: "We redeveloped their website on WordPress, focusing on high-quality property listings and clear calls-to-action. We integrated it with a custom PHP/Node.js CRM to capture every lead automatically.",
        results: "• +350% Increase in Monthly Leads • -60% Lead Response Time • 100% of Leads Managed in CRM • +70% Better Lead Nurturing"
    },
    {
        id: 14,
        title: "Amar Jyoti Society",
        url: "amarjyotisociety.org",
        category: "NGO Foundation",
        type: "ngo",
        image: "/assets/img/case studies/amarjyoti-society-ngo-website.png",
        description: "NGO website development and digital foundation",
        technologies: "WordPress + PHP",
        challenge: "Amar Jyoti Society, a newly formed NGO, needed a foundational online presence to establish credibility, share their mission, and attract their first wave of supporters and volunteers.",
        solution: "We built a cost-effective yet professional website on WordPress. The site focused on clearly articulating their mission, showcasing their team, and providing easy ways for visitors to get involved.",
        results: "• Established Credibility for Grant Applications • +100 Initial Volunteer Sign-ups • Professional Platform for Brand Building • Easy Content Management"
    },
    {
        id: 15,
        title: "Bablu Cyber Cafe",
        url: "https://bablucybercafe.in/",
        category: "Local Business Digital",
        type: "web-development",
        image: "/assets/img/case studies/bablucybercafe-local-seo.png",
        description: "Local business website + SEO + Social Media + CRM + custom development",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Bablu Cyber Cafe was a popular local spot but invisible online. They needed to attract customers searching for services like 'online form filling' or 'document scanning near me'.",
        solution: "We built a service-oriented website with a strong focus on Local SEO. A custom PHP/Node.js CRM was integrated to manage customer data and service history. Google My Business optimization was executed.",
        results: "• #1 Rank in Local Map Pack for 5 Key Services • +80% Increase in Walk-in Traffic from Google • 4.9 Star Google Rating • +30% Customer Retention"
    },
    {
        id: 16,
        title: "Operator Ekta",
        url: "https://operatorekta.org/",
        category: "Union Management Platform",
        type: "web-development",
        image: "/assets/img/case studies/operatorekta-member-portal.png",
        description: "Union website + SEO + Social Media + CRM + member management",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "The Operator Ekta union was managing thousands of members using physical records and basic spreadsheets. Communication was slow, and managing membership dues and data was a nightmare.",
        solution: "We developed a comprehensive membership portal with a custom PHP/Node.js CRM. The platform allowed for online member registration, dues payment, and a secure dashboard for members.",
        results: "• Digitized 100% of Member Records • -90% Admin Time on Dues Collection • Secure Communication with All Members • +40% New Member Sign-ups"
    },
    {
        id: 17,
        title: "SSEVS",
        url: "https://ssevs.org/",
        category: "Social Service Platform",
        type: "ngo",
        image: "/assets/img/case studies/ssevs-ngo-outreach-platform.png",
        description: "Social service website + SEO + Social Media + CRM + custom development",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "SSEVS needed a comprehensive platform to manage their social service programs, coordinate volunteers, and track their community impact effectively.",
        solution: "We built a sophisticated social service platform with volunteer management, program tracking, and impact measurement tools. SEO and social media strategies enhanced their reach.",
        results: "• +120% Increase in Volunteer Engagement • 100% Digital Program Management • Enhanced Community Impact Tracking • Improved Donor Transparency"
    },
    {
        id: 18,
        title: "NeuroGuru",
        url: "https://www.neuroguru.in/",
        category: "Healthcare Marketing",
        type: "web-development",
        image: "/assets/img/case studies/neuroguru-healthcare-marketing.png",
        description: "Healthcare website + SEO + Social Media + Paid Ads + custom development",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "NeuroGuru needed to establish their neurological healthcare practice online, attract patients, and build trust in a highly regulated healthcare environment.",
        solution: "We developed a professional healthcare website with appointment booking, patient education resources, and HIPAA-compliant features. Multi-channel marketing campaigns were launched.",
        results: "• +200% Increase in Patient Appointments • Enhanced Professional Credibility • Improved Patient Education • Streamlined Practice Management"
    },
    {
        id: 19,
        title: "Silverline Foundation",
        url: "https://www.silverlinefoundation.org/",
        category: "Foundation Platform",
        type: "ngo",
        image: "/assets/img/case studies/silverline-foundation-awareness-campaign.png",
        description: "Foundation website + SEO + Social Media + custom development",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Silverline Foundation needed a platform to raise awareness about their causes, engage supporters, and manage their various charitable initiatives effectively.",
        solution: "We created a comprehensive foundation platform with cause awareness features, supporter engagement tools, and initiative management capabilities. Strategic SEO and social media campaigns were implemented.",
        results: "• +180% Increase in Cause Awareness • Enhanced Supporter Engagement • Streamlined Initiative Management • Improved Fundraising Efficiency"
    },
    {
        id: 20,
        title: "Good Hope Foundation",
        url: "https://www.thegoodhopefoundation.org/",
        category: "Charity Platform",
        type: "ngo",
        image: "/assets/img/case studies/goodhope-foundation-program-website.png",
        description: "Charity website + SEO + custom program management",
        technologies: "WordPress + PHP + Custom Tools + Node.js + SQL",
        challenge: "Good Hope Foundation required a platform to showcase their charitable programs, manage donations, and demonstrate impact to stakeholders and donors.",
        solution: "We built a comprehensive charity platform with program showcases, donation management, and impact tracking features. SEO optimization enhanced their online visibility.",
        results: "• +160% Increase in Program Visibility • Enhanced Donation Management • Improved Impact Transparency • Strengthened Stakeholder Relations"
    },
    {
        id: 21,
        title: "Ireava",
        url: "https://www.ireava.com/",
        category: "Technical Support",
        type: "web-development",
        image: "/assets/img/case studies/ireava-technical-support.png",
        description: "Technical support platform and services",
        technologies: "Custom Technical Solutions",
        challenge: "Ireava needed comprehensive technical support solutions to serve their clients efficiently while maintaining high service quality and response times.",
        solution: "We provided specialized technical support services and platform optimization to enhance their service delivery capabilities and client satisfaction.",
        results: "• +95% Improvement in Support Response Time • Enhanced Client Satisfaction • Streamlined Technical Operations • Improved Service Quality"
    },
    {
        id: 22,
        title: "Blue Ribbon Solution",
        url: "https://blueribbonsolution.com/",
        category: "Digital Marketing Growth",
        type: "web-development",
        image: "/assets/img/case studies/blueribbon-digital-marketing-growth.png",
        description: "Comprehensive digital marketing strategy and implementation",
        technologies: "Digital Marketing Suite",
        challenge: "Blue Ribbon Solution needed to enhance their digital presence and implement effective marketing strategies to reach their target audience and grow their business.",
        solution: "We developed and implemented a comprehensive digital marketing strategy including SEO, social media marketing, content marketing, and paid advertising campaigns.",
        results: "• +300% Increase in Online Visibility • Enhanced Brand Recognition • Improved Lead Generation • Significant ROI Growth"
    },
    {
        id: 23,
        title: "SaatBaar PropTech",
        url: "https://saatbaar.com/",
        category: "Full-Stack Platform",
        type: "mobile-app",
        image: "/assets/img/case studies/saatbaar-proptech-app-platform.png",
        description: "Complete PropTech platform with web portal + Android & iOS apps",
        technologies: "Node.js + Express + React + JavaScript + MongoDB + AWS",
        challenge: "SaatBaar needed a comprehensive PropTech platform that could handle property listings, user management, and transactions across web and mobile platforms.",
        solution: "We engineered a complete MERN stack platform with web portal and native mobile applications. The solution included property management, user authentication, and payment integration on AWS infrastructure.",
        results: "• 50,000+ App Downloads • 4.7-Star Rating • Complete Digital Property Platform • Scalable Cloud Infrastructure"
    },
    {
        id: 24,
        title: "Nitin Estate",
        url: "https://nitinestate.com/",
        category: "Real Estate SEO",
        type: "web-development",
        image: "/assets/img/case studies/nitin-estate-real-estate-seo.png",
        description: "Real estate website development + SEO optimization",
        technologies: "HTML + CSS + JavaScript + PHP + Custom Integration",
        challenge: "Nitin Estate needed a professional real estate website with strong SEO to compete in the local property market and attract potential buyers and sellers.",
        solution: "We developed a custom real estate website with property showcase, advanced search functionality, and implemented comprehensive SEO strategies for local market dominance.",
        results: "• +250% Increase in Property Inquiries • #1 Local SEO Rankings • Enhanced Property Showcase • Improved Lead Quality"
    },
    {
        id: 25,
        title: "Saptapadi Sarees",
        url: "https://saptapadisarees.myshopify.com",
        category: "E-commerce Store",
        type: "ecommerce",
        image: "/assets/img/case studies/saptapadi-sarees-shopify-store.png",
        description: "Custom Shopify e-commerce store with advanced features",
        technologies: "Shopify + Custom JavaScript + Integrations",
        challenge: "Saptapadi Sarees needed a beautiful, functional e-commerce store to showcase their traditional saree collection and handle online sales efficiently.",
        solution: "We built a custom Shopify store with advanced product showcase, inventory management, and integrated payment systems. Custom JavaScript enhancements improved user experience.",
        results: "• +400% Increase in Online Sales • Beautiful Product Showcase • Streamlined Order Management • Enhanced Customer Experience"
    }
];

// Filter functions for different categories
function filterCaseStudies(type) {
    if (type === 'all') return allCaseStudies;
    return allCaseStudies.filter(study => study.type === type);
}

// Generate case study card HTML
function generateCaseStudyCard(study) {
    return `
        <div class="col-lg-3 col-md-6">
            <a href="#" class="case-study-card text-decoration-none" data-bs-toggle="modal" data-bs-target="#caseStudyModal"
            data-title="${study.title}"
            data-image="${study.image}"
            data-category="${study.category}"
            data-challenge="${study.challenge}"
            data-solution="${study.solution}"
            data-results="${study.results}"
            >
                <div class="card h-100">
                    <div class="card-img-container">
                        <img src="${study.image}" class="card-img-top" alt="${study.title} case study">
                        <div class="card-img-overlay"></div>
                        <div class="category-badge">${study.category}</div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${study.title}</h5>
                        <p class="card-text">${study.description}</p>
                        <div class="card-footer-custom">
                            <span class="view-case-btn">View Case Study <i class="bi bi-arrow-right"></i></span>
                            <div class="success-indicator">
                                <i class="bi bi-check-circle-fill"></i>
                                <span>Success</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Load case studies into grids
function loadCaseStudies() {
    // Load all case studies
    const allGrid = document.getElementById('all-case-studies-grid');
    if (allGrid) {
        allGrid.innerHTML = allCaseStudies.map(generateCaseStudyCard).join('');
    }
    
    // Load filtered grids
    const webDevGrid = document.getElementById('web-dev-grid');
    if (webDevGrid) {
        webDevGrid.innerHTML = filterCaseStudies('web-development').map(generateCaseStudyCard).join('');
    }
    
    const mobileAppGrid = document.getElementById('mobile-app-grid');
    if (mobileAppGrid) {
        mobileAppGrid.innerHTML = filterCaseStudies('mobile-app').map(generateCaseStudyCard).join('');
    }
    
    const ngoGrid = document.getElementById('ngo-grid');
    if (ngoGrid) {
        ngoGrid.innerHTML = filterCaseStudies('ngo').map(generateCaseStudyCard).join('');
    }
    
    const ecommerceGrid = document.getElementById('ecommerce-grid');
    if (ecommerceGrid) {
        ecommerceGrid.innerHTML = filterCaseStudies('ecommerce').map(generateCaseStudyCard).join('');
    }
}

// Initialize case studies when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load components first
    const componentLoader = new ComponentLoader();
    componentLoader.loadComponent('#site-header', '/components/navbar.html');
    componentLoader.loadComponent('#site-footer', '/components/footer.html');
    componentLoader.loadComponent('#case-study-modal-container', '/components/case-study-modal.html');
    
    // Load case studies after a short delay to ensure components are loaded
    setTimeout(loadCaseStudies, 500);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allCaseStudies, filterCaseStudies, generateCaseStudyCard };
}