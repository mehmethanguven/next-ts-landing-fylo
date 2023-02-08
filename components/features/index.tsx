import { IFeatureItem } from '@/types/IFeatureItem'
import { FeatureItem } from './FeatureItem'

const features: IFeatureItem[] = [
  {
    desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    imageUrl: '/images/icon-access-anywhere.svg',
    title: 'Access your file from anywhere',
  },
  {
    desc: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    imageUrl: '/images/icon-security.svg',
    title: 'Security you can trust',
  },
  {
    desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    imageUrl: '/images/icon-access-anywhere.svg',
    title: 'Access your file from anywhere',
  },
  {
    desc: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    imageUrl: '/images/icon-security.svg',
    title: 'Security you can trust',
  },
]
export const Features = () => {
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      {/* <!-- Features Container --> */}
      <div className="container px-6 pb-32 mx-auto">
        <div className="grid grid-cols-1 gap-24 text-center md:grid-cols-2 md:gap-0">
          {(features || []).map((item, id) => (
            <FeatureItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
