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
import { Github } from 'lucide-react';
import Link from 'next/link';


export default function Project() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                let { data: project, error } = await supabaseConfig
                    .from('project')
                    .select('*')
                    .order('created_at', { ascending: false });


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
                                        <div className='gap-5 w-full flex flex-col'>
                                            <Image src={item.img_project} alt='Project jeky' className='w-full h-60 object-cover rounded shadow-sm shadow-secondary' width={200} height={200} />
                                            <div className='flex justify-between px-5'>
                                                <p className='text-base capitalize'>{item.name_project}</p>
                                                {item.url_project ? (
                                                    <Link href={item.url_project} target='_blank'>
                                                        <Github className='bg-primary text-secondary rounded-full w-14' />
                                                    </Link>
                                                ) : (
                                                    <button disabled>
                                                        <Github className='bg-disabled text-disabled rounded-full w-14' />
                                                    </button>
                                                )}
                                            </div>
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
