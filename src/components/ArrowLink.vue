<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <a :href="href" class="bold link" target="_blank">
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right-icon lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;
  text-decoration: underline;
  gap: var(--spacing-xs);
  width: fit-content;
  line-height: 2;
  padding: var(--spacing-sm);
  transform: translateX(calc(-1 * var(--spacing-sm)));
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--primary-color);
}
</style>
