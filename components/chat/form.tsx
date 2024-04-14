import React from 'react'
import { Dispatch, SetStateAction } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoadingDots from '../inline/loading-dots';

interface ChatFormProps {
    inputLength: number,
    setMessage: Function,
    setInput: Dispatch<SetStateAction<string>>,
    input: string,
    isFetching: boolean
}
export default function ChatForm({ inputLength, setMessage, setInput, input, isFetching }: ChatFormProps) {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputLength === 0) return
        setMessage(input)
        setInput("")
    }
    return (
        <form onSubmit={onSubmit} className="flex w-full items-center space-x-2 pb-6 px-1 sm:px-4 z-30 relative">
            <Input id="message" placeholder="Type your message..." className="flex-1 rounded-sm sm:rounded-md" autoComplete="off"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" size="icon" disabled={inputLength === 0 || isFetching} className='dark:text-white'>
                {isFetching ? (
                    <LoadingDots color="#FFFFFF" />
                ) : (
                    <>
                        <PaperPlaneIcon className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </>
                )}

            </Button>
        </form>
    )
}
