import BannerLink from '@/components/BannerLink'
import Links from '@/organism/Links'
import React from 'react'

export default function page() {
    return (
        <main className='m-2 flex flex-col gap-10 md:m-5 lg:mx-32'>
            <BannerLink />
            <Links />
        </main>
    )
}
