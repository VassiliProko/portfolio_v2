<script>
export default {
  name: 'AboutCard',
  props: {
    image: { type: String, required: true },
    alt: { type: String, default: 'Institution/Organization icon' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    period: { type: String, required: true },
  },
}
</script>

<template>
  <div class="flex-row gap-md">
    <img :src="image" :alt="alt" class="about-card-icon" />
    <div class="flex-col">
      <p class="bold">{{ title }}</p>
      <p>{{ description }}</p>
      <p class="small-text muted">{{ period }}</p>
    </div>
  </div>
</template>

<style scoped>
.about-card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-sm);
}
</style>
