<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    tag: {
        type: String,
    }
  },
}
</script>

<template>
    <div class="case-image-wrapper padding-md br-md border-200">
        <p v-if="tag" :class="['mb-sm', { 'tag-old': tag === 'Old' }, { 'tag-new': tag === 'New' }]">{{ tag }}</p>
        <img :src="src" class="br-sm"></img>
    </div>
</template>

<style scoped>
.case-image-wrapper {
    position: relative;
    width: auto;
    height: fit-content
}

p {
    position: absolute;
    right: var(--spacing-lg);
    top: var(--spacing-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    background-color: var(--neutral-color-800);
    color: var(--neutral-color-50);
}

</style>
