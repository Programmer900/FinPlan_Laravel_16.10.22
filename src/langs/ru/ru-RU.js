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
      dateNot: 'больше не обращается на Московской бирже',
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
      typeIndicator: '',
      annotation: 'уникальный код бумаги, который однозначно идентифицирует ценную бумагу'
    },
    {
      name: 'Тип акции:',
      path: 'RADAR_DATA.PROPS.PROP_TIP_AKTSII',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'обыкновенные акции - дают право в управлении компании и подвержены влиянию роста и развития компании, привилегированные - имеют преимущественные права по получению дивидендов.'
    },
    {
      name: 'Сектор:',
      path: 'RADAR_DATA.PROPS.PROP_SEKTOR',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Секторальная принадлежность компании включает в себя ряд особенностей, которые присущи данной отрасли.'
    },
    {
      name: 'Количество акций в лоте:',
      path: 'RADAR_DATA.PROPS.LOTSIZE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Акции торгуются лотами, т.е. это минимальное количество акций при покупке.'
    },
    {
      name: 'Объем выпуска:',
      path: 'RADAR_DATA.PROPS.ISSUESIZE',
      typeValue: '',
      symbol: 'шт.',
      typeIndicator: '',
      annotation: 'Акции торгуются лотами, т.е. это минимальное количество акций при покупке.'
    },
    {
      name: 'Фрифлоат:',
      path: 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT_PERCENT',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: ''
    },
    {
      name: 'Операции Short:',
      path: 'RADAR_DATA.PROPS.PROP_SHORT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Возможность открытия короткой позиции по данному активу, т.е. возможность заработка с понижения котировок бумаги.'
    },
    {
      name: 'Операции с кредитным плечом:',
      path: 'RADAR_DATA.PROPS.PROP_KREDIT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Возможность покупки бумаг с использованием заемных средств.'
    },
    {
      name: 'Бумага состоит в индексах:',
      path: 'RADAR_DATA.PROPS.PROP_MMVB',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Индексы позволяют отслеживать состояние и динамику определенных групп активов, объединенных общим признаком. В основные индексы входят наиболее крупные и ликвидные активы.'
    },
    {
      name: 'Цена акции',
      path: 'RADAR_DATA.PROPS.LASTPRICE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Цена 1 акции компании. Минимальное количество бумаг для покупки в графе \'Количество акций в лоте\''
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
      typeIndicator: '',
      annotation: 'это рыночная оценка стоимости компании, рассчитанная на основе текущих цен выпущенных акций. Показатель позволяет оценить размеры компании-эмитента'
    },
    {
      name: 'Капитализация фрифлоат:',
      path: 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: '',
      annotation: ''
    },
    {
      name: 'Расчетный потенциал:',
      path: 'RADAR_DATA.DYNAM.Таргет',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Расчетный потенциал = сумма фундаментальной оценки разных источников роста акции: расчет недооценки, оценка роста компании, оценка дивидендной доходности. Не является прогнозом. Не является персональной инвестиционной рекомендацией'
    },
    {
      name: 'Просад:',
      path: 'RADAR_DATA.PROPS.PROP_PROSAD',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'это показатель оценки риска (максимальная просадка за последние 3 года с учетом текущей технической картины)'
    },
    {
      name: 'Дивиденды за год:',
      path: 'RADAR_DATA.PROPS.PROP_DIVIDENDY_2018',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: '',
      annotation: 'Дивиденды за год с учетом объявленных и выплаченных дивидендов. В расшифровке указаны дивидендные платежи и состояние выплаты (рекомендовано / утверждено / выплачено)'
    },
    {
      name: 'Методика расчета дивидендов:',
      path: 'RADAR_DATA.PROPS.PROP_DIVIDEND_DESCRIPTION',
      typeValue: 'string',
      symbol: '',
      typeIndicator: '',
      annotation: 'Методика расчета дивидендов публикуется во внутренней документации компании - дивидендная политика и устав организации.'
    },
    {
      name: 'P/E:',
      path: 'RADAR_DATA.DYNAM.PE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'отношение капитализации компании к скользящей чистой прибыли. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.'
    },
    {
      name: 'P/B:',
      path: 'RADAR_DATA.DYNAM.PB',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: ''
    },
    {
      name: 'P/Equity:',
      path: 'RADAR_DATA.DYNAM.P/Equity',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'отношение капитализации компании к собственному капиталу. Значение показателя менее 1 означает, что актив стоит меньше, чем размер собственного капитала.'
    },
    {
      name: 'P/Sale:',
      path: 'RADAR_DATA.DYNAM.P/Sale',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: ''
    },
    {
      name: 'Доля экспорта:',
      path: 'RADAR_DATA.PROPS.PROP_EXPORT_SHARE',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: ''
    },
    {
      name: 'Бета:',
      path: 'RADAR_DATA.PROPS.BETTA',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Это статистический коэффициент, который характеризует движение отдельной акции относительно всего рынка в целом. Если бета > 1, то акция в статистике обгоняет рынок, от 0 до 1 - движется в одну сторону с рынком, но менее волатильна, менее 0 - акция движется противоположно рынку. Подробнее в статье. Бета расчитана за 5 лет.'
    },

    {
      name: 'Рейтинг радара:',
      path: 'RADAR_DATA.PROPS.PRC_OF_USERS',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: ''
    },
  ],
  aboutStockUSA: [
    {
      name: 'ISIN-код:',
      path: 'RADAR_DATA.PROPS.ISIN',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Сектор:',
      path: 'RADAR_DATA.PROPS.SECTOR',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Отрасль:',
      path: 'RADAR_DATA.PROPS.INDUSTRY',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Объем выпуска:',
      path: 'RADAR_DATA.PROPS.SECURITIES_QUANTITY',
      typeValue: '',
      symbol: 'шт.',
      typeIndicator: '',
      annotation: 'EN[]'
    },

    {
      name: 'Operation Short:',
      path: 'RADAR_DATA.PROPS.PROP_SHORT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: '[EN]Возможность открытия короткой позиции по данному активу, т.е. возможность заработка с понижения котировок бумаги.'
    },
    {
      name: 'Operations with leverage:',
      path: 'RADAR_DATA.PROPS.PROP_KREDIT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: '[EN]Возможность покупки бумаг с использованием заемных средств.'
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
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Расчетный потенциал:',
      path: 'RADAR_DATA.DYNAM.Таргет',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Просад:',
      path: 'RADAR_DATA.PROPS.DRAWDOWN',
      typeValue: 'num',
      symbol: '%',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Дивиденды за год:',
      path: 'RADAR_DATA.PROPS.PROP_DIVIDENDY_2018',
      typeValue: 'num',
      symbol: 'currency',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'P/E:',
      path: 'RADAR_DATA.DYNAM.PE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'P/B:',
      path: 'RADAR_DATA.DYNAM.PB',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'P/Equity:',
      path: 'RADAR_DATA.DYNAM.P/Equity',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'P/Sale:',
      path: 'RADAR_DATA.DYNAM.P/Sale',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Price/Action',
      path: 'RADAR_DATA.PROPS.LASTPRICE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    {
      name: 'Бета:',
      path: 'RADAR_DATA.PROPS.BETTA',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'EN[]'
    },
    // {
    // name: 'Рейтинг радара:',
    // path: 'PROP_SHORT',
    // },
  ],

  aboutBond: [
  {
      name: 'ISIN-код:',
      path: 'RADAR_DATA.PROPS.ISIN',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'уникальный код бумаги, который однозначно идентифицирует ценную бумагу'
  },
  {
      name: 'Тип облигации:',
      path: 'RADAR_DATA.PROPS.CSV_VID_OLB',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'по принадлежности эмитента, а также наличие признака голубые фишки - бумаги отобранные экспертами компании Fin-Plan'
  },
  {
      name: 'Дефолты:',
      path: 'RADAR_DATA.PROPS.CSV_VID_DEFOLT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'наличие дефолтов по данной облигации и срок исполнения обязательств.'
  },
  {
      name: 'Номинал:',
      path: 'RADAR_DATA.PROPS.FACEVALUE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: ''
  },
  {
      name: 'Текущая цена:',
      path: 'RADAR_DATA.PROPS.LASTPRICE',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: ''
  },
  {
      name: 'НКД:',
      path: 'RADAR_DATA.PROPS.ACCRUEDINT',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'Накопленный купонный доход - это часть купонного дохода по облигации, которая рассчитывается пропорционально длительности купона. Данная сумма учитывается при покупке и продаже облигаций.'
  },
  {
    name: 'Текущая цена с учетом НКД:',
    path: 'RADAR_DATA.DYNAM.Цена покупки',
    typeValue: '',
    symbol: '',
    typeIndicator: '',
    annotation: 'рассчитана как произведение \'Номинала\' и \'Текущей цены\' + Накопленный купонный доход (НКД).'
  },
  {
      name: 'Уровень листинга:',
      path: 'RADAR_DATA.PROPS.LISTLEVEL',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
      annotation: 'уровень листинга означает соответствие требованиям и условиям биржи. Чем выше уровень (1, 2), тем лучше.'
  },
  {
      name: 'Размер купона:',
      path: 'RADAR_DATA.PROPS.COUPONVALUE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Длит. купона:',
      path: 'RADAR_DATA.PROPS.COUPONPERIOD',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Дата выпл. куп.:',
      path: 'RADAR_DATA.PROPS.NEXTCOUPON',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Дата погашения облигации:',
      path: 'RADAR_DATA.PROPS.MATDATE',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Кол-во дней до погашения облигации:',
      path: 'RADAR_DATA.DYNAM.Кол-во дней до погашения',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
    name: 'Дюрация:',
    path: 'RADAR_DATA.PROPS.DURATION',
    typeValue: '',
    symbol: 'дней',
    typeIndicator: '',
    annotation: 'период времени, через который нам вернется инвестируемая сумма. Облигации с более длинной дюрацией более волатильны.'
  },
  {
      name: 'Расчетная годовая доходность:',
      path: 'RADAR_DATA.DYNAM.Доходность годовая',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: 'Годовая доходность = Общая доходность / Количество дней до погашения * 365 * 100%. При сроке погашения облигации меньше года, следует ориентироваться на общую доходность!'
  },
  {
      name: 'Общая доходность:',
      path: 'RADAR_DATA.DYNAM.Доходность общая',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: 'Общая доходность к погашению облигации = (Цена погашения с учетом купонов - Текущая цена с учетом НКД) / Текущая цена с учетом НКД * 100%.'
  },
  {
      name: 'Доходность к оферте (годовая):',
      path: 'RADAR_DATA.DYNAM.Доходность к офферте',
      typeValue: '',
      symbol: '%',
      typeIndicator: '',
      annotation: 'Оферта - это возможность досрочного погашения облигаций. Доходность к оферте рассчитывается также как годовая доходность, только к дате оферты.'
  },
  {
    name: 'Дата оферты:',
    path: 'RADAR_DATA.PROPS.OFFERDATE',
    typeValue: '',
    symbol: '',
    typeIndicator: '',
    annotation: 'В зависимости от вида оферты наступают различные права и обязанности эмитента и владельца облигации.'
  },
  {
    name: 'Кол-во дней до оферты:',
    path: 'RADAR_DATA.DYNAM.Кол-во дней до оферты',
    typeValue: '',
    symbol: '',
    typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Рейтинг радара:',
      path: 'RADAR_DATA.DYNAM.PB',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
  },
  {
      name: 'Цена погашения с учетом купонов:',
      path: 'RADAR_DATA.DYNAM.Цена погашения с учетом купонов',
      typeValue: '',
      symbol: '',
      typeIndicator: '',
    annotation: ''
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
    currentPrice: 'Текущая цена(%):',
    totalValue: 'Общая доходность(%):',
    methodLabel: 'Методика расчетов купонов:',
    tableHeaders: [
        'Дата выплаты',
        'Номинал',
        'Купоны',
        'Гашение',
        'Денежный поток',
    ]
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
      'Дивиденды',
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
      averageRevenue: 'Это расчетный показатель, который рассчитывает выручку ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      averageProfit: 'Это расчетный показатель, который рассчитывает прибыль ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      returnOnEquity: 'Показатель эффективности вложенных собственных средств, рассчитывается как отношение скользящей чистой прибыли к собственному капиталу',
      shareOfEquityInAssets: 'Показатель финансовой устойчивости компании, рассчитанный как отношение собственного капитала к общей сумме активов',
      betta: 'Это статистический коэффициент, который характеризует движение отдельной акции относительно всего рынка в целом. Если бета > 1, то акция в статистике обгоняет рынок, от 0 до 1 - движется в одну сторону с рынком, но менее волатильна, менее 0 - акция движется противоположно рынку. Подробнее в статье. Бета расчитана за 5 лет.',
      pe: 'Отношение капитализации компании к скользящей чистой прибыли. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      dividends: 'Дивиденды за год с учетом объявленных и выплаченных дивидендов. В расшифровке указаны дивидендные платежи и состояние выплаты (рекомендовано / утверждено / выплачено)',

      assetGrowthRate: 'Это отношение активов компании за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      profitGrowRate: 'Это отношение скользящей прибыли за указанный период к данным за аналогичный период прошлого года - 1 *100%',
      revenueGrowRate: 'Это отношение скользящей выручки за указанный период к данным за аналогичный период прошлого года - 1 *100%',

      ebitda: 'Это прибыль компании до уплаты % по кредитам, налогов и амортизационных отчислений. Показатель EBITDA отражает результат от операционной деятельности компании. <a href="/">Смотреть статью</a>',
      evebitda: 'Отношение суммы капитализации компании и долгов к Ebitda. Данный мультипликатор показывает уровень недооценки актива. Чем ниже мультипликатор, тем выше недооценка.',
      debtebitda: 'Соотношение обязательств и EBITDA. Отражает способность предприятия исполнять свои финансовые обязательства. Приемлемым считается уровень данного коэффициента ниже 3',

      yearSlidingRevenue: 'Это расчетный показатель, который рассчитывает выручку ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
      yearSlidingProfit: 'Это расчетный показатель, который рассчитывает прибыль ровно за 1 год до даты отчета (сумма поквартальных или полугодовых данных). Сравнение по этому показателю позволяет адекватно оценивать показатели без учета сезонности и прочих некорректно влияющих факторов.',
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
