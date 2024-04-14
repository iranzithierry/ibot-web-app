import { cn } from '@/lib/utils'
import React from 'react'

export default function ChatBubble({ content, owner}: { content: string, owner: string}) {
    return (
        <div
        className={cn("flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3.5 py-2 text-sm",
            owner === "user"
                ? "ml-auto bg-primary text-primary-foreground dark:text-white"
                : "bg-muted"
        )}>
        {content}
    </div >
    )
}
