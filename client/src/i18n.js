import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "title": "Log in or sign up",
        "message": "To comment on this post, you need to be authenticated.",
        "login": "Log in",
        "register": "Sign up",
        "close": "Close",
        "You must register to be able to like": "You must register to be able to like",
        "Please log in or register to continue.": "Please log in or register to continue.",
        "readMore": "Read more",
        "likes": "Likes",
        "update": "Update",
        "cancel": "Cancel",
        "reply": "Reply",
        "seeMoreComments": "See more comments...",
        "hideComments": "Hide comments...",
        "edit": "Edit",
        "remove": "Remove",
        "placeholder": "Add your comments...",
        "post": "Post",
        "contact": "Contact & Details",
        "username": "Username",
        "phone": "Phone",
        "email": "Email",
        "show": "Show",
        "hide": "Hide",
        "realestate": "Real Estate",
        "already_have_account": "Already have an account?",
        "login_now": "Login Now",
        "email_help": "We'll never share your email with anyone else.",
        "no_account": "You don't have an account?",
        "register_now": "Register Now",
        "post": "Publish a post",
        "usermanagement": "User management",
        "complaints": "complaints",
        "activityusers": "Activity users",
        "searchusers": "Search users",
        "lastusers": "Last users",
        "userroles": "User roles",
        "pendingposts": "Pending posts",
        "light_mode": "Light mode",
        "dark_mode": "Dark mode",
        "profile": "Profile",
        "logout": "Logout",
        "details": "Post Details",
        "comments": "Comments",
        "location": "Location",
        "seller": "Seller",
        "allowComments": "Allow Comments",
        "views": "Views",
        "adDuration": "Ad Duration",
        "notSpecified": "Not Specified",
        "Delete All":"Delete All",
        "Notification":"Notification",
        "he liked your message":"he liked your message",
        "added a new post":"added a new post",
"has started to follow you":"has started to follow you",
"has stopped following you":"has stopped following you",
"has deleted a post":"has deleted a post",

      }
    },

    fr: {
      translation: {
        "title": "Connectez-vous ou inscrivez-vous",
        "message": "Pour commenter cette publication, vous devez être authentifié.",
        "login": "Se connecter",
        "register": "S'inscrire",
        "close": "Fermer",
        "You must register to be able to like": "Vous devez vous inscrire pour pouvoir aimer",
        "Please log in or register to continue.": "Veuillez vous connecter ou vous inscrire pour continuer",
        "readMore": "Lire plus",
        "likes": "Mentions j'aime",
        "update": "Mettre à jour",
        "cancel": "Annuler",
        "reply": "Répondre",
        "seeMoreComments": "Voir plus de commentaires...",
        "hideComments": "Masquer les commentaires...",
        "edit": "Modifier",
        "remove": "Supprimer",
        "placeholder": "Ajoutez votre commentaire...",
        "post": "Publier",
        "contact": "Contact & Coordonnées",
        "username": "Nom d'utilisateur",
        "phone": "Téléphone",
        "email": "E-mail",
        "show": "Afficher",
        "hide": "Masquer",
        "realestate": "IMMOBILIER",
        "already_have_account": "Vous avez déjà un compte?",
        "login_now": "Connectez-vous maintenant",
        "email_help": "Nous ne partagerons jamais votre e-mail avec qui que ce soit.",
        "no_account": "Vous n'avez pas de compte?",
        "register_now": "Inscrivez-vous maintenant",
        "light_mode": "Mode éclairé",
        "dark_mode": "Mode sombre",
        "details": "Détails du Post",
        "comments": "Commentaires",
        "location": "Emplacement",
        "seller": "Vendeur",
        "allowComments": "Autoriser les commentaires",
        "views": "Vues",
        "adDuration": "Durée de l'annonce",
        "notSpecified": "Non spécifié",
        "Delete All":"Supprimer tout",
        "Notification":"Notification",
        "he liked your message":"il a aimé ton message",
        "added a new post":"Ajouté un nouveau message",
        "has started to follow you":"a commencé à te suivre",
        "has stopped following you":"a arrêté de te suivre",
        "has deleted a post":"a supprimé une publication",
      }
    },
    ar: {
      translation: {

//USER MESSAGE MODAL AUTETICACION
 
  "title": "تسجيل الدخول أو التسجيل",
  "message": "للتعليق على هذا المنشور، يجب أن تكون مصادقًا.",
  "login": "تسجيل الدخول",
  "register": "تسجيل",
  "close": "إغلاق",

  "must_register_to_like": "يجب عليك التسجيل لتتمكن من الإعجاب",
  "please_login_or_register": "الرجاء تسجيل الدخول أو التسجيل للمتابعة.",

  // COMMENTS
  "read_more": "اقرأ المزيد",
  "likes": "إعجابات",
  "update": "تحديث",
  "cancel": "إلغاء",
  "reply": "رد",
  "see_more_comments": "عرض المزيد من التعليقات...",
  "hide_comments": "إخفاء التعليقات...",
  "edit": "تعديل",
  "remove": "إزالة",
  "comment_placeholder": "أضف تعليقك...",
  "post_comment": "نشر",

  // CONTACT & USER INFO
  "contact": "الاتصال والتفاصيل",
  "username": "اسم المستخدم",
  "phone": "الهاتف",
  "email": "البريد الإلكتروني",
  "show": "عرض",
  "hide": "إخفاء",

  // REGISTER
  "realestate": "العقارات",
  "confirm_password": "تأكيد كلمة المرور",
  "already_have_account": "لديك حساب بالفعل؟",
  "login_now": "تسجيل الدخول الآن",

  // POST INFORMATION
  "post_details": "تفاصيل المنشور",
  "comments": "التعليقات",
  "location": "الموقع",
  "seller": "البائع",
  "allow_comments": "السماح بالتعليقات",
  "views": "المشاهدات",
  "ad_duration": "مدة الإعلان",
  "not_specified": "غير محدد",

  // AUTH
  "email_help": "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
  "password": "كلمة المرور",
  "no_account": "ليس لديك حساب؟",
  "register_now": "سجل الآن",

  // GENERAL
  "post": "نشر إعلان",
  "user_management": "إدارة المستخدمين",
  "complaints": "الشكاوى",
  "activity_users": "نشاط المستخدمين",
  "search_users": "البحث عن المستخدمين",
  "last_users": "آخر المستخدمين",
  "user_roles": "أدوار المستخدمين",
  "pending_posts": "المشاركات المعلقة",
  "light_mode": "وضع الإضاءة",
  "dark_mode": "الوضع الداكن",
  "profile": "الملف الشخصي",
  "logout": "تسجيل الخروج",
  "Delete All":"حذف الكل",
  "Notification":"إشعارات",
  "he liked your message":"لقد أحب رسالتك",
  "added a new post":"تمت إضافة مشاركة جديدة",
  "has started to follow you":"لقد بدأت في متابعتك",
  "has stopped following you":"توقف عن متابعتك",
  "has deleted a post":"حذفت منشورا",

      }
    },




  },


  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;