import { ITestimonial } from '@/types/ITestimonial'
import Image from 'next/image'
import { TestimonialItem } from './TestimonialItem'

const testimonials: ITestimonial[] = [
  {
    title: 'Founder & CEO. Huddle',
    subtitle:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    userImageUrl: '/images/profile-1.jpg',
    username: 'Satish Patel',
  },
  {
    title: 'Founder & CEO. Huddle 2',
    subtitle:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    userImageUrl: '/images/profile-2.jpg',
    username: 'Bruce McKenzie',
  },
  {
    title: 'Founder & CEO. Huddle 3',
    subtitle:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    userImageUrl: '/images/profile-3.jpg',
    username: 'Eva Boyd',
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* <!-- Testimonials Container --> */}
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        {/* <!-- Boxes Container --> */}
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          {/* <!-- Quotes Image --> */}
          <Image
            width={0}
            height={0}
            sizes="100vh"
            src="/images/bg-quotes.png"
            alt=""
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />

          {(testimonials || []).map((item, id) => (
            <TestimonialItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
