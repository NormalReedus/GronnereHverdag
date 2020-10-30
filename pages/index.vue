<template>
  <div>
    <div class="cols-14">
      <Hero />
    </div>
    <div class="layout-container">
      <ArticleCardContainer class="cols-12" :cards="articleCards" />
    </div>
  </div>
</template>

<script lang="ts">
import { IArticleCard } from '@/types'
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {
  async asyncData({
    $content,
  }: Context): Promise<{ articleCards: IArticleCard[] }> {
    const articleCards: IArticleCard[] = await $content('articles')
      .only(['path', 'image', 'tags', 'title', 'summary', 'date'])
      .fetch()

    return {
      articleCards,
    }
  }
}
</script> 

<style lang="scss">
</style>
