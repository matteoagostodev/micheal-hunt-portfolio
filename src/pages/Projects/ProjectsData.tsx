
import { CaseStudy } from './CaseStudyCard';

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "E-commerce Revenue Growth Campaign",
    client: "FitLife Supplements",
    industry: "Health & Fitness",
    challenge: "FitLife Supplements was struggling with high CPAs and inconsistent ROAS across their Facebook and Instagram campaigns. Their audience targeting was too broad, and creative assets weren't resonating with potential customers.",
    solution: "Implemented a segmented audience strategy with lookalike audiences based on high-value purchasers. Created a new creative testing framework with focus on before/after testimonial videos. Restructured campaign budget allocation based on product profit margins instead of pure ROAS.",
    results: [
      { label: "ROAS Improvement", value: "4.2x", change: "152%", positive: true },
      { label: "CPA Reduction", value: "$22.15", change: "47%", positive: true },
      { label: "Monthly Revenue", value: "$342K", change: "78%", positive: true },
      { label: "CTR Increase", value: "3.2%", change: "67%", positive: true },
      { label: "Ad Spend", value: "$82K/mo", change: "", positive: true },
      { label: "Campaign Duration", value: "6 months", change: "", positive: true }
    ],
    duration: "6 months",
    platforms: ["Facebook", "Instagram"]
  },
  {
    id: "cs2",
    title: "New Product Launch Campaign",
    client: "EcoHome Essentials",
    industry: "Home Goods",
    challenge: "EcoHome Essentials was launching a new line of sustainable kitchen products but had limited brand awareness and a modest marketing budget. They needed to maximize impact with efficient spend allocation.",
    solution: "Designed a phased launch strategy starting with targeted influencer seeding, followed by UGC collection and amplification. Created sequential retargeting funnels with different messaging based on user engagement level. Implemented cross-platform tracking to attribute sales properly.",
    results: [
      { label: "First Month Sales", value: "$127K", change: "212% vs goal", positive: true },
      { label: "ROAS", value: "3.7x", change: "85% above target", positive: true },
      { label: "CPM Reduction", value: "$14.22", change: "38%", positive: true },
      { label: "Conversion Rate", value: "4.6%", change: "109%", positive: true },
      { label: "Email Subscribers", value: "15.3K", change: "275%", positive: true },
      { label: "Influencer ROI", value: "5.2x", change: "", positive: true }
    ],
    duration: "3 months",
    platforms: ["Facebook", "Instagram", "TikTok"]
  },
  {
    id: "cs3",
    title: "B2B Lead Generation Campaign",
    client: "Nexus Technologies",
    industry: "SaaS / Technology",
    challenge: "Nexus Technologies had a long sales cycle for their enterprise software solution, with high customer acquisition costs. Their previous campaigns focused on direct conversions, which wasn't aligned with their buyers' journey.",
    solution: "Restructured campaign strategy around a value-first content marketing approach. Created gated industry reports and webinars as lead magnets. Implemented sophisticated lead scoring and nurturing sequences integrated with their CRM. Optimized campaigns for lead quality rather than quantity.",
    results: [
      { label: "Cost Per Lead", value: "$42.15", change: "64%", positive: true },
      { label: "Lead Quality Score", value: "8.4/10", change: "47%", positive: true },
      { label: "Sales Cycle", value: "62 days", change: "33%", positive: true },
      { label: "Demo Requests", value: "118/mo", change: "184%", positive: true },
      { label: "Conversion to Sale", value: "18.2%", change: "96%", positive: true },
      { label: "ARR Growth", value: "$1.4M", change: "112%", positive: true }
    ],
    duration: "8 months",
    platforms: ["Facebook", "LinkedIn", "Google"]
  },
  {
    id: "cs4",
    title: "Local Business Expansion Campaign",
    client: "Vertex Fitness",
    industry: "Fitness / Local Service",
    challenge: "Vertex Fitness, a boutique gym with 3 locations, wanted to expand their client base without cannibalizing existing locations. Previous local campaigns had inconsistent results and poor measurement.",
    solution: "Implemented location-specific campaigns with radius targeting optimized for each gym. Created custom landing pages for each location with localized testimonials and imagery. Developed a free trial offer with automated follow-up sequence. Integrated offline conversion tracking to measure true ROI.",
    results: [
      { label: "New Memberships", value: "487", change: "132%", positive: true },
      { label: "Cost Per Acquisition", value: "$24.60", change: "58%", positive: true },
      { label: "Membership Retention", value: "92%", change: "17%", positive: true },
      { label: "Revenue Increase", value: "$41.3K/mo", change: "64%", positive: true },
      { label: "Lead-to-Member", value: "29.4%", change: "82%", positive: true },
      { label: "ROI", value: "643%", change: "", positive: true }
    ],
    duration: "5 months",
    platforms: ["Facebook", "Instagram", "Google"]
  },
  {
    id: "cs5",
    title: "Mobile App User Acquisition Campaign",
    client: "MealPrep Pro",
    industry: "Health & Fitness App",
    challenge: "MealPrep Pro was struggling with high CPI (Cost Per Install) and poor user retention in their mobile app. Their marketing efforts were focused primarily on installs without considering user quality and in-app actions.",
    solution: "Shifted strategy to optimize for post-install events rather than pure installs. Developed lookalike audiences based on highest-value users who purchased subscriptions. Created a video-first creative strategy showcasing app features. Implemented deep link ads to specific app functionality.",
    results: [
      { label: "CPI Reduction", value: "$2.84", change: "41%", positive: true },
      { label: "Free-to-Paid Conversion", value: "12.7%", change: "86%", positive: true },
      { label: "30-day Retention", value: "44%", change: "76%", positive: true },
      { label: "CAC Payback Period", value: "47 days", change: "51%", positive: true },
      { label: "LTV Increase", value: "$38.25", change: "63%", positive: true },
      { label: "ROI", value: "267%", change: "", positive: true }
    ],
    duration: "7 months",
    platforms: ["Facebook", "Instagram", "TikTok", "Snapchat"]
  },
  {
    id: "cs6",
    title: "Fashion Brand Awareness Campaign",
    client: "Urban Style Co.",
    industry: "Fashion / Apparel",
    challenge: "Urban Style Co., a new sustainable fashion brand, needed to build brand awareness and establish their unique position in a crowded market. Limited brand recognition was hampering their e-commerce sales.",
    solution: "Created a multi-phase awareness campaign focusing on the brand's sustainable practices and ethical manufacturing. Partnered with micro-influencers for authentic content creation. Developed engaging video stories showcasing the production process. Implemented retargeting strategies to nurture interested audiences.",
    results: [
      { label: "Brand Search Volume", value: "+428%", change: "", positive: true },
      { label: "Engagement Rate", value: "6.8%", change: "217%", positive: true },
      { label: "Website Traffic", value: "164K", change: "375%", positive: true },
      { label: "Social Following", value: "+47.2K", change: "843%", positive: true },
      { label: "Direct Traffic Sales", value: "$83.5K", change: "212%", positive: true },
      { label: "CPM Efficiency", value: "$12.40", change: "44%", positive: true }
    ],
    duration: "4 months",
    platforms: ["Instagram", "TikTok", "Pinterest"]
  }
];
