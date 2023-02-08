import Link from 'next/link'

type Props = {
  title: string
  url: string
}

export const NavItem = ({ title, url }: Props) => {
  return (
    <Link href={url} className="capitalize hover:text-accentCyan">
      {title}
    </Link>
  )
}
