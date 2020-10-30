<template>
  <main class="article-card-container">
    <ArticleCard
      v-for="articleCard of cards"
      :key="articleCard.date"
      :card="articleCard"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IArticleCard } from '@/types'

@Component
export default class ArticleCardContainer extends Vue {
  @Prop({ required: true }) cards!: IArticleCard[]
}
</script> 

<style lang="scss" scoped>
</style>