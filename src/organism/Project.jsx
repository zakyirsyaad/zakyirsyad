'use client';

import { supabaseConfig } from '@/api/supabase';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import Motion from '@/components/Motion';


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
            <Motion duration={2.5}>
                <p className='text-2xl uppercase font-bold'>Project</p>
            </Motion>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >

                {
                    projects && (
                        <CarouselContent className="">
                            {projects.map((item) => (

                                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                                    <Motion duration={3.5}>
                                        <div className='gap-5 w-full flex flex-col items-center'>
                                            <Image src={item.img_project} alt='Project jeky' className='w-full h-60 object-cover rounded shadow-sm shadow-secondary' width={200} height={200} />
                                            <p className='text-base capitalize'>{item.name_project}</p>
                                        </div>
                                    </Motion>

                                </CarouselItem>

                            ))}
                        </CarouselContent>
                    )
                }
            </Carousel>

        </section >
    );
}
