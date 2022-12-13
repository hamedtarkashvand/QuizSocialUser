import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const fa = {
  translation: {
    "Welcome to React": "بنام بخدا بزرگ",
    hamed: "حامد",
    english: "انگلیسی",
    persion: "فارسی",
    "setting user": "تنظیمات کاربری",
    breadcrumbs: {
      home: "خانه",
      settings: "تنظیمات کاربری",
    },
    home :{
      boxOne :{
        caption:"با سلام به آزمون فوق خوش آمدید",
        pography:"امیدواریم همیشه سلامت باشید."
      },
      boxTwo :{
        caption:"موضوع آزمون : ",
        pography:"بصورت خلاصه ساخت همین پروژه و مدیریت مسیر های ارتباطی کاربر در صفحه",
        pographyTow:"است.",
        link:"تنظیمات کاربری"
      }
    },
    setting : {
      add:'افزودن مسیر ارتباطی',
      socialRoute:'مسیر های ارتباطی',
      form : {
        valdationMessages:{
          address:{
            correctUrl:"محتویات این فیلد باید از جنس آدرس اینترنتی باشد.",
            required:"وارد کردن فیلد اجباری است."
          },
          type:{
            required:"وارد کردن فیلد اجباری است."
          }
        },
        icon: {
          facebook:'فیس بوک',
          twitter:'توییتر',
          instagram:'اینستاگرام',
          linkedin:'لینکدین',
          language:'وب سایت',
          telegram:'تلگرام',
        },
        autocomplete : {
          facebook:'فیس بوک',
          twitter:'توییتر',
          instagram:'اینستاگرام',
          linkedin:'لینکدین',
          language:'وب سایت',
          telegram:'تلگرام',
        },
        formEdite :{ },
        type:"تایپ",
        link:"لینک",
        cancel:'انصراف',
        regester:'ثبت مسیر ارتباطی',
        edite:'ویرایش',
        delete:'حذف'
      }
    }
  },

};

const en = {
  translation: {
    "Welcome to React": "Welcome to React and react-i18next",
    hamed: "hamed",
    english: "english",
    persion: "persion",
    "setting user": "User Setting",
    breadcrumbs: {
      home: "Home",
      settings: "User Setting",
    },
    home :{
      boxOne :{
        caption:"Hello, welcome to the above chaleng code",
        pography:"We hope you are always healthy.",
      },
      boxTwo :{
        caption:"Test subject : ",
        pography:"In short, building this project and managing user communication paths on the page",
        pographyTow:"Is. ",
        link:"Control settings "
      }
    },
    setting : {
      add:'add Social',
      socialRoute:'routs conetion',
      form : {
        valdationMessages:{
          email:{
            correctUrl:"Please fill correct URL",
            required:"this field is Required."
          },
          type:{
            required:"this field is Required."
          }
        },
        icon: {
          facebook:'facebook',
          twitter:'twitter',
          instagram:'instagram',
          linkedin:'linkedin',
          language:'language',
          telegram:'telegram',
        },
        autocomplete : {
          facebook:'facebook',
          twitter:'twitter',
          instagram:'instagram',
          linkedin:'linkedIn',
          language:'webSite',
          telegram:'telegram',
        },
        edite:'edite',
        delete:'delete',
        type:"type",
        link:"link",
        cancel:'cancel',
        regester:'submit social'
      }
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { ...en },
      fa: { ...fa },
    },
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
