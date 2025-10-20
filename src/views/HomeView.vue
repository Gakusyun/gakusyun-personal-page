<template>
    <div class="hero-container">
        <div class="hero-background"></div>
        <ThemeToggle />

        <div class="hero-card">
            <div class="avatar-container">
                <img
                    :src="randomAvatar"
                    alt="Avatar"
                    class="avatar"
                />
            </div>

            <h1 class="hero-title">Gakusyun</h1>
            <h2 class="hero-subtitle">我要成为计算机高手!</h2>

            <p class="hero-description">
                暂略
            </p>

            <div class="hero-links">
                <a
                    href="https://blog.gxj62.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero-link"
                >
                    Gakusyun博客
                </a>

                <a href="mailto:gxj@gxj62.cn" class="hero-link">
                    E-mail
                </a>

                <a
                    href="https://github.com/Gakusyun"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hero-link"
                >
                    GitHub
                </a>
            </div>

            <div class="hero-tags">
                <span class="hero-tag">LaTeX</span>
                <span class="hero-tag">Typst</span>
                <span class="hero-tag">Docker</span>
                <span class="hero-tag">GNU/Linux</span>
                <span class="hero-tag">Caddy</span>
            </div>
        </div>
        
        <footer class="hero-footer">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="beian-link">
                鄂ICP备2024069158号-3
            </a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const randomAvatar = ref('')

const avatars = [
    new URL('@/assets/ao.webp', import.meta.url).href,
    new URL('@/assets/aotomira.webp', import.meta.url).href,
    new URL('@/assets/bujishibou.webp', import.meta.url).href
]

const getRandomAvatar = (): string => {
    const randomIndex = Math.floor(Math.random() * avatars.length)
    return avatars[randomIndex]!
}

onMounted(() => {
    randomAvatar.value = getRandomAvatar()
})
</script>

<style scoped>
@import "@/assets/home.css";
</style>
