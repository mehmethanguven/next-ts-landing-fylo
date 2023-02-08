import Image from 'next/image'
import React from 'react'

type Props = {
  subtitle: string
  title: string
  userImageUrl: string
  username: string
}

export const TestimonialItem = ({
  userImageUrl,
  title,
  subtitle,
  username,
}: Props) => {
  return (
    <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
      <p className="text-sm leading-5 md:text-lg">{subtitle}</p>
      {/* <!-- Customer Info --> */}
      <div className="flex space-x-4">
        <Image
          height={0}
          width={0}
          src={userImageUrl}
          alt=""
          className="h-10 w-10 rounded-full"
          sizes="100vh"
        />
        <div>
          <h5 className="text-sm font-semibold">{username}</h5>
          <p className="text-xs font-extralight">{title}</p>
        </div>
      </div>
    </div>
  )
}
