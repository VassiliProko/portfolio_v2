<script>
export default {
  name: 'LifetimeCounter',
  data() {
    return {
      interval: null,
      birthdate: new Date('2006-01-17T14:25:00-05:00'), // 2:25 PM EST Washington DC
    }
  },
  computed: {
    minutesAlive() {
      const now = Date.now()
      const diffMs = now - this.birthdate.getTime()
      return Math.floor(diffMs / (1000 * 60))
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$forceUpdate() // Triggers reactivity for computed prop
    }, 60000) // Every minute
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>

<template>
  <span>alive for {{ minutesAlive.toLocaleString() }} mins</span>
</template>
