import { routeDocumentTypes } from '@/helpers/route.helper';
import { IDocumentState, vanilaIndicatorsChartState } from '@/store/modules/Document/state';
import { DynamicObject } from '@/interfaces';
import { useI18nMsg } from '@/use/useI18nMsg';
import { utils } from '@/services/utils';
import { useApiFinplan } from '@/use/api/useApiFinplan';

interface IConfig {
  type: string;
  id: string;
  region: string;
}

export const actions = {
  async initData(
    { state, commit }: { state: IDocumentState; commit: any },
    config: IConfig,
  ): Promise<boolean> {
    const api = useApiFinplan();

    try {
      if (config.type === routeDocumentTypes.stock) {
        const response = await api.getStock(config.region, config.id);

        const nameSectorResult = await response.data!.RADAR_DATA.PROPS
        const test = await response.data
        let nameSector:string = ''

        if(nameSectorResult.PROP_SEKTOR) {
          nameSector = nameSectorResult.PROP_SEKTOR
        } else {
          nameSector = nameSectorResult.SECTOR
        }


        // @ts-ignore
        //const nameSector = await response.data!.RADAR_DATA.PROPS.PROP_SEKTOR || await response.data!.RADAR_DATA.PROPS.SEKTOR
        let industriesProfit = null
        debugger
        if(config.region === 'USA') {
          let industriesProfit = await api.getSectorsList(1, 10000000)

          //@ts-ignore
          const findIndustriesProfit = industriesProfit.data?.ITEMS?.find(s => s.NAME === nameSector)
          // @ts-ignore
          state.data = response.data;
          state.isMiddleIndicatorsSector = findIndustriesProfit

          const dataIndustriesProfit = []

          for (let period in findIndustriesProfit['FIN_DATA_FULL_PERIODS']) {
            // @ts-ignore
            dataIndustriesProfit.push(findIndustriesProfit)
          }
        } else {
          let industriesProfit = await api.getIndustriesList(1, 10000000)
          //@ts-ignore
          const findIndustriesProfit = industriesProfit.data?.ITEMS?.find(s => s.NAME === nameSector)
          // @ts-ignore
          state.data = response.data;
          state.isMiddleIndicatorsSector = findIndustriesProfit

          const dataIndustriesProfit = []

          for (let period in findIndustriesProfit['FIN_DATA_FULL_PERIODS']) {
            // @ts-ignore
            dataIndustriesProfit.push(findIndustriesProfit)
          }
        }
      } else if (config.type === routeDocumentTypes.bond) {
        const response = await api.getBond(config.region, config.id);
        // @ts-ignore
        state.data = response.data;
      } else if (config.type === routeDocumentTypes.etf) {
        const response = await api.getETF(config.region, config.id);
        // @ts-ignore
        state.data = response.data;
      } else {
        commit('resetState');
        return false;
      }

      let response = await api.getFinancialData(config.region, config.id);
      // console.log(state.data);
      // @ts-ignore
      state.financialData = response.data;

      response = await api.getCompanyDescription(
        config.region,
        state.data?.RADAR_DATA.PROPS.EMITENT_ID,
      );
      // @ts-ignore
      state.emitentData = response.data;
      state.region = config.region;
      state.type = config.type;
      state.id = config.id;

      return true;
    } catch (e) {
      commit('resetState');
      // console.log(e);
      return false;
    }
  },

  initIndicatorsChartLocale({ state }: { state: IDocumentState }): void {
    state.indicatorsChart.quotes.name = useI18nMsg().page.document.quotes;
    state.indicatorsChart.actives.name = useI18nMsg().page.document.actives;
    state.indicatorsChart.averageProfit.name = useI18nMsg().page.document.averageProfit;
    state.indicatorsChart.currentAssets.name = useI18nMsg().page.document.currentAssets;
    state.indicatorsChart.currentRevenue.name = useI18nMsg().page.document.currentRevenue;
    state.indicatorsChart.equity.name = useI18nMsg().page.document.equity;
    state.indicatorsChart.lastYearRevenue.name = useI18nMsg().page.document.lastYearRevenue;
    state.indicatorsChart.profit.name = useI18nMsg().page.document.profit;
    state.indicatorsChart.quarterlyProfit.name = useI18nMsg().page.document.quarterlyProfit;
    state.indicatorsChart.quarterlyRevenue.name = useI18nMsg().page.document.quarterlyRevenue;
    state.indicatorsChart.returnOnEquity.name = useI18nMsg().page.document.returnOnEquity;
    state.indicatorsChart.shareOfEquityInAssets.name = useI18nMsg().page.document.shareOfEquityInAssets;
    state.indicatorsChart.yearSlidingProfit.name = useI18nMsg().page.document.yearSlidingProfit;
    state.indicatorsChart.yearSlidingRevenue.name = useI18nMsg().page.document.yearSlidingRevenue;
    state.indicatorsChart.pe.name = 'P/E';
    state.indicatorsChart.pb.name = 'P/B';
    state.indicatorsChart.pEquity.name = 'P/Equity';
    state.indicatorsChart.pSale.name = 'P/Sale';
  },

  initIndicatorsChart({ state, dispatch }: { state: IDocumentState; dispatch: any }): boolean {
    try {
      const monthCandleData: DynamicObject[] = Object.values(state.data?.GRAPH_CANDLE_DATA.M);
      const finData = new Map<string, any>(Object.entries(state.financialData?.data).reverse());

      finData.forEach((item: DynamicObject, idx) => {
        if (item) {
          if (state.currentTableProp === 'year' && Number(item.periodVal) !== 4) {
            return;
          }

          // @ts-ignore
          const yearSlidingRevenueCalcPercentMiddleProfit = (Number(item?.yearSlidingRevenue) / Math.floor(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].yearSlidingRevenue)) * 100
          // @ts-ignore
          const yearSlidingProfitCalcPercentMiddleProfit = (Number(item?.yearSlidingProfit) / Math.floor(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].yearSlidingProfit)) * 100
          // @ts-ignore
          const activesProfitCalcPercentMiddleProfit = (Number(item?.actives) / Math.floor(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].actives)) * 100

          // @ts-ignore
          state.indicatorsChart.yearSlidingRevenue.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].yearSlidingRevenue) || 0);
          // @ts-ignore
          state.indicatorsChart.yearSlidingRevenue.middleSectorIndicatorsPercent.push(yearSlidingRevenueCalcPercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.yearSlidingProfit.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].yearSlidingProfit) || 0);
          // @ts-ignore
          state.indicatorsChart.yearSlidingProfit.middleSectorIndicatorsPercent.push(yearSlidingProfitCalcPercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.actives.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector['FIN_DATA_FULL_PERIODS'][idx].actives) || 0);
          // @ts-ignore
          state.indicatorsChart.actives.middleSectorIndicatorsPercent.push(activesProfitCalcPercentMiddleProfit.toFixed(2))

          state.indicatorsChart.actives.data.push(Number(item?.actives) || 0);
          state.indicatorsChart.averageProfit.data.push(Number(item?.averageProfit) || 0);
          state.indicatorsChart.currentAssets.data.push(Number(item?.currentAssets) || 0);
          state.indicatorsChart.currentRevenue.data.push(Number(item?.currentRevenue) || 0);
          state.indicatorsChart.equity.data.push(Number(item?.equity) || 0);
          state.indicatorsChart.lastYearRevenue.data.push(Number(item?.lastYearRevenue) || 0);
          state.indicatorsChart.profit.data.push(Number(item?.profit) || 0);
          state.indicatorsChart.quarterlyProfit.data.push(Number(item?.quarterlyProfit) || 0);
          state.indicatorsChart.quarterlyRevenue.data.push(Number(item?.quarterlyRevenue) || 0);
          state.indicatorsChart.returnOnEquity.data.push(Number(item?.returnOnEquity) || 0);
          state.indicatorsChart.shareOfEquityInAssets.data.push(Number(item?.shareOfEquityInAssets) || 0);
          state.indicatorsChart.yearSlidingProfit.data.push(Number(item?.yearSlidingProfit) || 0);
          state.indicatorsChart.yearSlidingRevenue.data.push(Number(item?.yearSlidingRevenue) || 0);
          state.indicatorsChart.capitalization.data.push(Number(item?.capitalization) || 0);
          state.indicatorsChart.halfyearRevenue.data.push(Number(item?.halfyearRevenue) || 0);
          state.indicatorsChart.halfyearProfit.data.push(Number(item?.halfyearProfit) || 0);
          state.indicatorsChart.pe.data.push(Number(item?.PE) || 0);
          state.indicatorsChart.pb.data.push(Number(item?.PB) || 0);
          state.indicatorsChart.pEquity.data.push(Number(item?.PEquity) || 0);
          state.indicatorsChart.pSale.data.push(Number(item?.PSale) || 0);

        }
      });

      monthCandleData.forEach((item: DynamicObject) => {
        const month = Number(new Date(item.UF_DATE_TO).getMonth() + 1);

        if (state.currentTableProp === 'year' && month === 12) {
          state.indicatorsChart.quotes.data.push(Number(item.UF_CLOSE));
          state.indicatorsChartCategories.push(new Date(item.UF_DATE_TO).getFullYear());
        } else if (state.currentTableProp === 'quarter' && month % 3 === 1) {
          state.indicatorsChartQuarter.push(`${utils.getQuarterByMonth(month)}кв.`);
          state.indicatorsChart.quotes.data.push(Number(item.UF_CLOSE));
          state.indicatorsChartCategories.push(new Date(item.UF_DATE_TO).getFullYear());
        }
      });

      // if (state.currentTableProp === 'year') {indicatorsChart
      let catLength = state.indicatorsChartCategories.length;
      const indicLength = state.indicatorsChart.actives.data.length;

      if (catLength < indicLength) {
        state.indicatorsChart.quotes.data.push(
          Number(monthCandleData[monthCandleData.length - 1].UF_CLOSE),
        );
        state.indicatorsChartCategories.push(
          new Date(monthCandleData[monthCandleData.length - 1].UF_DATE_TO).getFullYear(),
        );
      } else if (catLength > indicLength) {
        let modify_categories: any = []
        let modify_values: any = []
        let defCat: any = null
        for (let i = indicLength; i < catLength; i++) {

          defCat = catLength - indicLength
          modify_categories = [...state.indicatorsChartCategories]
          modify_values = JSON.parse(JSON.stringify(state.indicatorsChart))

          /*for (let key in modify_values) {
            modify_values[key].data.splice(0, defCat)
          }*/

          state.indicatorsChart = {...modify_values}

          /*state.indicatorsChart.actives.data.push(0);
          state.indicatorsChart.averageProfit.data.push(0);
          state.indicatorsChart.currentAssets.data.push(0);
          state.indicatorsChart.currentRevenue.data.push(0);
          state.indicatorsChart.equity.data.push(0);
          state.indicatorsChart.lastYearRevenue.data.push(0);
          state.indicatorsChart.profit.data.push(0);
          state.indicatorsChart.quarterlyProfit.data.push(0);
          state.indicatorsChart.quarterlyRevenue.data.push(0);
          state.indicatorsChart.returnOnEquity.data.push(0);
          state.indicatorsChart.shareOfEquityInAssets.data.push(0);
          state.indicatorsChart.yearSlidingProfit.data.push(0);
          state.indicatorsChart.yearSlidingRevenue.data.push(0);
          state.indicatorsChart.pe.data.push(0);
          state.indicatorsChart.pb.data.push(0);
          state.indicatorsChart.pEquity.data.push(0);
          state.indicatorsChart.pSale.data.push(0);
          state.indicatorsChart.capitalization.data.push(0);
          state.indicatorsChart.halfyearProfit.data.push(0);
          state.indicatorsChart.halfyearRevenue.data.push(0);*/
        }

        const arr_categories = modify_categories.splice(0, defCat)

        // state.indicatorsChartCategories.push(modify_categories)
        state.indicatorsChartCategories = []
        state.indicatorsChartCategories.push(...modify_categories)
      }

      if (!state.indicatorsChartLocaleInit) {
        dispatch('initIndicatorsChartLocale');
        state.indicatorsChartLocaleInit = true;
      }

      return true;
    } catch (e) {
      //console.error(e);
      return false;
    }
  },

  resetIndicatorsChartToDefault({
      state,
      dispatch,
      commit,
    }: {
    state: IDocumentState;
    dispatch: any;
    commit: any;
  }): boolean {
    commit('resetIndicatorsChart');
    state.indicatorsChart = vanilaIndicatorsChartState();
    dispatch('initIndicatorsChart');
    return true;
  },
};
