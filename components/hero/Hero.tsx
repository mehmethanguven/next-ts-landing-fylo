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
      className="bg-white bg-bottom bg-no-repeat bg-contain shadow-lg bg-curvy-light-mode dark:bg-darkBlue dark:bg-curvy-dark-mode"
    >
      {/* <!-- Hero Container --> */}
      <div className="container px-6 mx-auto text-center pb-52 md:pt-20">
        <Image
          height={0}
          width={0}
          src="/images/illustration-intro.png"
          alt=""
          sizes="100vh"
          className="w-auto mx-auto"
        />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button
          className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95"
          onClick={() => notify('Get Started')}
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
