<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { navBarItems } from '@/router/router.js';
    import ThemeBtn from '@/components/ThemeBtn.vue';

    const navItems = ref(navBarItems);
</script>

<template>
    <nav>
        <div class="nav-wrapper flex-row align-center bold">
            <a href="/" class="flex-row align-center gap-sm">
                <img src="/assets/images/duck-pfp.jpeg" alt="profile picture" class="navbar-pfp"></img>
                Vassili Prokopenko
            </a>
            <div class="flex-row absolute-center">
                <ul class="flex-row gap-sm">
                    <li v-for="item in navItems" :key="item.name">
                        <router-link :to="item.to">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
            <ThemeBtn />
        </div>
    </nav>
</template>

<style scoped>
.flex-row {
    text-transform: capitalize;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li a {
    padding: var(--spacing-sm);
}

a {
    transition: color 0.2s ease;
}

a:hover {
    color: var(--neutral-color-400);
}

</style>