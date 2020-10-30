<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IArticle } from '@/types'
import { Context } from '@nuxt/types'

@Component
export default class Article extends Vue {
  async asyncData({
    $content,
    params,
  }: Context): Promise<{ article: IArticle }> {
    const article: IArticle = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  }
}
</script> 

<style lang="scss">
article {
  font-family: var(--article-text-font);
  line-height: 1.675;
  text-align: justify;
}
.nuxt-content {
  // h1 {
  // 	font-size: 2em;
  // }

  // h1:first-of-type {
  // 	margin-top: 0;
  // }

  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.3em;
    margin-bottom: 0;
    font-family: var(--article-heading-font);
    font-weight: 600;
  }

  h2:before {
    content: '';
    width: 40px;
    height: 5px;
    background: #48bb78;
    display: block;
  }

  .banner {
    height: 350px;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 3px;
    object-fit: cover;
  }

  .graf {
    width: 500px;
    max-width: 100%;
    object-fit: contain;
    border-radius: 3px;
    float: right;
    margin-left: 2rem;
    margin-bottom: 0.5rem;

    & + p {
      margin-top: 0;
    }
  }

  ul {
    text-align: left;
  }
}
</style>
