'use client'
import Image from 'next/image'
import React from 'react'
import fotoBanner from '../../public/IMG_102923.jpg'
import { TypeAnimation } from 'react-type-animation'

export default function BannerLink() {
    return (
        <div >
            <Image src={fotoBanner} className='w-full h-72 object-cover object-top rounded-br-3xl rounded-3xl relative md:object-center lg:h-[600px]' alt='foto banner jeky' />
            <TypeAnimation
                sequence={[
                    'Zaky Irsyad Rais',
                    1000,
                    'Jeky',
                    1100,
                    '',
                    1200,

                ]}
                speed={50}
                repeat={Infinity}
                className='text-sm px-4 py-1 rounded-lg bg-secondary font-bold capitalize truncate absolute top-5 left-5 md:top-10 md:left-10 md:text-md lg:top-10 lg:left-40 lg:text-2xl'
            />
        </div >
    )
}
