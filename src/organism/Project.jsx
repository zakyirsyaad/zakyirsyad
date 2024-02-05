'use client';

import { supabaseConfig } from '@/api/supabase';
import { Folders } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Project() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                let { data: project, error } = await supabaseConfig
                    .from('project')
                    .select('*');

                if (project) {
                    setProjects(project);
                    setLoading(false)
                } else {
                    console.log(error)
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className='mt-10 p-4 md:px-14 lg:px-28 flex flex-col gap-y-5'>
            <p className='text-2xl font-bold'>My Work</p>
            {loading && <p>loading...</p>}
            {projects && (
                <div className='flex flex-wrap gap-10 md:justify-between lg:justify-normal lg:gap-28'>
                    {projects.map((item) => (
                        <div key={item.id} className='flex flex-col items-center w-full pt-5 px-5 gap-y-5 h-80 bg-primary rounded-md md:w-72 lg:w-80'>
                            <Image src={item.img_project} alt='Project jeky' className='w-full h-60 object-cover rounded-3xl  shadow-sm shadow-secondary' width={200} height={200} />
                            <p className=' tracking-wide text-secondary text-base capitalize'>{item.name_project}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
