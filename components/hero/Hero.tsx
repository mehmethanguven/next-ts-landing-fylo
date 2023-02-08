import Image from 'next/image'
import { toast } from 'react-toastify'

export const Hero = () => {
  const notify = (title: string) =>
    toast(`🦄 ${title}`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  return (
    <section
      id="hero"
      className="bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat dark:bg-curvy-dark-mode"
    >
      {/* <!-- Hero Container --> */}
      <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
        <Image
          height={0}
          width={0}
          src="/images/illustration-intro.png"
          alt=""
          className="mx-auto"
        />
        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button
          className="w-52 rounded-full bg-accentCyan p-3 hover:scale-95"
          onClick={() => notify('Get Started')}
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
