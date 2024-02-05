import { Instagram, Linkedin, MousePointerClick } from 'lucide-react'
import React from 'react'
import reactLogo from '../assets/React-icon.svg'
import tailwindLogo from '../assets/Tailwind_CSS_logo.svg'
import tailwindLogoWhite from '../assets//tailwindcss-logotype-white.svg'
import nextLogo from '../../public/next.svg'
import nextLogoWhite from '../assets/next_js_white-removebg-preview.png'
import Image from 'next/image'
import Motion from '@/components/Motion'
import CvBtn from '@/components/CvBtn'

export default function Banner() {

    return (
        <section className='flex flex-col items-center gap-y-5 md:justify-between lg:justify-center p-4 md:px-14 lg:px-28 lg:pt-20'>
            <div className=' mt-5 flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 md:w-2/3 lg:w-1/2 items-center '>
                <Motion
                    duration={.5}
                    className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase'><p>Zaky Irsyad Rais</p></Motion>
                <Motion
                    duration={1}
                    className='text-center text-primary/50'><p>As an S1 student majoring in informatics with a <span className='text-primary'>specialization in Frontend Developer</span> from the Islamic University of Indonesia, I am eager to contribute to your company and community.</p></Motion>
                {/* <p className='flex gap-x-2 items-center hover:border-b-4 border-[#40798C] hover:pl-1 duration-100 hover:gap-x-5 hover:font-extrabold md:w-56'>Lets Collaborate <span className=''><MousePointerClick className='text-[#40798C]' /></span></p> */}
            </div>
            {/* <div className='flex items-center gap-5 border-2 border-primary px-7 py-2 rounded'>
                <Instagram className='text-primary hover:scale-110 duration-200' />
                <Linkedin className='text-primary hover:scale-110 duration-200' />
            </div> */}
            <Motion
                duration={1.5}>
                <CvBtn>Curriculum Vitae</CvBtn>
            </Motion>

            <Motion duration={2} className='flex flex-wrap items-center gap-5'>
                <Image src={reactLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-10 h-auto object-cover' loading='lazy' />
                <Image src={nextLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-20 h-auto  object-cover dark:hidden' loading='lazy' />
                <Image src={nextLogoWhite} alt='Tech Logo Website Zaky Irsyad Rais' className='w-20 h-auto object-cover hidden dark:block' loading='lazy' />
                <Image src={tailwindLogoWhite} alt='Tech Logo Website Zaky Irsyad Rais' className='w-40 h-auto object-contain hidden dark:block' loading='lazy' />
                <Image src={tailwindLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-40 h-auto object-contain dark:hidden' loading='lazy' />
            </Motion>
        </section >

    )
}
