import { createClient } from '@/utils/supabase/client'
import moment from 'moment'
import { Separator } from './ui/separator'

type Experience = {
    id: number
    name: string
    position: string
    start_date: string
    end_date: string | null // Bisa NULL jika belum ada end_date
}

export default async function Experience() {
    const supabase = createClient()

    const { data: experience } = await supabase.from('experience').select()

    return (
        <section className='space-y-5' id='experience'>
            <h5 className='text-xl font-semibold'>Working Experience</h5>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3'>
                {experience?.map((item: Experience) => {
                    // Cek apakah end_date null, jika ya gunakan hari ini
                    const endDate = item.end_date ? moment(item.end_date).format('MMMM YYYY') : moment().calendar()

                    return (
                        <div
                            key={item.id}
                            className='space-y-2'
                        >
                            <h6>{item.position} at <strong>{item.name}</strong></h6>
                            <p className='text-sm text-gray-500'>
                                {moment(item.start_date).format('MMMM YYYY')} - {endDate}
                            </p>
                            <Separator />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
