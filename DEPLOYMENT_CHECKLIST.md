# قائمة التحقق - Netlify Deployment Checklist

## ✅ التحضيرات المكتملة

### الملفات والتكوينات
- [x] `netlify.toml` - ملف إعدادات Netlify مع جميع الإعدادات
- [x] `.env.example` - مثال متغيرات البيئة
- [x] `NETLIFY_DEPLOYMENT.md` - دليل النشر الشامل
- [x] `favicon.ico` - فافكون بصيغة ICO في `/public/`
- [x] `logo.png` - شعار بحجم محسّن في `/public/images/`

### البناء والأخطاء
- [x] تصحيح جميع أخطاء TypeScript
- [x] إصلاح واجهات البيانات (Interfaces)
- [x] تحديث Zustand store مع جميع الدوال المطلوبة
- [x] ✅ Build الناجح - `npm run build` اجتياز بدون أخطاء

### تحسينات UX
- [x] تكبير اللوجو:
  - Navbar: من 10×10 إلى 16×16
  - Hero: من 28×28 إلى 40×40
- [x] تغيير الأنيميشن:
  - Navbar: من spin إلى bounce
  - Hero: bounce فقط (بدون spin)
- [x] تحديث مراجع favicon إلى `/favicon.ico`

### Netlify التوافق
- [x] إعدادات Node version في netlify.toml
- [x] إعادة توجيه SPA في netlify.toml
- [x] Cache headers للأصول الثابتة
- [x] رؤوس أمان HTTP

## 📋 قبل النشر على Netlify

### 1. متغيرات البيئة
قم بإضافة هذه المتغيرات في Netlify dashboard:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

### 2. اختبار محلي
```bash
npm run build    # اختبر البناء
npm run start    # اختبر الإنتاج محلياً
```

### 3. دفع التغييرات
```bash
git add .
git commit -m "Fix Netlify compatibility and enhance UI"
git push origin master
```

## 🚀 خطوات النشر على Netlify

1. انتقل إلى https://app.netlify.com
2. اختر "Add new site" → "Import an existing project"
3. اختر GitHub وأوثق
4. اختر المستودع `new_farabi`
5. أضف متغيرات البيئة
6. انقر "Deploy site"

## 🔍 بعد النشر

تحقق من:
- [ ] الموقع يفتح بشكل صحيح
- [ ] الشعار يتحرك (bounce animation)
- [ ] الصور تحمل بشكل صحيح
- [ ] الروابط تعمل
- [ ] console لا تظهر أخطاء
- [ ] favicon يظهر في التبويب

## 🐛 استكشاف الأخطاء

إذا حدثت مشاكل:

### Build Failed
- تحقق من logs في Netlify dashboard
- قارن مع محلي `npm run build`
- تحقق من جميع متغيرات البيئة

### Runtime Errors
- افتح DevTools (F12)
- تحقق من Console
- تحقق من Network tab
- تحقق من Firebase initialization

### Asset Loading Issues
- تحقق من أن `/public/` محفوظة في git
- تحقق من مسارات الأصول في الكود
- تحقق من Cache-Control headers

## 📞 المساعدة

للمزيد من المساعدة:
- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js/overview/
- Firebase Docs: https://firebase.google.com/docs

---

**آخر تحديث**: 4 فبراير 2026
**الحالة**: جاهز للنشر ✅
