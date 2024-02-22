import ButtonCvLink from '@/components/ButtonCvLink'
import ButtonLink from '@/components/ButtonLink'
import Link from 'next/link'
import React from 'react'

export default function Links() {
    return (
        <div className='flex flex-col gap-5 mx-5'>
            <ButtonLink>
                Visit My Website
            </ButtonLink>
            <ButtonCvLink>
                Curriculum Vitae
            </ButtonCvLink>
            <Link href='www.linkedin.com/in/zakyirsyad' target='_blank'>
                <ButtonLink>
                    Linked-in
                </ButtonLink>
            </Link>

        </div>
    )
}
