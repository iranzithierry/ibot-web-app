import React from 'react'
import { Dispatch, SetStateAction } from "react";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export default function ChatHeader() {
    return (
        <>
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src="/icon.png" alt="Image" />
                    <AvatarFallback>IB</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium leading-none">iBot</p>
                    <p className="text-sm text-muted-foreground">Kinyarwanda Chatbot</p>
                </div>
            </div>
        </>
    )
}
