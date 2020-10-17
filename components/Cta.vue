<template>
  <button class="cta-button">
    {{text}}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class NcGridSection extends Vue {
  @Prop({ required: true }) text!: string
  @Prop({ required: true }) redirectTo!: string 
  @Prop() filled: boolean = true  

}
</script>
<style scoped lang="scss">
button {
  border: none;
  &:focus {
    outline: none;
  }
}
.cta-button{
  border-radius: 999px;
  background-color: var(--primary-color);
  color: var(--text-color-inv);
  &--secondary {
    color: var(--text-color);
  }
}
</style>
