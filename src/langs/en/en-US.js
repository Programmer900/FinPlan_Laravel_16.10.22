import { documentPage } from '@/langs/en/pages/document';

export default {
  stock: 'Stock',
  stocksDynamic: 'Stocks dynamic',
  monthlyIncrease: 'Monthly increase',
  yearIncrease: 'Annual growth',
  yearThreeIncrease: 'Growth in 3 years',
  assetsList: {
    stockRu: 'List of Mosbirzhi shares',
    stockEn: 'List of American stocks on the St. Petersburg Stock Exchange',
    bond: 'List of bonds',
    etf: 'List of Moscow Exchange ETFs',
    indexes: 'List of indexes',
  },
  page: {
    document: {
      ...documentPage,
    },
  },
  progresses: {
    revenue: 'Revenue',
    profit: 'Profit',
    profitability: 'Profitability',
    fraction: 'Fraction',
    profitRatio: 'P/E',
    beta: 'Beta',
    capitalization: 'Capitalization',
    dividends: 'Dividends',
  },
  sitenav: {
    training: 'Training',
    services: 'Services',
    blog: 'Blog',
    assets: 'Assets',
    about: 'About us',
  },
  securityHeader: {
    bond: {
      name: 'Obligation',
      date: 'is using since',
      emitent: 'Emitent of obligation is',
    },
    stock: {
      name: 'Stock',
      ticker: 'stock ticker',
      date: 'is using since on Moscow exchange',
      dateNot: 'is not using since on Moscow exchange',
      emitent: 'Emitent of obligation is',
      dynamics: {
        text: 'Stock dynamics:',
        month: 'Month increase',
        year: 'Year increase',
        three_years: 'Three years increase',
      },
    },
  },
  tableTexts: {
    alertText: 'The data in the table are indicated in million ',
    alertSymbolCurrenciesRuble: 'rubles',
    alertSymbolCurrenciesDollar: 'dollars',
    switcherText: 'Industry average indicators',
    switcherTextComparison: 'In absolute',
    switcherTextPercent: 'In % relation',
    switcherTextPercentComparison: 'In % relation',
    index: 'Indicator',
  },
  aboutCompany: {
    newsText:
      'Конечно, выбор акций для инвестирования прежде всего зависит от целей самого инвестора. Кто-то стремится к максимально агрессивному росту портфеля и готов терпеть соответствующие этому риски, кто-то, наоборот, предельно консервативен и готов идти только на очень выверенный и небольшой риск, а для какого-то инвестора важен денежный поток, который будет генерировать инвестиционный портфель, который можно будет выводить на текущее потребление в виде «живого» кэша.',
  },
  aboutStock: [
    {
      name: 'Stock type:',
      path: 'RADAR_DATA.PROPS.PROP_TIP_AKTSII',
    },
    {
      name: 'Sector:',
      path: 'RADAR_DATA.PROPS.PROP_SEKTOR',
    },
    {
      name: 'ISIN-code:',
      path: 'RADAR_DATA.PROPS.ISIN',
    },
    {
      name: 'Number of shares in the lot:',
      path: 'RADAR_DATA.PROPS.LOTSIZE',
    },
    {
      name: 'Export share:',
      path: 'RADAR_DATA.PROPS.PROP_EXPORT_SHARE',
    },
    {
      name: 'Operations Short:',
      path: 'RADAR_DATA.PROPS.PROP_SHORT',
    },
  ],
  aboutStockUSA: [
    {
      name: 'ISIN-code:',
      path: 'RADAR_DATA.PROPS.ISIN',
    },
    {
      name: 'Sector:',
      path: 'RADAR_DATA.PROPS.SECTOR',
    },
    {
      name: 'Industry:',
      path: 'RADAR_DATA.PROPS.INDUSTRY',
    },
    {
      name: 'Number of securities in circulation:',
      path: 'RADAR_DATA.PROPS.SECURITIES_QUANTITY',
      symbol: 'pieces',
    },
    {
      name: 'Капитализация:',
      path: 'RADAR_DATA.PROPS.ISSUECAPITALIZATION',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: ''
    },
    {
      name: 'Расчетный потенциал:',
      path: '',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Просад:',
      path: 'RADAR_DATA.PROPS.DRAWDOWN',
      typeValue: 'num',
      symbol: '%',
      typeIndicator: ''
    },
    {
      name: 'Дивиденды за год:',
      path: 'RADAR_DATA.PROPS.PROP_DIVIDENDY_2018',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: ''
    },
    {
      name: 'P/E:',
      path: 'RADAR_DATA.DYNAM.PE',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'P/B:',
      path: 'RADAR_DATA.DYNAM.PB',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'P/Equity:',
      path: 'RADAR_DATA.DYNAM.P/Equity',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'P/Sale:',
      path: 'RADAR_DATA.DYNAM.P/Sale',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Бета:',
      path: 'RADAR_DATA.PROPS.BETTA',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },

  ],
  aboutBond: [
        {
            name: 'ISIN-код:',
            path: 'RADAR_DATA.PROPS.ISIN',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Тип облигации:',
            path: 'RADAR_DATA.PROPS.CSV_VID_OLB',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дефолты:',
            path: 'RADAR_DATA.PROPS.CSV_VID_DEFOLT',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Номинал:',
            path: 'RADAR_DATA.PROPS.FACEVALUE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Текущая цена:',
            path: 'RADAR_DATA.PROPS.LASTPRICE',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'НКД:',
            path: 'RADAR_DATA.PROPS.ACCRUEDINT',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Текущая цена с учетом НКД:',
            path: 'RADAR_DATA.DYNAM.Цена покупки',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Уровень листинга:',
            path: 'RADAR_DATA.PROPS.LISTLEVEL',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Размер купона:',
            path: 'RADAR_DATA.PROPS.COUPONVALUE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Длит. купона:',
            path: 'RADAR_DATA.PROPS.COUPONPERIOD',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дата выпл. куп.:',
            path: 'RADAR_DATA.PROPS.NEXTCOUPON',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дата погашения облигации:',
            path: 'RADAR_DATA.PROPS.MATDATE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Кол-во дней до погашения облигации:',
            path: 'RADAR_DATA.DYNAM.Кол-во дней до погашения',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дюрация:',
            path: 'RADAR_DATA.PROPS.DURATION',
            typeValue: '',
            symbol: 'дней',
            typeIndicator: ''
        },
        {
            name: 'Расчетная годовая доходность:',
            path: 'RADAR_DATA.DYNAM.Доходность годовая',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Общая доходность:',
            path: 'RADAR_DATA.DYNAM.Доходность общая',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Доходность к оферте (годовая):',
            path: 'RADAR_DATA.DYNAM.Доходность к офферте',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Дата оферты:',
            path: 'RADAR_DATA.PROPS.OFFERDATE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Кол-во дней до оферты:',
            path: 'RADAR_DATA.DYNAM.Кол-во дней до оферты',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Рейтинг радара:',
            path: 'RADAR_DATA.DYNAM.PB',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Цена погашения с учетом купонов:',
            path: 'RADAR_DATA.DYNAM.Цена погашения с учетом купонов',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        }
    ],
  aboutBondUSA:[
        {
            name: 'ISIN-код:',
            path: 'RADAR_DATA.PROPS.ISIN',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Тип облигации:',
            path: 'RADAR_DATA.PROPS.CSV_VID_OLB',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дефолты:',
            path: 'RADAR_DATA.PROPS.CSV_VID_DEFOLT',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Номинал:',
            path: 'RADAR_DATA.PROPS.FACEVALUE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Текущая цена:',
            path: 'RADAR_DATA.PROPS.LASTPRICE',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'НКД:',
            path: 'RADAR_DATA.PROPS.ACCRUEDINT',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Текущая цена с учетом НКД:',
            path: 'RADAR_DATA.DYNAM.Цена покупки',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Уровень листинга:',
            path: 'RADAR_DATA.PROPS.LISTLEVEL',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Размер купона:',
            path: 'RADAR_DATA.PROPS.COUPONVALUE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Длит. купона:',
            path: 'RADAR_DATA.PROPS.COUPONPERIOD',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дата выпл. куп.:',
            path: 'RADAR_DATA.PROPS.NEXTCOUPON',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дата погашения облигации:',
            path: 'RADAR_DATA.PROPS.MATDATE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Кол-во дней до погашения облигации:',
            path: 'RADAR_DATA.DYNAM.Кол-во дней до погашения',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Дюрация:',
            path: 'RADAR_DATA.PROPS.DURATION',
            typeValue: '',
            symbol: 'дней',
            typeIndicator: ''
        },
        {
            name: 'Расчетная годовая доходность:',
            path: 'RADAR_DATA.DYNAM.Доходность годовая',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Общая доходность:',
            path: 'RADAR_DATA.DYNAM.Доходность общая',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Доходность к оферте (годовая):',
            path: 'RADAR_DATA.DYNAM.Доходность к офферте',
            typeValue: '',
            symbol: '%',
            typeIndicator: ''
        },
        {
            name: 'Дата оферты:',
            path: 'RADAR_DATA.PROPS.OFFERDATE',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Кол-во дней до оферты:',
            path: 'RADAR_DATA.DYNAM.Кол-во дней до оферты',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Рейтинг радара:',
            path: 'RADAR_DATA.DYNAM.PB',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        },
        {
            name: 'Цена погашения с учетом купонов:',
            path: 'RADAR_DATA.DYNAM.Цена погашения с учетом купонов',
            typeValue: '',
            symbol: '',
            typeIndicator: ''
        }
    ],

  bonds: {
    isin: 'ISIN:',
    currentPrice: 'Current price(%):',
    totalValue: 'Total profitability(%):',
    methodLabel: 'Методика расчетов купонов[EN]:',
    tableHeaders: [
      'Дата выплаты',
      'Номинал',
      'Купоны',
      'Гашение',
      'Денежный поток',
    ],
  },
  discussion: {
    commentText:
      'Значит, когда решили пересадить население на безнал это получилось за каких-то 10 лет. И мировая история карт никак не повлияла на цифровизацию финансов. Так же отсутствие института биржевой торговли никак не помешало за каких-то 5-7 лет в 90-ых перейти от торговли в "ямах" в ручном режиме на полностью цифровую торговлю. А вот ETF оказывается очень сложная тема. Маленький спрос, непродолжительная история, ну-ну. Суть в том, что ПИФы кратно дороже для конечного потребителя чем ETF, а пока финансовая грамотность на нуле можно легально продавать непонятные продукты с огромной маржой. Если завести на московскую биржу нормальные ETF с мизерными комиссиями, то никто не будет покупать дичь от брокеров. Более того, та самая история зарубежных рынков играет только против местных провайдеров, так как они не могут конкурировать ни по истории, ни по политической стабильности, ни по стоимости владения. В общем текущая ситуация это самый обычный протекционизм, который прикрывается надуманными поводами.',
    comments: 'Commentaries',
    showMore: 'Show more',
    reply: 'Answer',
    send: 'Send',
  },
  dividends: {
    methodLabel: 'Methodology for dividends calculating:',
    methodText:
      'Не менее 25% от ЧП по МСФО. Если соотношение «Чистый долг/ скорректир. EBITDA» менее или равно 5.5, при этом EBITDA скорректирована на курсовые разницы. Изменения в резервах и прочие неденежные и нерегулярные статьи.',
    tableHeaders: [
      'Closing the registry',
      'Closing the registry Т-2',
      'Price for closing the registry Т-2',
      'Dividends',
      'Dividends (%)',
    ],
    currentValue: 'Текущая цена',
  },
  companyIndicators: {
    quarter: 'Q',
    tableRows: {
      quotes: {
        name: 'Quotes',
      },
      assets: {
        name: 'Actives',
        alert: 'true',
      },
      currentAssets: {
        name: 'Current actives',
        alert: '',
      },
      equityCapital: {
        name: 'Equity capital',
        alert: 'true',
      },
      revenueLastYear: {
        name: 'Revenue last year',
        alert: 'true',
      },
      revenueYearRolling: {
        name: 'Revenue for the year (rolling)',
        alert: '',
      },
      pastCapitalization: {
        name: 'Past capitalization',
        alert: '',
      },
      currentRevenue: {
        name: 'Current revenue',
        alert: 'true',
      },
      quarterlyRevenue: {
        name: 'Quarterly revenue',
        alert: '',
      },
      shareEquityAssets: {
        name: 'Share of equity in assets',
        alert: '',
      },
      profit: {
        name: 'Profit',
        alert: '',
      },
      profitYearRolling: {
        name: 'Profit for the year (moving average)',
        alert: '',
      },
      quarterlyProfit: {
        name: 'Quarterly profit',
        alert: '',
      },
      returnOnEquity: {
        name: 'Return on equity',
        alert: '',
      },
      revenueGrowthRate: {
        name: 'Revenue growth rate',
        alert: '',
      },
      assetGrowthRate: {
        name: 'Asset growth rate',
        alert: '',
      },
      profitGrowthRate: {
        name: 'Profit growth rate',
        alert: '',
      },
    },
    tableProps: {
      year: {
        name: 'Year',
        default: true,
      },
      quarter: {
        name: 'Quarter',
      },
    },
    indicatorsDescription: {
      capitalization: '[EN]This is a market valuation of the company, calculated based on the current prices of issued shares.',
      averageRevenue: '[EN]Это расчетный показатель, который рассчитывает выручку ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      averageProfit: '[EN]Это расчетный показатель, который рассчитывает прибыль ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      returnOnEquity: '[EN]Показатель эффективности вложенных собственных средств, рассчитывается как отношение скользящей чистой прибыли к собственному капиталу',
      shareOfEquityInAssets: '[EN]Показатель финансовой устойчивости компании, рассчитанный как отношение собственного капитала к общей сумме активов',
      betta: '[EN]Это статистический коэффициент, который характеризует движение отдельной акции относительно всего рынка в целом. Если бета > 1, то акция в статистике обгоняет рынок, от 0 до 1 - движется в одну сторону с рынком, но менее волатильна, менее 0 - акция движется противоположно рынку. Подробнее в статье. Бета расчитана за 5 лет.',
      pe: '[EN]Отношение капитализации компании к скользящей чистой прибыли. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      dividends: '[EN]Дивиденды за год с учетом объявленных и выплаченных дивидендов. В расшифровке указаны дивидендные платежи и состояние выплаты (рекомендовано / утверждено / выплачено)',
      assetGrowthRate: '[EN]Это отношение активов компании за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      profitGrowRate: '[EN]Это отношение скользящей прибыли за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      revenueGrowRate: '[EN]Это отношение скользящей выручки за указанный период к данным за аналогичный период прошлого года - 1 *100%',

      ebitda: '[EN]Это прибыль компании до уплаты % по кредитам, налогов и амортизационных отчислений. Показатель EBITDA отражает результат от операционной деятельности компании. <a href="/">Смотреть статью</a>',
      evebitda: '[EN]Отношение суммы капитализации компании и долгов к Ebitda. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      debtebitda: '[EN]Соотношение обязательств и EBITDA. Отражает способность предприятия исполнять свои финансовые обязательства. Приемлемым считается уровень данного коэффициента ниже 3',

      yearSlidingRevenue: '[EN]Это расчетный показатель, который рассчитывает выручку ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      yearSlidingProfit: '[EN]Это расчетный показатель, который рассчитывает прибыль ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      actives: '[EN]Это все принадлежащие компании материальные и нематериалые ценности, запасы, денежные средства и долговые обязательства.',
      quotes: '[EN]Текущая цена, объявленная продавцом или покупателем, по которой участники торгов готовы совершить продажу или покупку ценной бумаги. Это оценка актива, формируемая на основании показателей анализа спроса и предложения.',
      halfyearRevenue: '[EN]Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      quarterlyProfit: '[EN]Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      halfyearProfit: '[EN]Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      currentAssets: '[EN]Показатель финансовой устойчивости компании, рассчитанный как отношение собственного капитала к общей сумме активов',
      lastYearRevenue: '[EN]Это суммарные доходы от продажи основных видов продукции предприятия или услуг. Данные взяты из отчета, т.е. нарастающим итогом за аналогичный период прошлого года',
      currentRevenue: '[EN]Текущий доход позволяет предприятиям и частным лицам оплачивать счета за счет получения регулярных и краткосрочных притоков денежных средств. Это может быть доход от работы, доход от проданной продукции или от определенной инвестиционной деятельности.',
      equity: '[EN]Это объем собственных средств акционеров компании, инвестированных в бизнес.',
      profit: '[EN]Это финансовый результат компании по итогам периода. Данные взяты из отчета, т.е. нарастающим итогом с начала года',
      quarterlyRevenue: '[EN]Если компания отчитывается поквартально, то прибыль за последний квартал, рассчитана как разница между показателями \'Прибыль (Отчет)\' за текущий и предыдущий период.',
      pb: '[EN]Отношение капитализации компании к активам компании. Значение показателя менее 1 означает, что актив стоит меньше, чем размер активов. Часто применяется в банковском секторе.',
      pEquity: '[EN]Отношение капитализации компании к собственному капиталу. Значение показателя менее 1 означает, что актив стоит меньше, чем размер собственного капитала.',
      pSale: '[EN]Отношение капитализации компании к скользящей выручке. Значение показателя менее 1 означает, что актив стоит меньше, чем размер выручки.',
      peg: '[EN]PEG = is the ratio of P/E to the average rate of profit growth over 5 years. The lower the value of the indicator, the higher the undervaluation of the asset.',
      fixedAssets: '[EN]-----',
      netCashFlowFromOperatingActivities: '[EN]-----',
      otherThanFixedNoncurrentAssets: '[EN]-----',
      noncurrentAssets: '[EN]-----',
      noncurrentLiabilities: '[EN]-----',
      currentLiabilities: '[EN]-----',
      liabilities: '[EN]-----',
      redeemableNoncontrollingInterest: '[EN]-----',
      liabilitiesAndEquity: '[EN]-----',
      equityAttributableToParent: '[EN]-----',
      equityAttributableToNoncontrollingInterest: '[EN]-----',


      revenues: '[EN]-----',
      costOfRevenue: '[EN]-----',
      grossProfit: '[EN]-----',
      operatingExpenses: '[EN]-----',
      operatingIncomeLoss: '[EN]-----',
      interestExpenseOperating: '[EN]-----',
      incomeLossFromContinuingOperationsBeforeTax: '[EN]-----',
      netIncomeLoss: '[EN]-----',
      incomeLossFromContinuingOperationsAfterTax: '[EN]-----',
      netIncomeLossAttributableToNoncontrollingInterest: '[EN]-----',
      netIncomeLossAvailableToCommonStockholdersBasic: '[EN]-----',
      participatingSecuritiesDistributedAndUndistributedEarningsLossBasic: '[EN]-----',
      dilutedEarningsPerShare: '[EN]-----',
      basicEarningsPerShare: '[EN]-----',
      otherComprehensiveIncomeLossAttributableToParent: '[EN]-----',
      comprehensiveIncomeLossAttributableToNoncontrollingInterest: '[EN]-----',
      comprehensiveIncomeLoss: '[EN]-----',
      comprehensiveIncomeLossAttributableToParent: '[EN]-----',



      netCashFlowFromOperatingActivitiesContinuing: '[EN]-----',
      netCashFlowFromInvestingActivitiesContinuing: '[EN]-----',
      netCashFlowFromFinancingActivitiesContinuing: '[EN]-----',
      netCashFlow: '[EN]-----',

    }
  },
  searchingModule: {
    comparison: {
      placeholder: 'Enter the name / ticker'
    }
  }
};
