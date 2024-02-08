import React from 'react'
import { ToggleTheme } from './ToggleTheme'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import ContactDialog from './ContactDialog'


export default function Navbar() {

    return (
        <header className='flex justify-between items-center p-4 md:px-14 lg:px-28 lg:pt-10'>
            <p className='font-bold text-2xl'>Jeky</p>
            <nav className='hidden md:flex items-center gap-5'>
                <ContactDialog />
                <ToggleTheme />
            </nav>
            {/* mobile */}
            <div className='md:hidden flex gap-3'>
                <ToggleTheme />
                <Sheet >
                    <SheetTrigger>
                        <AlignJustify className='duration-500' />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>What u need?</SheetTitle>
                        </SheetHeader>
                        <ContactDialog />
                    </SheetContent>
                </Sheet>
            </div>


        </header>
    )
}
