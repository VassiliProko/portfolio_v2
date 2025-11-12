<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    description: {
        type: String,
    }
  },
}
</script>

<template>
    <div class="image-wrapper">
        <img :src="src" class="br-md"></img>
        <p v-if="description" :class="'mb-sm'">{{ description }}</p>
    </div>
</template>

<style scoped>
.image-wrapper {
    position: relative;
    width: auto;
    height: fit-content
}

p {
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    background-color: var(--neutral-color-800);
    color: var(--neutral-color-50);
}

</style>
