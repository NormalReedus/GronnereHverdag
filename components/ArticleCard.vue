<template>
  <NuxtLink :to="card.path">
    <v-card max-width="400" shaped elevation="3" class="card">
      <v-img height="250" :src="card.image">
        <v-chip-group>
          <v-chip small v-for="tag of card.tags" :key="tag" link>{{
            tag
          }}</v-chip>
        </v-chip-group>
      </v-img>

      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-text>{{ card.summary }}</v-card-text>
    </v-card>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IArticleCard } from '@/types'

@Component
export default class ArticleCard extends Vue {
  @Prop({ required: true }) card!: IArticleCard
}
</script> 

<style lang="scss" scoped>
</style>