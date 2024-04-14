"use client";
import * as React from "react"
// import ChatHeader from "./chat/header";
import ChatBubble from "./chat/bubble";
import ChatForm from "./chat/form";
import { CardFooter  } from "@/components/ui/card"
import axios from "axios";
import LoadingDots from "./inline/loading-dots";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";

export function ChatBottom() {
    const [messages, setMessages] = React.useState<{ role: string; content: string; }[]>([])
    const [input, setInput] = React.useState("")
    const [isFetching, setIsFetching] = React.useState(false)

    const inputLength = input.trim().length

    const handleMessage = async (message: string) => {
        try {
            appendToCurrentMessages(message, "user")
            setIsFetching(true)
            const { data } = await axios.post('/api/chat', { prompt: message })
            appendToCurrentMessages(data, "bot")
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsFetching(false)
        }
    }
    const appendToCurrentMessages = (message: string, role: string) => {
        setMessages(prevMessages => [...prevMessages, { role: role, content: message }])
        localStorage.setItem("messages", JSON.stringify(messages))
    }
    const retrieveLocalStorageMessages = () => {
        let localMessages: object| null | string = {} 
        localMessages = localStorage.getItem("messages")
        if (localMessages) {
            setMessages(JSON.parse(localMessages))
        }

    }
    React.useEffect(() => retrieveLocalStorageMessages(), [])

    return (
        <div className="relative mx-auto max-w-2xl gap-8 flex-1 h-full justify-between flex-col flex">
            {/* <CardHeader className="flex flex-row items-center">
                <ChatHeader />
            </CardHeader> */}
            <ScrollArea className="px-4 sm:px-3">
                <div className="pb-2">
                    <div className="pb-16 space-y-1">
                        {messages.map((message, index) => (
                            <ChatBubble key={index} content={message.content} owner={message.role} />
                        ))}
                        {isFetching && (
                            <div className='flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-4 text-sm bg-muted'>
                                <LoadingDots color="#808080" />
                            </div>
                        )}
                    </div>
                </div>
            </ScrollArea>
            <CardFooter className="!px-0 py-1 fixed sm:absolute inset-x-0 w-full bottom-0 right-0 z-20 left-0  backdrop-blur-md">
                <ChatForm inputLength={inputLength} setMessage={handleMessage} setInput={setInput} input={input} isFetching={isFetching} />
            </CardFooter>
        </div>
    )
}
