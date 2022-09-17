<template>
  <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHandle">

    <div ref="root" class="__balance-head tableRow flexRowCenter tableRowHeader">
      <div class="rowIndex flexRowCenter tableValue tableRowName" style="max-width: 220px">
        <p style="width: 220px">{{ $t('tableTexts.index') }}</p>
      </div>

      <div class="rowValue flexRowCenter tableValue valueCols" style="position: relative">
        <p v-for="(item, index) in getReverseCategories" :key="index" class="tableValueItem">
          <template v-if="getReverseQuarters">{{ item }} {{ getReverseQuarters[index] }}</template>
          <template v-else>{{ item }}</template>
        </p>
      </div>
    </div>
  </vue-custom-scrollbar>

</template>

<script lang="ts">
  import {
    computed, defineComponent, onMounted, onUnmounted, ref,
  } from 'vue';
  import { useEmitter } from '@/use/useEmitter';

  export default defineComponent({
    name: 'DocumentIndicatorsTableHeader',
    props: {
      data: {
        type: Object,
        required: true,
      },
      categories: {
        type: Object,
        required: true,
      },
      quarters: {
        type: Array,
        required: true,
      },
      namespaceWrapper: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      console.log(props)
      const root = ref<any>(null);
      const emitter = useEmitter();

      const typeData = computed(() => props.type)

      const item = ref<any>('');
      const itemWidth = ref<number>(0);
      const scrollValue = ref<number>(0);

      const getReverseCategories = computed(() => {
        const categories = Object.values(props.categories)
        return categories.reverse()
      });
      const getReverseQuarters = computed(() => Array.from(props.quarters).reverse());

      const scrollToLeft = (): void => {
        if (scrollValue.value === 0) return;
        scrollValue.value -= itemWidth.value;
        item.value.style.left = `-${scrollValue.value}px`;
      };

      const scrollToRight = (): void => {
        //@ts-ignore
        const maxWidth = document.querySelector('.__balance-head .rowValue').scrollWidth;
        //if (scrollValue.value >= maxWidth - 200) return;
        if (scrollValue.value >= maxWidth - 950) return;
        scrollValue.value += itemWidth.value;
        item.value.style.left = `-${scrollValue.value}px`;
      };

      const scrollHorizontal = () => {
        const content = document.querySelector('.__balance-head .tableValue');
        //@ts-ignore
        content.scrollLeft = 100;
        //@ts-ignore
        content.scrollRight = 200;
      }

      const handleScroll = (evt, el) => {
        if (window.scrollY > 50) {
          el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, -10px, 0)'
          )
        }
        return window.scrollY > 100
      }

      const scrollHandle = (evt) => {
        console.log(evt)
      }


      const init = () => {
        item.value = document.querySelector('.__balance-head .rowValue');
        //@ts-ignore
        itemWidth.value = document.querySelector('.__balance-head .tableValueItem').scrollWidth;
        //@ts-ignore
        document.querySelector('.__balance-head .rowValue').style.left = 0;
      };

      const reset = () => {
        itemWidth.value = 0;
        scrollValue.value = 0;
      };

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

      const mouseDownTable = (e) => {

        const DIRECTIONS = {
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        }

      }

      return {
        root,
        getReverseCategories,
        getReverseQuarters,
        scrollToRight,
        scrollToLeft,
        scrollHorizontal,

        mouseDownTable,

        scrollHandle,

        typeData
      };
    },
  });
</script>

<style scoped lang="scss">
  .tableRowHeader {
    background-color: white !important;

    p {
      font-weight: 800;
    }

    .rowIndex {
      background-color: white !important;
    }

    &:hover {
      cursor: default !important;
      background-color: white !important;

      .rowIndex {
        padding-left: 0 !important;
        background-color: white !important;
      }
    }
  }
</style>
