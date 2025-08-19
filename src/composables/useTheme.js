import { ref, onMounted } from 'vue'

export function useTheme() {
  const lightmode = ref(true)

  const toggleTheme = () => {
    lightmode.value = !lightmode.value
    localStorage.setItem('theme', lightmode.value ? 'light' : 'dark')

    if (lightmode.value) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      lightmode.value = savedTheme === 'light'
      if (!lightmode.value) {
        document.documentElement.classList.add('dark')
      }
    } else {
      // Check browser's preferred color scheme
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      lightmode.value = !prefersDark // true if light mode is preferred
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  })

  return { lightmode, toggleTheme }
}
