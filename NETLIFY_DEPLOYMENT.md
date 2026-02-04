# Netlify Deployment Guide

## ملف التوافق

تم إنشاء ملف `netlify.toml` تلقائياً مع الإعدادات المثالية لـ Netlify.

## خطوات النشر على Netlify

### 1. متطلبات أساسية
- حساب Netlify (netlify.com)
- مستودع GitHub للمشروع
- Firebase credentials

### 2. الخطوات:

#### الخطوة 1: ربط المستودع
1. سجل الدخول إلى Netlify
2. اختر "New site from Git"
3. اختر GitHub وأوثق الوصول
4. اختر المستودع `new_farabi`

#### الخطوة 2: إعدادات الإنشاء
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 22.x (معين في netlify.toml)

#### الخطوة 3: متغيرات البيئة (Environment Variables)
في إعدادات Netlify، أضف المتغيرات التالية تحت Build Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. خطوات ما بعد النشر

#### تفعيل الـ HTTP/2 و Caching
- في إعدادات الموقع، تأكد من تفعيل HTTP/2
- يتم إعداد Cache-Control تلقائياً عبر netlify.toml

#### إضافة Domain مخصص
1. في قسم Domain management
2. أضف اسم نطاق مخصص
3. أضف شهادة SSL/TLS مجانية (تتم تلقائياً)

#### تفعيل Analytics (اختياري)
- Netlify توفر analytics مدمج

## استكشاف الأخطاء

### خطأ: Build Error
- تحقق من أن npm version 10+
- تحقق من أن Node version 22+
- تحقق من جميع متغيرات البيئة

### خطأ: Firebase Connection
- تأكد من أن Firebase credentials صحيحة
- تحقق من Firestore permissions
- تأكد من أن البيانات متاحة للقراءة

### خطأ: Import Issues
- تحقق من أن جميع المسارات صحيحة
- قم بتشغيل `npm run build` محلياً أولاً
- تحقق من أن جميع الحزم مثبتة

## ملفات التوافق المضافة

### netlify.toml
- إعدادات البناء (Build settings)
- إعادة التوجيه (Redirects)
- رؤوس HTTP (Headers) - للـ Cache
- متغيرات البناء

### .env.example
- مثال على متغيرات البيئة المطلوبة

## التحقق من الحالة

بعد النشر:
1. زيارة رابط الموقع
2. فتح Developer Tools (F12)
3. تحقق من Network tab للتأكد من تحميل الأصول

## ملاحظات إضافية

- الـ Project يستخدم Next.js 16.1.6 مع Turbopack
- جميع الصفحات محسنة للـ SEO
- التطبيق يدعم i18n (عربي/إنجليزي)
- استخدام Firebase للبيانات الديناميكية
- Zustand لإدارة الحالة (State Management)

## معلومات إضافية

للمزيد من المعلومات عن Netlify deployment:
https://docs.netlify.com/frameworks/next-js/overview/
