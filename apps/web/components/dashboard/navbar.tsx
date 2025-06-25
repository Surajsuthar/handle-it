"use client"
import { useSidebar } from '@/context/useSidebar';
import { ChevronRight } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

export const Navbar = () => {
    const { isMobile, open, toggleSidebar } = useSidebar()
    const { setTheme, theme} = useTheme()
    
    return (
       <div className="h-[50px] flex p-1.5 w-full border rounded-md items-center justify-between">
            <button
            className='cursor-pointer'
            onClick={toggleSidebar}
            >
                { !isMobile ? open ? <ChevronLeft/> : <ChevronRight/> : ''}
            </button>
            <div className='flex items-center mr-2'>
                <Button
                variant={"ghost"}
                onClick={() => setTheme("light")}
                className=' cursor-pointer'
                >
                    <Sun/>
                </Button>
            </div>
       </div>
    )
}