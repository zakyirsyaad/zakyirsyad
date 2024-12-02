import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export default function Header() {
    return (
        <header className='flex gap-5 items-center'>
            <nav>
                <Link href={"/"}>
                    <Avatar>
                        <AvatarImage src="https://kowtddhwakkqmlntjbws.supabase.co/storage/v1/object/public/My/WhatsApp%20Image%202024-11-20%20at%2015.35.34_da0f0b4b.jpg" />
                        <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                </Link>
            </nav>

            <nav>
                <ul className='flex gap-5'>
                    <li>
                        <Link href={"https://www.instagram.com/zakyirsyaad/"} target='_blank'>Instagram</Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/zakyirsyad"} target='_blank'>LinkedIn</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
