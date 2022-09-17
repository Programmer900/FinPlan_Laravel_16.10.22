<template>
  <div class="__balance">
    <DocumentIndicatorsTable
      :isInit="isInit"
      :data="getIndicators"
      :categories="getChartCategories"
      :namespace="'balance'"
      @onChangeParam="onChangeParam"
      @onChangeChartDataView="onChangeChartDataView"
    />
  </div>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent, onMounted, onUnmounted, ref, watch
  } from 'vue';
  import DocumentIndicatorsTable from '@/views/Document/modules/Views/modules/IndicatorsTableCustom/index.vue';
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";

  export default defineComponent({
    name: 'DocumentReportBalance',
    components: { DocumentIndicatorsTable },
    setup() {
      const route = useRoute();
      const store = useStore();
      const isInit = ref<boolean>(false);
      const hasBeenChanged = ref<boolean>(false);

      const init = async () => {
        isInit.value = await store.dispatch('documentStore/initIndicatorsChart');
      };
      const getChartCategories = computed(
        () => store.getters['documentStore/getIndicatorsChartCategoriesReport'].reverse(),
      );
      const getIndicators = computed(() => store.getters['documentStore/getIndicatorsReportBalanceChart']);

      const onChangeParam = async (paramName: string) => {
        hasBeenChanged.value = false;
        store.commit('documentStore/resetIndicatorsChart');
        await init();
      };

      const onChangeChartDataView = (key: string): void => {
        hasBeenChanged.value = true;
        store.getters['documentStore/getIndicatorsChart'][key].visible = !store.getters['documentStore/getIndicatorsChart'][key].visible;
      };

      const getChartDataKeys = computed(() =>
        Object.keys(store.getters['documentStore/getIndicatorsChart']));

      const getQuarters = computed(() => store.getters['documentStore/getIndicatorsQuarter']);

      const reset = () => {
        isInit.value = false;
        hasBeenChanged.value = false;
        store.commit('documentStore/resetIndicatorsChart');
        store.commit('documentStore/resetTableProp');
      };

      onMounted(async () => {
        store.commit('documentStore/resetIndicatorsChart');
        await init();
      });

      onUnmounted( () => {
        reset();
      });

      watch(
        () => route.params.name,
        () => {
          reset();
        },
      );

      return {
        isInit,
        getChartCategories,
        getIndicators,

        getChartDataKeys,
        getQuarters,

        onChangeParam,
        onChangeChartDataView,

        hasBeenChanged
      }
    }
  })
</script>

<style scoped lang="scss">
.__balance .flexWrapperColumn:hover {
  background-color: transparent !important;
}
</style>
