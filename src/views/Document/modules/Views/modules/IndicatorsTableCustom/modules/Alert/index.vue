<template>
  <div class="tableAlert flexRowCenter">
    <img v-if="icon" alt="Уведомление" :src="alertIcon"  />
    <p :class="{ml0: !icon}">{{ $t('tableTexts.alertText') }}  {{ getRegion }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import alertIcon from '@/assets/icons/alert-circle.svg';
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'DocumentIndicatorsTableAlert',
  props: {
    icon: {
      type: Boolean,
      required: false
    }
  },
  setup() {
    const route = useRoute();
    const region = ref(route.params.region)

    const getRegion = computed(() => {
      switch (region.value) {
        case 'USA':
          return 'млн. долл. США'
          break;
        case 'RUS':
          return 'млн. руб.'
          break;
      }
    })


    return {
      alertIcon, region, getRegion
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
