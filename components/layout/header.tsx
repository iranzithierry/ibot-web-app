"use client";
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { IconGitHub } from '@/components/ui/icons'
import { ThemeSwitcher } from './theme-switcher'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export function Header() {
    const clearChat = () => {
        localStorage.removeItem("messages")
        window.location.reload()
    }
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
            <div className="flex items-center">
                <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <button className='outline-none'>
                           <img className="size-10" src="/icon.png" alt="ibot logo" />
                           </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem onClick={() => clearChat()} className='cursor-pointer'>
                                Clear chat
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </React.Suspense>
            </div>
            <div className="flex items-center justify-end gap-2">
                <Button asChild size="sm" className="rounded-lg gap-1 dark:text-white">
                    <a href="https://github.com/iranzithierry/ibot-web-app" target="_blank">
                        <IconGitHub />
                        <span className="hidden sm:block">Contribute on GitHub</span>
                        <span className="sm:hidden">GitHub</span>
                    </a>
                </Button>
                <ThemeSwitcher />
            </div>
        </header>
    )
}