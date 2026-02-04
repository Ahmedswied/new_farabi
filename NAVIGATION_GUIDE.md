# Navigation Structure

## Main Navigation Menu

The navigation bar (Navbar) provides access to all main sections of the website:

### Public Pages (Available to all users)

1. **Home** → `/`
   - Landing page with hero section
   - Company statistics
   - Featured benefits
   - Call-to-action buttons

2. **About** → `/about`
   - Company vision and mission
   - Cairo headquarters information
   - El Dabaa operations details
   - Service capabilities

3. **Services** → `/services`
   - 4 main service offerings
   - Service descriptions
   - Pricing information
   - What's included/excluded

4. **Crew Structure** → `/crew`
   - Standard 88-person crew breakdown
   - Job positions and certifications
   - Custom crew options
   - Skills and qualifications

5. **Organization** → `/organization`
   - Management team structure
   - Cairo headquarters team (8 members)
   - El Dabaa regional team (4 members)
   - Department responsibilities

6. **Projects** → `/projects`
   - Portfolio of 6 projects
   - Project details and status
   - Client information
   - Project achievements

7. **Contact** → `/contact`
   - Crew request submission form
   - Contact information
   - Response time SLA
   - Process explanation

### Admin Section (Restricted)

8. **Admin** → `/admin`
   - **Login**: `/admin/login`
     - Demo: admin@alfarabi.com / admin123
   - **Dashboard**: `/admin`
     - Overview statistics
     - Quick actions
     - Recent requests
   - **Crew Management**: `/admin/crew`
     - Add/Edit/Delete crew members
   - **Job Categories**: `/admin/job-categories`
     - Manage job categories
     - Manage skills
   - **Services**: `/admin/services`
     - Edit service offerings
     - Manage pricing
   - **Projects**: `/admin/projects`
     - Manage project portfolio
   - **Requests**: `/admin/requests`
     - View crew requests
     - Update request status
   - **Brochure**: `/admin/brochure`
     - Generate PDF brochures

---

## Navigation Features

### 🌐 Language Switcher
- Location: Top right of navbar
- Options: English (en), العربية (ar)
- Persists across page visits

### 📱 Mobile Menu
- Hamburger icon on small screens
- Smooth slide-out menu
- Responsive design

### 🔐 Admin Link
- Visible to everyone
- Directs to login page
- After login, shows dashboard

---

## Navigation Flow

```
Home
├── About
├── Services
├── Crew Structure
├── Organization
├── Projects
├── Contact
└── Admin Login
    └── Dashboard
        ├── Crew Management
        ├── Job Categories
        ├── Services
        ├── Projects
        ├── Requests
        └── Brochure
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Full horizontal menu
- Language switcher visible
- Admin link visible
- No hamburger menu

### Tablet (768px - 1023px)
- Hamburger menu appears
- Nested menu items
- Language switcher in menu
- Mobile optimization

### Mobile (<768px)
- Hamburger menu required
- Vertical menu layout
- Touch-friendly spacing
- Simplified navigation

---

## Navigation Styling

- **Active Page**: Blue highlight
- **Hover Effect**: Slightly darker/lighter background
- **Mobile Menu**: Slide-out animation
- **Colors**: White text on dark background (navbar)

---

## Links Reference

| Page | URL | Type | Auth Required |
|------|-----|------|---------------|
| Home | `/` | Public | No |
| About | `/about` | Public | No |
| Services | `/services` | Public | No |
| Crew | `/crew` | Public | No |
| Organization | `/organization` | Public | No |
| Projects | `/projects` | Public | No |
| Contact | `/contact` | Public | No |
| Admin Login | `/admin/login` | Public | No |
| Admin Dashboard | `/admin` | Protected | Yes |
| Crew Admin | `/admin/crew` | Protected | Yes |
| Categories | `/admin/job-categories` | Protected | Yes |
| Services Admin | `/admin/services` | Protected | Yes |
| Projects Admin | `/admin/projects` | Protected | Yes |
| Requests | `/admin/requests` | Protected | Yes |
| Brochure | `/admin/brochure` | Protected | Yes |

---

## Navbar Component Details

### File
`src/components/layout/Navbar.tsx`

### Features
- Responsive mobile menu
- Language switcher
- Admin login link
- Active page highlighting
- Smooth animations

### Props
- None (uses hooks internally)

### Uses
- `useTranslation()` for i18n
- `useRouter()` for navigation
- Next.js `Link` component

---

## Breadcrumb Navigation (Optional)

Consider adding breadcrumbs on:
- `/admin/*` pages (easier to understand depth)
- `/crew`, `/services` (long scrolling pages)

Example: `Home > Admin > Crew Management`

---

## Footer Links

Additional navigation in footer:
- Quick links to main pages
- Company contact information
- Copyright information

---

**Total Navigation Items**: 15 pages
**Responsive Breakpoints**: 3 (mobile, tablet, desktop)
**Languages Supported**: 2 (English, Arabic)
