<template>
  <div>IndexPage</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  created() {
    this.$store.dispatch('loadArticles')
  }
}
</script> 

<style lang="scss">
body {
  margin: 0;
  padding: 0;

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

// Over 1280px
.column-layout {
  display: grid;
  grid-template-columns: 25% repeat(12, 1fr) 25%;
}

.full-width {
  grid-column: 2 / 14;
}

@media (max-width: 1280px) {
  .column-layout {
    grid-template-columns: 20% repeat(12, 1fr) 20%;
  }
}

@media (max-width: 1024px) {
  .column-layout {
    grid-template-columns: 14% repeat(12, 1fr) 14%;
  }
}
@media (max-width: 960px) {
  .column-layout {
    grid-template-columns: 8% repeat(12, 1fr) 8%;
  }
}
@media (max-width: 600px) {
  .column-layout {
    grid-template-columns: 1rem repeat(12, 1fr) 1rem;
  }
}
</style>
