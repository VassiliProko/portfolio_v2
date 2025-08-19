<script setup>
    import { ref, watch } from 'vue';
    import { navBarItems } from '@/router/router.js';
    import { useRoute } from 'vue-router';
    import ThemeBtn from '@/components/ThemeBtn.vue';

    const navItems = ref(navBarItems);
    const isMenuOpen = ref(false);

    const route = useRoute();

    watch(route, () => {
        isMenuOpen.value = false;
    })

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
        // console.log(isMenuOpen.value);
    }

    // make menu close when clicking outside
    // if (isMenuOpen.value == true) {
    //     document.addEventListener("click", toggleMenu)
    // }
</script>

<template>
    <nav>
        <div class="nav-wrapper flex-row flex-wrap align-center bold">
            <a href="/" class="flex-row align-center gap-md">
                <img src="/assets/images/duck-pfp.jpeg" alt="profile picture" class="navbar-pfp"></img>
                Vassili Prokopenko
            </a>
            <ThemeBtn />
            <div class="hamburger align-center flex-row ml-md" @click="toggleMenu">
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
            <div v-if="isMenuOpen" class="flex-row width-100">
                <ul class="flex-col">
                    <li v-for="item in navItems" :key="item.name">
                        <router-link :to="item.to">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    padding: 0 var(--spacing-md);
}

.nav-wrapper {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.flex-col {
    text-transform: capitalize;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    margin-left: 38px;
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

li a {
    padding: var(--spacing-sm);
    width: 100%;
    display: block;
    border-radius: var(--border-radius-sm);
}

li a:hover {
    background-color: var(--neutral-color-800);
}

a {
    transition: color 0.2s ease;
}

a:hover {
    color: var(--neutral-color-400);
}

.hamburger {
    color: var(--neutral-color-50);
    cursor: pointer;
}

svg {
    transition: color 0.2s ease;
}

svg:hover {
    color: var(--neutral-color-400)
}

</style>