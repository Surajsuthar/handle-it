"use client"
import { useSidebar } from '@/hooks/useSidebar';
import { ChevronRight } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export const Navbar = () => {
    const { open, toggleSidebar } = useSidebar()

    return (
       <div className="h-[50px] flex p-1.5 w-full border rounded-md items-center justify-between">
            <button
            className='cursor-pointer'
            onClick={toggleSidebar}
            >
                { open ? <ChevronLeft/> : <ChevronRight/>}
            </button>
            <div className='flex items-center mr-2'>
                <button
                className=' cursor-pointer'
                >
                    <Sun/>
                </button>
            </div>
       </div>
    )
}