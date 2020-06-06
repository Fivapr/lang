import log, { RootLogger } from 'loglevel'

const originalFactory = log.methodFactory
log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName)
  return rawMethod.bind(
    rawMethod,
    `[${methodName.toUpperCase()}] ${loggerName}:`
  )
}

if (typeof window !== 'undefined') {
  window._logger = log
}

export const logger = log

export function getLogger(name: string) {
  return logger.getLogger(name) as RootLogger
}

export type GetLogger = typeof getLogger
