import Motion from '@/components/Motion'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <Motion duration={5.5}>
            <section className='p-4 md:px-14 lg:px-28 flex flex-col justify-between gap-y-3 md:flex-row md:items-center bg-primary text-secondary'>
                <Motion duration={6}>
                    <p>Thanks for visiting my website</p>
                </Motion>
                <Motion duration={6.5}>
                    <div className='flex gap-2 items-center'>
                        <p className='font-medium text-lg'>Found Jeky:</p>
                        <div className='flex gap-3'>
                            <Link href='https://www.instagram.com/zakyirsyaad/' target='_blank'>
                                <Instagram />
                            </Link>
                            <Link href='https://www.linkedin.com/in/zakyirsyad' target='_blank'>
                                <Linkedin />
                            </Link>
                        </div>
                    </div>
                </Motion>
            </section>
        </Motion>

    )
}
