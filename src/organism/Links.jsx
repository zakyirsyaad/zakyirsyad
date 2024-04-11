import ButtonCvLink from '@/components/ButtonCvLink'
import ButtonLink from '@/components/ButtonLink'
import Link from 'next/link'
import React from 'react'

const linkCV = 'https://utaboiwoepvwdhnczsgd.supabase.co/storage/v1/object/sign/project/Curriculum%20Vitae%20-%20Zaky%20Irsyad%20Rais.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L0N1cnJpY3VsdW0gVml0YWUgLSBaYWt5IElyc3lhZCBSYWlzLnBkZiIsImlhdCI6MTcwNzE2MTkxMiwiZXhwIjoxNzM4Njk3OTEyfQ.eLLdmJ3xaB6BC1GavfNz-5hqR5tU9AvXDjDjDmMX1yc&t=2024-02-05T19%3A38%3A32.472Z'
export default function Links() {
    return (
        <div className='flex flex-col gap-5 mx-5'>
            <Link href={'/'}>
                <ButtonLink>
                    Visit My Website
                </ButtonLink>
            </Link>
            <Link href={linkCV}>
                <ButtonLink>
                    Curriculum Vitae
                </ButtonLink>
            </Link>
            <Link href='https://www.linkedin.com/in/zakyirsyad' target='_blank'>
                <ButtonLink>
                    Linked-in
                </ButtonLink>
            </Link>
            <Link href='https://www.tiktok.com/@hellojeky' target='_blank'>
                <ButtonLink>
                    Tiktok
                </ButtonLink>
            </Link>
            <Link href='https://www.youtube.com/channel/UCNFK5LWk-7Ru01ag3XeVSHw' target='_blank'>
                <ButtonLink>
                    Youtube
                </ButtonLink>
            </Link>
            <Link href='https://saweria.co/zakyirsyad' target='_blank'>
                <ButtonLink>
                    Support Me !
                </ButtonLink>
            </Link>
        </div >
    )
}
