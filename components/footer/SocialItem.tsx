import Image from 'next/image'

type Props = {
  title: string
  url: string
  imageUrl: string
}

export const SocialItem = ({ imageUrl, title, url }: Props) => {
  return (
    <div>
      <a href={url}>
        <Image
          src={imageUrl}
          alt={title}
          className="ficon w-auto rounded-full bg-darkBlue p-2"
          width={0}
          height={0}
        />
      </a>
    </div>
  )
}
