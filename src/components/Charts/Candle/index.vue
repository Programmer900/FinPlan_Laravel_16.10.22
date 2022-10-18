<template>
  <div class="openPriceGraph">
    <template v-if="isInit">
      <button class="openPriceGraph__change-btn" @click="onChangeGraphType">
        Сменить вид графика
      </button>
      <VueHighcharts
        v-if="!isCandleChart"
        :animate-on-update="true"
        :one-to-one-update="false"
        :options="{
          ...defaultChartOptions,
        }"
        :redraw-on-update="true"
        type="stockChart"
      />
      <VueHighcharts
        v-else
        :animate-on-update="true"
        :one-to-one-update="false"
        :options="{
          ...candleChartOptions,
        }"
        :redraw-on-update="true"
        type="stockChart"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import StockCharts from 'highcharts/modules/stock';
import { useRoute } from 'vue-router';
import { meUtils } from '@/components/Charts/Candle/utils/meUtils';
import { DynamicObject } from '@/interfaces';

export default defineComponent({
  name: 'ChartCandle',
  components: {
    VueHighcharts,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const defaultChartOptions = ref<DynamicObject | null>(null);
    const candleChartOptions = ref<DynamicObject | null>(null);
    const isCandleChart = ref<boolean>(false);
    const isInit = ref<boolean>(false);

    const onChangeGraphType = (): void => {
      isCandleChart.value = !isCandleChart.value;
    };

    const init = (): void => {
      StockCharts(HighCharts);
      const { defaultChart, candleChart } = meUtils.init(props.data);
      defaultChartOptions.value = defaultChart;
      candleChartOptions.value = candleChart;
      // console.log(candleChartOptions.value);
      console.log(defaultChartOptions.value);
      isInit.value = true;
    };

    const reset = (): void => {
      defaultChartOptions.value = null;
      candleChartOptions.value = null;
      isCandleChart.value = false;
      isInit.value = false;
    };

    onMounted(() => {
      init();
    });

    onUnmounted(() => {
      reset();
    });

    watch(
      () => route.params.id,
      () => {
        reset();
      },
    );

    return {
      defaultChartOptions,
      candleChartOptions,
      isCandleChart,
      isInit,
      onChangeGraphType,
    };
  },
});
</script>

<style scoped lang="scss">
.highcharts-root .highcharts-point-up {
  fill: #06b535 !important;
  stroke: #06b535 !important;
}

.openPriceGraph {
  width: 100%;
  & canvas {
    display: block;
  }

  @include respond-to(1000) {
    width: 65%;
    margin-right: 20px;
  }

  &__change-btn {
    margin-bottom: 10px;
    padding: 8px 10px;
    color: $color-white;
    font-family: $ff-montserrat;
    background: #2a8634;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #2f6c3a;
    }
  }

}
</style>
