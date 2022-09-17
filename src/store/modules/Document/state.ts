import { DynamicObject } from '@/interfaces';
import i18n from '@/plugins/i18n/vue-i18n';

export interface IIndicatorsChartItem {
  name: string;
  data: number[];
  middleSectorIndicators?: number[],
  middleSectorIndicatorsPercent?: number[],
  isComparisonActive?: false,
  comparisonIndicators?: number[],
  comparisonIndicatorsPercent?: number[],
  type: string;
  color: string;
  visible: boolean;
  hideLabel?: boolean;
  permanent?: boolean;
  yAxis?: number;
  alert?: boolean;
  hideInTable?: boolean;
  annotation?: string
}
export interface ReportBalance {
  fixedAssets: IIndicatorsChartItem;
  otherThanFixedNoncurrentAssets: IIndicatorsChartItem;
  noncurrentAssets: IIndicatorsChartItem;
  currentAssets: IIndicatorsChartItem;
  assets: IIndicatorsChartItem;
  equity: IIndicatorsChartItem;
  noncurrentLiabilities: IIndicatorsChartItem;
  currentLiabilities: IIndicatorsChartItem;
  liabilities: IIndicatorsChartItem;
  redeemableNoncontrollingInterest: IIndicatorsChartItem;
  liabilitiesAndEquity: IIndicatorsChartItem;
  equityAttributableToParent: IIndicatorsChartItem;
  equityAttributableToNoncontrollingInterest: IIndicatorsChartItem;
}
export interface ReportProfitLoss {
  revenues: IIndicatorsChartItem;
  costOfRevenue: IIndicatorsChartItem;
  grossProfit: IIndicatorsChartItem;
  operatingExpenses: IIndicatorsChartItem;
  operatingIncomeLoss: IIndicatorsChartItem;
  interestExpenseOperating: IIndicatorsChartItem;
  incomeLossFromContinuingOperationsBeforeTax: IIndicatorsChartItem;
  netIncomeLoss: IIndicatorsChartItem;
  incomeLossFromContinuingOperationsAfterTax: IIndicatorsChartItem;
  netIncomeLossAttributableToNoncontrollingInterest: IIndicatorsChartItem;
  netIncomeLossAvailableToCommonStockholdersBasic: IIndicatorsChartItem;
  participatingSecuritiesDistributedAndUndistributedEarningsLossBasic: IIndicatorsChartItem;
  dilutedEarningsPerShare: IIndicatorsChartItem;
  basicEarningsPerShare: IIndicatorsChartItem;
  otherComprehensiveIncomeLossAttributableToParent: IIndicatorsChartItem;
  comprehensiveIncomeLossAttributableToNoncontrollingInterest: IIndicatorsChartItem;
  comprehensiveIncomeLoss: IIndicatorsChartItem;
  comprehensiveIncomeLossAttributableToParent: IIndicatorsChartItem;
}
export interface ReportCashFlow {
  netCashFlowFromOperatingActivitiesContinuing: IIndicatorsChartItem;
  netCashFlowFromInvestingActivitiesContinuing: IIndicatorsChartItem;
  netCashFlowFromFinancingActivitiesContinuing: IIndicatorsChartItem;
  netCashFlow: IIndicatorsChartItem;
}
export interface IIndicatorsChart {
  quotes: IIndicatorsChartItem;
  actives: IIndicatorsChartItem;
  averageProfit: IIndicatorsChartItem;
  lastYearRevenue: IIndicatorsChartItem;
  currentAssets: IIndicatorsChartItem;
  currentRevenue: IIndicatorsChartItem;
  equity: IIndicatorsChartItem;
  profit: IIndicatorsChartItem;
  quarterlyProfit: IIndicatorsChartItem;
  quarterlyRevenue: IIndicatorsChartItem;
  returnOnEquity: IIndicatorsChartItem;
  shareOfEquityInAssets: IIndicatorsChartItem;
  yearSlidingProfit: IIndicatorsChartItem;
  yearSlidingRevenue: IIndicatorsChartItem;
  ebitda: IIndicatorsChartItem;
  debtebitda: IIndicatorsChartItem;
  evebitda: IIndicatorsChartItem;
  assetGrowthRate: IIndicatorsChartItem;
  profitGrowRate: IIndicatorsChartItem;
  revenueGrowRate: IIndicatorsChartItem;
  pe: IIndicatorsChartItem;
  pb: IIndicatorsChartItem;
  pEquity: IIndicatorsChartItem;
  pSale: IIndicatorsChartItem;
  peg: IIndicatorsChartItem;
  halfyearProfit: IIndicatorsChartItem;
  halfyearRevenue: IIndicatorsChartItem;
  capitalization: IIndicatorsChartItem;
}
export interface IDocumentState {
  data: DynamicObject | null;

  financialData: DynamicObject | null;
  reportBalanceData: DynamicObject | null;
  reportProfitLossData: DynamicObject | null;
  reportCashFlow: DynamicObject | null;

  emitentData: DynamicObject | null;
  currentComparison: DynamicObject | null;
  type: string | null;
  region: string | null;
  id: string | null;

  indicatorsChart: IIndicatorsChart;
  indicatorsReportBalance: ReportBalance;
  indicatorsReportProfitLoss: ReportProfitLoss;
  indicatorsReportCashFlow: ReportCashFlow;

  indicatorsChartCategories: number[];
  indicatorsChartQuarter: string[];

  indicatorsChartYearForTable: number[];
  indicatorsChartQuarterForTable: string[];
  allCategoriesChartForTable: [{y: number, kv: string}];
  allCategoriesChartForTableReport: [{y: number, kv: string}];

  indicatorsChartLocaleInit: boolean;
  currentTableProp: string;

  viewMiddleProfit: boolean;
  viewMiddleProfitPercent: boolean;
  viewMiddleComparison: boolean;
  viewMiddleComparisonPercent: boolean;

  isMiddleIndicatorsSector?: []
  isMiddleIndicatorsComparison?: []
}

export const vanilaIndicatorsChartReportBalanceState = (): ReportBalance => ({
  fixedAssets: {
    name: i18n.global.messages.ru.page.document.fixedAssets,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.fixedAssets
  },
  otherThanFixedNoncurrentAssets: {
    name: i18n.global.messages.ru.page.document.otherThanFixedNoncurrentAssets,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.otherThanFixedNoncurrentAssets
  },
  noncurrentAssets: {
    name: i18n.global.messages.ru.page.document.noncurrentAssets,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.noncurrentAssets
  },
  currentAssets: {
    name: i18n.global.messages.ru.page.document.currentAssets,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.currentAssets
  },
  assets: {
    name: i18n.global.messages.ru.page.document.assets,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.assets
  },
  equity: {
    name: i18n.global.messages.ru.page.document.equity,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.equity
  },
  noncurrentLiabilities: {
    name: i18n.global.messages.ru.page.document.noncurrentLiabilities,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.noncurrentLiabilities
  },
  currentLiabilities: {
    name: i18n.global.messages.ru.page.document.currentLiabilities,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.currentLiabilities
  },
  liabilities: {
    name: i18n.global.messages.ru.page.document.liabilities,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.liabilities
  },
  redeemableNoncontrollingInterest: {
    name: i18n.global.messages.ru.page.document.redeemableNoncontrollingInterest,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.redeemableNoncontrollingInterest
  },
  liabilitiesAndEquity: {
    name: i18n.global.messages.ru.page.document.liabilitiesAndEquity,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.liabilitiesAndEquity
  },
  equityAttributableToParent: {
    name: i18n.global.messages.ru.page.document.equityAttributableToParent,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.equityAttributableToParent
  },
  equityAttributableToNoncontrollingInterest: {
    name: i18n.global.messages.ru.page.document.equityAttributableToNoncontrollingInterest,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.equityAttributableToNoncontrollingInterest
  },
});
export const vanilaIndicatorsChartReportProfitLossState = (): ReportProfitLoss => ({
  revenues: {
    name: i18n.global.messages.ru.page.document.revenues,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.revenues
  },
  costOfRevenue: {
    name: i18n.global.messages.ru.page.document.costOfRevenue,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.costOfRevenue
  },
  grossProfit: {
    name: i18n.global.messages.ru.page.document.grossProfit,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.grossProfit
  },
  operatingExpenses: {
    name: i18n.global.messages.ru.page.document.operatingExpenses,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.operatingExpenses
  },
  operatingIncomeLoss: {
    name: i18n.global.messages.ru.page.document.operatingIncomeLoss,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.operatingIncomeLoss
  },
  interestExpenseOperating: {
    name: i18n.global.messages.ru.page.document.interestExpenseOperating,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.interestExpenseOperating
  },
  incomeLossFromContinuingOperationsBeforeTax: {
    name: i18n.global.messages.ru.page.document.incomeLossFromContinuingOperationsBeforeTax,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.incomeLossFromContinuingOperationsBeforeTax
  },
  netIncomeLoss: {
    name: i18n.global.messages.ru.page.document.netIncomeLoss,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netIncomeLoss
  },
  incomeLossFromContinuingOperationsAfterTax: {
    name: i18n.global.messages.ru.page.document.incomeLossFromContinuingOperationsAfterTax,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.incomeLossFromContinuingOperationsAfterTax
  },
  netIncomeLossAttributableToNoncontrollingInterest: {
    name: i18n.global.messages.ru.page.document.netIncomeLossAttributableToNoncontrollingInterest,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netIncomeLossAttributableToNoncontrollingInterest
  },
  netIncomeLossAvailableToCommonStockholdersBasic: {
    name: i18n.global.messages.ru.page.document.netIncomeLossAvailableToCommonStockholdersBasic,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netIncomeLossAvailableToCommonStockholdersBasic
  },
  participatingSecuritiesDistributedAndUndistributedEarningsLossBasic: {
    name: i18n.global.messages.ru.page.document.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic
  },
  dilutedEarningsPerShare: {
    name: i18n.global.messages.ru.page.document.dilutedEarningsPerShare,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.dilutedEarningsPerShare
  },
  basicEarningsPerShare: {
    name: i18n.global.messages.ru.page.document.basicEarningsPerShare,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.basicEarningsPerShare
  },
  otherComprehensiveIncomeLossAttributableToParent: {
    name: i18n.global.messages.ru.page.document.otherComprehensiveIncomeLossAttributableToParent,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.otherComprehensiveIncomeLossAttributableToParent
  },
  comprehensiveIncomeLossAttributableToNoncontrollingInterest: {
    name: i18n.global.messages.ru.page.document.comprehensiveIncomeLossAttributableToNoncontrollingInterest,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.comprehensiveIncomeLossAttributableToNoncontrollingInterest
  },
  comprehensiveIncomeLoss: {
    name: i18n.global.messages.ru.page.document.comprehensiveIncomeLoss,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.comprehensiveIncomeLoss
  },
  comprehensiveIncomeLossAttributableToParent: {
    name: i18n.global.messages.ru.page.document.comprehensiveIncomeLossAttributableToParent,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.comprehensiveIncomeLossAttributableToParent
  }
});
export const vanilaIndicatorsChartReportCashFlowState = (): ReportCashFlow => ({
  netCashFlowFromOperatingActivitiesContinuing: {
    name: i18n.global.messages.ru.page.document.netCashFlowFromOperatingActivitiesContinuing,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netCashFlowFromOperatingActivitiesContinuing
  },
  netCashFlowFromInvestingActivitiesContinuing: {
    name: i18n.global.messages.ru.page.document.netCashFlowFromInvestingActivitiesContinuing,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netCashFlowFromInvestingActivitiesContinuing
  },
  netCashFlowFromFinancingActivitiesContinuing: {
    name: i18n.global.messages.ru.page.document.netCashFlowFromFinancingActivitiesContinuing,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netCashFlowFromFinancingActivitiesContinuing
  },
  netCashFlow: {
    name: i18n.global.messages.ru.page.document.netCashFlow,
    data: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.netCashFlow

  }
});
export const vanilaIndicatorsChartState = (): IIndicatorsChart => ({
  yearSlidingRevenue: {
    name: i18n.global.messages.ru.page.document.yearSlidingRevenue,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#48ac99',
    visible: true,
    alert: true,
    hideLabel: false,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription.averageRevenue
  },
  yearSlidingProfit: {
    name: i18n.global.messages.ru.page.document.yearSlidingProfit,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#36173d',
    visible: true,
    hideLabel: false,
    alert: true,
  },
  actives: {
    name: i18n.global.messages.ru.page.document.actives,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#97b3de',
    visible: false,
    hideLabel: false,
    alert: true,
  },
  averageProfit: {
    name: i18n.global.messages.ru.page.document.averageProfit,
    data: [],
    type: 'column',
    color: '#455f85',
    visible: false,
    alert: false,
    hideInTable: true,
  },
  equity: {
    name: i18n.global.messages.ru.page.document.equity,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#2a8634',
    visible: false,
    hideLabel: false,
    alert: true,
  },
  quotes: {
    name: i18n.global.messages.ru.page.document.quotes,
    data: [],
    type: 'line',
    color: '#138ec4',
    visible: true,
    permanent: true,
    yAxis: 1,
    hideInTable: true,
    alert: true,
  },
  currentRevenue: {
    name: i18n.global.messages.ru.page.document.currentRevenue,
    data: [],
    type: 'column',
    color: '#F27362',
    visible: false,
    alert: true,
  },
  lastYearRevenue: {
    name: i18n.global.messages.ru.page.document.lastYearRevenue,
    data: [],
    type: 'column',
    color: '#AC5BBE',
    visible: false,
    alert: true,
  },
  profit: {
    name: i18n.global.messages.ru.page.document.profit,
    data: [],
    type: 'column',
    color: '#71ad52',
    visible: false,
    alert: true,
  },
  quarterlyRevenue: {
    name: i18n.global.messages.ru.page.document.quarterlyRevenue,
    data: [],
    type: 'column',
    color: '#E1953C',
    visible: false,
    alert: true,
  },
  quarterlyProfit: {
    name: i18n.global.messages.ru.page.document.quarterlyProfit,
    data: [],
    type: 'column',
    color: '#F5DD50',
    visible: false,
    alert: true,
  },
  halfyearRevenue: {
    name: 'Выручка полугодовая',
    data: [],
    type: 'column',
    color: '#7eb971',
    visible: false,
    alert: true,
  },
  halfyearProfit: {
    name: 'Прибыль полугодовая',
    data: [],
    type: 'column',
    color: '#4c00be',
    visible: false,
    alert: true,
  },
  currentAssets: {
    name: i18n.global.messages.ru.page.document.currentAssets,
    data: [],
    type: 'column',
    color: '#fec006',
    visible: false,
    alert: true,
  },
  returnOnEquity: {
    name: i18n.global.messages.ru.page.document.returnOnEquity,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#EFB068',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  shareOfEquityInAssets: {
    name: i18n.global.messages.ru.page.document.shareOfEquityInAssets,
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#ff4495',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  capitalization: {
    name: 'Прошлая капитализация',
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#44c7ff',
    visible: false,
    alert: true,
  },
  ebitda: {
    name: 'EBITDA',
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  revenueGrowRate: {
    name: 'Темп прироста выручки, %',
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  profitGrowRate: {
    name: 'Темп прироста прибыли, %',
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  assetGrowthRate: {
    name: 'Темп прироста активов, %',
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  debtebitda: {
    name: 'DEBT/EBITDA',
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  pe: {
    name: 'P/E',
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  pb: {
    name: 'P/B',
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#0004ff',
    visible: false,
    alert: true,
    hideLabel: true,
    annotation: i18n.global.messages[i18n.global.locale].companyIndicators.indicatorsDescription['P/B']
  },
  pEquity: {
    name: 'P/Equity',
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#a60000',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  pSale: {
    name: 'P/Sale',
    data: [],
    middleSectorIndicators: [],
    middleSectorIndicatorsPercent:[],
    comparisonIndicators: [],
    comparisonIndicatorsPercent: [],
    type: 'column',
    color: '#d5ea00',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  evebitda: {
    name: 'EV/EBITDA',
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
  peg: {
    name: 'PEG',
    data: [],
    type: 'column',
    color: '#44ff9b',
    visible: false,
    hideLabel: true,
    alert: true,
  },
});
export const vanilaState = (): IDocumentState => ({
  data: null,

  financialData: null,
  reportBalanceData: null,
  reportProfitLossData: null,
  reportCashFlowData: null,

  emitentData: null,
  currentComparison: null,
  type: null,
  region: null,
  id: null,

  indicatorsChart: vanilaIndicatorsChartState(),
  indicatorsReportBalance: vanilaIndicatorsChartReportBalanceState(),
  indicatorsReportProfitLoss: vanilaIndicatorsChartReportProfitLossState(),
  indicatorsReportCashFlow: vanilaIndicatorsChartReportCashFlowState(),

  indicatorsChartCategories: [],
  indicatorsChartQuarter: [],

  indicatorsChartYearForTable: [],
  indicatorsChartQuarterForTable: [],
  //@ts-ignore
  allCategoriesChartForTable: [],
  //@ts-ignore
  allCategoriesChartForTableReport: [],

  indicatorsChartLocaleInit: false,
  currentTableProp: 'year',

  viewMiddleProfit: false,
  viewMiddleProfitPercent: false,
  viewMiddleComparison: false,
  viewMiddleComparisonPercent: false,
});

export const state: IDocumentState = {
  ...vanilaState(),
};
