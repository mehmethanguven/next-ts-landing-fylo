import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    console.log('render')
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme
    console.log('currentTheme', currentTheme)

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 text-slate-700"
          role="button"
          onClick={() => {
            setTheme('dark')
            console.log('clicked')
          }}
        />
      )
    }
  }

  return (
    <div
      aria-label="Toggle dark mode"
      className="px-3 py-2 transition rounded-full shadow-lg group bg-white/90 shadow-zinc-800/5 backdrop-blur hover:scale-110 hover:bg-gray-400 dark:bg-slate-800 dark:ring-1 dark:ring-white"
    >
      {renderThemeChanger()}
    </div>
  )
}
