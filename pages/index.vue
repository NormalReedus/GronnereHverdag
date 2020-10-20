<template>
  <div>
    <div class="cols-14">
      <Hero />
    </div>
    <div class="layout-container">
      <ArticleCardContainer class="cols-12" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {}
</script> 

<style lang="scss">
</style>
