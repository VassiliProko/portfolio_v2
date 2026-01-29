<script>
export default {
  props: {
    coverImg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="project-card">
    <div class="project-card-view-overlay">View</div>
    <div class="pc-image-wrapper">
      <img :src="coverImg" :alt="`${title} Cover Image`" />
    </div>
    <div class="flex-col gap-sm">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-card-view-overlay {
  position: absolute;
  background-color: var(--primary-color);
  color: var(--neutral-color-50);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    translate 0.3s ease;
  align-self: flex-end;
  margin-top: var(--spacing-md);
  margin-right: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  z-index: 10;
  translate: 0 - (var(--spacing-md));
}

.project-card:hover .project-card-view-overlay {
  opacity: 1;
  translate: 0 var(--spacing-sm);
}

.project-card {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--neutral-color-200);
  gap: var(--spacing-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  max-height: 70vh;
  height: 100%;
}

@media (max-width: 768px) {
  .project-card {
    height: auto;
  }
}

.project-card img {
  height: 100%;
  transition: transform 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}
</style>
