// export default function IndexPage() {
//   return (
//     <>
//       <h1>10/27</h1>
//       <b className="bg-slate-800 text-2xl">Happy birthday Trent, celebrate!</b>
//       <hr />
//       <p>
//         Everything in this website in some way is a hint towards finding the{" "}
//         <b>key</b>. If you find the key, you&apos;ll get a surprise.
//       </p>
//     </>
//   )
// }
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

export default function Home() {
  const [open, setOpen] = useState(false)
  const [keyDialogOpen, setKeyDialogOpen] = useState(false)
  const [key, setKey] = useState("")
  const [shake, setShake] = useState(false)
  const [flash, setFlash] = useState("")
  const router = useRouter()

  const handleKeySubmit = () => {
    if (key === "h@ppy b1rthday tr3nt!! ! :)") {
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

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-700 to-zinc-900 p-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-90"></div>
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
          <Button onClick={handleKeySubmit}>Submit</Button>
        </DialogContent>
      </Dialog>

      <h1 className="text-4xl font-bold tracking-wide text-slate-200">
        Happy birthday Trent, celebrate!
      </h1>
      <h2 className="text-2xl italic text-slate-400">10/27</h2>
      <p className="mt-12 max-w-2xl text-center text-xl text-slate-300">
        Everything on this site is a clue to find the <b>key</b>. Once found
        you&apos;ll get a surprise.
      </p>
    </main>
  )
}
