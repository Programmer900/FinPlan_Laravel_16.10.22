<template>
  <div class="switcher" @click="$emit('changeSwitch', this.checked)" :class="activeStyles">
    <span
      class="toggle-wrapper"
      role="checkbox"
      :aria-checked="checked.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
    >
      <span class="toggle-background" :class="backgroundStyles" />
      <span class="toggle-indicator" :style="indicatorStyles" />
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Switcher',
  props: {
    activeState: {
      type: Boolean,
      default: true,
      required: false
    },
    reset: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      checked: false,
      active: this.activeState,
    };
  },
  computed: {
    backgroundStyles() {
      return {
        'gold-mid': this.checked,
        'gray-lighter': !this.checked,
      };
    },
    activeStyles() {
      return {
        'hidden-state': !this.activeState
      }
    },
    indicatorStyles() {
      return { transform: this.checked ? 'translateX(20px)' : 'translateX(0)' };
    },
  },
  methods: {
    toggle() {
      if(this.activeState) {
        this.checked = !this.checked
      } else {
        this.checked = false
      }
    },
  },
  watch: {
    reset: function(newVal, oldVal) { // watch it
      //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      /*if(newVal === true) {
        this.checked = false
      }*/
    }
  },
  created() {
    //console.log('created Switcher')
  },
  mounted() {
    //console.log('Mounted Switcher')
  },
  updated() {
    if(this.activeState === false) {
      this.checked = false
    }
  }
});
</script>

<style scoped lang="scss" src="./style.scss" />
