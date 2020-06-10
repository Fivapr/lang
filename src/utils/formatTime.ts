import { addSeconds, format } from 'date-fns'

export const formatTime = (seconds = 0) => {
  const helperDate = addSeconds(new Date(0), seconds)
  return format(helperDate, 'mm:ss')
}
