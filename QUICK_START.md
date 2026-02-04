# ALFarabi Project - Quick Start Guide

## 🚀 Getting Started (5 minutes)

### 1. Start Development Server
```bash
cd D:\faraby\new_farabi
npm run dev
```

**Server will be available at**: http://localhost:3000

### 2. Explore the Website
- **Home**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Services**: http://localhost:3000/services
- **Crew**: http://localhost:3000/crew
- **Organization**: http://localhost:3000/organization
- **Projects**: http://localhost:3000/projects
- **Contact**: http://localhost:3000/contact

### 3. Access Admin Panel
- **Login**: http://localhost:3000/admin/login
- **Demo Credentials**:
  - Email: `admin@alfarabi.com`
  - Password: `admin123`

### 4. Admin Modules
After login, you can access:
- Dashboard: http://localhost:3000/admin
- Crew Management: http://localhost:3000/admin/crew
- Job Categories: http://localhost:3000/admin/job-categories
- Services: http://localhost:3000/admin/services
- Projects: http://localhost:3000/admin/projects
- Requests: http://localhost:3000/admin/requests
- Brochure Generator: http://localhost:3000/admin/brochure

---

## 🌍 Language Switching

Click the **Language** button in the top navigation bar to toggle between:
- 🇬🇧 English
- 🇸🇦 العربية (Arabic)

---

## 📝 Features Overview

### Public Features
✅ Beautiful landing page
✅ Company information
✅ Service listings
✅ Crew structure details
✅ Organization chart
✅ Project portfolio
✅ Crew request form
✅ Multi-language support
✅ Responsive design

### Admin Features
✅ Secure login
✅ Dashboard with stats
✅ Crew member management
✅ Job category management
✅ Service management
✅ Project management
✅ Crew request inbox
✅ PDF brochure generator

---

## 🔧 Common Tasks

### Add a New Crew Member (Admin)
1. Go to `/admin/crew`
2. Click "Add Crew Member"
3. Fill in: Name, Specialization, Certifications, Experience
4. Click "Add"

### Submit a Crew Request (Public)
1. Go to `/contact`
2. Fill in your company details
3. Select project type and crew size
4. Submit the form
5. You'll see a confirmation message

### Change a Request Status (Admin)
1. Go to `/admin/requests`
2. Click on a request to expand
3. Select new status (Pending, Approved, Rejected)
4. Status updates immediately

### Manage Services (Admin)
1. Go to `/admin/services`
2. Edit existing services
3. Add new services with "Included" and "Not Included" items
4. Changes appear on the public website

---

## 📊 Data Storage

### Where Data Is Stored
- **Local Demo**: Browser storage (localStorage for admin login)
- **Production**: Firebase Firestore (when configured)

### Important Notes
- Form submissions go to Firestore (if configured)
- Admin login uses localStorage
- Crew and request data is stored in Zustand state + Firebase

---

## 🛠️ Configuration

### Environment Variables
Create `.env.local` file with Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### i18n Configuration
Edit translation files:
- English: `public/locales/en/common.json`
- Arabic: `public/locales/ar/common.json`

---

## 📱 Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works between pages
- [ ] Language switcher changes text
- [ ] Admin login works with demo credentials
- [ ] Crew request form submits
- [ ] Admin dashboard displays stats
- [ ] Can add/edit/delete crew members
- [ ] Can manage services
- [ ] Can update request status
- [ ] Mobile responsiveness works

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Pages not updating
- Hard refresh browser: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Clear Next.js cache: `rm -rf .next`

### Admin login not working
- Check email: `admin@alfarabi.com`
- Check password: `admin123`
- Clear browser cookies/storage
- Try incognito mode

### Styling issues
- Wait for Tailwind to compile
- Check browser console for errors
- Verify `tailwind.config.ts` is present

---

## 📚 File Locations

### Important Files to Know
```
src/app/page.tsx              → Home page
src/app/admin/page.tsx        → Admin dashboard
src/app/contact/page.tsx      → Contact form
src/store/useCrewStore.ts     → State management
src/lib/firebase/config.ts    → Firebase setup
public/locales/               → Translations
```

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start dev server on port 3000
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

### Deploy to Netlify
```bash
npm run build
# Upload to Netlify (drag and drop .next folder or use CLI)
```

---

## 📞 Demo Account

**Admin Credentials:**
- Email: `admin@alfarabi.com`
- Password: `admin123`

**Note**: This is for demo purposes. Change in production!

---

## ✨ Key Features Showcase

### Responsive Design
- Works on desktop, tablet, and mobile
- Mobile menu in navigation bar
- Optimized images and fonts

### Multi-Language
- English and Arabic support
- Language switcher in navbar
- Proper RTL support for Arabic

### Admin Dashboard
- Real-time statistics
- Quick action buttons
- Recent activity feed
- Status indicators

### Forms with Validation
- Crew request form
- Admin CRUD forms
- Error handling
- Success notifications

---

## 💡 Tips & Tricks

1. **Quick Navigation**: Use the navbar to jump between sections
2. **Admin Access**: Only accessible via `/admin/login`
3. **Language Persistence**: Browser remembers language preference
4. **Form Validation**: All forms validate before submission
5. **Status Colors**: Green=Available, Yellow=Pending, Red=Inactive

---

## 📖 Learn More

- Check [README.md](./README.md) for detailed documentation
- See [PROJECT_COMPLETION_SUMMARY.md](./PROJECT_COMPLETION_SUMMARY.md) for full feature list
- Review code comments in source files

---

## 🎯 Next Steps

1. ✅ Start development server
2. ✅ Explore all pages
3. ✅ Test admin panel
4. ✅ Configure Firebase (optional)
5. ✅ Deploy to production

---

**Ready to go!** 🚀

For questions or issues, check the documentation files or review the code comments.
