import { DynamicObject } from '@/interfaces';
import {
  IDocumentState,
  IIndicatorsChart,
  ReportBalance, ReportCashFlow,
  ReportProfitLoss
} from '@/store/modules/Document/state';

export const getters = {
  getData: (state: IDocumentState): DynamicObject | null => state.data,
  getSector: (state: IDocumentState): DynamicObject | null => state.sector,
  getType: (state: IDocumentState): string | null => state.type,
  getRegion: (state: IDocumentState): string | null => state.region,
  getId: (state: IDocumentState): string | null => state.id,
  getName: (state: IDocumentState): string | null =>
    state.data?.RADAR_DATA.NAME || state.data?.RADAR_DATA.COMPANY.NAME || '???',
  getIndexes: (state: IDocumentState): string[] | null => {
    const indexes: string[] = [];

    state.data?.RADAR_DATA.PROPS.PROP_MSCI === 'Да' && indexes.push('MSCI');
    state.data?.RADAR_DATA.PROPS.PROP_MMVB === 'Да' && indexes.push('ММВБ');

    return indexes;
  },
  getCandle: (state: IDocumentState): DynamicObject | null =>
    state.data?.GRAPH_CANDLE_DATA?.M || null,
  getBeta: (state: IDocumentState): number | null => {
    const betta = state.data?.RADAR_DATA.PROPS.BETTA;
    if (betta) {
      return Number(betta);
    }
    return null;
  },
  getPE: (state: IDocumentState): number | null => {
    const pe = state.data?.RADAR_DATA?.DYNAM.PE;
    if (pe) {
      return Number(pe);
    }
    return null;
  },
  getPB: (state: IDocumentState): number | null => {
    const pb = state.data?.MIN_MAX.PB;
    if (pb) {
      return Number(pb);
    }
    return null;
  },
  getProfit: (state: IDocumentState): number | null => {
    const profit = state.data?.RADAR_DATA?.DYNAM['Прибыль'];
    if (profit) {
      return Number(state.data?.RADAR_DATA?.DYNAM['Прибыль']);
    }
    return null;
  },
  getDividends: (state: IDocumentState): number | null =>
    Number(state.data?.RADAR_DATA.DYNAM['Дивиденды %']),
  getEquityCapital: (state: IDocumentState): number | null =>
    Number(Number(state.data?.RADAR_DATA.DYNAM['Собственный капитал']).toFixed(0)),
  getCapitalization: (state: IDocumentState): number | null =>
    Number(state.data?.RADAR_DATA.PROPS.ISSUECAPITALIZATION),
  getRevenue: (state: IDocumentState): number | null => {
    const lastPeriod = state.data?.['RADAR_DATA']['LAST_PERIOD_KVARTAL']
    return state.financialData?.data[lastPeriod].yearSlidingRevenue
  },
  getProfitLastYear: (state: IDocumentState): number | null => {
    const lastPeriod = state.data?.['RADAR_DATA']['LAST_PERIOD_KVARTAL']
    return state.financialData?.data[lastPeriod].yearSlidingProfit
    //return Number(state.data?.MIN_MAX?.['Прибыль за год (скользящая)']?.MAX),
  },
  getShareOfEquityInAssets: (state: IDocumentState): number | null => {
    const lastPeriod = state.data?.['RADAR_DATA']['LAST_PERIOD_KVARTAL']
    return state.financialData?.data[lastPeriod].shareOfEquityInAssets
  },
  getReturnOnEquity: (state: IDocumentState): number | null => {
    const lastPeriod = state.data?.['RADAR_DATA']['LAST_PERIOD_KVARTAL']
    return state.financialData?.data[lastPeriod].returnOnEquity
  },
  getMinMax: (state: IDocumentState): DynamicObject | null => state.data?.MIN_MAX,
  getCurrentFinancialData: (state: IDocumentState): DynamicObject | null => {
    if (state.financialData?.data) {
      const lastQuarter: DynamicObject[] = Object.values(state.financialData?.data);

      return lastQuarter[lastQuarter.length - 1];
    }
    return null;
  },
  getEmitentData: (state: IDocumentState): DynamicObject | null => state.emitentData,
  getEmitentData2: (state: IDocumentState): DynamicObject | null => state.emitentData2,
  getEmitentData3: (state: IDocumentState): DynamicObject | null => state.emitentData3,
  getSecId: (state: IDocumentState): string | null => state.data?.RADAR_DATA.PROPS.ISIN,

  getIndicatorsChart: (state: IDocumentState): IIndicatorsChart => state.indicatorsChart,
  getIndicatorsReportBalanceChart: (state: IDocumentState): ReportBalance => state.indicatorsReportBalance,
  getIndicatorsReportProfitLossChart: (state: IDocumentState): ReportProfitLoss => state.indicatorsReportProfitLoss,
  getIndicatorsReportCashFlowChart: (state: IDocumentState): ReportCashFlow => state.indicatorsReportCashFlow,

  getIsViewedMiddleIndicators: (state: IDocumentState): boolean => state.viewMiddleProfit,
  getIsViewedMiddleIndicatorsPercent: (state: IDocumentState): boolean => state.viewMiddleProfitPercent,
  getIsViewedComparisonIndicators: (state: IDocumentState): boolean => state.viewMiddleComparison,
  getIsViewedComparisonPercentIndicators: (state: IDocumentState): boolean => state.viewMiddleComparisonPercent,

  getIndicatorsChartCategoriesCustom: (state: IDocumentState): number[] | string[] => {
    if (state.currentTableProp !== 'year') {
      const result: string[] = [];
      for (let i = 0; i < state.allCategoriesChartForTable.length; i++) {
        const {y, kv} = state.allCategoriesChartForTable[i]

        result.push(`${kv} ${y}`);
      }

      return result;
    }

    return state.indicatorsChartCategories.reverse();
  },

  getIndicatorsChartCategoriesReport: (state: IDocumentState): number[] | string[] => {
    if (state.currentTableProp !== 'year') {
      const result: string[] = [];

      for (let i = 0; i < state.allCategoriesChartForTableReport.length; i++) {
        const {y, kv} = state.allCategoriesChartForTableReport[i]
        result.push(`${kv} ${y}`);
      }

      return result;
    }

    return state.indicatorsChartCategories.reverse();
  },

  getIndicatorsChartCategories: (state: IDocumentState): number[] | string[] => {
    if (state.currentTableProp !== 'year') {
      const result: string[] = [];
      for (let i = 0; i < state.indicatorsChartCategories.length; i++) {
        const year = state.indicatorsChartCategories[i];
        const quarter = state.indicatorsChartQuarter[i];

        result.push(`${quarter} ${year}`);
      }

      return result;
    }

    return state.indicatorsChartCategories;
  },
  getIndicatorsQuarter: (state: IDocumentState): string[] => state.indicatorsChartQuarter,
  getCurrentTableProp: (state: IDocumentState): string => state.currentTableProp,
  getCalcMethod: (state: IDocumentState): string => {
    if(String(state.data?.RADAR_DATA?.PROPS?.PROP_DIVIDEND_DESCRIPTION) !== 'undefined') {
      return  String(state.data?.RADAR_DATA?.PROPS?.PROP_DIVIDEND_DESCRIPTION)
    } else {
      return ''
    }
  },
  getCurrencyForRegion: (state: IDocumentState): string => {
    return (String(state.region)) === 'RUS' ? '₽' : '$'
  },
  getAllState: (state: IDocumentState) => state,
  getCurrentComparison: (state: IDocumentState) => state.currentComparison
};
