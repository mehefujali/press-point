const tagOptions = [
  { value: "breaking-news", label: "Breaking News" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
  { value: "entertainment", label: "Entertainment" },
  { value: "politics", label: "Politics" },
  { value: "world", label: "World" },
  { value: "science", label: "Science" },
  { value: "environment", label: "Environment" },
  { value: "education", label: "Education" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "travel", label: "Travel" },
  { value: "food", label: "Food" },
  { value: "fashion", label: "Fashion" },
  { value: "finance", label: "Finance" },
  { value: "culture", label: "Culture" },
  { value: "opinion", label: "Opinion" },
  { value: "weather", label: "Weather" },
  { value: "crime", label: "Crime" },
  { value: "history", label: "History" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "film", label: "Film" },
  { value: "books", label: "Books" },
  { value: "comedy", label: "Comedy" },
  { value: "tv", label: "TV" },
  { value: "podcasts", label: "Podcasts" },
  { value: "gaming", label: "Gaming" },
  { value: "cryptocurrency", label: "Cryptocurrency" },
  { value: "blockchain", label: "Blockchain" },
  { value: "ai", label: "AI" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "robotics", label: "Robotics" },
  { value: "space", label: "Space" },
  { value: "innovation", label: "Innovation" },
  { value: "startups", label: "Startups" },
  { value: "social-media", label: "Social Media" },
  { value: "mental-health", label: "Mental Health" },
  { value: "fitness", label: "Fitness" },
  { value: "nutrition", label: "Nutrition" },
  { value: "parenting", label: "Parenting" },
  { value: "relationship", label: "Relationship" },
  { value: "self-care", label: "Self-Care" },
  { value: "diabetes", label: "Diabetes" },
  { value: "cancer", label: "Cancer" },
  { value: "heart-disease", label: "Heart Disease" },
  { value: "vaccines", label: "Vaccines" },
  { value: "covid-19", label: "COVID-19" },
  { value: "pandemic", label: "Pandemic" },
  { value: "sustainability", label: "Sustainability" },
  { value: "renewable-energy", label: "Renewable Energy" },
  { value: "climate-change", label: "Climate Change" },
  { value: "water-conservation", label: "Water Conservation" },
  { value: "eco-friendly", label: "Eco-Friendly" },
  { value: "green-tech", label: "Green Tech" },
  { value: "transportation", label: "Transportation" },
  { value: "electric-vehicles", label: "Electric Vehicles" },
  { value: "smart-cities", label: "Smart Cities" },
  { value: "urbanization", label: "Urbanization" },
  { value: "globalization", label: "Globalization" },
  { value: "immigration", label: "Immigration" },
  { value: "refugees", label: "Refugees" },
  { value: "democracy", label: "Democracy" },
  { value: "human-rights", label: "Human Rights" },
  { value: "freedom", label: "Freedom" },
  { value: "equality", label: "Equality" },
  { value: "diversity", label: "Diversity" },
  { value: "inclusion", label: "Inclusion" },
  { value: "racial-justice", label: "Racial Justice" },
  { value: "gender-equality", label: "Gender Equality" },
  { value: "lgbtq", label: "LGBTQ+" },
  { value: "disability-rights", label: "Disability Rights" },
  { value: "education-reform", label: "Education Reform" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "future-of-work", label: "Future of Work" },
  { value: "automation", label: "Automation" },
  { value: "remote-work", label: "Remote Work" },
  { value: "workplace-culture", label: "Workplace Culture" },
  { value: "employee-wellbeing", label: "Employee Wellbeing" },
  { value: "leadership", label: "Leadership" },
  { value: "management", label: "Management" },
  { value: "productivity", label: "Productivity" },
  { value: "collaboration", label: "Collaboration" },
  { value: "startup-culture", label: "Startup Culture" },
  { value: "marketing", label: "Marketing" },
  { value: "advertising", label: "Advertising" },
  { value: "branding", label: "Branding" },
  { value: "public-relations", label: "Public Relations" },
  { value: "customer-service", label: "Customer Service" },
  { value: "sales", label: "Sales" },
  { value: "fundraising", label: "Fundraising" },
  { value: "venture-capital", label: "Venture Capital" },
  { value: "investment", label: "Investment" },
  { value: "financial-planning", label: "Financial Planning" },
  { value: "personal-finance", label: "Personal Finance" },
  { value: "cryptocurrency-investing", label: "Cryptocurrency Investing" },
  { value: "stocks", label: "Stocks" },
  { value: "real-estate", label: "Real Estate" },
  { value: "insurance", label: "Insurance" },
  { value: "banking", label: "Banking" },
  { value: "retirement", label: "Retirement" },
  { value: "taxes", label: "Taxes" },
  { value: "estate-planning", label: "Estate Planning" },
  { value: "business-strategy", label: "Business Strategy" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "ethical-hacking", label: "Ethical Hacking" },
  { value: "black-hat-hacking", label: "Black Hat Hacking" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
  { value: "space-exploration", label: "Space Exploration" },
  { value: "sustainability", label: "Sustainability" },
  { value: "mental-health", label: "Mental Health" },
  { value: "fitness", label: "Fitness" },
  { value: "fashion", label: "Fashion" },
  { value: "politics", label: "Politics" },
  { value: "cryptocurrency", label: "Cryptocurrency" },
  { value: "blockchain", label: "Blockchain" },
  { value: "travel", label: "Travel" },
  { value: "photography", label: "Photography" },
  { value: "food", label: "Food" },
  { value: "education", label: "Education" },
  { value: "music", label: "Music" },
  { value: "history", label: "History" },
  { value: "space-tourism", label: "Space Tourism" },
  { value: "robotics", label: "Robotics" },
  { value: "3d-printing", label: "3D Printing" },
  { value: "yoga", label: "Yoga" },
  { value: "environment", label: "Environment" },
  { value: "fitness-tracking", label: "Fitness Tracking" },
  { value: "home-improvement", label: "Home Improvement" },
  { value: "writing", label: "Writing" },
  { value: "parenting", label: "Parenting" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "movies", label: "Movies" },
  { value: "tv-shows", label: "TV Shows" },
  { value: "comedy", label: "Comedy" },
  { value: "art", label: "Art" },
  { value: "painting", label: "Painting" },
  { value: "crafts", label: "Crafts" },
  { value: "poetry", label: "Poetry" },
  { value: "psychology", label: "Psychology" },
  { value: "relationships", label: "Relationships" },
  { value: "business", label: "Business" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
  { value: "marketing", label: "Marketing" },
  { value: "law", label: "Law" },
  { value: "finance", label: "Finance" },
  { value: "education-technology", label: "Education Technology" },
  { value: "personal-development", label: "Personal Development" },
  { value: "mindfulness", label: "Mindfulness" },
  { value: "philosophy", label: "Philosophy" },
  { value: "science", label: "Science" },
  { value: "nature", label: "Nature" },
  { value: "wildlife", label: "Wildlife" },
  { value: "extinction", label: "Extinction" },
  { value: "diy", label: "DIY" },
  { value: "gardening", label: "Gardening" },
  { value: "home-decor", label: "Home Decor" },
  { value: "urban-planning", label: "Urban Planning" },
  { value: "climate-change", label: "Climate Change" },
  { value: "sustainable-living", label: "Sustainable Living" },
  { value: "technology-ethics", label: "Technology Ethics" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "augmented-reality", label: "Augmented Reality" },
  
  { value: "virtual-reality", label: "Virtual Reality" },
  { value: "cryptography", label: "Cryptography" },
  { value: "internet-of-things", label: "Internet of Things" },
  { value: "self-driving-cars", label: "Self-Driving Cars" },
  { value: "smart-home", label: "Smart Home" },
  { value: "autonomous-vehicles", label: "Autonomous Vehicles" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "big-data", label: "Big Data" },
  { value: "innovation", label: "Innovation" },
  { value: "healthcare", label: "Healthcare" },
  { value: "medicine", label: "Medicine" },
  { value: "wellness", label: "Wellness" },
  { value: "nutrition", label: "Nutrition" },
  { value: "robotics-process-automation", label: "Robotics Process Automation" },
  { value: "social-media", label: "Social Media" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "hacking", label: "Hacking" },
  { value: "data-breach", label: "Data Breach" },
  { value: "cyber-attacks", label: "Cyber Attacks" },
  { value: "cyber-forensics", label: "Cyber Forensics" },
  { value: "cloud-security", label: "Cloud Security" },
  { value: "cyber-espionage", label: "Cyber Espionage" },
  { value: "network-security", label: "Network Security" },
  { value: "social-engineering", label: "Social Engineering" },
  { value: "malware", label: "Malware" },
  { value: "ransomware", label: "Ransomware" },
  { value: "cyber-risk-management", label: "Cyber Risk Management" },
  { value: "privacy-policy", label: "Privacy Policy" },
  { value: "data-privacy", label: "Data Privacy" },
  { value: "data-encryption", label: "Data Encryption" },
  { value: "vpn", label: "VPN" },
  { value: "hacker-news", label: "Hacker News" },
  { value: "cloud-computing-security", label: "Cloud Computing Security" },
  { value: "cybersecurity-tools", label: "Cybersecurity Tools" },
  { value: "ethical-hacker", label: "Ethical Hacker" },
  { value: "digital-forensics", label: "Digital Forensics" },
  { value: "incident-response", label: "Incident Response" },
  { value: "threat-hunting", label: "Threat Hunting" },
  { value: "cyber-resilience", label: "Cyber Resilience" },
  { value: "online-privacy", label: "Online Privacy" },
  { value: "web-security", label: "Web Security" },
  { value: "hacker-tools", label: "Hacker Tools" },
  { value: "network-penetration-testing", label: "Network Penetration Testing" },
  { value: "movement", label: "movement" },
  { value: "student-movement", label: "student movement" },
  { value: "revolution", label: "revolution" },
];

export default tagOptions;
