"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface props {
  storedKey: string
}
export default function Command({ storedKey }: props) {
  const [open, setOpen] = useState(false)
  const [keyDialogOpen, setKeyDialogOpen] = useState(false)
  const [key, setKey] = useState("")
  const [shake, setShake] = useState(false)
  const [flash, setFlash] = useState("")
  const router = useRouter()

  const handleKeySubmit = async (storedKey: string) => {
    if (key === storedKey) {
      setFlash("bg-green-500")
      setTimeout(() => {
        setKeyDialogOpen(false)
        router.push("/congratulations")
      }, 1000)
    } else {
      setShake(true)
      setFlash("bg-red-500")
      setTimeout(() => {
        setShake(false)
        setFlash("")
      }, 820)
    }
  }

  if (storedKey) {
    return (
      <>
        <Button onClick={() => setOpen(true)} className="mb-8">
          Open Command
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setKeyDialogOpen(true)}>
                Enter Key
              </CommandItem>
              <CommandItem onSelect={() => router.push("/")}>Home</CommandItem>
              <CommandItem disabled>Admin</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        <Dialog open={keyDialogOpen} onOpenChange={setKeyDialogOpen}>
          <DialogContent
            className={cn(
              "transition-all duration-300 sm:max-w-[425px]",
              shake && "animate-shake",
              flash
            )}
          >
            <DialogHeader>
              <DialogTitle>Enter the Secret Key</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Enter the key..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <Button onClick={() => handleKeySubmit(storedKey)}>Submit</Button>
          </DialogContent>
        </Dialog>
      </>
    )
  }
  return <p>Loading...</p>
}
