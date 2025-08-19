<script setup>
import ArrowLink from './ArrowLink.vue'
</script>

<template>
  <footer class="flex-row preserve-colors">
    <div class="flex-col">
      <ArrowLink href="https://www.linkedin.com/in/vassili-prokopenko/">Linkedin</ArrowLink>
      <ArrowLink href="mailto:vassiligb12@gmail.com">Email</ArrowLink>
      <ArrowLink href="https://github.com/VassiliProko/">Github</ArrowLink>
      <ArrowLink
        href="https://docs.google.com/document/d/1W0-QIjajoPcEnDEO99qnTczTWo3l3Wu7W1VPZ29Igfw/preview?"
        >Resume
      </ArrowLink>

      <p class="mt-lg">Made with Vue.js, HTML & CSS 🩵</p>
    </div>
    <div class="flex-col ml-auto">
      <p>© 2025</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: var(--neutral-color-50);
  background-color: var(--neutral-color-900);
  padding: var(--spacing-lg) var(--spacing-3xl);
}

.flex-col a {
  width: fit-content;
  color: var(--neutral-color-50);
  text-decoration: underline;
}

a {
  font-weight: 400;
}
</style>
