import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Congratulations() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-100 to-blue-100 p-24">
      <h1 className="mb-8 text-center text-6xl font-bold text-slate-700">
        Please tell me you didn&apos;t get here same-day...
      </h1>
      <p className="mb-8 max-w-2xl text-center text-2xl text-slate-600">
        You get a free league skin up to $20. Love ya bro, proud of how far into
        uni you are, and the great guy you are.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
