import { INavLink } from '@/types/INavLink'
import { ModeToggle } from '@/utils/toggleMode'
import { NavItem } from './navItem'

const navLinks: INavLink[] = [
  { title: 'features', url: '#features' },
  { title: 'testimonials', url: '#testimonials' },
]

export const Header = () => {
  return (
    <header className="container h-40 px-6 mx-auto text-center bg-white dark:bg-darkBlue md:h-20">
      {/* <!-- Dynamic Logo --> */}
      <div className="w-48 h-20 mx-auto bg-no-repeat top-10 left-10 bg-logo-light-mode dark:bg-logo-dark-mode md:absolute md:mx-0"></div>
      {/* <!-- Menu --> */}
      <div className="flex items-center justify-center space-x-4 top-12 right-10 md:absolute md:space-x-10">
        {(navLinks || []).map((item, id) => (
          <NavItem key={id} {...item} />
        ))}

        {/* <!-- Dark/Light Mode Button --> */}
        <ModeToggle />
      </div>
    </header>
  )
}
