import Image from 'next/image'
import React from 'react'
import fotoJeky from '../assets/IMG_0053.webp'
import reactLogo from '../assets/React-icon.svg'
import tailwindLogo from '../assets/Tailwind_CSS_logo.svg'
import nextLogo from '../../public/next.svg'
import nextLogoWhite from '../assets/next_js_white-removebg-preview.png'

export default function About() {
    return (
        <section className='mt-10 flex flex-col items-center gap-y-10 md:gap-y-0 md:flex-row md:items-center md:pl-14 md:justify-between lg:justify-normal lg:px-28 lg:gap-x-20'>
            <Image src={fotoJeky} alt='Foto Profile Website Zaky Irsyad Rais' className=' w-60 h-60 lg:w-72 lg:h-72 object-cover rounded-lg shadow-lg shadow-primary' />
            <div className='items-center md:items-start md:text-left md:w-1/2 flex flex-col gap-y-3 md:gap-y-5'>
                <p className='uppercase font-bold md:font-extrabold md:text-4xl lg:text-5xl tracking-wider'>proffesional <span className='text-[#40798C]'>Frontend Developer </span> </p>
                <p className='text-sm text-[#40798C]'>Interesting with me? <span className='text-black dark:text-white font-medium'>Lets Talk</span></p>
                <div className='flex flex-wrap items-center gap-5'>
                    <Image src={reactLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-10 h-auto object-cover' loading='lazy' />
                    <Image src={nextLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-20 h-auto  object-cover dark:hidden' loading='lazy' />
                    <Image src={nextLogoWhite} alt='Tech Logo Website Zaky Irsyad Rais' className='w-20 h-auto object-cover hidden dark:block' loading='lazy' />
                    <Image src={tailwindLogo} alt='Tech Logo Website Zaky Irsyad Rais' className='w-40 h-auto object-contain' loading='lazy' />
                </div>
            </div>

        </section>

    )
}
