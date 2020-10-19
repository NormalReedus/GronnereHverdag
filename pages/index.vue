<template>
  <main>
    <div class="cols-14">
      <Hero />
    </div>
    <div class="layout-container">
      <div class="cols-12">
        <ArticleCard
          v-for="articleCard of articleCards"
          :key="articleCard.date"
          :card="articleCard"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {
  async asyncData({ $content }: { store: any; $content: any }) {
    const articleCards = await $content('articles')
      .only(['date', 'image', 'path', 'summary', 'tags', 'title'])
      .fetch()

    return {
      articleCards,
    }
  }
}
</script> 

<style lang="scss">
</style>
