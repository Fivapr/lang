import 'reflect-metadata'
import { Container } from 'inversify'
import { AppConfig } from 'config'
import { iocNames } from 'iocNames'
import { History } from 'history'
import { getLogger } from './services/logger'
import { RootLogger } from 'loglevel'

import { logger } from 'services/logger'
import { LingualeoApi } from 'services/lingualeo'

declare global {
  interface Window {
    _logger: RootLogger
  }
}

export interface Services {
  history: History
  window: Window
  navigator: Navigator
  config: AppConfig
  localStorage: Storage
}

export function createIOC(services: Services) {
  const ioc = new Container({ skipBaseClassChecks: true })

  ioc.bind(iocNames.config).toConstantValue(services.config)
  ioc.bind(iocNames.logger).toConstantValue(logger)
  ioc.bind(iocNames.localStorage).toConstantValue(services.localStorage)
  ioc.bind(iocNames.window).toConstantValue(services.window)
  ioc.bind(iocNames.navigator).toConstantValue(services.navigator)
  ioc.bind(iocNames.history).toConstantValue(services.history)
  ioc.bind(iocNames.lingualeo).to(LingualeoApi).inSingletonScope()
  ioc.bind(iocNames.getLogger).toFactory(() => getLogger)

  return ioc
}
