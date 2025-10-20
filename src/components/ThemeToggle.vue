<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :class="{ 'theme-toggle--auto': theme === 'auto' }"
    :title="`当前主题: ${themeDisplay}, 点击切换`"
  >
    <!-- 浅色模式图标 -->
    <svg v-if="theme === 'light'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    
    <!-- 深色模式图标 -->
    <svg v-else-if="theme === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    
    <!-- 自动模式图标 -->
    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M21 12h-6m-6 0H3m13.22 4.22l4.24 4.24M1.54 20.46l4.24-4.24"></path>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, actualTheme, toggleTheme } = useTheme()

const themeDisplay = computed(() => {
  if (theme.value === 'auto') {
    return `自动 (${actualTheme.value === 'light' ? '浅色' : '深色'})`
  }
  return theme.value === 'light' ? '浅色' : '深色'
})
</script>

<style scoped>
.theme-toggle {
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-secondary);
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}

.theme-toggle--auto {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.theme-toggle:hover {
  transform: scale(1.1);
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.theme-toggle:active {
  transform: scale(0.95);
}
</style>