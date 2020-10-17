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
import Vue from 'vue'

export default Vue.extend({
  name: 'ToggledTextbox',

  props: {
    buttonText: String,
  },

  data() {
    return {
      open: false,
    }
  },

  computed: {
    iconClass() {
      // @ts-ignore
      return this.open ? 'fa-minus' : 'fa-plus'
    },
  },

  methods: {
    toggleTextbox() {
      // Nødvendigt for at transition height:
      // @ts-ignore
      if (this.open) {
        // @ts-ignore
        this.$refs.textbox.style.height = 0 + 'px'
        // @ts-ignore
        this.$refs.textbox.style.padding = '0 2rem'
      } else {
        // @ts-ignore
        const scrollHeight = this.$refs.textbox.scrollHeight

        // @ts-ignore
        this.$refs.textbox.style.height = scrollHeight + 'px'
        // @ts-ignore
        this.$refs.textbox.style.padding = '2rem'
      }
      // @ts-ignore
      this.open = !this.open
    },
  },
})
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