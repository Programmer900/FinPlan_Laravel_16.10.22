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
    setup(_, { emit }) {
      const api = useApiFinplan();
      const emitter = useEmitter();
      const store = useStore();
      const route = useRoute();

      const key = ref(Math.random())

      const active = computed(() => store.getters['documentStore/getIsViewedMiddleIndicators'])
      const activeMiddle = computed(() => store.getters['documentStore/getIsViewedMiddleIndicators'])
      const activeComparisonMiddle = computed(() => store.getters['documentStore/getIsViewedMiddleIndicators'])

      const category = computed(() => store.getters['documentStore/getIndicatorsChartCategories'])
      const prop = computed(() => store.getters['documentStore/getEmitentData'])
      const activeComparisonIndicators = computed(() => store.getters['documentStore/getIsViewedComparisonIndicators'])

      const renderComponent = ref(true)
      const loadingComparisonState = ref(false)
      const stateDropdown = reactive({
        stockState: {
          value: '',
          label: '',
          code: ''
        },
      });

      const initialReset = ref(false)
      const dropdownItems = ref([]);

      const resetComparisonState = () => {
        store.commit('documentStore/clearViewedComparisonIndicators')
        store.commit('documentStore/clearCurrentComparison')
        store.commit('documentStore/resetSwitcherMiddleIndicators')
        store.commit('documentStore/resetViewedComparisonPercentIndicators')
        key.value = Math.random()
      }

      const downloadList = () => {
        const init = async () => {
          const region = route.params.region
          const type = route.params.type

          if(type === routeDocumentTypes.stock) {

            if(!dropdownItems.value.length) {
              //@ts-ignore
              const response = await api.getActivesList(region, 'shares', 1000000, 1);
              //console.log('Response: ',  response)

              //@ts-ignore
              await response.data.ITEMS.forEach(a => {
                  const stock: stock = {
                    id: a.ID,
                    label: a.NAME,
                    code: a.SECID,
                    region: region
                  }

                  //@ts-ignore
                  dropdownItems.value.push(stock)
                }
              )
            }
          }
        }

        init()
      }

      const onChangeComparison = async (value: emitent) => {

        try {
          loadingComparisonState.value = true
          await store.dispatch('documentStore/initComparisonStock', value)
          store.commit('documentStore/setCurrentComparison', value)

        } catch (e) {
          console.error('Error in query: ', e)
        } finally {
          loadingComparisonState.value = false
          store.commit('documentStore/resetSwitcherMiddleIndicators')
        }
      }

      const onScrollTableTo = (to: string): void => {
        switch (to) {
          case 'left': {
            emitter.emit('scrollIndicatorsTableToLeft');
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

        showMiddleIndicators,
        showMiddlePercentIndicators,
        showMiddleComparisonPercent,
        resetComparisonState,

        active,
        dropdownItems,
        ...toRefs(stateDropdown),
        downloadList,
        onChangeComparison,


        initialReset,
        renderComponent,
        loadingComparisonState,

        activeComparisonIndicators,


        category,
        prop,
        activeMiddle, activeComparisonMiddle, key,

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
