<template>
  <div class="card">
    <router-link :to="'/article/' + linksTo">
      <img :src="coverImageSrc" alt="cover-photo" />
      <div class="card-text-container">
        <h2 class="card-text-category">Category</h2>
        <h1 class="card-text-title">{{ title }}</h1>
        <p class="card-text-description">{{ summary }}</p>
        <div class="card-more-container">
          <a class="card-more-link">
            Learn More
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span class="card-more-views">
            <svg
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" /></svg
            >1.2K
          </span>
          <span class="card-more-comments">
            <svg
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              /></svg
            >6
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ArticleCard extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: true }) coverImageSrc!: string
  @Prop() summary?: string
  @Prop() tags?: []
  @Prop({ required: true }) linksTo!: string
}
</script> 

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: currentColor;
}
.card {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    object-fit: cover;

    //! Hardcode height
  }

  .card-text-container {
    padding: 1.5rem;
  }

  .card-text-category {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #a0aec0;
    font-weight: 500;
    margin-bottom: 0.25rem;
    letter-spacing: 0.1em;
  }

  .card-text-title {
    color: #1a202c;
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-size: 1.125rem;
  }

  .card-text-description {
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .card-more-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-more-link {
    color: #48bb78;
    display: inline-flex;
    align-items: center;

    svg {
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
    }
  }

  .card-more-views {
    color: #718096;
    display: inline-flex;
    align-items: center;
    line-height: 1;
    font-size: 0.875rem;
    margin-right: 0.75rem;
    padding: 0.25rem 0.75rem 0.25rem;
    border-right: 2px solid #e2e8f0;

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
    }
  }

  .card-more-comments {
    color: #718096;
    display: inline-flex;
    align-items: center;
    line-height: 1;
    font-size: 0.875rem;

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
    }
  }
}
</style>