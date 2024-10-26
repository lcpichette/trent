import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Congratulations() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900 p-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-90"></div>
      <h1 className="mb-8 text-center text-4xl font-bold text-slate-200">
        Please tell me you didn&apos;t get here same-day...
      </h1>
      <p className="mb-8 max-w-xl text-center text-2xl text-slate-300">
        You get a free league skin up to $20. Love ya bro, proud of who you are.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
