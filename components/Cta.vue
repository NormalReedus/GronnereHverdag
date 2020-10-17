<template>
  <a class="cta-button">
    <span class="cta-button__text">
    {{ text }}
    </span>
    <font-awesome-icon class="cta-button__caret" :icon="['fas', 'angle-right']" />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Cta extends Vue {
  @Prop({ required: true }) text!: string
  @Prop({ required: true }) redirectTo!: string
  @Prop({ default: true }) filled?: boolean
}
</script>
<style scoped lang="scss">
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: var(--primary-color);
  color: var(--text-color-inv);
  padding: 1rem 1.5rem;
  font-family: var(--description-font);
  
  &--secondary {
    color: var(--text-color);
  }

  &__caret{
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
}
</style>
