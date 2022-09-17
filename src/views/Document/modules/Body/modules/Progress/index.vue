<template>
  <template v-if="getMinMax">

    <DocumentProgressItem
      v-if="getRevenue"
      color="#2A8634"
      :line-max="Number(getMinMax['Выручка за год (скользящая)'].MAX)"
      name_="Выручка за год (макс.)"
      name="Выручка скользящая за год"
      :value="getRevenue"
      :symbol="getCurrencyForRegion"
      :typeIndicator="'capitalization'"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.averageRevenue"
    />
    <DocumentProgressItem
      v-if="getCurrentFinancialData.profit"
      color="#FEC006"
      :line-max="Number(getMinMax['Прибыль за год (скользящая)'].MAX)"
      name_="Прибыль"
      name="Прибыль скользящая за год"
      :value_="getCurrentFinancialData.profit"
      :value="getProfitLastYear"
      :symbol="getCurrencyForRegion"
      :typeIndicator="'capitalization'"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.averageProfit"
    />
    <DocumentProgressItem
      v-if="getReturnOnEquity"
      color="#FEC006"
      :line-max="100"
      name="Рентабельность СК"
      symbol="%"
      :value="getReturnOnEquity"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.returnOnEquity"
    />
    <DocumentProgressItem
      v-if="getShareOfEquityInAssets"
      color="#FEC006"
      :line-max="100"
      name="Доля СК"
      symbol="%"
      :value="getShareOfEquityInAssets"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.shareOfEquityInAssets"
    />
    <DocumentProgressItem
      v-if="getCurrentFinancialData.PE"
      color="#FEC006"
      :line-max="Number(getMinMax['P/E'].MAX)"
      name="P/E"
      symbol="%"
      :value="getCurrentFinancialData.PE"
    />

    <DocumentProgressItem
      v-if="getBeta"
      color="#FEC006"
      :line-max="Number(getMinMax['BETTA'].MAX)"
      name="Бета"
      :value="getBeta"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.betta"
    />
    <DocumentProgressItem
      v-if="getCurrentFinancialData.capitalization"
      color="#FEC006"
      :line-max="Number(getMinMax['Прошлая капитализация'].MAX)"
      name="Капитализация, $"
      :value="getCurrentFinancialData.capitalization"
    />
    <DocumentProgressItem
      v-if="getPE"
      color="#FEC006"
      :line-max="Number(getMinMax['P/E'].MAX)"
      name="P/E"
      symbol=""
      :value="getPE"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.pe"
    />
    <DocumentProgressItem
      v-if="getDividends"
      color="#FEC006"
      :line-max="Number(getMinMax['Дивиденды %'].MAX)"
      name="Дивиденды"
      symbol=" %"
      :value="getDividends"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.dividends"
    />

    <DocumentProgressItem
      v-if="getCapitalization"
      color="#2A8634"
      :line-max="Number(getMinMax['Прошлая капитализация'].MAX)"
      name="Капитализация"
      :symbol="getCurrencyForRegion"
      :value="getCapitalization"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.capitalization"
    />

  </template>
</template>

<script lang="ts">
import DocumentProgressItem from '@/views/Document/modules/Body/modules/Progress/Item/index.vue';
import i18n from '@/plugins/i18n/vue-i18n';

export default defineComponent({
  name: 'DocumentProgress',
  components: { DocumentProgressItem },
  setup() {
    const store = useStore();

    return {

      getBeta: store.getters['documentStore/getBeta'],
      getDividends: store.getters['documentStore/getDividends'],
      getPE: store.getters['documentStore/getPE'],
      getEquityCapital: store.getters['documentStore/getEquityCapital'],
      getCapitalization: store.getters['documentStore/getCapitalization'],
      getRevenue: store.getters['documentStore/getRevenue'],

      getShareOfEquityInAssets: store.getters['documentStore/getShareOfEquityInAssets'],
      getReturnOnEquity: store.getters['documentStore/getReturnOnEquity'],

      getProfitLastYear: store.getters['documentStore/getProfitLastYear'],
      getMinMax: store.getters['documentStore/getMinMax'],
      getCurrentFinancialData: store.getters['documentStore/getCurrentFinancialData'],
      getCurrencyForRegion: store.getters['documentStore/getCurrencyForRegion'],

      i18n

    };
  },
});
</script>

<style scoped lang="scss"></style>
