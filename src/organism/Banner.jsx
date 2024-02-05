import { Instagram, Linkedin, MousePointerClick } from 'lucide-react'
import React from 'react'

export default function Banner() {
    return (
        <section className='flex flex-col md:flex-row items-center gap-y-5 md:justify-between p-4 md:px-14 lg:px-28 lg:pt-20'>
            <div className=' mt-5 flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 md:w-2/3 lg:w-1/2 items-center md:items-start'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-black'>Zaky Irsyad Rais</p>
                <p className='text-center md:text-start md:indent-5'>As an S1 student majoring in informatics with a specialization in Frontend Developer from the Islamic University of Indonesia, I am eager to contribute to your company and community.</p>
                <p className='flex gap-x-2 items-center hover:border-b-4 border-[#40798C] hover:pl-1 duration-100 hover:gap-x-5 hover:font-extrabold md:w-56'>Lets Collaborate <span className=''><MousePointerClick className='text-[#40798C]' /></span></p>
            </div>
            <div className='flex md:flex-col items-center gap-5 border-2 border-[#40798C] px-7 py-2 md:px-2 md:py-7 rounded-full'>
                <Instagram className='text-primary hover:scale-110 duration-200' />
                <Linkedin className='text-primary hover:scale-110 duration-200' />
            </div>
        </section >

    )
}
