
# ajayaaedtech/ajayaaedtech-fe
AJAYAA EdTech Frontend

Welcome to the AJAYAA EdTech Frontend – the modern, fast, and scalable front-facing application of AJAYAA EdTech built with Next.js. 🚀
This project is the UI gateway to our mission of transforming education through technology.


🌟 Features
⚡ Blazing Fast with Next.js 14

🎨 Beautifully Designed using Tailwind CSS & ShadCN UI

📦 Modular & Reusable Components

🔐 Secure Auth (NextAuth / Firebase Auth)

🌐 Fully Responsive on all devices

📊 Interactive Dashboards for Admins, Teachers, and Students

🔄 API Integrated with our backend services

🛠️ Tech Stack
Framework: Next.js

Styling: Tailwind CSS, CSS Modules

UI Components: ShadCN UI, Headless UI

State Management: React Context API / Redux Toolkit

Auth: NextAuth.js / Firebase Authentication

API Layer: Axios / tRPC (optional)

Testing: Jest, React Testing Library

Deployment: Vercel / Netlify / Docker

![Logo](https://i.ibb.co/9HQb94jK/AJAYAA-Ed-Tech-logo.png)

dashboard/
├── page.jsx                  # All courses
├── [courseId]/               # Dynamic folder for selected course
│   ├── page.jsx              # Units list page
│   └── [unitId]/             # Dynamic folder for each unit
│       └── page.jsx          # Video lessons / chapters
