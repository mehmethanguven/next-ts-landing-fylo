import { INavLink } from '@/types/INavLink'
import { ModeToggle } from '@/utils/toggleMode'
import { NavItem } from './navItem'

const navLinks: INavLink[] = [
  { title: 'features', url: '#features' },
  { title: 'testimonials', url: '#testimonials' },
]

export const Header = () => {
  return (
    <header className="container mx-auto h-40 px-6 text-center md:h-20">
      {/* <!-- Dynamic Logo --> */}
      <div className="top-10 left-10 mx-auto h-20 w-48 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode md:absolute md:mx-0"></div>
      {/* <!-- Menu --> */}
      <div className="top-12 right-10 flex items-center justify-center space-x-4 md:absolute md:space-x-10">
        {(navLinks || []).map((item, id) => (
          <NavItem key={id} {...item} />
        ))}

        {/* <!-- Dark/Light Mode Button --> */}
        <ModeToggle />
      </div>
    </header>
  )
}
