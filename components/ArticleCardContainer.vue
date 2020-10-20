<template>
  <main class="article-card-container">
    <ArticleCard
      v-for="articleCard of articleCards"
      :key="articleCard.date"
      :card="articleCard"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IArticleCard } from '@/types'

@Component
export default class ArticleCard extends Vue {
  // @Prop({ required: true }) cards!: IArticleCard[]

  async asyncData({
    $content,
  }: {
    store: any
    $content: any
  }): Promise<{ articleCards: IArticleCard[] }> {
    const articleCards = await $content('articles')
      .only(['date', 'image', 'path', 'summary', 'tags', 'title'])
      .fetch()

    return {
      articleCards,
    }
  }
}
</script> 

<style lang="scss" scoped>
</style>