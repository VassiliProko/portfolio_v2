<script setup>
import CaseImage from '@/components/CaseCoverImage.vue'
</script>

<template>
  <div class="flex-col px-3xl py-lg gap-md">
    <h1>Play</h1>
    <p>Illustrations and other creative work.</p>
  </div>
  <div class="flex-row px-3xl py-lg gap-md">
    <div class="flex-col gap-md flex-50">
      <CaseImage src="/assets/images/play/shrimp-card.jpeg"></CaseImage>
      <CaseImage src="/assets/images/play/lunar-new-year-party.jpeg"></CaseImage>
    </div>
    <div class="flex-col gap-md flex-50">
      <CaseImage src="/assets/images/play/wet-reef.jpeg"></CaseImage>
      <CaseImage src="/assets/images/play/north-pole.jpeg"></CaseImage>
      <CaseImage src="/assets/images/play/terminator.jpeg"></CaseImage>
    </div>
  </div>
</template>

<style scoped></style>
