import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James is a dedicated General Physician with 4 years of experience. He specializes in preventive care, chronic disease management, and health education, ensuring patients receive comprehensive and personalized treatment.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.RichardJames.medibridge@gmail.com',
        password: 'Dr.RichardJames12345'
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily Larson is a skilled Gynecologist with 3 years of experience. She provides expert care in women’s health, including prenatal care, family planning, and gynecological surgeries.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.EmilyLarson.medibridge@gmail.com',
        password: 'Dr.EmilyLarson12345'
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sarah Patel is a passionate Dermatologist with 1 year of experience. She specializes in treating skin conditions, offering advanced cosmetic procedures, and promoting skin health through personalized care.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.SarahPatel.medibridge@gmail.com',
        password: 'Dr.SarahPatel12345'
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is a compassionate Pediatrician with 2 years of experience. He focuses on child health, providing preventive care, vaccinations, and treatment for common childhood illnesses.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.ChristopherLee.medibridge@gmail.com',
        password: 'Dr.ChristopherLee12345'
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia is an experienced Neurologist with 4 years of practice. She specializes in diagnosing and treating neurological disorders, including migraines, epilepsy, and stroke.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.JenniferGarcia.medibridge@gmail.com',
        password: 'Dr.JenniferGarcia12345'
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams is a dedicated Neurologist with 4 years of experience. He focuses on treating complex neurological conditions and providing compassionate care to his patients.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.AndrewWilliams.medibridge@gmail.com',
        password: 'Dr.AndrewWilliams12345'
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher Davis is a General Physician with 4 years of experience. He is committed to providing holistic care, focusing on preventive medicine and chronic disease management.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.ChristopherDavis.medibridge@gmail.com',
        password: 'Dr.ChristopherDavis12345'
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy White is a Gynecologist with 3 years of experience. He specializes in women’s reproductive health, offering comprehensive care for prenatal, postnatal, and gynecological issues.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.TimothyWhite.medibridge@gmail.com',
        password: 'Dr.TimothyWhite12345'
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ava Mitchell is a Dermatologist with 1 year of experience. She specializes in treating skin diseases, offering advanced cosmetic treatments, and promoting skin health.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.AvaMitchell.medibridge@gmail.com',
        password: 'Dr.AvaMitchell12345'
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey King is a Pediatrician with 2 years of experience. He is dedicated to providing comprehensive care for children, including preventive health and treatment of common illnesses.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.JeffreyKing.medibridge@gmail.com',
        password: 'Dr.JeffreyKing12345'
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe Kelly is a Neurologist with 4 years of experience. She specializes in diagnosing and treating neurological disorders, including epilepsy, migraines, and stroke.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.ZoeKelly.medibridge@gmail.com',
        password: 'Dr.ZoeKelly12345'
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris is a Neurologist with 4 years of experience. He focuses on treating complex neurological conditions and providing compassionate care to his patients.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.PatrickHarris.medibridge@gmail.com',
        password: 'Dr.PatrickHarris12345'
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans is a General Physician with 4 years of experience. She is committed to providing holistic care, focusing on preventive medicine and chronic disease management.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.ChloeEvans.medibridge@gmail.com',
        password: 'Dr.ChloeEvans12345'
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez is a Gynecologist with 3 years of experience. He specializes in women’s reproductive health, offering comprehensive care for prenatal, postnatal, and gynecological issues.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.RyanMartinez.medibridge@gmail.com',
        password: 'Dr.RyanMartinez12345'
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill is a Dermatologist with 1 year of experience. She specializes in treating skin diseases, offering advanced cosmetic treatments, and promoting skin health.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        email: 'Dr.AmeliaHill.medibridge@gmail.com',
        password: 'Dr.AmeliaHill12345'
    },
];