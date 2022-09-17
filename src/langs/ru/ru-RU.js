import { documentPage } from '@/langs/ru/pages/document';

export default {
  stock: 'акция',
  stocksDynamic: 'Динамика акций',
  monthlyIncrease: 'Прирост за месяц',
  yearIncrease: 'Прирост за год',
  yearThreeIncrease: 'Прирост за 3 года',
  assetsList: {
    stockRu: 'Список акций Мосбиржи',
    stockEn: 'Список американских акций на Санкт-Петербургской бирже',
    bond: 'Список облигаций',
    etf: 'Список ETF Мосбиржи',
    indexes: 'Список индексов',
  },
  page: {
    document: {
      ...documentPage,
    },
  },
  progresses: {
    revenue: 'Выручка',
    profit: 'Прибыль',
    profitability: 'Рентабельность',
    fraction: 'Доля',
    profitRatio: 'P/E',
    beta: 'Бета',
    capitalization: 'Капитализация',
    dividends: 'Дивиденды',
  },
  sitenav: {
    training: 'Обучение',
    services: 'Сервисы',
    blog: 'Блог',
    assets: 'Активы',
    about: 'О нас',
  },
  securityHeader: {
    bond: {
      name: 'Облигация',
      date: 'находится в обращении с',
      emitent: 'Эмитентом облигации является',
    },
    stock: {
      name: 'Акция',
      lowerName: 'акция',
      ticker: 'тикер акции',
      date: 'находится в обращении с',
      emitent: 'Эмитентом облигации является',
      dynamics: {
        text: 'Динамика акции:',
        month: 'Прирост за месяц',
        year: 'Прирост за год',
        three_years: 'Прирост за 3 года',
      },
    },
  },
  tableTexts: {
    alertText: 'Данные в таблице указаны в',
    alertSymbolCurrenciesRuble: 'рублей',
    alertSymbolCurrenciesDollar: 'долларов',
    switcherText: 'Среднеотраслевые показатели',
    switcherTextComparison: 'В абс.',
    switcherTextPercent: 'В % соотношении',
    switcherTextPercentComparison: 'В % соотношении',
    index: 'Показатель',
  },
  aboutCompany: {
    newsText:
      'Конечно, выбор акций для инвестирования прежде всего зависит от целей самого инвестора. Кто-то стремится к максимально агрессивному росту портфеля и готов терпеть соответствующие этому риски, кто-то, наоборот, предельно консервативен и готов идти только на очень выверенный и небольшой риск, а для какого-то инвестора важен денежный поток, который будет генерировать инвестиционный портфель, который можно будет выводить на текущее потребление в виде «живого» кэша.',
  },
  aboutStock: [
    {
      name: 'ISIN-код:',
      path: 'RADAR_DATA.PROPS.ISIN',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Тип акции:',
      path: 'RADAR_DATA.PROPS.PROP_TIP_AKTSII',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Сектор:',
      path: 'RADAR_DATA.PROPS.PROP_SEKTOR',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Количество акций в лоте:',
      path: 'RADAR_DATA.PROPS.LOTSIZE',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Объем выпуска:',
      path: 'RADAR_DATA.PROPS.ISSUESIZE',
      typeValue: '',
      symbol: 'шт.',
      typeIndicator: ''
    },
    {
      name: 'Фрифлоат:',
      path: 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT_PERCENT',
      typeValue: '',
      symbol: '%',
      typeIndicator: ''
    },
    {
      name: 'Операции Short:',
      path: 'RADAR_DATA.PROPS.PROP_SHORT',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    // {
    //   name: 'Объем выпукска:',
    // path: 'PROP_SHORT',
    // },
    //
    // {
    //   name: 'Операции с кредитным плечом:',
    // path: 'PROP_SHORT',
    // },
    // {
    //   name: 'Бумага состоит в индексах:',
    // path: 'PROP_SHORT',
    // },
    {
      name: 'Капитализация:',
      path: 'RADAR_DATA.PROPS.ISSUECAPITALIZATION',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: ''
    },
    {
      name: 'Капитализация фрифлоат:',
      path: 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT',
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
      path: 'RADAR_DATA.PROPS.PROP_PROSAD',
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
      name: 'Методика расчета дивидендов:',
      path: 'RADAR_DATA.PROPS.PROP_DIVIDEND_DESCRIPTION',
      typeValue: '',
      symbol: '',
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
      name: 'Доля экспорта:',
      path: 'RADAR_DATA.PROPS.PROP_EXPORT_SHARE',
      typeValue: '',
      symbol: '%',
      typeIndicator: ''
    },
    {
      name: 'Бета:',
      path: 'RADAR_DATA.PROPS.BETTA',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    // {
    // name: 'Рейтинг радара:',
    // path: 'PROP_SHORT',
    // },
  ],
  aboutStockUSA: [
    {
      name: 'ISIN-код:',
      path: 'RADAR_DATA.PROPS.ISIN',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Сектор:',
      path: 'RADAR_DATA.PROPS.SECTOR',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Отрасль:',
      path: 'RADAR_DATA.PROPS.INDUSTRY',
      typeValue: '',
      symbol: '',
      typeIndicator: ''
    },
    {
      name: 'Объем выпуска:',
      path: 'RADAR_DATA.PROPS.SECURITIES_QUANTITY',
      typeValue: '',
      symbol: 'шт.',
      typeIndicator: ''
    },

    // {
    //   name: 'Объем выпукска:',
    // path: 'PROP_SHORT',
    // },
    //
    // {
    //   name: 'Операции с кредитным плечом:',
    // path: 'PROP_SHORT',
    // },
    // {
    //   name: 'Бумага состоит в индексах:',
    // path: 'PROP_SHORT',
    // },
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
    // {
    // name: 'Рейтинг радара:',
    // path: 'PROP_SHORT',
    // },
  ],
  bonds: {
    isin: 'ISIN:',
    currentPrice: 'Текущая цена(%):',
    totalValue: 'Общая доходность(%):',
  },
  discussion: {
    commentText:
      'Значит, когда решили пересадить население на безнал это получилось за каких-то 10 лет. И мировая история карт никак не повлияла на цифровизацию финансов. Так же отсутствие института биржевой торговли никак не помешало за каких-то 5-7 лет в 90-ых перейти от торговли в "ямах" в ручном режиме на полностью цифровую торговлю. А вот ETF оказывается очень сложная тема. Маленький спрос, непродолжительная история, ну-ну. Суть в том, что ПИФы кратно дороже для конечного потребителя чем ETF, а пока финансовая грамотность на нуле можно легально продавать непонятные продукты с огромной маржой. Если завести на московскую биржу нормальные ETF с мизерными комиссиями, то никто не будет покупать дичь от брокеров. Более того, та самая история зарубежных рынков играет только против местных провайдеров, так как они не могут конкурировать ни по истории, ни по политической стабильности, ни по стоимости владения. В общем текущая ситуация это самый обычный протекционизм, который прикрывается надуманными поводами.',
    comments: 'Комментарии',
    showMore: 'Показать больше',
    reply: 'Ответить',
    send: 'Отправить',
  },
  dividends: {
    methodLabel: 'Методика расчетов дивидендов:',
    methodText:
      'Не менее 25% от ЧП по МСФО. Если соотношение «Чистый долг/ скорректир. EBITDA» менее или равно 5.5, при этом EBITDA скорректирована на курсовые разницы. Изменения в резервах и прочие неденежные и нерегулярные статьи.',
    tableHeaders: [
      'Закрытие реестра',
      'Закрытие реестра Т-2',
      'Цена на закрытие реестра Т-2',
      'Дивиденды (₽)',
      'Дивиденды (%)',
    ],
    currentValue: 'Текущая цена',
  },
  companyIndicators: {
    quarter: 'кв.',
    tableRows: {
      quotes: {
        name: 'Котировки',
      },
      assets: {
        name: 'Активы',
        alert: 'true',
      },
      currentAssets: {
        name: 'Оборотные активы',
        alert: '',
      },
      equityCapital: {
        name: 'Собственный капитал',
        alert: 'true',
      },
      revenueLastYear: {
        name: 'Выручка прошлый год',
        alert: 'true',
      },
      revenueYearRolling: {
        name: 'Выручка за год (скользящая)',
        alert: '',
      },
      pastCapitalization: {
        name: 'Прошлая капитализация',
        alert: '',
      },
      currentRevenue: {
        name: 'Выручка тек.',
        alert: 'true',
      },
      quarterlyRevenue: {
        name: 'Выручка квартальная',
        alert: '',
      },
      shareEquityAssets: {
        name: 'Доля собственного капитала в активах',
        alert: '',
      },
      profit: {
        name: 'Прибыль',
        alert: '',
      },
      profitYearRolling: {
        name: 'Прибыль за год (скользящая)',
        alert: '',
      },
      quarterlyProfit: {
        name: 'Прибыль квартальная',
        alert: '',
      },
      returnOnEquity: {
        name: 'Рентабельность собственного капитала',
        alert: '',
      },
      revenueGrowthRate: {
        name: 'Темп прироста выручки',
        alert: '',
      },
      assetGrowthRate: {
        name: 'Темп роста активов',
        alert: '',
      },
      profitGrowthRate: {
        name: 'Темп роста прибыли',
        alert: '',
      },
    },
    tableProps: {
      year: {
        name: 'Год',
        default: true,
      },
      quarter: {
        name: 'Квартал',
      },
    },
    indicatorsDescription: {
      capitalization: 'Это рыночная оценка стоимости компании, рассчитанная на основе текущих цен выпущенных акций. Показатель позволяет оценить размеры компании-эмитента',
      averageRevenue: 'Выручка скользящая за год(Скользящая средняя (Moving Average или сокращенно MA) – это один из самых универсальных и популярных индикаторов на рынке, который может быть использован для торговли по тренду. Скользящая средняя показывает среднюю цену за указанный период времени)',
      averageProfit: 'Прибыль скользящая за год(Скользящая средняя (Moving Average или сокращенно MA) – это один из самых универсальных и популярных индикаторов на рынке, который может быть использован для торговли по тренду. Скользящая средняя показывает среднюю цену за указанный период времени)',
      returnOnEquity: 'Характеризует доходность бизнеса для его владельцев, рассчитанную после вычета процентов по кредиту. Это важнейший финансовый показатель отдачи для инвестора и собственника бизнеса, показывающий, насколько эффективно были использованы вложенные в дело средства.',
      shareOfEquityInAssets: '(коэффициент автономии или финансовой независимости) является наиболее общим показателем финансовой устойчивости предприятия.',
      betta: 'Это статистический коэффициент, который характеризует движение отдельной акции относительно всего рынка в целом. Если бета > 1, то акция в статистике обгоняет рынок, от 0 до 1 - движется в одну сторону с рынком, но менее волатильна, менее 0 - акция движется противоположно рынку. Подробнее в статье. Бета расчитана за 5 лет.',
      pe: 'Отношение капитализации компании к скользящей чистой прибыли. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      dividends: 'Дивиденды за год с учетом объявленных и выплаченных дивидендов. В расшифровке указаны дивидендные платежи и состояние выплаты (рекомендовано / утверждено / выплачено)',

      assetGrowthRate: 'Это отношение активов компании за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      profitGrowRate: 'Это отношение скользящей прибыли за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      revenueGrowRate: 'Это отношение скользящей выручки за указанный период к данным за аналогичный период прошлого года - 1 *100%',

      ebitda: 'Это прибыль компании до уплаты % по кредитам, налогов и амортизационных отчислений. Показатель EBITDA отражает результат от операционной деятельности компании. <a href="/">Смотреть статью</a>',
      evebitda: 'Отношение суммы капитализации компании и долгов к Ebitda. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      debtebitda: 'Соотношение обязательств и EBITDA. Отражает способность предприятия исполнять свои финансовые обязательства. Приемлемым считается уровень данного коэффициента ниже 3',

      yearSlidingRevenue: 'Выручка скользящая за год(Скользящая средняя (Moving Average или сокращенно MA) – это один из самых универсальных и популярных индикаторов на рынке, который может быть использован для торговли по тренду. Скользящая средняя показывает среднюю цену за указанный период времени)',
      yearSlidingProfit: 'Прибыль скользящая за год(Скользящая средняя (Moving Average или сокращенно MA) – это один из самых универсальных и популярных индикаторов на рынке, который может быть использован для торговли по тренду. Скользящая средняя показывает среднюю цену за указанный период времени)',
      actives: 'Это все принадлежащие компании материальные и нематериалые ценности, запасы, денежные средства и долговые обязательства.',
      quotes: 'Текущая цена, объявленная продавцом или покупателем, по которой участники торгов готовы совершить продажу или покупку ценной бумаги. Это оценка актива, формируемая на основании показателей анализа спроса и предложения.',
      halfyearRevenue: 'Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      quarterlyProfit: 'Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      halfyearProfit: 'Если компания отчитывается по полугодиям, то выручка за полугодие, рассчитана как разница между показателями \'Выручка (Отчет)\' за текущий период и предыдущее полугодие.',
      currentAssets: 'Показатель финансовой устойчивости компании, рассчитанный как отношение собственного капитала к общей сумме активов',
      lastYearRevenue: 'Это суммарные доходы от продажи основных видов продукции предприятия или услуг. Данные взяты из отчета, т.е. нарастающим итогом за аналогичный период прошлого года',
      currentRevenue: 'Это суммарные доходы от продажи основных видов продукции предприятия или услуг. Данные взяты из отчета, т.е. нарастающим итогом с начала года',
      equity: 'Это объем собственных средств акционеров компании, инвестированных в бизнес.',
      profit: 'Это финансовый результат компании по итогам периода. Данные взяты из отчета, т.е. нарастающим итогом с начала года',
      quarterlyRevenue: 'Если компания отчитывается поквартально, то прибыль за последний квартал, рассчитана как разница между показателями \'Прибыль (Отчет)\' за текущий и предыдущий период.',
      pb: 'Отношение капитализации компании к активам компании. Значение показателя менее 1 означает, что актив стоит меньше, чем размер активов. Часто применяется в банковском секторе.',
      pEquity: 'Отношение капитализации компании к собственному капиталу. Значение показателя менее 1 означает, что актив стоит меньше, чем размер собственного капитала.',
      pSale: 'Отношение капитализации компании к скользящей выручке. Значение показателя менее 1 означает, что актив стоит меньше, чем размер выручки.',
      peg: 'PEG = это отношение P/E к средним темпам прироста прибыли за 5 лет. Чем меньше значение показателя, тем выше недооценка актива.',
      fixedAssets: '-----',
      netCashFlowFromOperatingActivities: '-----',
      otherThanFixedNoncurrentAssets: '-----',
      noncurrentAssets: '-----',
      noncurrentLiabilities: '-----',
      currentLiabilities: '-----',
      liabilities: '-----',
      redeemableNoncontrollingInterest: '-----',
      liabilitiesAndEquity: '-----',
      equityAttributableToParent: '-----',
      equityAttributableToNoncontrollingInterest: '-----',



      revenues: '-----',
      costOfRevenue: '-----',
      grossProfit: '-----',
      operatingExpenses: '-----',
      operatingIncomeLoss: '-----',
      interestExpenseOperating: '-----',
      incomeLossFromContinuingOperationsBeforeTax: '-----',
      netIncomeLoss: '-----',
      incomeLossFromContinuingOperationsAfterTax: '-----',
      netIncomeLossAttributableToNoncontrollingInterest: '-----',
      netIncomeLossAvailableToCommonStockholdersBasic: '-----',
      participatingSecuritiesDistributedAndUndistributedEarningsLossBasic: '-----',
      dilutedEarningsPerShare: '-----',
      basicEarningsPerShare: '-----',
      otherComprehensiveIncomeLossAttributableToParent: '-----',
      comprehensiveIncomeLossAttributableToNoncontrollingInterest: '-----',
      comprehensiveIncomeLoss: '-----',
      comprehensiveIncomeLossAttributableToParent: '-----',



      netCashFlowFromOperatingActivitiesContinuing: '-----',
      netCashFlowFromInvestingActivitiesContinuing: '-----',
      netCashFlowFromFinancingActivitiesContinuing: '-----',
      netCashFlow: '-----',


    }
  },
  searchingModule: {
    comparison: {
      placeholder: 'Введите имя / тикер'
    }
  }
};
