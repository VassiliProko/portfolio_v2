<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import DesktopNavbar from './DesktopNavBar.vue'
    import MobileNavbar from './MobileNavBar.vue'

    const isDesktop = ref(window.innerWidth > 768)

    function updateWidth() {
    isDesktop.value = window.innerWidth > 768
    }

    onMounted(() => window.addEventListener('resize', updateWidth))
    onUnmounted(() => window.removeEventListener('resize', updateWidth))
</script>

<template>
    <DesktopNavbar v-if="isDesktop" />
    <MobileNavbar v-else />
</template>

<style scoped>

</style>