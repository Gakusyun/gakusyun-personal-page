import { ref, onMounted, readonly } from 'vue'

export type Theme = 'light' | 'dark' | 'auto'

const theme = ref<Theme>('auto')
const systemTheme = ref<'light' | 'dark'>('light')
const actualTheme = ref<'light' | 'dark'>('light')

export function useTheme() {
  // 获取系统主题偏好
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // 获取存储的主题设置
  const getStoredTheme = (): Theme => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme
      return stored || 'auto'
    }
    return 'auto'
  }

  // 保存主题设置
  const saveTheme = (newTheme: Theme) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  // 应用主题到DOM
  const applyTheme = (themeToApply: 'light' | 'dark') => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeToApply)
      actualTheme.value = themeToApply
    }
  }

  // 更新实际主题
  const updateActualTheme = () => {
    systemTheme.value = getSystemTheme()
    
    if (theme.value === 'auto') {
      applyTheme(systemTheme.value)
    } else {
      applyTheme(theme.value)
    }
  }

  // 设置主题
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    saveTheme(newTheme)
    updateActualTheme()
  }

  // 切换主题（在 light/dark/auto 之间循环）
  const toggleTheme = () => {
    if (theme.value === 'light') {
      setTheme('dark')
    } else if (theme.value === 'dark') {
      setTheme('auto')
    } else {
      // 如果是 auto，则切换到 light
      setTheme('light')
    }
  }

  // 监听系统主题变化
  const setupSystemThemeListener = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', updateActualTheme)
    }
  }

  // 初始化
  onMounted(() => {
    theme.value = getStoredTheme()
    updateActualTheme()
    setupSystemThemeListener()
  })

  return {
    theme: readonly(theme),
    systemTheme: readonly(systemTheme),
    actualTheme: readonly(actualTheme),
    setTheme,
    toggleTheme,
    updateActualTheme
  }
}