import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="hidden">
      <Image src='/flagsteg.jpg' width={500} height={500} alt='Picture of a flag encrypted by something...' />
    </div>
  )
}
