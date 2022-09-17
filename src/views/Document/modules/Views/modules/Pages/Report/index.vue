<template>
  <div>
    <div>
      <div class="flexWrapperRow tableValue navigation-wrapper">
        <p
          v-for="button in reportSwitches"
          @click="handleClick(button)"
          :key="button.name"
          class="navigation-element"
          :class="{ isClicked: button.clicked }"
          v-if="isUsa"
        >
         <router-link exact :to="fullPath + '/' + button.link" class="reportLink">{{ button.name }}</router-link>
        </p>
        <h3 v-else class="default-w-700" data-v-6e658b22="">Нет данных</h3>
      </div>
    </div>
    <template v-if="isUsa">
      <router-view />
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted, onUnmounted, ref, watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import DocumentIndicatorsTable from '@/views/Document/modules/Views/modules/IndicatorsTable/index.vue';

export default defineComponent({
  name: 'DocumentReportPage',
  components: {
    DocumentIndicatorsTable,
  },
  setup() {
    const routerBase = useRouter();
    const route = useRoute();
    const store = useStore();
    const isInit = ref<boolean>(false);
    const fullPath = ref<string>('')

    const reportSwitches = ref<any[]>([
      { name: 'Баланс', clicked: true, link: 'balance' },
      { name: 'Прибыль и убытки', clicked: false, link: 'profit-loss' },
      { name: 'Движение денежных средств', clicked: false, link: 'cash-flow' },
      //{ name: 'Фин оценка', clicked: false, link: 'fin-assessment' },
    ]);

    const handleClick = (button) => {
      reportSwitches.value.forEach((prop) => {
        prop.clicked = false;
      });
      button.clicked = !button.clicked;
    };

    const init = async () => {
      isInit.value = await store.dispatch('documentStore/initIndicatorsChart');
    };

    const reset = () => {
      isInit.value = false;
      store.commit('documentStore/resetIndicatorsChart');
      store.commit('documentStore/resetTableProp');
    };

    const onChangeChartDataView = (key: string): void => {
      store.getters['documentStore/getIndicatorsChart'][key].visible = !store.getters['documentStore/getIndicatorsChart'][key].visible;
    };

    const onChangeParam = async (paramName: string) => {
      store.commit('documentStore/resetIndicatorsChart');
      await init();
    };

    const getChartDataValues = computed(() =>
      Object.values(store.getters['documentStore/getIndicatorsChart']));

    const getChartCategories = computed(
      () => store.getters['documentStore/getIndicatorsChartCategories'],
    );

    const getChartDataKeys = computed(() =>
      Object.keys(store.getters['documentStore/getIndicatorsChart']));

    const getIndicators = computed(() => store.getters['documentStore/getIndicatorsChart']);

    const getQuarters = computed(() => store.getters['documentStore/getIndicatorsQuarter']);

    const isUsa = computed(() => {
      if(route.params.region === 'USA') {
        return true
      }
      return false
    });

    onMounted(async () => {
      //console.log(route)
      //console.log(routerBase)
      fullPath.value = route.fullPath
      routerBase.push({ name: 'DocumentReportBalance'})

      await init();
    });

    onUnmounted(() => {
      reset();
    });

    watch(
      () => route.params.name,
      () => {
        reset();
      },
    );

    return {
      reportSwitches,
      handleClick,
      isInit,
      onChangeChartDataView,
      onChangeParam,
      getChartDataKeys,
      getIndicators,
      getChartCategories,
      getChartDataValues,
      getQuarters,

      fullPath,

      isUsa
    };
  },
});
</script>

<style scoped lang="scss">
.flexWrapperRow {
  width: 80%;
  margin: auto;

  > p {
    width: max-content;
    margin-right: 30px;
    //padding: 15px 45px;
    color: #797979;
    font-weight: 500;
    white-space: nowrap;
    background-color: white;
    border-radius: 30px;
    cursor: pointer;
  }

  :hover {
    color: white;
    //background-color: #fec006;
  }

  .isClicked {
    color: white;
    background-color: #2a8634;
    border-radius: 30px;
  }
}

@media (max-width: 1800px) {
  .flexWrapperRow {
    width: 90%;
  }
}

@media (max-width: 1600px) {
  .flexWrapperRow {
    width: 100%;
  }
}

@media (max-width: 1100px) {
  .flexWrapperRow {
    width: 100%;

    > p {
      padding: 12px 25px;
    }
  }
}

@media (max-width: 1000px) {
  .flexWrapperRow {
    width: 100%;
    overflow: scroll;

    > p {
      margin-right: 10px;
      padding: 12px 25px;
    }
  }
}

@media (max-width: 600px) {
  .greyBg {
    overflow-x: scroll;
    .flexWrapperRow {
      width: 100%;
      padding: 20px;
      overflow: scroll;
    }
    .tableValue {
      width: 1000px;
    }
  }
}
.reportLink {
  text-decoration: none;
  outline: none;
}

.reportLink:hover, .reportLink:focus {
  color: transparent;
  background-color: transparent;
  outline: none;
}

p:hover .reportLink {
}

p .reportLink {
  color: #2a8634 !important;
  padding: 15px 45px;
  display: inherit;
}

p.isClicked .reportLink {
  color: #fff !important;
}
</style>
