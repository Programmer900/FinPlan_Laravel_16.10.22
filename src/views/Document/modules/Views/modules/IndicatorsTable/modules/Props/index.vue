<template>
  <div class="period">
    <span :class="{ picked: getProp === 'year' }" @click="changeParam('year')">{{
      $t('companyIndicators.tableProps.year.name')
    }}</span>
    <span :class="{ picked: getProp === 'quarter' }" @click="changeParam('quarter')">{{
      $t('companyIndicators.tableProps.quarter.name')
    }}</span>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, onUnmounted, ref,
} from 'vue';
import { useStore } from 'vuex';
import { useEmitter } from '@/use/useEmitter';

export default defineComponent({
  name: 'DocumentIndicatorsTableProps',
  emits: ['onChangeParam'],
  setup(params, { emit }) {
    const emitter = useEmitter();
    const store = useStore();
    const _currentParamName = ref<string>('');

    const changeParam = async (paramName: string) => {

      console.log(paramName)

      try {
        if (_currentParamName.value !== paramName) {
          store.commit('documentStore/changeCurrentTableProp', paramName);
          emit('onChangeParam', paramName);
          _currentParamName.value = paramName;
          emitter.emit('onChangeDocumentTableProp');
        }

        if(store.getters['documentStore/getCurrentComparison']) {
          const emitent = store.getters['documentStore/getCurrentComparison']
          await store.dispatch('documentStore/initComparisonStock', emitent)
        }

      } catch (e) {
        console.error(e)
      } finally {
        console.error('Finally')
      }

      //debugger


    };

    const getProp = computed(() => store.getters['documentStore/getCurrentTableProp']);

    onUnmounted(() => {
      emitter.off('onChangeDocumentTableProp');
    });

    return {
      getProp,
      changeParam,
    };
  },
});
</script>

<style scoped lang="scss"></style>
