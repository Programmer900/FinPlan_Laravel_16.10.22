<template>
  <div
    ref="root"
    class="__balance-row tableRow flexRowCenter tableContent"
  >
    <div class="rowIndex flexRowCenterTable tableValue tableRowName" style="max-width: 220px">
        <p style="width: 220px; display: flex;">
          <span style="max-width: 155px; display: inline-block;">{{ getItem.name }} &nbsp;
            <!--<Popper
              class="popper-container"
              arrow
              :placement="'top'"
              :content="annotation"
              :hover="true"
              :click.self="true"
              closeDelay="1000"
              zIndex="99"
            >
              <img v-if="getItem.alert" alt="!!!" :src="alertIcon" />
            </Popper>-->
          </span>
        </p>
    </div>

    <div class="rowValue flexRowCenter tableValue" style="position: relative;">
      <p v-for="(value, index) in getReverseData" :key="index" class="tableValueItem">
        {{ makeNumFormat(value).toLocaleString() }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { useEmitter } from '@/use/useEmitter';
import { useStore } from 'vuex'
import alertIcon from '@/assets/icons/alert-circle.svg';
import changingIcon from '@/assets/icons/check-svgrepo-com.svg';
import Popper from 'vue3-popper'
import i18n from '@/plugins/i18n/vue-i18n';

export default defineComponent({
  name: 'DocumentIndicatorsTableRow',
  emits: ['onChangeChartDataView'],

  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isReportPage: {
      type: Boolean,
      default: false,
    },
    annotation: {
      type: String,
      default: '>'
    }
  },
  components: { Popper },

  setup(props, { emit }) {
    const root = ref<any>(null);
    const emitter = useEmitter();

    const itemsArr = ref<any[]>([]);
    const itemWidth = ref<number>(0);
    const scrollValue = ref<number>(0);
    const annotation = ref<string>(props.annotation)
    const getItem = computed(() => props.item);

    const init = () => {
      //@ts-ignore
      itemsArr.value = document.querySelectorAll('.__balance-row .rowValue.flexRowCenter.tableValue');
      //@ts-ignore
      itemWidth.value = document.querySelector('.__balance-row .tableValueItem').offsetWidth;
      itemsArr.value.forEach((item: any) => {
        item.style.left = 0;
      });
    };

    const reset = () => {
      itemsArr.value = [];
      itemWidth.value = 0;
      scrollValue.value = 0;
    };

    const scrollToLeft = (): void => {
      if (scrollValue.value === 0) return;
      scrollValue.value -= itemWidth.value;
      itemsArr.value.forEach((item: any) => {
        item.style.left = `-${scrollValue.value}px`;
      });
    };

    const scrollToRight = (): void => {
      //@ts-ignore
      const maxWidth = document.querySelector('.__balance-row .rowValue.flexRowCenter.tableValue').scrollWidth;
      //if (scrollValue.value >= maxWidth - 200) return;
      if (scrollValue.value >= maxWidth - 950) return;
      scrollValue.value += itemWidth.value;
      itemsArr.value.forEach((item: any) => {
        item.style.left = `-${scrollValue.value}px`;
      });
    };

    const makeNumFormat = (value: string | number): number => {
      const _value = Number(value);
      if (Number.isInteger(_value)) {
        return _value;
      }
      return Number(_value.toFixed(2));
    };

    const getReverseData = computed(() => {
      //console.log(Object.values(props.item.data).reverse())
      return Object.values(props.item.data).reverse()
    });

    emitter.on('scrollIndicatorsTableToLeft', () => {
      scrollToLeft();
    });

    emitter.on('scrollIndicatorsTableToRight', () => {
      scrollToRight();
    });

    emitter.on('onChangeDocumentTableProp', () => {
      reset();
      init();
    });

    onMounted(() => {
      init();
    });

    onUnmounted(() => {
      emitter.off('scrollIndicatorsTableToLeft');
      emitter.off('scrollIndicatorsTableToRight');
      reset();
    });

    return {
      root,
      alertIcon,
      changingIcon,
      getItem,
      getReverseData,
      //onClick,
      makeNumFormat,
      annotation,

      i18n,
    };
  },
});
</script>

<style scoped lang="scss">

.loading {
  font-weight: bold;
  display:inline-block;
  font-family: monospace;
  font-size: 10px;
  color: #00a44c;
  clip-path: inset(0 3ch 0 0);
  animation: l 1s steps(4) infinite;
}

.tableRowName {
  p {
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    width: 17px !important;
    margin-right: 10px !important;
  }
}

.check_icon__wrapper {
  position: relative;
  left: -13%;
  top: 20px;
}

.check_icon {
  position: absolute;
  left: 0;
  max-width: 20px;
  padding-left: 5px;
  transition: all 1s ease;
}
.flexRowCenter p.small-size {
  margin-top: 0;
  padding-top: 0;
}
.colorGreen {
  color: #2a8634;
}
.noMarginBottom {
  margin-bottom: 0;
}
.tableValue {
  > p {
    line-height: 100%;
  }
}

.popper-container {
  //position: absolute !important;
}

.popper-container .popper {
  min-width: 300px;
  width: 100%;
}
</style>
