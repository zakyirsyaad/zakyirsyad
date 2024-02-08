import ContactDialog from '@/components/ContactDialog'
import Motion from '@/components/Motion'
import React from 'react'

export default function Contact() {
    return (
        <Motion duration={4}>
            <section className='mt-10 p-4 md:px-14 lg:px-28 py-10 flex items-center justify-between border' id='contact'>
                <Motion duration={4.5}>
                    <p className=' font-medium md:text-xl lg:text-2xl'>Are you interested?</p>
                </Motion>
                <Motion duration={5}>
                    <ContactDialog />
                </Motion>
            </section>
        </Motion>
    )
}
