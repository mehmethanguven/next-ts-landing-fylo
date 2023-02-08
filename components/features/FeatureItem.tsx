import Image from 'next/image'
import React from 'react'

type Props = {
  desc: string
  imageUrl: string
  title: string
}

export const FeatureItem = ({ imageUrl, title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="mb-6 flex h-24 items-center justify-center">
        <Image
          height={0}
          width={0}
          sizes="100vh"
          className="w-auto"
          src={imageUrl}
          alt={title}
        />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md">{desc}</p>
    </div>
  )
}
