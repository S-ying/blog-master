// date.js - 日期格式化{yyyy-MM-dd hh:mm:ss}

export function formatDate(timestamp) {
  if (timestamp == null) return 'N/A'
  const dt = new Date(timestamp)
  const year = dt.getFullYear()
  const month = padLeftZero((dt.getMonth() + 1).toString())
  const day = padLeftZero(dt.getDate().toString())
  const hour = padLeftZero(dt.getHours().toString())
  const minute = padLeftZero(dt.getMinutes().toString())
  const second = padLeftZero(dt.getSeconds().toString())

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

function padLeftZero(str) {
  return str.padStart(2, 0)
}

export function convertDate(timestamp) {
  if (timestamp == null) return 'N/A'
  const now = new Date()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth() + 1
  const nowDay = now.getDate()
  const nowHour = now.getHours()
  const nowMinute = now.getMinutes()
  const nowSecond = now.getSeconds()

  // 转化成几分钟前 几天前等格式
  const dt = new Date(timestamp)
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const monthPadZero = padLeftZero(month.toString())
  const day = dt.getDate()
  const dayPadZero = padLeftZero(day.toString())
  const hour = dt.getHours()
  const hourPadZero = padLeftZero(hour.toString())
  const minute = dt.getMinutes()
  const minutePadZero = padLeftZero(minute.toString())
  const second = dt.getSeconds()
  const secondPadZero = padLeftZero(second.toString())

  if (nowYear != year) return `${year}-${monthPadZero}-${dayPadZero} ${hourPadZero}:${minutePadZero}:${secondPadZero}`

  if (nowMonth == month && nowDay - day == 1) {
    return '1天前'
  } else if (nowMonth == month && nowDay - day == 0) {
    if (nowHour - hour < 1) {
      if (nowMinute - minute < 1) {
        return `${second}秒前`
      }
      return `${nowMinute - minute}分钟前`
    } else {
      return `今天 ${hourPadZero}:${minutePadZero}:${secondPadZero}`
    }
  } else {
    return `${monthPadZero}-${dayPadZero} ${hourPadZero}:${minutePadZero}:${secondPadZero}`
  }
}
