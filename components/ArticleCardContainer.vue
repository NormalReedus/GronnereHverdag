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
import { Context } from '@nuxt/types'

@Component
export default class ArticleCard extends Vue {
  // @Prop({ required: true }) cards!: IArticleCard[]
}
</script> 

<style lang="scss" scoped>
</style>