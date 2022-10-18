export function isSSR(): boolean {
  return typeof window === 'undefined';
}

export function monthOfTheYear(arr): string {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]

  /*console.log(arr)

  const monthList = []
  const uniqYear = new Set(arr)
  let yearData = new Map()
  console.log(uniqYear)
  let i = 0

  arr.forEach((m) => {
    console.log(m)
    console.log(i)
    yearData.set(m, months[i])
    i++
  })

  console.log(yearData)

  return ''*/
}
