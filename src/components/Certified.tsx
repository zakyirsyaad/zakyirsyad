import { createClient } from '@/utils/supabase/client'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

type Certified = {
    id: number
    certificate_name: string
    certificate_image: string
    provider: string
    certified_date: string
}

export default async function Certified() {
    const supabase = createClient()

    const { data: certified } = await supabase.from('certified').select()
    console.log(certified)

    return (
        <section className='space-y-5' >
            <h5 className='text-xl font-semibold'>Certified</h5>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {certified?.map((item: Certified) => (
                    <div
                        key={item.id}
                        className='space-y-2'
                    >
                        <Image
                            src={item.certificate_image}
                            alt={item.certificate_name}
                            width={400}
                            height={400}
                            priority={true}
                            className='w-full lg:p-2 lg:hover:scale-105 rounded duration-300'
                        />
                        <h6 className='font-semibold'>{item.certificate_name}</h6>
                        <div className='text-sm'>
                            <p className=' font-medium text-gray-500'>{item.provider}</p>
                            <p className=' text-gray-400'>{moment(item.certified_date).format('MMMM YYYY')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
