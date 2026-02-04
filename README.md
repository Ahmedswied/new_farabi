# ALFarabi International Group - Next.js Application

A complete workforce and equipment supply business web application built with Next.js 14, TypeScript, Tailwind CSS, Firebase, and i18n multi-language support.

## 🚀 Project Overview

This is a full-stack Next.js application for ALFarabi International Group with:
- **Public Pages**: Home, About, Services, Crew Structure, Organization, Projects, Contact
- **Admin Panel**: Crew Management, Job Categories, Services Management, Projects, Requests Inbox, Brochure Generator
- **Multi-language Support**: English and Arabic (right-to-left)
- **Firebase Integration**: Firestore database and authentication
- **Responsive Design**: Tailwind CSS with mobile-first approach

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **UI Icons**: Lucide React
- **State Management**: Zustand
- **i18n**: next-i18next (English & Arabic)
- **Database**: Firebase/Firestore
- **HTTP Client**: Axios

## 📦 Quick Start

### Installation
```bash
npm install
```

### Environment Setup
Create `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
npm run start
```

## 🌍 Website Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Company info, Cairo HQ, El Dabaa operations
- **Services** (`/services`) - 4 service offerings with details
- **Crew Structure** (`/crew`) - Standard 88-person crew breakdown
- **Organization** (`/organization`) - Management team structure
- **Projects** (`/projects`) - Portfolio of completed/ongoing projects
- **Contact** (`/contact`) - Crew request submission form

## 🔐 Admin Panel

Access at `/admin`

**Demo Login:**
- Email: `admin@alfarabi.com`
- Password: `admin123`

**Features:**
- Dashboard with KPIs
- Crew member management (CRUD)
- Job categories management
- Services configuration
- Projects portfolio management
- Crew requests inbox with status updates
- PDF brochure generator

## 🌐 Multi-Language Support

- English (en) and Arabic (ar)
- Language switcher in navigation bar
- Translations in `public/locales/en` and `public/locales/ar`

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
├── components/             # Reusable components
├── lib/firebase/          # Firebase config & services
├── store/                 # Zustand state stores
public/
└── locales/               # i18n translations
```

## 🚀 Deployment

Deploy to Netlify, Vercel, or any Node.js-compatible platform.

For Netlify, build output goes to `.next`.

## 📝 Features

✅ Responsive design
✅ Multi-language (EN/AR)
✅ Firebase integration
✅ Admin panel with authentication
✅ Form submission with validation
✅ PDF generation ready
✅ SEO optimized
✅ TypeScript support
✅ Tailwind CSS styling
