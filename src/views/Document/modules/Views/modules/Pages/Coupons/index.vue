<template>
  <div class="greyBg">
    <div class="flexWrapperColumn">
      <div class="methodology defaultBlack27px defaultGrey20px" v-if="!isNotFound">
        <h1>{{ $t('bonds.methodLabel') }}</h1>
        <p>{{ getCalcMethods }}</p>
      </div>
      <div v-if="isInit" class="table">
        <template v-if="!isNotFound">
          <div class="tableHeader flexRowBetween">
            <p v-for="index in getTranslationTableHeaderLength()" :key="index">
              {{ $t(`bonds.tableHeaders.${index - 1}`)}} <span v-if="index === 3"> / <span class="success-color">текущая цена</span></span>
            </p>
          </div>
          <div
            v-for="dividend of dividends"
            :key="dividend.currentPrice"
            class="tableRows tableValue flexRowBetween"
            :class="{
              /*['success-color']: (new Date(...dividend['Дата закрытия реестра'].split('.').reverse()) > new Date()) ? true : false,*/
              current: dividend.currentPrice,
              default: !dividend.currentPrice,
            }"
          >
            <p>{{ dividend['Дата выплаты'] }}</p>
            <p>{{ dividend['Номинал'] }}</p>
            <p>{{ dividend['Купоны'].toLocaleString() }}</p>
            <p>{{ dividend['Гашение'] }}</p>
            <p>{{ dividend['Денежный поток'].toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                }) }}</p>
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
  name: 'DocumentCouponsPage',
  components: { Loader },
  setup() {
    const api = useApiFinplan();
    const store = useStore();
    const dividends = ref<DynamicObject | null>(null);
    const couponsFields = ref([]);

    const isNotFound = ref<boolean>(false);
    const isInit = ref<boolean>(false);
    const getTranslationTableHeaderLength = (): number =>
      i18n.global.messages.ru.bonds.tableHeaders.length;

    const init = async () => {
      const response = await api.getCoupons(
        store.getters['documentStore/getRegion'],
        store.getters['documentStore/getSecId'],
          1000
      );
        console.log(response)
      // @ts-ignore
      dividends.value = response.data.COUPONS;
      // @ts-ignore
      couponsFields.value = response.data.COUPONS_FIELDS || [];

      if (!dividends.value || !dividends.value.length) {
        isNotFound.value = true;
      }
      isInit.value = true;
    };

    const reset = () => {
      dividends.value = null;
      couponsFields.value = [];
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
      couponsFields,
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
