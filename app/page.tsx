"use ssr"

// import { createClient } from "@/utils/supabase/server"
import { createClient } from "@supabase/supabase-js"

import Command from "@/components/custom/Command"

const supabaseUrl = "https://abrtfetijieziwrwphln.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicnRmZXRpamlleml3cndwaGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5ODYxNDMsImV4cCI6MjA0NTU2MjE0M30.bUzGRHSAgZ9JZ9XZvAtHty47n47aJlCs-NJw-5xnpHk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function Home() {
  const { data: storedKey, error } = await supabase
    .from("encryptedkey")
    .select("*")

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-700 to-zinc-900 p-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-90"></div>

      {storedKey && (storedKey || []).length > 0 ? (
        <Command storedKey={storedKey[0].title} />
      ) : (
        <p>Loading.</p>
      )}

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
