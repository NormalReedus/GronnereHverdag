<template>
  <div class="article-card">
    <NuxtLink :to="card.path">
      <pre v-for="prop of props" :key="prop">> {{ prop }}</pre>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IArticleCard } from '@/types'

@Component
export default class ArticleCard extends Vue {
  @Prop({ required: true }) card!: IArticleCard

  get props() {
    return Object.values(this.card)
  }
}
</script> 

<style lang="scss" scoped>
</style>