<template>
  <section class="hero">
    <div class="hero-content">
      <h2 class="hero__title">Grønnere Hverdag</h2>
      <h2 class="hero__description">{{subtitle}} </h2>
      <Cta :text="ctaText" redirectTo="redirect" :filled="true" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Constants } from '@/content/text/constants'

@Component
export default class Hero extends Vue {
  ctaText = Constants.ctaText.toUpperCase()
  subtitle = Constants.subtitle
}
</script>

<style scoped lang="scss">
.hero {
  height: 100vh;
  background-image: url('../assets/landingPageImage.jpg');
  background-size: cover;

  &-content{
    font-family: var(--heading-font);
    max-width: 50%;
    top: 15%;
    position: relative;
    margin-left: 3rem;
  }

  &__title{
    font-size: 4rem;
    white-space: nowrap;
    margin-bottom: 1.5rem;
  }

  &__description{
    font-family: var(--description-font);
    margin-bottom: 2rem;
  }
}
</style>
