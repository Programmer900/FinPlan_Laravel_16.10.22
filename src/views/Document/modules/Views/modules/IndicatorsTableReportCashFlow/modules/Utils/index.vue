<template>
  <div class="utils flexRowCenter">

    <div class="arrows flexRowCenter">
      <img alt="< scroll to left" :src="arrow" @click="onScrollTableTo('left')" />
      <img
        alt="scroll to right >"
        class="arrow-right"
        :src="arrow"
        @click="onScrollTableTo('right')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs ,ref, nextTick } from 'vue';
import { useEmitter } from '@/use/useEmitter';
import { useStore } from 'vuex';
import Switcher from '@/components/switcher/Switcher.vue';
import arrow from '@/assets/icons/arrow-right.svg';
import InputDropdown from '@/components/Inputs/Dropdown/index.vue';

import i18n from '@/plugins/i18n/vue-i18n';
import { useRoute } from "vue-router";
import { useApiFinplan } from "@/use/api/useApiFinplan";
import { routeDocumentTypes } from '@/helpers/route.helper';

interface stock {
  id: string;
  label: string;
  code: string;
  region: string | string[];
}

interface emitent {
  id: string, label: string, code: string, region: string
}

export default defineComponent({
  name: 'DocumentIndicatorsTableUtils',
  components: {
    Switcher,
    InputDropdown
  },
  props: {
    isUtils: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const api = useApiFinplan();
    const emitter = useEmitter();
    const store = useStore();
    const route = useRoute();

    const key = ref(Math.random())
    const isShowUtils = ref(props.isUtils)

    const category = computed(() => store.getters['documentStore/getIndicatorsChartCategories'])
    const prop = computed(() => store.getters['documentStore/getEmitentData'])

    const renderComponent = ref(true)
    const resetComparisonState = () => {
      store.commit('documentStore/clearViewedComparisonIndicators')
      store.commit('documentStore/clearCurrentComparison')
      store.commit('documentStore/resetSwitcherMiddleIndicators')
      store.commit('documentStore/resetViewedComparisonPercentIndicators')
      key.value = Math.random()
      //console.log(store.getters['documentStore/getIsViewedMiddleIndicators'])
    }



    const onScrollTableTo = (to: string): void => {

      switch (to) {
        case 'left': {
          emitter.emit('scrollIndicatorsTableToLeft', );
          break;
        }
        case 'right': {
          emitter.emit('scrollIndicatorsTableToRight');
          break;
        }
        default: {
          break;
        }
      }
    };

    onMounted(async () => {})

    return {
      arrow,
      onScrollTableTo,
      resetComparisonState,
      renderComponent,

      category,
      prop,
      key,
      isShowUtils,

      i18n
    };
  },
});
</script>

<style scoped lang="scss">
  @media screen and (max-width: 768px){
    .utils {
      flex-direction: column;
      align-items: flex-start;
    }

    .switcher-wrapper {
      max-width: 100%;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: column;
      -ms-flex-direction: column;
      -webkit-flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;
      .switcher {
        margin-left: 0 !important;

      }
    }
  }
</style>
