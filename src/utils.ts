const rottenIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rotten_Tomatoes_rotten.svg/290px-Rotten_Tomatoes_rotten.svg.png?20200101020019'
const freshIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/278px-Rotten_Tomatoes.svg.png?20180311145654'

export const getTomatoIcon = (score: number) => score < 60 ? rottenIcon : freshIcon
export const convertMinToHour = (minutes: number) => {
  const hours = minutes / 60
  const remainder = hours % 1
  const wholeHours = Math.floor(hours)
  const hourString = wholeHours ? `${wholeHours}h` : ''
  const wholeMinutes = Math.round(remainder * 60)
  const minutesString = wholeMinutes ? `${wholeMinutes}m` : ''
  const space = hourString && minutesString ? ' ' : ''
  return `${hourString}${space}${minutesString}`
}