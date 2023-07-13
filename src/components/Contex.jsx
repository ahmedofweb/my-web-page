import React from 'react'
import { useState } from 'react'
import { createContext , useReducer } from 'react'

const ThemeContext = createContext()

const uzb = {
    title: "O'zbek",
    header: {
        home: "Bosh sahifa",
        about: "Haqida",
        portfolio: "Portfolio",
        changeLanguage: "Til tanlang",
        name: "Abdulhamid"
    },
    info: {
        title: 'Web sahifamga xush kelibsiz',
        text: "Ushbu web sahifa o'zim haqimda . Man Abdulhamid Ahmedov 19 yoshdaman Hozirda Front end dasturchiman va frilanserman , ya'ni online ishlayman. Darajam Junior. Hozirgacha 2 ta real loyihada qatnashganman, bu haqida esa batafsil portfolio bolimida bilib olishingiz mumkin . Boshqa savol va takliflar uchun bog'lanish"
    },
    about: {
        aboutMe : {
            title: "O'zim haqimda",
            text: "Salom ! mani ismim Abdulhamid familiyam Ahmedov va man 19 yoshdaman.yashash joyim Fargona shaxar.Man xozirda abiturientman va Americadigi IT universitedlaridan birida o'qish uchun tayyorlanyabman. Dasturlashni Front end kursini bitrganman va xozirda amaliyot o'tayabman. Shu bilan birga dasturlashni Back end kursini oqiyabman va ingliz tilidan IELTS imtihoniga xam tayyorlanyabman , bularni barchasi xaqida pastroqda oqishingiz mumkin !"
        },
        frontend: {
            title: "Frontend",
            text: "Man Najot Ta'lim IT o'quv markazining Frontend kursini bitirganman. Bu kursda HTML, CSSni va Javascript tilini o'rganganman qo'shimcha ravishda fremworklardan Reactni xam o'rganganman. Hozirda Frontend yonalishi boyicha frilanserlik qilaman, darajam Junior. 1/2 real loyihalarda qatnashganman , loyihalar haqida esa koproq Portfolio dan bilib olishingiz mumkin."
        },
        backend: {
            title: "Backend",
            text: "Man hozir qo'shimcha ravishda Back end yonalishini xam o'rganyabman , sababi qiziqishim. Bu kurs 8 oyga mo'ljallangan bo'lib , kurs davomida Python django, aiGramm(telegram botlar), SQL , SQLI va yana bazi fremwork , kutubxonalar o'rganiladi . Back end haqida"
        },
        language: {
            title: "English",
            text: "INgliz tili . Maqsadlarimdan bitasi bu ingliz tilini mukammal bilish va America davlatlariga IT universitedlarda o'qish uchun borish. Hozirda man Registan LC o'quv markazida Ingliz tilini o'rganyabman. Darajam Beginner. Kurs 10 oyga moljallangan bolib ,asosan IELTS  testiga tayorlaniladi."
        }
    }
}
const eng = {
    title: "English",
    header: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        changeLanguage: "Change Lang",
        name: "by Abdulkhamid"
    },
    info: {
        title: 'Welcome to my web site',
        text: "This webpage is about me. I'm Abdulhamid Ahmedov. I'm 19.  Now I'm Front end programmer and freelancer that's to say I work online. My level is Junior. Till now, I have attended 2 real projects. You can find out about this properly from portfolio section. For offers and questions"
    },
    about: {
        aboutMe : {
            title: "About me",
            text: "Hi ! My name is Abdulhamid Ahmedov. I'm 19 . I'm from Fergana in Uzbekistan. I am student and I am preparing to study at one of the IT universities in America. I completed the Front-end programming course and am currently doing an internship. At the same time, I'm taking the Back-end programming course and I'm also preparing for the IELTS exam in English, you can read about all this below!"
        },
        frontend: {
            title: "Frontend",
            text: "I graduated from the Frontend course of Najot Talim IT training center. In this course, I learned HTML, CSS, and Javascript, and I also learned React from frameworks. I am currently working as a freelancer in frontend development, my level is Junior. I participated in 1/2 real projects, and you can learn more about the projects from the Portfolio."
        },
        backend: {
            title: "Backend",
            text: "I am currently also studying Back end programming language, because of my interest. This course is designed for 8 months, during the course Python django, aiGramm (telegram bots), SQL, SQLI and some other frameworks and libraries are studied. About the back end"
        },
        language: {
            title: "English",
            text: "English language . One of my goals is to master English and go to America to study at IT universities. I am currently studying English at the Registan LC. My level is Elementary. The course is designed for 10 months and mainly prepares for the IELTS test."
        }
    }
}
const rus = {
    title: "Russian"
}



function ContexProvider({children}) {
    const [changeLang, setChangeLang] = useState(true)
    const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeContext.Provider value={{uzb, eng, changeLang, setChangeLang, showMenu, setShowMenu}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ContexProvider , ThemeContext}