import { image } from "framer-motion/client";

const blogData=[

  {
    id:'1',
  image:'public/student-849821_1920.jpg',
  title:"The Rise of Social Media: Connecting a Global Audience",
  content:'Social media connects the world, breaking barriers and fostering global communities. It empowers communication, sharing, and innovation while shaping a more connected digital era.',
  author: "Dr. Sarah Mitchell",
  publishedDate: "2025-01-10",
  category:"AI"
  },

  {
    id:'2',
  image:'public/people-2557396_1920.jpg',
  title:"The Role of AI in Social Interactions",
  content:'AI is transforming social interactions by personalizing experiences, enhancing communication, and automating tasks. From chatbots to recommendation systems, AI is shaping how we connect in the digital age.',
  author: "Dr. Rohika Mitchell",
  publishedDate: "2025-01-4",
  category:"AI"
  },
  {
    id:'3',
  image:'public/notebooks-569121.jpg',
  title:"How Social Technology Impacts Mental Health",
  content:'Social technology has both positive and negative effects on mental health. While it connects people and provides support, excessive use can lead to anxiety, depression, and social isolation. Finding a balance is key.',
  author: "Dr. Rohika Mitchell",
  publishedDate: "2025-09-2",
  category:"Health"
  },

  {
    id:'4',
  image:'public/student-849821_1920.jpg',
  title:"The Rise of Social Media: Connecting a Global Audience",
  content:'Social media connects the world, breaking barriers and fostering global communities. It empowers communication, sharing, and innovation while shaping a more connected digital era.',
  author: "Dr. Sarah Mitchell",
  publishedDate: "2025-01-10",
  category:"AI"
  },

    {
        id: 5,
        image:'public/HeatlImages/medicinal-herb-4881474_1920.jpg',
        title: "5 Essential Daily Habits to Transform Your Physical and Mental Health",
        author: "Dr. Sarah Mitchell",
        publishedDate: "2025-01-10",
        content: "Creating small, consistent habits can significantly improve your overall health. Start your day with a glass of water to stay hydrated, allocate at least 30 minutes for moderate physical activity like walking or yoga, and include plenty of fruits and vegetables in your meals. Prioritize 7-8 hours of quality sleep each night to allow your body to recover. Lastly, practice mindfulness or gratitude to maintain mental well-being.",
        tags: ["Health", "Wellness", "Habits"],
        category:"Health"
      },
        {
          id: 6,
          image:'public/HeatlImages/raspberries-and-blackberries-5001160_1920.jpg',
          title: "The Incredible Health Benefits of Adopting a Plant-Based Diet for Your Lifestyle",
          author: "James Carter",
          publishedDate: "2025-01-08",
          content: "A plant-based diet focuses on consuming whole, natural foods such as fruits, vegetables, legumes, nuts, and seeds. Studies show that this type of diet can lower the risk of heart disease, reduce inflammation, and aid in weight management. Additionally, it’s an environmentally friendly choice, as it reduces your carbon footprint. Start by replacing one meal a day with plant-based options and explore recipes to keep your meals exciting and nutritious.",
          tags: ["Nutrition", "Plant-Based", "Diet"],
          category:"Health"
        },
        {
          id: 7,
          image: 'public/HeatlImages/yoga-4300033_1920.jpg',
          title: "Yoga: The Ultimate Practice for Achieving Mental Clarity and Physical Strength",
          author: "Emily Grace",
          publishedDate: "2025-01-05",
          content: "Yoga is a centuries-old practice that combines physical postures, controlled breathing, and meditation. Physically, it improves flexibility, balance, and strength. Mentally, it reduces stress and anxiety, improves focus, and enhances overall well-being. Beginners can start with simple poses like Downward Dog and Child’s Pose. Over time, practicing yoga regularly can lead to a more mindful and healthier lifestyle.",
          tags: ["Yoga", "Mental Health", "Fitness"],
          category:"Health"
        },
        {
          id: 8,
          image:'public/HeatlImages/background-8266762_1920.jpg',
          title: "Why Gut Health is the Foundation of Your Overall Well-Being and Immune System",
          author: "Dr. Michael Brown",
          publishedDate: "2025-01-03",
          content: "Your gut health has a profound impact on your immune system, digestion, and even your mood. A diet rich in fiber, probiotics, and fermented foods like yogurt and kimchi can promote healthy gut bacteria. Avoid excessive sugar and processed foods, which can disrupt the balance of your gut microbiome. Drink plenty of water and consider consulting a healthcare professional if you experience frequent digestive issues.",
          tags: ["Gut Health", "Nutrition", "Wellness"],
          category:"Health"
        },
        {
          id: 9,
          image:'public/HeatlImages/baby-1151348_1920.jpg',
          title: "The Science Behind Quality Sleep: How Rest Impacts Your Body and Mind",
          author: "Sophia Wilson",
          publishedDate: "2025-01-01",
          content: "Sleep is essential for your body and mind to function properly. During sleep, your body repairs tissues, consolidates memories, and regulates hormones. Lack of sleep can lead to fatigue, mood swings, and weakened immunity. To improve sleep quality, maintain a consistent sleep schedule, limit screen time before bed, and create a calming bedtime routine. A cool, dark, and quiet environment is ideal for restful sleep.",
          tags: ["Sleep", "Health", "Science"],
          category:"Health"
        },
        {
          id: 10,
          image:'public/HeatlImages/patient-7408733_1920.png',
          title: "Effective Stress Management: Proven Tips and Techniques for a Balanced Life",
          author: "Daniel Martinez",
          publishedDate: "2024-12-28",
          content: "Chronic stress can negatively affect both mental and physical health. To manage stress effectively, incorporate relaxation techniques such as deep breathing, meditation, or journaling into your daily routine. Exercise regularly, as it helps release endorphins, the body's natural stress relievers. Additionally, set realistic goals, learn to say no, and seek support from friends, family, or a counselor when needed.",
          tags: ["Stress", "Mental Health", "Lifestyle"],
          category:"Health"
        },
        {
          id: 11,
          image:'public/HeatlImages/glass-4439673_1920.jpg',
          title: "Hydration and Health: Why Drinking Enough Water is Crucial for Your Body",
          author: "Dr. Olivia Harris",
          publishedDate: "2024-12-25",
          content: "Hydration is vital for maintaining energy levels, regulating body temperature, and supporting bodily functions. Drinking enough water prevents dehydration, which can cause headaches, fatigue, and poor concentration. Aim to drink 8-10 glasses of water daily, and adjust based on your activity level and climate. Include water-rich foods like cucumbers and oranges in your diet to boost hydration.",
          tags: ["Hydration", "Health", "Tips"],
          category:"Health"
        },
        {
          id: 12,
          image:'public/HeatlImages/ai-generated-8931940_1920.png',
          title: "Top Superfoods to Strengthen Your Immune System and Fight Off Illness",
          author: "Patricia Anderson",
          publishedDate: "2025-01-07",
          content: "Superfoods are nutrient-rich foods that provide health benefits beyond their nutritional value. Include berries for antioxidants, leafy greens for vitamins, and turmeric for its anti-inflammatory properties in your diet. Garlic and ginger are excellent for boosting immunity, especially during cold and flu seasons. Incorporate these foods into smoothies, soups, or snacks to keep your immune system strong.",
          tags: ["Superfoods", "Immune Health", "Nutrition"],
          category:"Health"
        },
        {
          id: 13,
          image:'public/HeatlImages/ai-generated-8862000_1920.jpg',
          title: "Stay Active During Winter: Tips for Maintaining Your Fitness Routine",
          author: "Chris Taylor",
          publishedDate: "2025-01-09",
          content: "Winter can be a challenging time to stay active due to cold weather and limited daylight. However, you can maintain your fitness routine by exploring indoor activities like yoga, strength training, or dance classes. Invest in warm workout gear to enjoy outdoor activities like hiking or jogging. Staying active not only boosts your mood but also keeps your energy levels up during the colder months.",
          tags: ["Fitness", "Winter", "Health"],
          category:"Health"
        },
        {
          id: 14,
          image:'public/HeatlImages/ai-generated-8772472_1920.jpg',
          title: "Debunking Common Nutrition Myths: Facts You Need to Know for Better Health",
          author: "Emma Roberts",
          publishedDate: "2025-01-12",
          content: "There are many misconceptions about nutrition, such as the idea that all fats are bad or that carbs should be avoided entirely. In reality, healthy fats and complex carbs are essential for a balanced diet. Another myth is that skipping meals aids weight loss, which can actually slow your metabolism. Educate yourself with evidence-based nutrition information to make informed dietary choices.",
          tags: ["Nutrition", "Myths", "Health"],
          category:"Health"
        },

        {
          id: 15,
          image:'public/FintexhImages/light-bulbs-5488573_1920.jpg',
          title: "The Future of Digital Payments: Trends Shaping the Fintech Industry in 2025",
          author: "Lisa Morgan",
          publishedDate: "2025-01-12",
          content: "Digital payments have revolutionized the way we handle money. From contactless cards to mobile wallets like Apple Pay and Google Pay, convenience is driving widespread adoption. Blockchain technology and biometric authentication are also becoming key trends. As financial services become more integrated into daily apps, the future of payments is heading toward seamless, secure, and global accessibility.",
          tags: ["Fintech", "Digital Payments", "Trends"],
          category:"Fintech"
        },
        {
          id: 16,
          image:'public/FintexhImages/finance-8836902_1920.jpg',
          title: "Understanding Blockchain Technology: The Backbone of Modern Fintech Innovations",
          author: "Dr. Kevin Lee",
          publishedDate: "2025-01-10",
          content: "Blockchain is the foundation of many fintech advancements, offering transparency, security, and decentralization. From cryptocurrencies to smart contracts, this technology has disrupted traditional banking. Its applications extend beyond finance, impacting supply chain management and identity verification. Learn how blockchain is shaping the future of fintech and what it means for businesses and consumers.",
          tags: ["Blockchain", "Fintech", "Technology"],
           category:"Fintech"
        },
        {
          id: 17,
          image:'public/FintexhImages/car-8598762_1920.jpg',
          title: "How Fintech Startups are Redefining Small Business Lending in a Digital Era",
          author: "Emily Carter",
          publishedDate: "2025-01-08",
          content: "Fintech startups have simplified small business lending by leveraging AI and big data to assess creditworthiness. Platforms like Kabbage and Funding Circle offer faster approvals and personalized loan options compared to traditional banks. This accessibility is empowering entrepreneurs to scale their businesses efficiently while maintaining financial flexibility.",
          tags: ["Fintech", "Small Business", "Lending"],
           category:"Fintech"
        },
        {
          id: 18,
          image:'public/FintexhImages/arrow-5161490_1920.jpg',
          title: "Robo-Advisors: The Rise of Automated Financial Planning for Investors",
          author: "David Brown",
          publishedDate: "2025-01-07",
          content: "Robo-advisors have democratized investment management by providing low-cost, algorithm-driven financial planning. Platforms like Betterment and Wealthfront use AI to create customized portfolios based on user goals and risk tolerance. This trend is attracting millennials and first-time investors, making wealth management more accessible than ever.",
          tags: ["Investments", "Robo-Advisors", "Fintech"],
           category:"Fintech"
        },
        {
          id: 19,
          image:'public/FintexhImages/ai-generated-8780351_1920.png',
          title: "The Role of Artificial Intelligence in Fraud Detection and Financial Security",
          author: "Sophia Lee",
          publishedDate: "2025-01-05",
          content: "AI has become a crucial tool for identifying fraudulent activities in real-time. Machine learning algorithms analyze transaction patterns, flagging suspicious behavior instantly. Financial institutions are adopting AI to enhance cybersecurity and protect customers from scams, making the financial ecosystem safer and more reliable.",
          tags: ["AI", "Fraud Detection", "Fintech"],
           category:"Fintech"
        },
        {
          id: 20,
          image:'public/AIImages/artificial-intelligence-5866644_1920.jpg',
          title: "Artificial Intelligence: Transforming Industries and Shaping the Future",
          author: "Sophia Clark",
          publishedDate: "2025-01-12",
          content: "Artificial Intelligence (AI) is revolutionizing industries, from healthcare and education to retail and transportation. AI-powered solutions like predictive analytics, chatbots, and automation tools are increasing efficiency, reducing costs, and creating personalized experiences for consumers. As AI continues to evolve, it is poised to redefine the way we live and work.",
          tags: ["AI", "Innovation", "Future"],
          category:"AI"
        },
        {
          id: 21,
          image:'public/AIImages/ai-generated-8972188_1920.jpg',
          title: "Machine Learning vs. Deep Learning: Key Differences Explained",
          author: "Ethan Morgan",
          publishedDate: "2025-01-10",
          content: "Machine learning and deep learning are two subsets of AI, but they serve different purposes. Machine learning uses algorithms to analyze data and make predictions, while deep learning employs neural networks to mimic human brain functionality. This blog delves into their differences, applications, and how they're transforming technology.",
          tags: ["AI", "Machine Learning", "Deep Learning"],
          category:"AI"
        },
        {
          id: 22,
          image:'public/AIImages/medical-8562583_1920.jpg',
          title: "AI in Healthcare: Saving Lives with Advanced Technologies",
          author: "Emma Johnson",
          publishedDate: "2025-01-08",
          content: "AI is making waves in healthcare with applications like early disease detection, drug discovery, and personalized treatment plans. Tools powered by AI, such as diagnostic imaging and virtual health assistants, are helping doctors make informed decisions and improving patient outcomes.",
          tags: ["AI", "Healthcare", "Technology"],
          category:"AI"
        },
        {
          id: 23,
          image:'public/AIImages/ai-generated-8972188_1920.jpg',
          title: "The Role of AI in Autonomous Vehicles: Driving the Future of Transportation",
          author: "Michael Brown",
          publishedDate: "2025-01-06",
          content: "AI is at the heart of autonomous vehicle development, enabling features like navigation, traffic prediction, and obstacle detection. Companies like Tesla and Waymo are leveraging AI to create safer and more efficient transportation systems. Learn how AI is shaping the future of self-driving cars.",
          tags: ["AI", "Autonomous Vehicles", "Innovation"],
          category:"AI"
        },
        {
          id: 24,
          image:'public/AIImages/blockchain-8008051_1920.jpg',
          title: "Natural Language Processing: How AI Understands and Generates Human Language",
          author: "Olivia Williams",
          publishedDate: "2025-01-04",
          content: "Natural Language Processing (NLP) enables machines to understand, interpret, and respond to human language. Applications like chatbots, voice assistants, and sentiment analysis tools are transforming communication. This blog explores the advancements in NLP and its impact on businesses and daily life.",
          tags: ["AI", "NLP", "Communication"],
          category:"AI"
        },
        {
          id: 25,
          image:'public/SecurityImages/security-1202344_1920.png',
          title: "Cybersecurity in 2025: Emerging Threats and How to Stay Protected",
          author: "James Carter",
          publishedDate: "2025-01-12",
          content: "As cyber threats evolve, organizations and individuals must adopt advanced security measures. This blog explores the latest trends in cybersecurity, including AI-driven attacks, ransomware, and the rise of phishing scams, along with strategies to enhance digital protection.",
          tags: ["Cybersecurity", "Threats", "Protection"],
           category:"Security"
        },
        {
          id: 26,
          image:'public/SecurityImages/hacker-8033977_1920.jpg',
          title: "The Importance of Multi-Factor Authentication in Securing Online Accounts",
          author: "Emily Roberts",
          publishedDate: "2025-01-10",
          content: "Multi-factor authentication (MFA) has become a standard for safeguarding online accounts. By combining passwords with verification methods like biometrics or one-time codes, MFA significantly reduces the risk of unauthorized access. Learn how to implement MFA for personal and business use.",
          tags: ["Security", "MFA", "Online Safety"],
           category:"Security"
        },
        {
          id: 27,
          image:'public/SecurityImages/computer-1231889_1280.jpg',
          title: "Top 10 Best Practices for Protecting Your Privacy Online",
          author: "Sarah Williams",
          publishedDate: "2025-01-08",
          content: "In the digital age, protecting your online privacy is more important than ever. This blog provides actionable tips such as using VPNs, strong passwords, and encrypted messaging apps to safeguard your personal information from cybercriminals.",
          tags: ["Online Privacy", "Security", "Best Practices"],
           category:"Security"
        },
        {
          id: 28,
          image:'public/SecurityImages/binary-1327493_1280.jpg',
          title: "Understanding Zero Trust Security: The New Standard for Digital Protection",
          author: "David Wilson",
          publishedDate: "2025-01-06",
          content: "Zero Trust Security is a framework that assumes no user or device can be trusted by default. This blog explains the principles of Zero Trust, its implementation strategies, and how it helps prevent data breaches and unauthorized access.",
          tags: ["Zero Trust", "Cybersecurity", "Data Protection"],
           category:"Security"
        },
        {
          id: 29,
          image:'public/SecurityImages/ai-generated-8640893_1920.jpg',
          title: "AI in Cybersecurity: Enhancing Defense Against Sophisticated Threats",
          author: "Sophia Martinez",
          publishedDate: "2025-01-04",
          content: "AI is revolutionizing cybersecurity by enabling real-time threat detection, automated response systems, and predictive analytics. Discover how AI is being used to identify vulnerabilities and mitigate risks in a rapidly changing threat landscape.",
          tags: ["AI", "Cybersecurity", "Threat Detection"],
          category:"Security"
        },
        {
          id: 30,
          image:'public/AppIamges/finance-8045003_1920.jpg',
          title: "Top 10 Productivity Apps to Boost Your Efficiency in 2025",
          author: "Alex Johnson",
          publishedDate: "2025-01-12",
          content: "Productivity apps are essential for managing tasks, schedules, and goals. This blog highlights the top 10 apps, such as Notion, Todoist, and Asana, that can help you stay organized and efficient in your personal and professional life.",
          tags: ["Apps", "Productivity", "Efficiency"],
          category:"Apps"
        },
        {
          id: 31,
          image:'public/AppIamges/white-male-1856187_1920.jpg',
          title: "The Rise of Health and Fitness Apps: Revolutionizing Wellness",
          author: "Emily Brown",
          publishedDate: "2025-01-10",
          content: "Health and fitness apps like MyFitnessPal and Strava are transforming how people approach wellness. This blog explores their features, benefits, and how they motivate users to lead healthier lifestyles through personalized insights and tracking.",
          tags: ["Apps", "Health", "Fitness"],
             category:"Apps"
        },
        {
          id: 32,
          image:'public/AppIamges/app-8764508_1920.jpg',
          title: "Top 5 Finance Apps for Managing Your Money Effectively",
          author: "Michael Smith",
          publishedDate: "2025-01-08",
          content: "Finance apps like Mint, Robinhood, and YNAB simplify money management by offering features such as budgeting, expense tracking, and investment management. This blog reviews the best apps for taking control of your financial health.",
          tags: ["Apps", "Finance", "Budgeting"],
             category:"Apps"
        },
        {
          id: 33,
          image:'public/AppIamges/ai-generated-8365422_1920.jpg',
          title: "Best Apps for Remote Work: Enhancing Collaboration and Communication",
          author: "Sophia Martinez",
          publishedDate: "2025-01-06",
          content: "Remote work has become the norm, and apps like Slack, Zoom, and Trello are essential for team collaboration. This blog discusses how these tools improve productivity, streamline communication, and make remote work more efficient.",
          tags: ["Apps", "Remote Work", "Collaboration"],
             category:"Apps"
        },
        {
          id: 34,
          image:'public/AppIamges/app-8178740_1920.jpg',
          title: "Educational Apps That Are Redefining Learning for Students",
          author: "Olivia Taylor",
          publishedDate: "2025-01-04",
          content: "Educational apps like Duolingo, Khan Academy, and Quizlet are changing how students learn by making education accessible and interactive. This blog explores the key features of these apps and how they cater to learners of all ages.",
          tags: ["Apps", "Education", "Learning"],  
           category:"Apps"
        },
        {
          id: 35,
          image:'public/WorkImages/ai-generated-9146428_1920.jpg',
          title: "Work-Life Balance in 2025: How to Stay Productive Without Burning Out",
          author: "Sophia Carter",
          publishedDate: "2025-01-12",
          content: "Achieving work-life balance is crucial for mental health and productivity. This blog explores strategies like time management, setting boundaries, and prioritizing self-care to maintain a healthy balance between professional and personal life.",
          tags: ["Work", "Work-Life Balance", "Productivity"],
          category:"Work"
        },
        {
          id: 36,
          image:'public/WorkImages/office-8748036_1920.png',
          title: "Remote Work Trends: Adapting to the New Normal",
          author: "Michael Brown",
          publishedDate: "2025-01-10",
          content: "Remote work has reshaped industries and workflows. This blog discusses the latest trends in remote work, tools to enhance collaboration, and tips for staying motivated and connected in a virtual work environment.",
          tags: ["Work", "Remote Work", "Trends"],
             category:"Work"
        },
        {
          id: 37,
          image:'public/WorkImages/ai-generated-7861355_1920.jpg',
          title: "Top 10 Skills to Succeed in the Modern Workplace",
          author: "Emma Williams",
          publishedDate: "2025-01-08",
          content: "The modern workplace demands skills like adaptability, communication, and technical proficiency. This blog highlights the top 10 skills that professionals need to thrive in an ever-evolving job market.",
          tags: ["Work", "Skills", "Career"],
             category:"Work"
        },
        {
          id: 38,
          image:'public/WorkImages/ai-generated-9030608_1920.jpg',
          title: "How to Stay Focused and Avoid Distractions at Work",
          author: "Olivia Taylor",
          publishedDate: "2025-01-06",
          content: "Staying focused at work can be challenging with constant notifications and interruptions. This blog provides actionable tips to minimize distractions, create a productive workspace, and use tools to stay on track.",
          tags: ["Work", "Focus", "Productivity"],
             category:"Work"
        },
        {
          id: 39,
          image:'public/WorkImages/entrepreneur-696959_1920.jpg',
          title: "The Importance of Networking in Career Growth",
          author: "Ethan Johnson",
          publishedDate: "2025-01-04",
          content: "Networking is a powerful tool for career advancement. This blog explores how building genuine professional relationships can lead to new opportunities, mentorship, and knowledge sharing in your industry.",
          tags: ["Work", "Networking", "Career Growth"],
             category:"Work"
        },

        {
          id: 40,
          image:'public/EnterPriseImages/digitization-7261158_1920.jpg',
          title: "Digital Transformation in Enterprises: Key Strategies for 2025",
          author: "Sophia Martinez",
          publishedDate: "2025-01-12",
          content: "Digital transformation is no longer optional for enterprises aiming to stay competitive. This blog explores strategies like cloud adoption, AI integration, and process automation to modernize operations and enhance customer experiences.",
          tags: ["Enterprise", "Digital Transformation", "Innovation"],
          category:"Enterprise"
        },
        {
          id: 41,
          image:'public/EnterPriseImages/ai-generated-8723113_1920.jpg',
          title: "The Role of Enterprise Resource Planning (ERP) Systems in Business Growth",
          author: "Michael Brown",
          publishedDate: "2025-01-10",
          content: "ERP systems streamline processes, improve efficiency, and provide actionable insights for enterprises. This blog discusses how implementing ERP solutions can help businesses scale operations and achieve long-term success.",
          tags: ["Enterprise", "ERP", "Business Growth"],
           category:"Enterprise"
        },
        {
          id: 42,
          image:'public/EnterPriseImages/woman-8656655_1920.jpg',
          title: "Enterprise Security: Best Practices for Protecting Data and Systems",
          author: "Emma Carter",
          publishedDate: "2025-01-08",
          content: "Cybersecurity is a top priority for enterprises in the digital age. This blog provides best practices like implementing Zero Trust Security, regular vulnerability assessments, and employee training to safeguard sensitive data and systems.",
          tags: ["Enterprise", "Security", "Data Protection"],
           category:"Enterprise"
        },
        {
          id: 43,
          image:'public/EnterPriseImages/hands-6135743_1920.jpg',
          title: "Sustainability in Enterprises: How Businesses Can Lead the Green Revolution",
          author: "Ethan Johnson",
          publishedDate: "2025-01-06",
          content: "Sustainability is becoming a core focus for enterprises worldwide. This blog explores initiatives like carbon-neutral goals, waste reduction, and sustainable supply chains, showcasing how businesses can balance profitability with environmental responsibility.",
          tags: ["Enterprise", "Sustainability", "Green Revolution"],
           category:"Enterprise"
        },
        {
          id: 44,
          image:'public/EnterPriseImages/ai-generated-8592394_1920.jpg',
          title: "AI-Powered Solutions for Enterprise Efficiency and Innovation",
          author: "Olivia Taylor",
          publishedDate: "2025-01-04",
          content: "AI is transforming how enterprises operate, from predictive analytics to personalized customer interactions. This blog examines AI-powered tools and strategies that drive efficiency, innovation, and competitive advantage in large-scale organizations.",
          tags: ["Enterprise", "AI", "Innovation"],
           category:"Enterprise"
        },
      ];
      

export default blogData