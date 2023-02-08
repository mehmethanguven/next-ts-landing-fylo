import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  url: string
}

export const FooterNavItem = ({ title, url }: Props) => {
  return (
    <Link href={url} className="w-32 capitalize">
      {title}
    </Link>
  )
}
