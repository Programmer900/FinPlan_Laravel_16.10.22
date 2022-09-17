  <!--<template v-if="getMinMax">-->
  <template>
    <DocumentProgressUSAItem
      color="#2A8634"
      :line-max="Number(getRevenue)"
      name_="Выручка за год (макс.)"
      name="Выручка скользящая за год"
      :value="getRevenue"
      :symbol="getCurrencyForRegion"
      :typeIndicator="'capitalization'"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.averageRevenue"
    />
    <DocumentProgressUSAItem
      color="#FEC006"
      :line-max="Number(getProfitLastYear)"
      name_="Прибыль"
      name="Прибыль скользящая за год"
      :value_="getCurrentFinancialData.profit"
      :value="getProfitLastYear"
      :symbol="getCurrencyForRegion"
      :typeIndicator="'capitalization'"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.averageProfit"
    />
    <DocumentProgressUSAItem
      v-if="getReturnOnEquity"
      color="#FEC006"
      :line-max="100"
      name="Рентабельность СК"
      symbol="%"
      :value="getReturnOnEquity"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.returnOnEquity"
    />
    <DocumentProgressUSAItem
      v-if="getShareOfEquityInAssets"
      color="#FEC006"
      :line-max="100"
      name="Доля СК"
      symbol="%"
      :value="getShareOfEquityInAssets"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.shareOfEquityInAssets"
    />
    <!--<DocumentProgressUSAItem
      v-if="getBeta"
      color="#FEC006"
      :line-max="Number(getMinMax.BETTA.MAX)"
      name="Бета"
      :value="getBeta"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.betta"
    />-->
    <DocumentProgressUSAItem
      v-if="getCurrentFinancialData.capitalization"
      color="#FEC006"
      :line-max="Number(100)"
      name="Капитализация, $"
      :value="getCurrentFinancialData.capitalization"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.capitalization"
    />
    <DocumentProgressUSAItem
      v-if="getPE"
      color="#FEC006"
      :line-max="100"
      name="P/E"
      symbol=""
      :value="getPE"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.pe"
    />
    <DocumentProgressUSAItem
      v-if="getDividends"
      color="#FEC006"
      :line-max="100"
      name="Дивиденды"
      symbol=" %"
      :value="getDividends"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.dividends"
    />

    <DocumentProgressUSAItem
      v-if="getCapitalization"
      color="#2A8634"
      :line-max="Number(getCapitalization)"
      name="Капитализация"
      :symbol="getCurrencyForRegion"
      :value="getCapitalization"
      :annotation="i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.capitalization"
    />

  </template>

<script lang="ts">
import DocumentProgressUSAItem from '@/views/Document/modules/Body/modules/ProgressUSA/Item/index.vue';
import i18n from '@/plugins/i18n/vue-i18n';

export default defineComponent({
  name: 'DocumentProgress',
  components: { DocumentProgressUSAItem },
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
