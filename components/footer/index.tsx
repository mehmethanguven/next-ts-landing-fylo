import { INavLink } from '@/types/INavLink'
import { ISociallink } from '@/types/ISocialLink'
import Image from 'next/image'
import { FooterNavItem } from './FooterNavItem'
import { SocialItem } from './SocialItem'

const socialLinks: ISociallink[] = [
  { imageUrl: '/images/facebook.svg', title: 'facebook', url: '' },
  { imageUrl: '/images/twitter.svg', title: 'twitter', url: '' },
  { imageUrl: '/images/instagram.svg', title: 'instagram', url: '' },
]

const footerNavLinks: INavLink[] = [
  { title: 'about', url: '#about' },
  { title: 'contact us', url: '#contact-us' },
  { title: 'jobs', url: '#jobs' },
  { title: 'terms', url: '#terms' },
  { title: 'press', url: '#press' },
  { title: 'privacy', url: '#privacy' },
  { title: 'blog', url: '#blog' },
]

export const Footer = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 pt-12 pb-10">
        {/* <!-- Flex Container For All Items --> */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* <!-- Email & Phone --> */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  height={0}
                  width={0}
                  src="images/icon-phone.svg"
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <Image
                  height={0}
                  width={0}
                  src="images/icon-email.svg"
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          {/* <!-- Menus --> */}
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="md:grid-row-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {(footerNavLinks || []).map((item, id) => (
                <FooterNavItem key={id} {...item} />
              ))}
            </div>
          </div>

          {/* <!-- Social --> */}
          <div className="flex justify-center space-x-3 pb-10">
            {(socialLinks || []).map((item, id) => (
              <SocialItem key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
