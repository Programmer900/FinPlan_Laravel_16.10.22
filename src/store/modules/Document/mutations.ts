import {
  IDocumentState,
  IIndicatorsChartItem,
  vanilaIndicatorsChartState,
  vanilaState,
} from '@/store/modules/Document/state';

export const mutations = {
  resetState: (state: IDocumentState): void => {
    state = vanilaState();
  },
  resetIndicatorsChart: (state: IDocumentState): void => {
    Object.values(state.indicatorsChart).forEach((item: IIndicatorsChartItem) => {
      item.data = [];
    });
    state.indicatorsChartCategories = [];
    state.indicatorsChartQuarter = [];

    state.indicatorsChartYearForTable = [];
    state.indicatorsChartQuarterForTable = [];
    //@ts-ignore
    state.allCategoriesChartForTable = [];
    //@ts-ignore
    state.allCategoriesChartForTableReport = [];
  },

  resetIndicatorsReportBalanceChart: (state: IDocumentState): void => {
    Object.values(state.indicatorsReportBalance).forEach((item: IIndicatorsChartItem) => {
      item.data = [];
    });
  },
  resetIndicatorsReportProfitLossChart: (state: IDocumentState): void => {
    Object.values(state.indicatorsReportProfitLoss).forEach((item: IIndicatorsChartItem) => {
      item.data = [];
    });
  },
  resetIndicatorsReportCashFlowChart: (state: IDocumentState): void => {
    Object.values(state.indicatorsReportCashFlow).forEach((item: IIndicatorsChartItem) => {
      item.data = [];
    });
  },


  resetCategories: (state: IDocumentState): void => {
    state.indicatorsChartCategories = []
  },
  reverseCategories: (state: IDocumentState): void => {
    state.indicatorsChartCategories.reverse()
  },


  resetQuotes: (state: IDocumentState): void => {
    state.indicatorsChart.quotes.data = []
  },
  reverseQuotes: (state: IDocumentState): void => {
    state.indicatorsChart.quotes.data.reverse()
  },
  resetTableProp: (state: IDocumentState): void => {
    state.currentTableProp = 'year';
  },
  changeCurrentTableProp: (state: IDocumentState, newValue: string): void => {
    if (state.currentTableProp !== newValue) {
      state.currentTableProp = newValue;
    }
  },
  resetSwitcherMiddleIndicators: (state: IDocumentState) => {
    state.viewMiddleProfitPercent = false
    state.viewMiddleProfit = false
  },

  changeViewedProfitIndicators: (state: IDocumentState, newValue: boolean): boolean => state.viewMiddleProfit = newValue,
  changeViewedProfitIndicatorsPercent: (state: IDocumentState, newValue: boolean): boolean => state.viewMiddleProfitPercent = newValue,
  changeViewedComparisonIndicators: (state: IDocumentState): boolean => state.viewMiddleComparison = true,
  changeViewedComparisonPercentIndicators: (state: IDocumentState, newValue: boolean): boolean => state.viewMiddleComparisonPercent = newValue,
  resetViewedComparisonPercentIndicators: (state: IDocumentState): boolean => state.viewMiddleComparisonPercent = false,
  clearViewedComparisonIndicators: (state: IDocumentState): boolean => state.viewMiddleComparison = false,
  setCurrentComparison: (state: IDocumentState, value) => state.currentComparison = value,
  clearCurrentComparison: (state: IDocumentState) => state.currentComparison = null,
  refreshComparisonStock: (state: IDocumentState) => state.isMiddleIndicatorsComparison = [],

  resetIndicatorsComparison: (state: IDocumentState): void => {
    /*Object.values(state.indicatorsChart).forEach((item: IIndicatorsChartItem) => {
      item.data = [];
    });
    state.indicatorsChartCategories = [];
    state.indicatorsChartQuarter = [];*/
  },
};
