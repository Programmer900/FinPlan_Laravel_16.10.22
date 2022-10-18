<template>
  <div class="tableAlert flexRowCenter">
    <img v-if="icon" alt="Уведомление" :src="alertIcon"  />
    <p :class="{ml0: !icon}">{{ $t('tableTexts.alertText') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import alertIcon from '@/assets/icons/alert-circle.svg';

export default defineComponent({
  name: 'DocumentIndicatorsTableAlert',
  props: {
    icon: {
      type: Boolean,
      required: false
    }
  },
  setup() {
    return {
      alertIcon,
    };
  },
});
</script>

<style scoped lang="scss">
  .tableAlert {
    margin-bottom: 10px !important;
  }
  .ml0 {
    margin-left: 0px !important;
  }
</style>
