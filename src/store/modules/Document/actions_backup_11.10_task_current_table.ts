import { routeDocumentTypes } from '@/helpers/route.helper';
import {
  IDocumentState,
  vanilaIndicatorsChartReportProfitLossState,
  vanilaIndicatorsChartReportBalanceState,
  vanilaIndicatorsChartState, vanilaIndicatorsChartReportCashFlowState,
} from '@/store/modules/Document/state';
import { DynamicObject } from '@/interfaces';
import { useI18nMsg } from '@/use/useI18nMsg';
import { utils } from '@/services/utils';
import { useApiFinplan } from '@/use/api/useApiFinplan';

interface IConfig {
  type: string;
  id: string;
  region: string;
}

interface IEmitent {
  id: string, label: string, code: string, region: string
}

const industryEnum =  {
  ['Телерадиовещание']: 'broadcasting',
  ['Промышленность']: 'industry',
  ["IT-услуги и консультации"] :  "it_services_and_consultations",
  ["Авиакомпании"]:  "airlines",
  ["Авиакосмическая и оборонная промышленность"]: "aerospace_and_defense_industry",
  ["Авиаперевозки и курьерские услуги"]: "air_freight_and_courier_services",
  ["Автотранспорт. запчасти и обслуживание - розница"]: "motor_transport_spare_parts_and_service_retail",
  ["Банки"]: "banks",
  ["Безалкогольные напитки"]: "soft_drinks",
  ["Биотехнологии и медицинские исследования"]: "biotechnology_and_medical_research",
  ["Бумажная упаковка"]: "paper_packaging",
  ["Бытовая техника. инструменты и товары для дома"]: "appliances_tools_and_household_goods",
  ["Бытовые товары"]: "household_goods",
  ["Вино-водочные заводы"]: "wine_and_vodka_factories",["Возобновляемые источники энергии - оборудование и услуги"]: "renewable_energy_sources_quipment_and_services",["Дисконтные магазины"]: "discount_stores",["Добыча полезных ископаемых и металлов"]: "extraction_of_minerals_and_metals",["Запчасти для легковых. грузовых автомобилей и мотоциклов"]: "spare_parts_for_cars_trucks_and_motorcycles",["Золото"]: "gold",["Игрушки и товары для детей"]: "toys_and_goods_for_children",["Инвестиционно-банковские и брокерские услуги"]: "investment_banking_and_brokerage_services",["Инвестиционные фонды жилой недвижимости"]: "residential_real_estate_investment_funds",["Инвестиционные фонды коммерческой недвижимости"]: "commercial_real_estate_investment_funds",["Инвестиционные фонды специализированной недвижимости"]: "investment_funds_for_specialized_real_estate",["Интегрированные коммуникационные услуги"]: "integrated_communication_services",["Интернет-услуги"]: "internet_services",["Испытательное оборудование для полупроводников"]: "semiconductor_test_equipment",["Казино и азартные игры"]: "casinos_and_gambling",["Компьютерные комплектующие"]: "computer_parts",["Компьютеры и электроника - розница"]: "computers_and_electronics_retail",["Контейнеры и небумажная тара"]: "containers_and_nonpaper_containers",["Лекарственные препараты"]: "medications",["Медицинские услуги"]: "medical_services",["Медицинские учреждения и услуги"]: "medical_institutions_and_services",["Медицинское оборудование. принадлежности и дистрибуция"]: "medical_equipment_accessories_and_distribution",["Многолинейные страховые компании и брокеры"]: "multiline_insurance_companies_and_brokers",["Нефтесервис и оборудование"]: "oilfield_services_and_equipment",["Нефть и газ - переработка и продажа"]: "oil_and_gas_processing_and_sales",["Обувь"]: "shoes",["Одежда и аксессуары"]: "clothes_and_accessories",["Одежда и аксессуары - розница"]: "clothing_and_accessories_retail",["Операторы финансового и товарного биржевого рынка"]: "financial_and_commodity_exchange_market_operators",["Организация развлечений"]: "organization_of_entertainment",["Отдых и развлечение"]: "recreation_and_entertainment",["Отели. мотели и круизные линии"]: "hotels_motels_cruise",["Перестрахование"]: "reinsurance",["Пивоварение"]: "brewing",["Пищевая промышленность"]: "food_industry",["Поиск. добыча нефти и газа"]: "search_production_of_oil_and_gas",["Полупроводники"]: "semiconductors",["Потребительская полиграфия"]: "consumer_printing",["Потребительское кредитование"]: "customer_credit",["Предметы личной гигиены"]: "personal_hygiene_items",["Программное обеспечение"]: "software",["Продажа лекарственных средств - розница"]: "sale_of_medicines-retail",["Производство легковых и грузовых автомобилей"]: "manufacture_of_cars_and_trucks",["Промышленное оборудование и оснастка"]: "industrial_equipment_and_tooling",["Промышленные конгломераты"]: "industrial_conglomerates",["Профессиональные информационные услуги"]: "professional_information_services",["Прочие специализированные товары - розница"]: "other_specialized_goods_retail",["Различные коммунальные услуги"]: "various_utilities",["Различные химикаты"]: "various_chemicals",["Реклама и маркетинг"]: "advertising_and_marketing",["Рестораны и бары"]: "restaurants_and_bars",["Розничная продажа и дистрибуция продуктов питания"]: "food_retail_and_distribution",["Рыбная и сельскохозяйственная продукция"]: "fish_and_agricultural_products",["Сельскохозяйственные химикаты"]: "agricultural_chemicals",["Службы по трудоустройству"]: "employment_services",["Современное медицинское оборудование и технологии"]: "modern_medical_equipment_and_technologies",["Средства связи и сети"]: "communications_and_networks",["Сталь"]: "steel",["Страхование жизни и здоровья"]: "life_and_health_insurance",["Страхование жизни и имущества от несчастных случаев"]: "life_and_property_insurance_against_accidents",["Строительные и инженерные услуги"]: "construction_and_engineering_services",["Строительство жилья"]: "housing_construction",["Стройматериалы"]: "building_materials",["Стройматериалы и арматура"]: "building_materials_and_fittings",["Табак"]: "tobacco",["Телефоны и мобильные устройства"]: "phones_and_mobile_devices",["Товарные химикаты"]: "commodity_chemicals",["Товары для дома"]: "household_products",["Товары для отдыха"]: "leisure_goods",["Товары и услуги для ремонта - розница"]: "repair_goods_and_services_retail",["Тяжелая техника и транспорт"]: "heavy_machinery_and_transport",["Универмаги"]: "stores",["Управление инвестициями и фонд-операторы"]: "investment_management_and_fund_operators",["Услуги беспроводной связи"]: "wireless_communication_services",["Услуги в сфере недвижимости"]: "real_estate_services",["Услуги наземных перевозок и логистика"]: "ground_transportation_services_and_logistics",["Услуги поддержки бизнеса"]: "business_support_services",["Услуги транспортировки нефти и газа"]: "oil_and_gas_transportation_services",["Химикаты специального назначения"]: "specialty_chemicals",["Экологические услуги и оборудование"]: "environmental_services_and_equipment",["Электрические детали и оборудование"]: "electrical_parts_and_equipment",["Электронное оборудование и запчасти"]: "electronic_equipment_and_spare_parts",["Электроэнергетика"]: "power_engineering"
}

export const actions = {
  async initData(
    { state, commit }: { state: IDocumentState; commit: any },
    config: IConfig,
  ): Promise<boolean> {
    const api = useApiFinplan();

    try {
      //Stock
      if (config.type === routeDocumentTypes.stock) {
        const response = await api.getStock(config.region, config.id);
        const nameSectorResult = await response.data!.RADAR_DATA.PROPS

        let nameSector:string = ''
        let nameIndustry:string = ''

        nameSector = nameSectorResult.PROP_SEKTOR
        console.log(nameSector)
        console.log(nameSectorResult)

        // @ts-ignore
        if(config.region === 'USA') {
          const findKeys = (obj, expectedValue) => {
            let industryName:string = 'broadcasting'

            const entries = Object.entries(obj)
            for (const [key, value] of entries) {
              if (key === expectedValue) {
                //@ts-ignore
                industryName = value
              }
            }

            return industryName
          };

          let industry = findKeys(industryEnum, nameIndustry)
          let industriesProfit = await api.getDetailIndustry('industryUsa', industry, 'y')

          //@ts-ignore
          const findIndustriesProfit = industriesProfit.data?.PERIODS

          // @ts-ignore
          state.data = response.data
          state.isMiddleIndicatorsSector = findIndustriesProfit

          const dataIndustriesProfit = []

          for (let period in findIndustriesProfit) {
            // @ts-ignore
            dataIndustriesProfit.push(findIndustriesProfit)
          }
        } else {
          let industriesProfit = await api.getIndustriesList(1, 10000000)
          //@ts-ignore
          const findIndustriesProfit = industriesProfit.data?.ITEMS?.find(s => s.NAME === nameSector)

          //@ts-ignore
          state.data = response.data
          state.isMiddleIndicatorsSector = findIndustriesProfit['FIN_DATA_FULL_PERIODS']
          state.sector = findIndustriesProfit['FIN_DATA']

          const dataIndustriesProfit = []

          for (let period in findIndustriesProfit['FIN_DATA_FULL_PERIODS']) {
            // @ts-ignore
            dataIndustriesProfit.push(findIndustriesProfit)
          }
        }

      // Bond
      }
      else if (config.type === routeDocumentTypes.bond) {
        const response = await api.getBond(config.region, config.id)
        console.log(response)
        state.data = response.data

        //TODO Не работает
        /*let industriesProfit = await api.getIndustriesList(1, 10000000)
        //@ts-ignore
        const findIndustriesProfit = industriesProfit.data?.ITEMS?.find(s => s.NAME === nameSector)

        //@ts-ignore
        state.data = response.data
        state.isMiddleIndicatorsSector = findIndustriesProfit['FIN_DATA_FULL_PERIODS']
        const dataIndustriesProfit = []

        for (let period in findIndustriesProfit['FIN_DATA_FULL_PERIODS']) {
          // @ts-ignore
          dataIndustriesProfit.push(findIndustriesProfit)
        }*/

        // ETF
      } else if (config.type === routeDocumentTypes.etf) {
        const response = await api.getETF(config.region, config.id);
        // @ts-ignore
        state.data = response.data;

      } else {
        commit('resetState');
        return false;
      }

      console.log('config.id', config.id)


      //TODO Trable
      let rus_bond = false
      if (config.type === routeDocumentTypes.bond) {
        rus_bond = true
      }

      if(rus_bond) {
        var response = await api.getFinancialData('RUS_BOND', config.id);
        var responseStockUsa = await api.getFinancialData('RUS_BOND', config.id);
      } else {
        var response = await api.getFinancialData(config.region, config.id);
        var responseStockUsa = await api.getFinancialData(config.region, config.id);
      }

      /*const response = await api.getFinancialData(config.region, config.id);
      const responseStockUsa = await api.getFinancialData(config.region, config.id);*/


      if (config.type === routeDocumentTypes.bond) {
        const finD = await api.getFinancialData('RUS_BOND', config.id)
        state.financialData = finD.data
      } else {
        // @ts-ignore
        state.financialData = response.data
      }

      // @ts-ignore
      state.reportBalanceData = responseStockUsa.data;
      state.reportProfitLossData = responseStockUsa.data;
      state.reportCashFlow = responseStockUsa.data;

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
      // console.error(e);
      return false;
    }
  },

  initIndicatorsChartLocale({ state }: { state: IDocumentState }): void {
    console.log(useI18nMsg().page.document)
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
    state.indicatorsChart.ebitda.name = 'EBITDA';
    state.indicatorsChart.debtebitda.name = 'DEBT/EBITDA';
    state.indicatorsChart.evebitda.name = 'EV/EBITDA';
    state.indicatorsChart.peg.name = 'PEG';

    state.indicatorsChart.assetGrowthRate.name = 'Темп прироста активов, %';
    state.indicatorsChart.profitGrowRate.name = 'Темп прироста прибыли, %';
    state.indicatorsChart.revenueGrowRate.name = 'Темп прироста выручки, %';


    // state report
    // -balance
    state.indicatorsReportBalance.fixedAssets.name = useI18nMsg().page.document.fixedAssets;
    state.indicatorsReportBalance.otherThanFixedNoncurrentAssets.name = useI18nMsg().page.document.otherThanFixedNoncurrentAssets;
    state.indicatorsReportBalance.noncurrentAssets.name = useI18nMsg().page.document.noncurrentAssets;
    state.indicatorsReportBalance.currentAssets.name = useI18nMsg().page.document.currentAssetsBalance;
    state.indicatorsReportBalance.assets.name = useI18nMsg().page.document.assetsBalance;
    state.indicatorsReportBalance.equity.name = useI18nMsg().page.document.equityBalance;
    state.indicatorsReportBalance.noncurrentLiabilities.name = useI18nMsg().page.document.noncurrentLiabilities;
    state.indicatorsReportBalance.currentLiabilities.name = useI18nMsg().page.document.currentLiabilities;
    state.indicatorsReportBalance.liabilities.name = useI18nMsg().page.document.liabilities;
    state.indicatorsReportBalance.redeemableNoncontrollingInterest.name = useI18nMsg().page.document.redeemableNoncontrollingInterest;
    state.indicatorsReportBalance.liabilitiesAndEquity.name = useI18nMsg().page.document.liabilitiesAndEquity;
    state.indicatorsReportBalance.equityAttributableToParent.name = useI18nMsg().page.document.equityAttributableToParent;
    state.indicatorsReportBalance.equityAttributableToNoncontrollingInterest.name = useI18nMsg().page.document.equityAttributableToNoncontrollingInterest;

    // -profitLoss
    state.indicatorsReportProfitLoss.revenues.name = useI18nMsg().page.document.revenues;
    state.indicatorsReportProfitLoss.costOfRevenue.name = useI18nMsg().page.document.costOfRevenue;
    state.indicatorsReportProfitLoss.grossProfit.name = useI18nMsg().page.document.grossProfit;
    state.indicatorsReportProfitLoss.operatingExpenses.name = useI18nMsg().page.document.operatingExpenses;
    state.indicatorsReportProfitLoss.operatingIncomeLoss.name = useI18nMsg().page.document.operatingIncomeLoss;
    state.indicatorsReportProfitLoss.interestExpenseOperating.name = useI18nMsg().page.document.interestExpenseOperating;
    state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsBeforeTax.name = useI18nMsg().page.document.incomeLossFromContinuingOperationsBeforeTax;
    state.indicatorsReportProfitLoss.netIncomeLoss.name = useI18nMsg().page.document.netIncomeLoss;
    state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsAfterTax.name = useI18nMsg().page.document.incomeLossFromContinuingOperationsAfterTax;
    state.indicatorsReportProfitLoss.netIncomeLossAttributableToNoncontrollingInterest.name = useI18nMsg().page.document.netIncomeLossAttributableToNoncontrollingInterest;
    state.indicatorsReportProfitLoss.netIncomeLossAvailableToCommonStockholdersBasic.name = useI18nMsg().page.document.netIncomeLossAvailableToCommonStockholdersBasic;
    state.indicatorsReportProfitLoss.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic.name = useI18nMsg().page.document.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic;
    state.indicatorsReportProfitLoss.dilutedEarningsPerShare.name = useI18nMsg().page.document.dilutedEarningsPerShare;
    state.indicatorsReportProfitLoss.basicEarningsPerShare.name = useI18nMsg().page.document.basicEarningsPerShare;
    state.indicatorsReportProfitLoss.otherComprehensiveIncomeLossAttributableToParent.name = useI18nMsg().page.document.otherComprehensiveIncomeLossAttributableToParent;
    state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToNoncontrollingInterest.name = useI18nMsg().page.document.comprehensiveIncomeLossAttributableToNoncontrollingInterest;
    state.indicatorsReportProfitLoss.comprehensiveIncomeLoss.name = useI18nMsg().page.document.comprehensiveIncomeLoss;
    state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToParent.name = useI18nMsg().page.document.comprehensiveIncomeLossAttributableToParent;

    // -cashFlow
    state.indicatorsReportCashFlow.netCashFlowFromOperatingActivitiesContinuing.name = useI18nMsg().page.document.netCashFlowFromOperatingActivitiesContinuing;
    state.indicatorsReportCashFlow.netCashFlowFromInvestingActivitiesContinuing.name = useI18nMsg().page.document.netCashFlowFromInvestingActivitiesContinuing;
    state.indicatorsReportCashFlow.netCashFlowFromFinancingActivitiesContinuing.name = useI18nMsg().page.document.netCashFlowFromFinancingActivitiesContinuing;
    state.indicatorsReportCashFlow.netCashFlow.name = useI18nMsg().page.document.netCashFlow;
  },
  initInidicatorsChartComparison({state, dispatch}: { state: IDocumentState; dispatch: any }, { getFinancialData, stockData }): boolean {
    try {
      const finDataStockComparison = new Map<string, any>(Object.entries(state.financialData?.data).reverse());
      const finData = new Map<string, any>(Object.entries(getFinancialData.data?.data).reverse());

      console.log(finDataStockComparison)
      console.log(finData)


      const equalMap = new Map()

      for (const [key, val] of finDataStockComparison) {
        const mapKey = finData.get(key)
        if(mapKey !== undefined) {
          equalMap.set(key, val)
        }
      }

      console.log(equalMap)

      finDataStockComparison.forEach((item: DynamicObject, idx) => {
        if (item) {
          if (state.currentTableProp === 'year' && Number(item.periodVal) !== 4) {
            return;
          }

          if(finData.get(idx)) {
            const val = finData.get(idx)
            //@ts-ignore
            state.indicatorsChart.actives.comparisonIndicators.push(Number(val?.actives) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.actives.comparisonIndicatorsPercent.push(Number(val?.actives / Math.floor(item.actives)) * 100 || 0)

            //@ts-ignore
            state.indicatorsChart.yearSlidingRevenue.comparisonIndicators.push(Number(val?.yearSlidingRevenue) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.yearSlidingRevenue.comparisonIndicatorsPercent.push(Number(val?.yearSlidingRevenue / Math.floor(item.yearSlidingRevenue)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.yearSlidingProfit.comparisonIndicators.push(Number(val?.yearSlidingProfit) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.yearSlidingProfit.comparisonIndicatorsPercent.push(Number(val?.yearSlidingProfit / Math.floor(item.yearSlidingProfit)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.equity.comparisonIndicators.push(Number(val?.equity) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.equity.comparisonIndicatorsPercent.push(Number(val?.equity  / Math.floor(item.equity)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.comparisonIndicators.push(Number(val?.shareOfEquityInAssets) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.shareOfEquityInAssets.comparisonIndicatorsPercent.push(Number(val?.shareOfEquityInAssets  / Math.floor(item.shareOfEquityInAssets)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.returnOnEquity.comparisonIndicators.push(Number(val?.returnOnEquity) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.returnOnEquity.comparisonIndicatorsPercent.push(Number(val?.returnOnEquity  / Math.floor(item.returnOnEquity)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.capitalization.comparisonIndicators.push(Number(val?.capitalization) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.capitalization.comparisonIndicatorsPercent.push(Number(val?.capitalization / Math.floor(item.capitalization)) || 0);


            //@ts-ignore
            state.indicatorsChart.pe.comparisonIndicators.push(Number(val?.PE) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.pe.comparisonIndicatorsPercent.push(Number(val?.PE / Math.floor(item.PE)) * 100 || 0);


            //@ts-ignore
            state.indicatorsChart.pb.comparisonIndicators.push(Number(val?.PB ) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.pb.comparisonIndicatorsPercent.push(Number(val?.PB / Math.floor(item.PB)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.pEquity.comparisonIndicators.push(Number(val?.PEquity) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.pEquity.comparisonIndicatorsPercent.push(Number(val?.PEquity / Math.floor(item.PEquity)) * 100 || 0);

            //@ts-ignore
            state.indicatorsChart.pSale.comparisonIndicators.push(Number(val?.PSale) || 0);
            //@ts-ignore
            //%
            state.indicatorsChart.pSale.comparisonIndicatorsPercent.push(Number(val?.PSale / Math.floor(item.PSale)) * 100 || 0);

          } else {
            //@ts-ignore
            state.indicatorsChart.actives.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.actives.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.actives.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.actives.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.yearSlidingRevenue.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.yearSlidingRevenue.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.yearSlidingProfit.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.yearSlidingProfit.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.equity.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.equity.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.returnOnEquity.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.returnOnEquity.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.capitalization.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.capitalization.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.pe.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.pe.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.pb.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.pb.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.pEquity.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.pEquity.comparisonIndicatorsPercent.push(0);
            //@ts-ignore
            state.indicatorsChart.pSale.comparisonIndicators.push(0);
            //@ts-ignore
            state.indicatorsChart.pSale.comparisonIndicatorsPercent.push(0);
          }

        }
      })

      //console.log(state)
      return true
    } catch (e) {
      //console.error(e)
      return false
    }
  },
  async initComparisonStock({ state, dispatch, commit } : { state: IDocumentState; dispatch: any, commit: any }, payload: IEmitent) {
    const api = useApiFinplan();

    try {
      const stockData = await api.getStock('RUS', payload.code);
      const getFinancialData = await api.getFinancialData('RUS', payload.code);

      dispatch('initInidicatorsChartComparison', { getFinancialData, stockData })
      commit('changeViewedComparisonIndicators')

    } catch (e) {
      console.error(e);
    }
  },
  initIndicatorsChart({ state, dispatch, commit }: { state: IDocumentState; dispatch: any; commit: any }): boolean {

    try {
      console.log(state)
      const monthCandleData: DynamicObject[] = Object.values(state.data?.GRAPH_CANDLE_DATA.M)
      console.log(monthCandleData)
      const finData = new Map<string, any>(Object.entries(state.financialData?.data).reverse())

      let finReportBalanceData = new Map()
      let finReportProfitLossData = new Map()
      let finReportCashFlowData = new Map()

      if(state.data?.["REGION"] === "USA") {
        finReportBalanceData = new Map<string, any>(Object.entries(state.reportBalanceData?.data_poligon_balance || {}).reverse());
        finReportProfitLossData = new Map<string, any>(Object.entries(state.reportProfitLossData?.data_poligon_income || {}).reverse());
        finReportCashFlowData = new Map<string, any>(Object.entries(state.reportProfitLossData?.data_poligon_cash_flow_statement || {}).reverse());
      }

      const EL = Object.keys(state.indicatorsChart)
      EL.forEach(el => {
        if(state.indicatorsChart[el].comparisonIndicators) {
          state.indicatorsChart[el].comparisonIndicators = []
        }
      })

      commit('resetQuotes')
      commit('resetCategories')

      let priceM = JSON.parse(JSON.stringify(state.data?.GRAPH_CANDLE_DATA.M))
      let periodList = {...state.data?.GRAPH_CANDLE_DATA.M}
      let size = Object.keys(periodList).length
      let priceY = JSON.parse(JSON.stringify(state.financialData?.data))

      const lastPeriod = state.data?.GRAPH_CANDLE_DATA.M[Object.keys(state.data?.GRAPH_CANDLE_DATA.M)[size - 1]]
      if(state.currentTableProp === 'quarter') {
        state.indicatorsChart.quotes.data.push(Number(lastPeriod.UF_CLOSE))
      }

      Object.keys(state.financialData?.data).forEach(el => {

        //console.log(state.indicatorsChartYearForTable)
        //const yearOnTable = [... new Set(JSON.parse(JSON.stringify(state.indicatorsChartYearForTable)))]

        if(state.currentTableProp === 'quarter') {
          Object.keys(priceM).map(k => {
            const key = k.split('-') //['2013', '06', '03']

            if(`${key[0]}-${key[1]}` === utils.getClosePriceGraph(el)) {
              state.indicatorsChart.quotes.data.push(Number((priceM[k].UF_CLOSE)))
            }
          })
        }


        console.log(el)
        const [kv, y] = el.split('-')

        if (state.financialData?.data[el].currentPeriod) {
          // @ts-ignore
          state.allCategoriesChartForTable.push({ y: '', kv: `Текущий` })
        } else {
          state.indicatorsChartQuarterForTable.push(`${kv}кв.`);
          state.indicatorsChartYearForTable.push(Number(y));
          state.allCategoriesChartForTable.push({ y: Number(y), kv: `${kv}кв.` })
          state.allCategoriesChartForTableReport.push({ y: Number(y), kv: `${kv}кв.` })
        }
        console.log(state)

      })

      commit('reverseQuotes')
      if(state.data?.["REGION"] === "USA" ) {
        commit('resetIndicatorsReportBalanceChart')
        commit('resetIndicatorsReportProfitLossChart')
        commit('resetIndicatorsReportCashFlowChart')
      }

      let count = 0

      /*finData.forEach((item: DynamicObject, idx) => {

        if (item) {
          if (state.currentTableProp === 'year' && Number(item.periodVal) !== 4) {
            return;
          }

          // @ts-ignore
          const yearSlidingRevenuePercentMiddleProfit = ((Number(item?.yearSlidingRevenue) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue)) * 100) || 0
          // @ts-ignore
          const yearSlidingPercentMiddleProfit = ((Number(item?.yearSlidingProfit) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit)) * 100) || 0
          // @ts-ignore
          const activesPercentMiddleProfit = ((Number(item?.actives) / Math.floor(state.isMiddleIndicatorsSector[idx]?.actives)) * 100) || 0
          // @ts-ignore
          const equityPercentMiddleProfit = ((Number(item?.equity) / Math.floor(state.isMiddleIndicatorsSector[idx]?.equity)) * 100) || 0

          let lastProfitPercentMiddleProfit = 0
          if(item.capitalization) {
            // @ts-ignore
            lastProfitPercentMiddleProfit = ((item?.capitalization / Math.floor(Number(state.isMiddleIndicatorsSector[idx]?.capitalization))) * 100) || 0
          }

          // @ts-ignore
          state.indicatorsChart.yearSlidingRevenue.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue) || 0);
          // @ts-ignore
          state.indicatorsChart.yearSlidingRevenue.middleSectorIndicatorsPercent.push(yearSlidingRevenuePercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.yearSlidingProfit.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit) || 0);
          // @ts-ignore
          state.indicatorsChart.yearSlidingProfit.middleSectorIndicatorsPercent.push(yearSlidingPercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.actives.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.actives) || 0);
          // @ts-ignore
          state.indicatorsChart.actives.middleSectorIndicatorsPercent.push(activesPercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.equity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.equity) || 0);
          // @ts-ignore
          state.indicatorsChart.equity.middleSectorIndicatorsPercent.push(equityPercentMiddleProfit.toFixed(2))

          // @ts-ignore
          state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets) || 0);
          // @ts-ignore
          state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets).toFixed(2) || 0)

          // @ts-ignore
          state.indicatorsChart.returnOnEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0);
          // @ts-ignore
          state.indicatorsChart.returnOnEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0)

          // @ts-ignore
          state.indicatorsChart.capitalization.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.capitalization) || 0);
          // @ts-ignore
          state.indicatorsChart.capitalization.middleSectorIndicatorsPercent.push(Number(lastProfitPercentMiddleProfit).toFixed(2))

          // @ts-ignore
          state.indicatorsChart.pe.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PE) || 0);
          // @ts-ignore
          state.indicatorsChart.pe.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PE).toFixed(2) || 0)

          // @ts-ignore
          state.indicatorsChart.pb.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PB) || 0);
          // @ts-ignore
          state.indicatorsChart.pb.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PB).toFixed(2) || 0)

          // Темпы прироста активов
          // @ts-ignore
          state.indicatorsChart.assetGrowthRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate) || 0);
          // @ts-ignore
          state.indicatorsChart.assetGrowthRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate).toFixed(2) || 0)

          // Темпы прироста прибыли
          // @ts-ignore
          state.indicatorsChart.profitGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate) || 0);
          // @ts-ignore
          state.indicatorsChart.profitGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate).toFixed(2) || 0)

          // Темпы прироста выручки
          // @ts-ignore
          state.indicatorsChart.revenueGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate) || 0);
          // @ts-ignore
          state.indicatorsChart.revenueGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate).toFixed(2) || 0)


          // @ts-ignore
          state.indicatorsChart.pEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity) || 0);
          // @ts-ignore
          state.indicatorsChart.pEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity).toFixed(2) || 0)

          // @ts-ignore
          state.indicatorsChart.pSale.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale) || 0);
          // @ts-ignore
          state.indicatorsChart.pSale.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale).toFixed(2) || 0)

          state.indicatorsChart.actives.data.push(Number(item?.actives) || 0);
          state.indicatorsChart.averageProfit.data.push(Number(item?.averageProfit) || 0);
          state.indicatorsChart.currentAssets.data.push(Number(item?.currentAssets) || 0);
          state.indicatorsChart.currentRevenue.data.push(Number(item?.currentRevenue) || 0);
          state.indicatorsChart.equity.data.push(Number(item?.equity) || 0);
          state.indicatorsChart.lastYearRevenue.data.push(Number(item?.lastYearRevenue) || 0);
          state.indicatorsChart.profit.data.push(Number(item?.profit) || 0);
          state.indicatorsChart.quarterlyProfit.data.push(Number(item?.quarterlyProfit) || 0);
          state.indicatorsChart.quarterlyRevenue.data.push(Number(item?.quarterlyRevenue) || 0);

          const returnOnEquity = item.returnOnEquity

          if(typeof returnOnEquity == 'number') {
            const val = returnOnEquity.toFixed(2)
            state.indicatorsChart.returnOnEquity.data.push(Number(val))
          } else if(typeof returnOnEquity == 'string') {
            state.indicatorsChart.returnOnEquity.data.push(0)
          }

          state.indicatorsChart.shareOfEquityInAssets.data.push(Number(item?.shareOfEquityInAssets) || 0);

          state.indicatorsChart.yearSlidingProfit.data.push(Number(item?.yearSlidingProfit) || 0);
          state.indicatorsChart.yearSlidingRevenue.data.push(Number(item?.yearSlidingRevenue) || 0);

          state.indicatorsChart.ebitda.data.push(Number(item?.ebitda) || 0);
          state.indicatorsChart.debtebitda.data.push(Number(item?.DEBTEBITDA) || 0);
          state.indicatorsChart.evebitda.data.push(Number(item?.EVEBITDA) || 0);
          state.indicatorsChart.peg.data.push(Number(item?.PEG) || 0);

          state.indicatorsChart.assetGrowthRate.data.push(Number(item?.assetGrowthRate) || 0);
          state.indicatorsChart.profitGrowRate.data.push(Number(item?.profitGrowRate) || 0);
          state.indicatorsChart.revenueGrowRate.data.push(Number(item?.revenueGrowRate) || 0);

          state.indicatorsChart.capitalization.data.push(Number(item?.capitalization) || 0);
          state.indicatorsChart.halfyearRevenue.data.push(Number(item?.halfyearRevenue) || 0);
          state.indicatorsChart.halfyearProfit.data.push(Number(item?.halfyearProfit) || 0);
          state.indicatorsChart.pe.data.push(Number(item?.PE) || 0);
          state.indicatorsChart.pb.data.push(Number(item?.PB) || 0);
          state.indicatorsChart.pEquity.data.push(Number(item?.PEquity) || 0);
          state.indicatorsChart.pSale.data.push(Number(item?.PSale) || 0);

          if(state.data?.["REGION"] === "USA" ) {
            //Report Balance Data
            console.log(finData.size)
            console.log(count)
            console.log(state.currentTableProp)

            if(state.currentTableProp === 'quarter' && (count + 1) === finData.size) {
              console.log(finReportBalanceData.get(idx)?.['Основные средства']?.VALUE)
            } else {
              state.indicatorsReportBalance.fixedAssets.data.push(Number(finReportBalanceData.get(idx)?.['Основные средства']?.VALUE) || 0)
              state.indicatorsReportBalance.otherThanFixedNoncurrentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Кроме основных внеоборотных активов']?.VALUE) || 0)
              state.indicatorsReportBalance.noncurrentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Внеоборотные активы']?.VALUE) || 0)
              state.indicatorsReportBalance.currentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Оборотные активы']?.VALUE) || 0)
              state.indicatorsReportBalance.assets.data.push(Number(finReportBalanceData.get(idx)?.['Активы']?.VALUE) || 0)
              state.indicatorsReportBalance.equity.data.push(Number(finReportBalanceData.get(idx)?.['Собственный капитал']?.VALUE) || 0)
              state.indicatorsReportBalance.noncurrentLiabilities.data.push(Number(finReportBalanceData.get(idx)?.['Долгосрочные обязательства']?.VALUE) || 0)
              state.indicatorsReportBalance.currentLiabilities.data.push(Number(finReportBalanceData.get(idx)?.['Текущие обязательства']?.VALUE) || 0)
              state.indicatorsReportBalance.liabilities.data.push(Number(finReportBalanceData.get(idx)?.['Обязательства']?.VALUE) || 0)
              state.indicatorsReportBalance.redeemableNoncontrollingInterest.data.push(Number(finReportBalanceData.get(idx)?.['Подлежащая погашению неконтролирующая доля']?.VALUE) || 0)
              state.indicatorsReportBalance.liabilitiesAndEquity.data.push(Number(finReportBalanceData.get(idx)?.['Обязательства и капитал']?.VALUE) || 0)
              state.indicatorsReportBalance.equityAttributableToParent.data.push(Number(finReportBalanceData.get(idx)?.['Акционерный капитал, относящийся к материнской компании']?.VALUE) || 0)
              state.indicatorsReportBalance.equityAttributableToNoncontrollingInterest.data.push(Number(finReportBalanceData.get(idx)?.['Собственный капитал, относящийся к неконтролирующей доле']?.VALUE) || 0)

              //Report ProfitLoss Data
              state.indicatorsReportProfitLoss.revenues.data.push(Number(finReportProfitLossData.get(idx)?.['Выручка (Квартальная)']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.costOfRevenue.data.push(Number(finReportProfitLossData.get(idx)?.['Себестоимость продаж']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.grossProfit.data.push(Number(finReportProfitLossData.get(idx)?.['Валовая прибыль']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.operatingExpenses.data.push(Number(finReportProfitLossData.get(idx)?.['Операционные расходы']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.operatingIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Операционная прибыль/убыток']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.interestExpenseOperating.data.push(Number(finReportProfitLossData.get(idx)?.['Процентные расходы']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsBeforeTax.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль/убыток от деятельности до налогообложения']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.netIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль (Квартальная)']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsAfterTax.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль/убыток от деятельности после налогообложения']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.netIncomeLossAttributableToNoncontrollingInterest.data.push(Number(finReportProfitLossData.get(idx)?.['Чистая прибыль/убыток, относящиеся к неконтролируемым долям']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.netIncomeLossAvailableToCommonStockholdersBasic.data.push(Number(finReportProfitLossData.get(idx)?.['Чистая прибыль/убыток, доступная держателям обыкновенных акций']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic.data.push(Number(finReportProfitLossData.get(idx)?.['Дивиденды по привилегированным акциям и др. корректировки']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.dilutedEarningsPerShare.data.push(Number(finReportProfitLossData.get(idx)?.['Разводненная прибыль на акцию']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.basicEarningsPerShare.data.push(Number(finReportProfitLossData.get(idx)?.['Базовая прибыль на акцию']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.otherComprehensiveIncomeLossAttributableToParent.data.push(Number(finReportProfitLossData.get(idx)?.['Прочий совокупный доход/убыток, приходящийся на материнскую компанию']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToNoncontrollingInterest.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток, относящийся к неконтролирующей доле']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.comprehensiveIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток']?.VALUE) || 0)
              state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToParent.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток, приходящийся на материнскую компанию']?.VALUE) || 0)

              //Report Cash Flow
              state.indicatorsReportCashFlow.netCashFlowFromOperatingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от операционной деятельности']?.VALUE) || 0)
              state.indicatorsReportCashFlow.netCashFlowFromInvestingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от инвестиционной деятельности']?.VALUE) || 0)
              state.indicatorsReportCashFlow.netCashFlowFromFinancingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от финансовой деятельности']?.VALUE) || 0)
              state.indicatorsReportCashFlow.netCashFlow.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток']?.VALUE) || 0)
            }

          }
        }
        count++
      });*/

      if(state.type !== 'bond') {
        finData.forEach((item: DynamicObject, idx) => {
          console.log(item)

          if (item) {
            if (state.currentTableProp === 'year' && Number(item.periodVal) !== 4) {
              return;
            }
            console.log(item)
            // @ts-ignore
            const yearSlidingRevenuePercentMiddleProfit = ((Number(item?.yearSlidingRevenue) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue)) * 100) || 0
            // @ts-ignore
            const yearSlidingPercentMiddleProfit = ((Number(item?.yearSlidingProfit) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit)) * 100) || 0
            // @ts-ignore
            const activesPercentMiddleProfit = ((Number(item?.actives) / Math.floor(state.isMiddleIndicatorsSector[idx]?.actives)) * 100) || 0
            // @ts-ignore
            const equityPercentMiddleProfit = ((Number(item?.equity) / Math.floor(state.isMiddleIndicatorsSector[idx]?.equity)) * 100) || 0

            let lastProfitPercentMiddleProfit = 0
            if(item.capitalization) {
              // @ts-ignore
              lastProfitPercentMiddleProfit = ((item?.capitalization / Math.floor(Number(state.isMiddleIndicatorsSector[idx]?.capitalization))) * 100) || 0
            }

            // @ts-ignore
            state.indicatorsChart.yearSlidingRevenue.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue) || 0);
            // @ts-ignore
            state.indicatorsChart.yearSlidingRevenue.middleSectorIndicatorsPercent.push(yearSlidingRevenuePercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.yearSlidingProfit.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit) || 0);
            // @ts-ignore
            state.indicatorsChart.yearSlidingProfit.middleSectorIndicatorsPercent.push(yearSlidingPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.actives.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.actives) || 0);
            // @ts-ignore
            state.indicatorsChart.actives.middleSectorIndicatorsPercent.push(activesPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.equity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.equity) || 0);
            // @ts-ignore
            state.indicatorsChart.equity.middleSectorIndicatorsPercent.push(equityPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets) || 0);
            // @ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.returnOnEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0);
            // @ts-ignore
            state.indicatorsChart.returnOnEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.capitalization.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.capitalization) || 0);
            // @ts-ignore
            state.indicatorsChart.capitalization.middleSectorIndicatorsPercent.push(Number(lastProfitPercentMiddleProfit).toFixed(2))

            // @ts-ignore
            state.indicatorsChart.pe.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PE) || 0);
            // @ts-ignore
            state.indicatorsChart.pe.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PE).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.pb.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PB) || 0);
            // @ts-ignore
            state.indicatorsChart.pb.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PB).toFixed(2) || 0)

            // Темпы прироста активов
            // @ts-ignore
            state.indicatorsChart.assetGrowthRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate) || 0);
            // @ts-ignore
            state.indicatorsChart.assetGrowthRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate).toFixed(2) || 0)

            // Темпы прироста прибыли
            // @ts-ignore
            state.indicatorsChart.profitGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate) || 0);
            // @ts-ignore
            state.indicatorsChart.profitGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate).toFixed(2) || 0)

            // Темпы прироста выручки
            // @ts-ignore
            state.indicatorsChart.revenueGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate) || 0);
            // @ts-ignore
            state.indicatorsChart.revenueGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate).toFixed(2) || 0)


            // @ts-ignore
            state.indicatorsChart.pEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity) || 0);
            // @ts-ignore
            state.indicatorsChart.pEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.pSale.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale) || 0);
            // @ts-ignore
            state.indicatorsChart.pSale.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale).toFixed(2) || 0)

            state.indicatorsChart.actives.data.push(Number(item?.actives) || 0);
            state.indicatorsChart.averageProfit.data.push(Number(item?.averageProfit) || 0);
            state.indicatorsChart.currentAssets.data.push(Number(item?.currentAssets) || 0);
            state.indicatorsChart.currentRevenue.data.push(Number(item?.currentRevenue) || 0);
            state.indicatorsChart.equity.data.push(Number(item?.equity) || 0);
            state.indicatorsChart.lastYearRevenue.data.push(Number(item?.lastYearRevenue) || 0);
            state.indicatorsChart.profit.data.push(Number(item?.profit) || 0);
            state.indicatorsChart.quarterlyProfit.data.push(Number(item?.quarterlyProfit) || 0);
            state.indicatorsChart.quarterlyRevenue.data.push(Number(item?.quarterlyRevenue) || 0);

            const returnOnEquity = item.returnOnEquity

            if(typeof returnOnEquity == 'number') {
              const val = returnOnEquity.toFixed(2)
              state.indicatorsChart.returnOnEquity.data.push(Number(val))
            } else if(typeof returnOnEquity == 'string') {
              state.indicatorsChart.returnOnEquity.data.push(0)
            }

            state.indicatorsChart.shareOfEquityInAssets.data.push(Number(item?.shareOfEquityInAssets) || 0);

            state.indicatorsChart.yearSlidingProfit.data.push(Number(item?.yearSlidingProfit) || 0);
            state.indicatorsChart.yearSlidingRevenue.data.push(Number(item?.yearSlidingRevenue) || 0);

            state.indicatorsChart.ebitda.data.push(Number(item?.ebitda) || 0);
            state.indicatorsChart.debtebitda.data.push(Number(item?.DEBTEBITDA) || 0);
            state.indicatorsChart.evebitda.data.push(Number(item?.EVEBITDA) || 0);
            state.indicatorsChart.peg.data.push(Number(item?.PEG) || 0);

            state.indicatorsChart.assetGrowthRate.data.push(Number(item?.assetGrowthRate) || 0);
            state.indicatorsChart.profitGrowRate.data.push(Number(item?.profitGrowRate) || 0);
            state.indicatorsChart.revenueGrowRate.data.push(Number(item?.revenueGrowRate) || 0);

            state.indicatorsChart.capitalization.data.push(Number(item?.capitalization) || 0);
            state.indicatorsChart.halfyearRevenue.data.push(Number(item?.halfyearRevenue) || 0);
            state.indicatorsChart.halfyearProfit.data.push(Number(item?.halfyearProfit) || 0);
            state.indicatorsChart.pe.data.push(Number(item?.PE) || 0);
            state.indicatorsChart.pb.data.push(Number(item?.PB) || 0);
            state.indicatorsChart.pEquity.data.push(Number(item?.PEquity) || 0);
            state.indicatorsChart.pSale.data.push(Number(item?.PSale) || 0);

            if(state.data?.["REGION"] === "USA" ) {
              //Report Balance Data
              console.log(finData.size)
              console.log(count)
              console.log(state.currentTableProp)

              if(state.currentTableProp === 'quarter' && (count + 1) === finData.size) {
                console.log(finReportBalanceData.get(idx)?.['Основные средства']?.VALUE)
              } else {
                state.indicatorsReportBalance.fixedAssets.data.push(Number(finReportBalanceData.get(idx)?.['Основные средства']?.VALUE) || 0)
                state.indicatorsReportBalance.otherThanFixedNoncurrentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Кроме основных внеоборотных активов']?.VALUE) || 0)
                state.indicatorsReportBalance.noncurrentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Внеоборотные активы']?.VALUE) || 0)
                state.indicatorsReportBalance.currentAssets.data.push(Number(finReportBalanceData.get(idx)?.['Оборотные активы']?.VALUE) || 0)
                state.indicatorsReportBalance.assets.data.push(Number(finReportBalanceData.get(idx)?.['Активы']?.VALUE) || 0)
                state.indicatorsReportBalance.equity.data.push(Number(finReportBalanceData.get(idx)?.['Собственный капитал']?.VALUE) || 0)
                state.indicatorsReportBalance.noncurrentLiabilities.data.push(Number(finReportBalanceData.get(idx)?.['Долгосрочные обязательства']?.VALUE) || 0)
                state.indicatorsReportBalance.currentLiabilities.data.push(Number(finReportBalanceData.get(idx)?.['Текущие обязательства']?.VALUE) || 0)
                state.indicatorsReportBalance.liabilities.data.push(Number(finReportBalanceData.get(idx)?.['Обязательства']?.VALUE) || 0)
                state.indicatorsReportBalance.redeemableNoncontrollingInterest.data.push(Number(finReportBalanceData.get(idx)?.['Подлежащая погашению неконтролирующая доля']?.VALUE) || 0)
                state.indicatorsReportBalance.liabilitiesAndEquity.data.push(Number(finReportBalanceData.get(idx)?.['Обязательства и капитал']?.VALUE) || 0)
                state.indicatorsReportBalance.equityAttributableToParent.data.push(Number(finReportBalanceData.get(idx)?.['Акционерный капитал, относящийся к материнской компании']?.VALUE) || 0)
                state.indicatorsReportBalance.equityAttributableToNoncontrollingInterest.data.push(Number(finReportBalanceData.get(idx)?.['Собственный капитал, относящийся к неконтролирующей доле']?.VALUE) || 0)

                //Report ProfitLoss Data
                state.indicatorsReportProfitLoss.revenues.data.push(Number(finReportProfitLossData.get(idx)?.['Выручка (Квартальная)']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.costOfRevenue.data.push(Number(finReportProfitLossData.get(idx)?.['Себестоимость продаж']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.grossProfit.data.push(Number(finReportProfitLossData.get(idx)?.['Валовая прибыль']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.operatingExpenses.data.push(Number(finReportProfitLossData.get(idx)?.['Операционные расходы']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.operatingIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Операционная прибыль/убыток']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.interestExpenseOperating.data.push(Number(finReportProfitLossData.get(idx)?.['Процентные расходы']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsBeforeTax.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль/убыток от деятельности до налогообложения']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.netIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль (Квартальная)']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.incomeLossFromContinuingOperationsAfterTax.data.push(Number(finReportProfitLossData.get(idx)?.['Прибыль/убыток от деятельности после налогообложения']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.netIncomeLossAttributableToNoncontrollingInterest.data.push(Number(finReportProfitLossData.get(idx)?.['Чистая прибыль/убыток, относящиеся к неконтролируемым долям']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.netIncomeLossAvailableToCommonStockholdersBasic.data.push(Number(finReportProfitLossData.get(idx)?.['Чистая прибыль/убыток, доступная держателям обыкновенных акций']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.participatingSecuritiesDistributedAndUndistributedEarningsLossBasic.data.push(Number(finReportProfitLossData.get(idx)?.['Дивиденды по привилегированным акциям и др. корректировки']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.dilutedEarningsPerShare.data.push(Number(finReportProfitLossData.get(idx)?.['Разводненная прибыль на акцию']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.basicEarningsPerShare.data.push(Number(finReportProfitLossData.get(idx)?.['Базовая прибыль на акцию']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.otherComprehensiveIncomeLossAttributableToParent.data.push(Number(finReportProfitLossData.get(idx)?.['Прочий совокупный доход/убыток, приходящийся на материнскую компанию']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToNoncontrollingInterest.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток, относящийся к неконтролирующей доле']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.comprehensiveIncomeLoss.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток']?.VALUE) || 0)
                state.indicatorsReportProfitLoss.comprehensiveIncomeLossAttributableToParent.data.push(Number(finReportProfitLossData.get(idx)?.['Совокупный доход/убыток, приходящийся на материнскую компанию']?.VALUE) || 0)

                //Report Cash Flow
                state.indicatorsReportCashFlow.netCashFlowFromOperatingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от операционной деятельности']?.VALUE) || 0)
                state.indicatorsReportCashFlow.netCashFlowFromInvestingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от инвестиционной деятельности']?.VALUE) || 0)
                state.indicatorsReportCashFlow.netCashFlowFromFinancingActivitiesContinuing.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток от финансовой деятельности']?.VALUE) || 0)
                state.indicatorsReportCashFlow.netCashFlow.data.push(Number(finReportCashFlowData.get(idx)?.['Денежный поток']?.VALUE) || 0)
              }

            }
          }
          count++
        });
      } else {
        finData.forEach((item: DynamicObject, idx) => {

            if (state.currentTableProp === 'year' && Number(item.periodVal) !== 4) {
              return;
            }
            console.log(item)

           /* // @ts-ignore
            const yearSlidingRevenuePercentMiddleProfit = ((Number(item?.yearSlidingRevenue) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue)) * 100) || 0
            // @ts-ignore
            const yearSlidingPercentMiddleProfit = ((Number(item?.yearSlidingProfit) / Math.floor(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit)) * 100) || 0
            // @ts-ignore
            const activesPercentMiddleProfit = ((Number(item?.actives) / Math.floor(state.isMiddleIndicatorsSector[idx]?.actives)) * 100) || 0
            // @ts-ignore
            const equityPercentMiddleProfit = ((Number(item?.equity) / Math.floor(state.isMiddleIndicatorsSector[idx]?.equity)) * 100) || 0

            let lastProfitPercentMiddleProfit = 0
            if(item.capitalization) {
              // @ts-ignore
              lastProfitPercentMiddleProfit = ((item?.capitalization / Math.floor(Number(state.isMiddleIndicatorsSector[idx]?.capitalization))) * 100) || 0
            }
            // @ts-ignore
            state.indicatorsChart.yearSlidingRevenue.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingRevenue) || 0);
            // @ts-ignore
            state.indicatorsChart.yearSlidingRevenue.middleSectorIndicatorsPercent.push(yearSlidingRevenuePercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.yearSlidingProfit.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.yearSlidingProfit) || 0);
            // @ts-ignore
            state.indicatorsChart.yearSlidingProfit.middleSectorIndicatorsPercent.push(yearSlidingPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.actives.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.actives) || 0);
            // @ts-ignore
            state.indicatorsChart.actives.middleSectorIndicatorsPercent.push(activesPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.equity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.equity) || 0);
            // @ts-ignore
            state.indicatorsChart.equity.middleSectorIndicatorsPercent.push(equityPercentMiddleProfit.toFixed(2))

            // @ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets) || 0);
            // @ts-ignore
            state.indicatorsChart.shareOfEquityInAssets.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.shareOfEquityInAssets).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.returnOnEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0);
            // @ts-ignore
            state.indicatorsChart.returnOnEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.returnOnEquity).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.capitalization.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.capitalization) || 0);
            // @ts-ignore
            state.indicatorsChart.capitalization.middleSectorIndicatorsPercent.push(Number(lastProfitPercentMiddleProfit).toFixed(2))

            // @ts-ignore
            state.indicatorsChart.pe.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PE) || 0);
            // @ts-ignore
            state.indicatorsChart.pe.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PE).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.pb.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PB) || 0);
            // @ts-ignore
            state.indicatorsChart.pb.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PB).toFixed(2) || 0)

            // Темпы прироста активов
            // @ts-ignore
            state.indicatorsChart.assetGrowthRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate) || 0);
            // @ts-ignore
            state.indicatorsChart.assetGrowthRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.assetGrowthRate).toFixed(2) || 0)

            // Темпы прироста прибыли
            // @ts-ignore
            state.indicatorsChart.profitGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate) || 0);
            // @ts-ignore
            state.indicatorsChart.profitGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.profitGrowRate).toFixed(2) || 0)

            // Темпы прироста выручки
            // @ts-ignore
            state.indicatorsChart.revenueGrowRate.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate) || 0);
            // @ts-ignore
            state.indicatorsChart.revenueGrowRate.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.revenueGrowRate).toFixed(2) || 0)


            // @ts-ignore
            state.indicatorsChart.pEquity.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity) || 0);
            // @ts-ignore
            state.indicatorsChart.pEquity.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PEquity).toFixed(2) || 0)

            // @ts-ignore
            state.indicatorsChart.pSale.middleSectorIndicators.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale) || 0);
            // @ts-ignore
            state.indicatorsChart.pSale.middleSectorIndicatorsPercent.push(Number(state.isMiddleIndicatorsSector[idx]?.PSale).toFixed(2) || 0)
            */

            state.indicatorsChart.actives.data.push(Number(item?.actives) || 0);
            state.indicatorsChart.averageProfit.data.push(Number(item?.averageProfit) || 0);
            state.indicatorsChart.currentAssets.data.push(Number(item?.currentAssets) || 0);
            state.indicatorsChart.currentRevenue.data.push(Number(item?.currentRevenue) || 0);
            state.indicatorsChart.equity.data.push(Number(item?.equity) || 0);
            state.indicatorsChart.lastYearRevenue.data.push(Number(item?.lastYearRevenue) || 0);
            state.indicatorsChart.profit.data.push(Number(item?.profit) || 0);
            state.indicatorsChart.quarterlyProfit.data.push(Number(item?.quarterlyProfit) || 0);
            state.indicatorsChart.quarterlyRevenue.data.push(Number(item?.quarterlyRevenue) || 0);

            const returnOnEquity = item.returnOnEquity

            if(typeof returnOnEquity == 'number') {
              const val = returnOnEquity.toFixed(2)
              state.indicatorsChart.returnOnEquity.data.push(Number(val))
            } else if(typeof returnOnEquity == 'string') {
              state.indicatorsChart.returnOnEquity.data.push(0)
            }

            state.indicatorsChart.shareOfEquityInAssets.data.push(Number(item?.shareOfEquityInAssets) || 0);

            state.indicatorsChart.yearSlidingProfit.data.push(Number(item?.yearSlidingProfit) || 0);
            state.indicatorsChart.yearSlidingRevenue.data.push(Number(item?.yearSlidingRevenue) || 0);

            state.indicatorsChart.ebitda.data.push(Number(item?.ebitda) || 0);
            state.indicatorsChart.debtebitda.data.push(Number(item?.DEBTEBITDA) || 0);
            state.indicatorsChart.evebitda.data.push(Number(item?.EVEBITDA) || 0);
            state.indicatorsChart.peg.data.push(Number(item?.PEG) || 0);

            state.indicatorsChart.assetGrowthRate.data.push(Number(item?.assetGrowthRate) || 0);
            state.indicatorsChart.profitGrowRate.data.push(Number(item?.profitGrowRate) || 0);
            state.indicatorsChart.revenueGrowRate.data.push(Number(item?.revenueGrowRate) || 0);

            state.indicatorsChart.capitalization.data.push(Number(item?.capitalization) || 0);
            state.indicatorsChart.halfyearRevenue.data.push(Number(item?.halfyearRevenue) || 0);
            state.indicatorsChart.halfyearProfit.data.push(Number(item?.halfyearProfit) || 0);
            state.indicatorsChart.pe.data.push(Number(item?.PE) || 0);
            state.indicatorsChart.pb.data.push(Number(item?.PB) || 0);
            state.indicatorsChart.pEquity.data.push(Number(item?.PEquity) || 0);
            state.indicatorsChart.pSale.data.push(Number(item?.PSale) || 0);


          count++
        })
      }

      let yearChartCategories = []

      Object.keys(priceY).map(k => {
        const key = k.split('-') //['4', '2012', '...']

        if(key[0] === '4') {
          // @ts-ignore
          yearChartCategories.push(key[1])
          console.log(yearChartCategories)
        }

      })

      monthCandleData.forEach((item: DynamicObject, idx: number) => {
        console.log(item)
        console.log(yearChartCategories)
        console.log(monthCandleData)

        const month = Number(new Date(item.UF_DATE_TO).getMonth() + 1);
        //UF_DATE_TO: "2018-10-01"
        const UF_DATE = String(new Date(item.UF_DATE_TO).getFullYear());

        //const yearOnTable = [... new Set(JSON.parse(JSON.stringify(state.indicatorsChartYearForTable)))]
        //state.indicatorsChart.quotes.data.push(Number(item.UF_CLOSE));
        if (state.currentTableProp === 'year' && month === 12) {
          // @ts-ignore
          if (yearChartCategories.includes(UF_DATE)) {
            state.indicatorsChart.quotes.data.push(Number(item.UF_CLOSE));
            state.indicatorsChartCategories.push(new Date(item.UF_DATE_TO).getFullYear());
          }
        } else if (state.currentTableProp === 'quarter' && month % 3 === 1) {
          state.indicatorsChartQuarter.push(`${utils.getQuarterByMonth(month)}кв.`);
          //state.indicatorsChart.quotes.data.push(Number(item.UF_CLOSE));
          state.indicatorsChartCategories.push(new Date(item.UF_DATE_TO).getFullYear());
        }
      });

      let catLength = state.indicatorsChartCategories.length;
      const indicLength = state.indicatorsChart.actives.data.length;
      console.log(catLength)
      console.log(indicLength)


      if (catLength < indicLength) {
        state.indicatorsChart.quotes.data.push(
          Number(monthCandleData[monthCandleData.length - 1].UF_CLOSE),
        );
        state.indicatorsChartCategories.push(
          new Date(monthCandleData[monthCandleData.length - 1].UF_DATE_TO).getFullYear(),
        );
      }

      if (!state.indicatorsChartLocaleInit) {
        dispatch('initIndicatorsChartLocale');
        state.indicatorsChartLocaleInit = true;
      }

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  refreshComparisonStock({ commit } : { state: IDocumentState; dispatch: any, commit: any }) {
    commit('refreshComparisonStock')
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
    state.indicatorsReportBalance = vanilaIndicatorsChartReportBalanceState();
    state.indicatorsReportProfitLoss = vanilaIndicatorsChartReportProfitLossState();
    state.indicatorsReportCashFlow = vanilaIndicatorsChartReportCashFlowState();

    dispatch('initIndicatorsChart');
    return true;
  },
};
