<template>
  <section>
    <button @click="toggleTextbox">
      <i class="fa" :class="iconClass" aria-hidden="true"></i>{{ buttonText }}
    </button>

    <aside ref="textbox">
      <slot />
    </aside>
  </section>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class ToggledTextbox extends Vue {
  @Prop({ default: 'Læs mere' }) buttonText?: string

  open: boolean = false

  get iconClass(): string {
    return this.open ? 'fa-minus' : 'fa-plus'
  }

  toggleTextbox(): void {
    const textBox = this.$refs.textbox as HTMLElement
    // Nødvendigt for at transition height:
    if (this.open) {
      textBox.style.height = 0 + 'px'
      textBox.style.padding = '0 2rem'
    } else {
      const scrollHeight: number = textBox.scrollHeight

      textBox.style.height = scrollHeight + 'px'
      textBox.style.padding = '2rem'
    }
    this.open = !this.open
  }
}
</script>

<style lang="scss" scoped>
button {
  background: white;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5em 1em;
  border-radius: 5px;
}

aside {
  transition: height 500ms ease-in-out, padding 500ms ease-in-out;
  margin-top: 0.7rem;
  background: rgb(248, 248, 248);
  padding: 0 2rem;
  border-radius: 3px;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  height: 0px;
  box-sizing: content-box;
}

button {
  font-family: inherit;
}

i {
  margin-right: 0.5em;
  color: #48bb78;

  transition: transform 250ms ease-in-out;

  &.fa-minus {
    transform: rotate(360deg);
  }
}
</style>