import { useTheme } from 'next-themes'

export function useThemes() {
  const { theme, setTheme } = useTheme()
  const isDarkTheme = theme === 'dark'

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return { isDarkTheme, theme, changeTheme }
}
