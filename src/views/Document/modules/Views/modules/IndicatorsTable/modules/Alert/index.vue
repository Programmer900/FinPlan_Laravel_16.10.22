<template>
  <div class="tableAlert flexRowCenter">
    <img v-if="icon" alt="Уведомление" :src="alertIcon"  />
    <p :class="{ml0: !icon}">{{ $t('tableTexts.alertText') }} {{ getCurrency }}</p>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
import alertIcon from '@/assets/icons/alert-circle.svg';

import { useStore } from 'vuex'

export default defineComponent({
  name: 'DocumentIndicatorsTableAlert',
  props: {
    icon: {
      type: Boolean,
      required: false
    }
  },
  setup() {
    const store = useStore()
    console.log(store)

    const getRegion = computed(() => store.getters['documentStore/getRegion'])
    const getCurrency = computed(() => {
      console.log(getRegion)

      switch (getRegion.value) {
        case 'RUS':
          return 'млн руб.'
          break;
        case 'USA':
          return 'млн. долл. США'
          break;
        default: 'млн. долл. США'
          break;
      }
    })

    return {
      alertIcon,
      getCurrency
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
