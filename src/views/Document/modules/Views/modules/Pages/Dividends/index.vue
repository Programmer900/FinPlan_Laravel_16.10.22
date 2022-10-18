<template>
  <div class="greyBg">
    <div class="flexWrapperColumn">
      <div class="methodology defaultBlack27px defaultGrey20px" v-if="!isNotFound">
        <h1>{{ $t('dividends.methodLabel') }}</h1>
        <p v-if="getCalcMethods">{{ getCalcMethods }}</p>
        <p v-else>Четкой дивидендной политики в открытых источниках не обнаружено</p>
      </div>
      <div v-if="isInit" class="table">
        <template v-if="!isNotFound">
          <div class="tableHeader flexRowBetween">
            <p v-for="index in getTranslationTableHeaderLength()" :key="index">
              {{ $t(`dividends.tableHeaders.${index - 1}`)}} <span v-if="index === 3"> / <span class="success-color">текущая цена</span></span>
            </p>
          </div>
          <div
            v-for="dividend of dividends"
            :key="dividend.currentPrice"
            class="tableRows tableValue flexRowBetween"
            :class="{
              ['success-color']: (new Date(...dividend['Дата закрытия реестра'].split('.').reverse()) > new Date()) ? true : false,
              current: dividend.currentPrice,
              default: !dividend.currentPrice,
            }"
          >
            <p>{{ dividend['Дата закрытия реестра'] }}</p>
            <p>{{ dividend['Дата закрытия реестра (T-2)'] }}</p>
            <p>{{ dividend['Цена на дату закрытия'].toLocaleString() }}</p>
            <p>{{ dividend['Дивиденды'] }}</p>
            <p>{{ dividend['Дивиденды, в %'] }}</p>
          </div>
        </template>
        <template v-else>
          <h1>Компания {{ getNameCompany }} не выплачивает дивиденды за текущий год</h1>
        </template>
      </div>
      <Loader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import {
 defineComponent, onMounted, onServerPrefetch, onUnmounted, ref, reactive
} from 'vue';
import { useStore } from 'vuex';
import i18n from '@/plugins/i18n/vue-i18n';
import { DynamicObject } from '@/interfaces';
import Loader from '@/components/Loader/index.vue';
import { useApiFinplan } from '@/use/api/useApiFinplan';

export default defineComponent({
  name: 'DocumentDividendsPage',
  components: { Loader },
  setup() {
    const api = useApiFinplan();
    const store = useStore();
    const dividends = ref<DynamicObject | null>(null);
    const isNotFound = ref<boolean>(false);
    const isInit = ref<boolean>(false);
    const getTranslationTableHeaderLength = (): number =>
      i18n.global.messages.ru.dividends.tableHeaders.length;

    const init = async () => {
      const response = await api.getDividends(
        store.getters['documentStore/getRegion'],
        store.getters['documentStore/getSecId'],
      );
      // @ts-ignore
      dividends.value = response.data.DIVIDENDS;

      if (!dividends.value || !dividends.value.length) {
        isNotFound.value = true;
      }
      isInit.value = true;
    };

    const reset = () => {
      dividends.value = null;
      isInit.value = false;
      isNotFound.value = false;
    };

    const getCalcMethods = computed(() => {
     return store.getters['documentStore/getCalcMethod']
    });

    const getNameCompany = computed(() => store.getters['documentStore/getName'])

    onServerPrefetch(async () => {
      await init();
    });

    onMounted(async () => {
      if (!isInit.value) {
        await init();
      }
    });

    onUnmounted(() => {
      reset();
    });

    return {
      isInit,
      isNotFound,
      dividends,
      getCalcMethods,
      getNameCompany,
      getTranslationTableHeaderLength
    };
  },
});
</script>

<style scoped lang="scss">
.flexWrapperColumn {
  margin: auto;
}

.methodology {
  > h1 {
    margin-top: 20px;
  }
  > p {
    width: 70%;
    margin-top: 40px;
  }
}

.table {
  margin-top: 60px;
  .tableHeader {
    //padding: 25px 20px;
    padding: 10px;
    background-color: white;

    > p {
      width: 18%;
      margin: 0;
      line-height: 100%;
    }
  }

  .current {
    background-color: white;
  }

  .current:hover {
    background-color: #fec006;
  }

  .current:hover .currentPrice {
    opacity: 1;
  }

  .default {
    background-color: #f4f4f4;
  }

  .default:hover {
    background-color: white;
  }

  .tableRows {
    width: 100%;
    margin-top: 3px;
    //padding: 15px 20px;
    padding: 10px;
    cursor: pointer;

    > p {
      width: 18%;

      padding: 0;
      margin: 0;
    }

    .currentPrice {
      position: absolute;
      width: max-content;
      margin-top: 80px;
      padding: 10px 20px;
      color: white;
      font-size: 14px;
      background-color: black;
      border-radius: 20px;
      opacity: 0;
      transition: 0.3s;
    }
  }
}

@media (max-width: 600px) {
  .flexWrapperColumn {
    padding: 0 20px;
    .methodology {
      > p {
        width: 100%;
      }
    }
    .table {
      overflow-x: scroll;
      .tableHeader {
        width: 700px;
      }

      .tableRows {
        width: 700px;
      }
    }
  }
}

.success-color {
  color: #00aa4f
}

.success-color > p {
  color: #00aa4f
}
</style>
