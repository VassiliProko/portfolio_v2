<script setup>
import Image from '@/components/ImageCard.vue'
</script>

<template>
  <div class="flex-col px-3xl py-lg gap-md">
    <h1>Play</h1>
    <p>Some of my favorite illustrations!</p>
  </div>
  <div class="flex-row flex-col-mobile px-3xl py-lg gap-md">
    <div class="flex-col gap-md flex-50 mb-2xl">
      <Image
        src="/assets/images/play/shrimp-card.jpeg"
        description="McGill East Asian Student Society's Membership Card"
      ></Image>
      <Image src="/assets/images/play/reze-csm.JPG" description="Reze Fanart (Chainsawman)"></Image>
      <Image
        src="/assets/images/play/lunar-new-year-party.jpeg"
        description="MCSS - Lunar New Year Party Poster"
      ></Image>
    </div>
    <div class="flex-col gap-md flex-50">
      <Image src="/assets/images/play/wet-reef.jpeg" description="A Vibrant Coral Reef"></Image>
      <Image src="/assets/images/play/north-pole.jpeg" description="Chilly North Pole"></Image>
      <Image src="/assets/images/play/terminator.jpeg" description="Terminator on Fire"></Image>
    </div>
  </div>
</template>

<style scoped></style>
